import styles from './Header.module.scss'

const Header = () =>{
    return(
        <>
            <header className={styles.header}>
                <nav>
                    <a href='#services'>Услуги</a>
                    <a href='#services'>О нас</a>
                    <a href='#services'>Контакты</a>
                </nav>
            </header>
        </>
    )
}

export default Header