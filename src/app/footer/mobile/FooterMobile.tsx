import styles from './FooterMobile.module.scss';
import FooterMobileContacts from './FooterMobileContacts';
import FooterMobileTitle from './FooterMobileTitle';
import tg from '@/assets/icon_m_telegram_black.svg'
import wa from '@/assets/icon_m_phone_unfilled_black.svg'

const FooterMobile = () =>{
    return(
        <>
            <section className={styles.mobile}>
                <FooterMobileTitle/>
                <FooterMobileContacts/>
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
                <div className={styles.work_time}>
                    <h6>График работы</h6>
                    <p>Ежедневно: 9:00 - 21:00</p>
                </div>
            </section>
        </>
    )
}

export default FooterMobile