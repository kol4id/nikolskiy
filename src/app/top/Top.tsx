import Header from '../header/Header'
import Info from './Info'
import styles from './Top.module.scss'

const Top = () =>{
    return(
        <>
            <section     
                className={styles.top}
                // style={{backgroundImage: `url(${welder})`}}
            >
                <Header/>
                <Info/>
            </section>
        </>
    )
}

export default Top