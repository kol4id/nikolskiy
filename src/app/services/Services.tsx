import styles from './Services.module.scss'
import top_left from '@/assets/top_left.webp'
import top_right from '@/assets/top_right.webp'
import bottom_left from '@/assets/bottom_left.webp'
import bottom_right from '@/assets/bottom_right.webp'
import Card from './Card'
import ServicesMobile from './ServicesMobile'

const services = [
    {img: top_left, title: 'Лазерная сварка', info: 'Современный высокотехнологичный метод создания гладких швов на любых металлических поверхностях.', price: 'от 2500₽'},
    {img: top_right, title: 'Аргонодуговая сварка', info: 'Используется в сферах, где критично высокое качество сварного шва и точность соединения.', price: 'от 2500₽'},
    {img: bottom_left, title: 'Полуавтоматическая сварка', info: 'Высокопроизводительный метод для стали, нержавейки, алюминия и сплавов. Гарантирует прочные швы.', price: 'от 2500₽'},
    {img: bottom_right, title: 'Лазерная очистка', info: 'Любые металлы. Удаляем ржавчину, краску, окислы, жиры, ГСМ, грязь и другие виды загрязнения.', price: 'от 2500₽'},
]

const Services = () => {
    return(
        <>
            <section className={styles.services} id='services'>
                <h3>Услуги</h3>
                <article className={styles.services_cards}>
                    {services.map(service =>
                        <Card
                            key={service.title}
                            img={service.img}
                            title={service.title}
                            info={service.info}
                            price={service.price}
                        />
                    )}
                </article>
                <div className={styles.services_mobile}>
                    <ServicesMobile/>
                </div>
            </section>
        </>
    )
}

export default Services