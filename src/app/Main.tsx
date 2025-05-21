import styles from './Main.module.scss'
import Top from './top/Top'

const Main = () =>{
    return(
        <>
            <section className={styles.main}>
                <Top/>
            </section>
        </>
    )
}
export default Main