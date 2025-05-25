import FooterContacts from "./FooterContacts"
import FooterLinks from "./FooterLinks"
import FooterSocial from "./FooterSocial"
import FooterWork from "./FooterWork"
import styles from './FooterTop.module.scss'

const FooterTop = () =>{
    return(
        <>
            <section className={styles.top}>
                <article className={styles.top_left}>
                    <FooterSocial/>
                    <FooterContacts/>
                </article>
                <article className={styles.top_right}>
                    <FooterLinks/>
                    <FooterWork/>
                </article>
            </section>
        </>
    )
}

export default FooterTop