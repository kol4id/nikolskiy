import styles from './HeaderMobile.module.scss'
import HeaderMenu from './HeaderMenu'
import HeaderMobileTitle from './HeaderMobileTitle'

const HeaderMobile = () =>{
    return(
        <>
            <header className={styles.header_mobile}>
                <HeaderMobileTitle/>
                <HeaderMenu/>
            </header>
        </> 
    )
}
export default HeaderMobile