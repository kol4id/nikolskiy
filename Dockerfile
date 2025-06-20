FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --force
COPY . .
ENV NODE_ENV=production
RUN npm run build

FROM node:20-alpine
WORKDIR /app
ENV NODE_ENV=production

RUN npm install -g pm2

RUN addgroup -S appgroup && adduser -S appuser -G appgroup

COPY --from=builder --chown=appuser:appgroup /app/dist ./dist
COPY --from=builder --chown=appuser:appgroup /app/package.json ./package.json
COPY --from=builder --chown=appuser:appgroup /app/package-lock.json ./package-lock.json
COPY --from=builder --chown=appuser:appgroup /app/node_modules ./node_modules
COPY --from=builder --chown=appuser:appgroup /app/vite.config.ts ./vite.config.ts

COPY --chown=appuser:appgroup ecosystem.config.cjs ./

USER appuser
EXPOSE 4173
CMD ["pm2-runtime", "start", "ecosystem.config.cjs"]