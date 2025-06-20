import styles from './Header.module.scss'
import logo from '@/assets/Logotype Nikolski.svg'
import HeaderMobile from './mobile/HeaderMobile'

const Header = () =>{
    return(
        <>
            <header className={styles.header}>
                <nav>
                    <a href='#services' aria-label='Услуги'>Услуги</a>
                    <a href='#aboutUs' aria-label='О Нас'>О нас</a>
                    <a href='#consultation' aria-label='Контакты'>Контакты</a>
                </nav>
                <img loading='lazy' src={logo} alt='лого никольского автоцентра'></img>
                <div className={styles.phone}>
                    <a href="tel:+79015184400" aria-label='Телефон'>+7 (901) 518 44 00</a>
                </div>
            </header>
            <HeaderMobile/>
        </>
    )
}

export default Header