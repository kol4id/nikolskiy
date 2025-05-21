import Header from '../header/Header'
import Info from './Info'
import styles from './Top.module.scss'
import velder from '@/assets/velder.webp'

const Top = () =>{
    return(
        <>
            <section     
                className={styles.top}
                style={{backgroundImage: `url(${velder})`}}
            >
                <Header/>
                <Info/>
            </section>
        </>
    )
}

export default Top