import styles from './FooterLinks.module.scss';

const FooterLinks = () =>{
    return(
        <>
            <div className={styles.links}>
                <h6>Автоцентр</h6>
                <a href='#services' aria-label='Услуги'>Услуги</a>
                <a href='#aboutUs' aria-label='О Нас'>О нас</a>
                <a href='#consultation' aria-label='Контакты'>Контакты</a>
            </div>
        </>
    )
}
export default FooterLinks