import styles from './Footer.module.scss';
import FooterTop from './FooterTop';
import FooterMobile from './mobile/FooterMobile';
import FooterBottom from './FooterBottom';

const Footer = () =>{
    return(
        <>
            <footer className={styles.footer}>
                <section className={styles.footer_main}>
                    <FooterTop/>
                    <FooterMobile/>
                    <FooterBottom/>
                </section>
            </footer>
        </>
    )
}

export default Footer