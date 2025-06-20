import styles from './Header.module.scss'
import logo from '@/assets/Logotype Nikolski.svg'

const HeaderTitle = () =>{
    return(
        <>
            <article className={styles.title}>
                <section className={styles.container}>
                    <img loading='lazy' src={logo} alt='лого никольского автоцентра'/>
                </section>
            </article>
        </>
    )
}
export default HeaderTitle;