import styles from './Info.module.scss'
import arrow from '@/assets/icon_m_circle_downright.svg'

const Info = () =>{
    return(
        <>
            <section className={styles.info}>
                <article className={styles.info_top}>
                    <div className={styles.info_top_title}>
                        <p>г. Балашиха, Носовихинское ш., 26</p>
                        <div>
                            <h1>ЛАЗЕРНАЯ ЧИСТКА</h1>
                            <h1 className={styles.second}>СВАРКА МЕТАЛЛОВ</h1>
                        </div>
                    </div>
                    <p className={styles.description}>Удаляем ржавчину, краску и другие загрязнения — без повреждений. Проводим сварочные работы любого уровня сложности.</p>
                </article>
                <article className={styles.info_bottom}>
                    <a 
                        href='#consultation'
                        aria-label='Консультация'
                    >
                        <p>Связаться с нами</p>
                        <img loading='lazy' src={arrow} alt='иконка указателя право-низ'></img>
                    </a>
                </article>
            </section>
        </>
    )
}

export default Info