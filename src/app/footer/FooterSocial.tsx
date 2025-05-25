import styles from './FooterSocial.module.scss'
import tg from '@/assets/icon_m_telegram_black.svg'
import wa from '@/assets/icon_m_phone_unfilled_black.svg'
import logo from '@/assets/Logotype Nikolski.svg'

const FooterSocial = () =>{
    return(
        <>
            <div className={styles.social}>
                <img loading='lazy' src={logo} className={styles.logo}></img>
                <nav className={styles.social_links}>
                    <a
                        href='https://wa.me/79017337699'
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img loading="lazy" src={wa}/>
                    </a>
                    <a
                        href='https://t.me/NikolskyMSK'
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img loading="lazy" src={tg}/>
                    </a>
                </nav>
            </div>
        </>
    )
}

export default FooterSocial