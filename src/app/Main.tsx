import Bottom from './bottom/Bottom'
import Center from './center/Center'
import styles from './Main.module.scss'
import Top from './top/Top'

const Main = () =>{
    
    return(
        <>
            <section className={styles.main}>
                <Top/>
                <Center/>
                <Bottom/>
            </section>
        </>
    )
}
export default Main