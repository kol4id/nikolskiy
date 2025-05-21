import styles from './Description.module.scss'
import welder from '@/assets/welder_description.jpg'

const Description = () =>{
    return(
        <>
            <section className={styles.description}>
                <article className={styles.description_left}>
                    <div className={styles.description_left_title}> 
                        <h3>
                            Свыше 15 лет <br/>
                            безупречной работы
                        </h3>
                        <p>Автотехцентр «Никольский» предоставляет полный спектр услуг по ремонту и уходу за автомобилем, включая сложные работы по сварке и очистке металла. Мы используем современное лазерное оборудование и строго соблюдаем заводские стандарты, чтобы обеспечить точность и качество.</p>
                        <p className={styles.mobile}>Автотехцентр «Никольский» выполняет ремонт автотехники, включая профессиональную сварку и очистку металла с использованием лазерного оборудования. Мы соблюдаем заводские стандарты, гарантируя точность и качество работы.</p>
                    </div>
                    <div className={styles.description_left_info}>
                        <div className={styles.piece}>
                            <h4>1000+</h4>
                            <p>Довольных клиентов</p>
                        </div>
                        <div className={styles.piece}>
                            <h4>15+</h4>
                            <p>Лет на авторынке</p>
                        </div>
                        <div className={styles.piece}>
                            <h4>98%</h4>
                            <p>Довольных клиентов</p>
                        </div>
                    </div>
                </article>
                <article className={styles.description_right}>
                    <img loading='lazy' src={welder}></img>
                </article>
            </section>
        </>
    )
}
export default Description