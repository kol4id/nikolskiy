import styles from './HeaderModalMenu.module.scss'
import { motion } from "framer-motion"
import HeaderMenu from "./HeaderMenu"
import HeaderMobileTitle from "../mobile/HeaderMobileTitle"
import type { FC } from 'react'
import arrow from '@/assets/icon_m_circle_downright.svg'

interface IProps{
    onClose: () => void
}

const HeaderModalMenu: FC<IProps> = ({onClose}) =>{
    return(
        <>
            <motion.div
                initial={{ opacity: 0.1, y: -20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{
                    duration: 0.15,  
                    ease: "easeIn", 
                }}
            >
                <main className={styles.menu}>
                    <header className={styles.header}>
                        <HeaderMobileTitle/>
                        <HeaderMenu onClose={onClose}/>
                    </header>
                    <section className={styles.info}>
                        <div className={styles.links}>
                            <h6>Автотехцентр</h6>
                            <nav>
                                <a href='#services' onClick={onClose}>Услуги</a>
                                <a href='#aboutUs' onClick={onClose}>О нас</a>
                                <a href='#consultation' onClick={onClose}>Контакты</a>
                            </nav>
                        </div>
                        <article className={styles.phone}>
                            <a href="tel:+79015184400" className={styles.phone}>7 (901) 518 44 00</a>
                            <section className={styles.map}>
                                <a 
                                    className={styles.map_address}
                                    href='https://yandex.ru/maps/-/CHvNRONl'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={onClose}
                                > 
                                    г. Балашиха, <br/>
                                    Носовихинское ш., 26
                                </a>
                            </section>
                        </article>
                        <a href='#consultation' className={styles.service}
                            onClick={onClose}
                        >
                            <p>Связаться с нами</p>
                            <img loading='lazy' src={arrow}></img>
                        </a>
                    </section>
                </main>
            </motion.div>
        </>
    )
}   

export default HeaderModalMenu