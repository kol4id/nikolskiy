import styles from './FooterBottom.module.scss'

const FooterBottom = () =>{
    return(
        <>
            <section className={styles.bottom}>
                <div>
                    made by <a
                        href='https://copylobby.art/'
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label='copylobby.art'
                    >
                        copylobby.art
                    </a> 
                </div>
                2025
            </section>
        </>
    )
}
export default FooterBottom