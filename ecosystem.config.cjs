module.exports = {
    apps: [{
        name: 'nikolsky',    
        script: 'npm',    
        args: 'run preview',   
        cwd: './',                 
        instances: 1,              
        exec_mode: 'fork',         
        watch: false,              
        autorestart: true,         
        max_memory_restart: '256M',
        env_production: {
            NODE_ENV: 'production',           
        },
    }],
};