import { useEffect, useState } from "react";
import styles from './HeaderMenu.module.scss'
import phone from '@/assets/icon_m_phone.svg'
import menu from '@/assets/icon_m_menu.svg'
import Modal from "@/app/modal/Modal";
import HeaderModalMenu from "../modal/HeaderModalMenu";

const HeaderMenu = () =>{
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 1200) {
                document.documentElement.style.overflow = 'auto';
                setIsOpen(false)
            }
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, [setIsOpen]);

    const handleClose = () =>{
        document.documentElement.style.overflow = 'auto';
        setIsOpen(false);
    }

    const handleOpen = () =>{
        document.documentElement.style.overflow = 'hidden';
        setIsOpen(true);
    }

    return(
        <>
            <section className={styles.menu}>
                <section
                    className={styles.buttons_menu}
                >
                    <a className={styles.button} href='#consultation'>
                        <img loading='lazy' src={phone}/>
                    </a>
                </section>
                <button 
                    className={styles.button_menu}
                    onClick={handleOpen}
                >
                    <img src={menu} loading='lazy'/>
                </button>
                <Modal
                    isOpen={isOpen}
                    onClose={handleClose}
                    overlayClickClose={false}
                >
                    <HeaderModalMenu onClose={handleClose}/>
                </Modal>
            </section>
        </>
    )
}

export default HeaderMenu;
