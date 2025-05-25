import styles from './FooterLinks.module.scss';

const FooterLinks = () =>{
    return(
        <>
            <div className={styles.links}>
                <h6>Автоцентр</h6>
                <a href='#services'>Услуги</a>
                <a href='#aboutUs'>О нас</a>
                <a href='#consultation'>Контакты</a>
            </div>
        </>
    )
}
export default FooterLinks