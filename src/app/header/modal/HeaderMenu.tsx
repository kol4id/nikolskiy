import type { FC } from 'react';
import styles from '../mobile/HeaderMenu.module.scss'
import close from '@/assets/icon_m_close.svg'
import wa from '@/assets/icon_m_phone_unfilled.svg'
import tg from '@/assets/icon_m_telegram.svg'

interface IProps{
    onClose: () => void
}

const HeaderMenu: FC<IProps> = ({onClose}) =>{
    return(
        <>
            <article className={styles.menu}>
                <section
                    className={styles.buttons_menu}
                >
                    <a
                        className={styles.button}
                        href='https://wa.me/79017337699'
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={onClose}
                        aria-label='WhatsApp'
                    >
                        <img loading='lazy' src={wa} alt='WhatsApp иконка'/>
                    </a>
                    <a
                        className={styles.button}
                        href='https://t.me/NikolskyMSK'
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={onClose}
                        aria-label='Telegram'
                    >   
                        <img loading='lazy' src={tg} alt='Telegram иконка'/>
                    </a>
                </section>
                <button
                    aria-label="закрыть меню"
                    className={styles.button_menu}
                    onClick={() => onClose()}
                >
                    <img loading='lazy' src={close} alt='иконка крестика'/>
            </button>
            </article>
        </>
    )
}
export default HeaderMenu