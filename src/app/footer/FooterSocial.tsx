import styles from './FooterSocial.module.scss'
import tg from '@/assets/icon_m_telegram_black.svg'
import wa from '@/assets/icon_m_phone_unfilled_black.svg'
import logo from '@/assets/Logotype Nikolski.svg'

const FooterSocial = () =>{
    return(
        <>
            <div className={styles.social}>
                <img loading='lazy' src={logo} className={styles.logo} alt='лого никольского автоцентра'></img>
                <nav className={styles.social_links}>
                    <a
                        href='https://wa.me/79017337699'
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label='WhatsApp'
                    >
                        <img loading="lazy" src={wa} alt='WhatsApp иконка'/>
                    </a>
                    <a
                        href='https://t.me/NikolskyMSK'
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label='Telegram'
                    >
                        <img loading="lazy" src={tg} alt='Telegram иконка'/>
                    </a>
                </nav>
            </div>
        </>
    )
}

export default FooterSocial