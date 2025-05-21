import Description from '../description/Description'
import styles from './Center.module.scss'

const Center = () =>{
    return(
        <>
            <section className={styles.center}>
                <Description/>
            </section>
        </>
    )
}

export default Center