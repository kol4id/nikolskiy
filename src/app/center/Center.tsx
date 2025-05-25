import Description from '../description/Description'
import Services from '../services/Services'
import styles from './Center.module.scss'

const Center = () =>{
    return(
        <>
            <section className={styles.center}>
                <Description/>
                <Services/>
            </section>
        </>
    )
}

export default Center