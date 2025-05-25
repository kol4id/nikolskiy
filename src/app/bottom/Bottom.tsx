import Consultation from '../consultation/Consultation'
import Footer from '../footer/Footer'
import styles from './Bottom.module.scss'

const Bottom = () =>{
    return(
        <>
            <section     
                className={styles.bottom}
            >
                <Consultation/>  
                <Footer/>
            </section>
        </>
    )
}

export default Bottom