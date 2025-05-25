import styles from './Header.module.scss'
import logo from '@/assets/Logotype Nikolski.svg'
import HeaderMobile from './mobile/HeaderMobile'

const Header = () =>{
    return(
        <>
            <header className={styles.header}>
                <nav>
                    <a href='#services'>Услуги</a>
                    <a href='#aboutUs'>О нас</a>
                    <a href='#consultation'>Контакты</a>
                </nav>
                <img loading='lazy' src={logo}></img>
                <div className={styles.phone}>
                    <a href="tel:+79015184400">+7 (901) 518 44 00</a>
                </div>
            </header>
            <HeaderMobile/>
        </>
    )
}

export default Header