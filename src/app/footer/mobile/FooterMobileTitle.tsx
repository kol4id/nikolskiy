import styles from './FooterMobile.module.scss';
import logo from '@/assets/Logotype Nikolski.svg'

const FooterMobileTitle = () =>{
    return(
        <>
            <article className={styles.mobile_title}>
                <img src={logo} loading='lazy'></img>
                {/* <h3>никольский</h3> */}
            </article>
        </>
    )
}
export default FooterMobileTitle