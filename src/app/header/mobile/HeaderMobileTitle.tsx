import styles from './HeaderMobileTitle.module.scss'
import logo from '@/assets/Logotype Nikolski.svg'

const HeaderMobileTitle = () =>{
    return(
        <>
            <article className={styles.title}>
                <section className={styles.container}>
                    <img src={logo} loading='lazy' alt='лого никольского автоцентра'/>
                </section>
            </article>
        </>
    )
}
export default HeaderMobileTitle