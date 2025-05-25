import styles from './FooterContacts.module.scss';

const FooterContacts = () =>{
    return(
        <>
            <div className={styles.contacts}>
                <h6>Контакты</h6>
                <a
                    href='https://yandex.ru/maps/-/CHvNRONl'
                    target="_blank"
                    rel="noopener noreferrer"
                > г. Балашиха, <br />
                    Носовихинское ш., 26
                </a>
                <a 
                    href='https://niksto.ru'
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{textDecoration: 'underline solid'}}
                >niksto.ru</a>
                <a href="tel:+79015184400" className={styles.phone}>7 (901) 518 44 00</a>
            </div>
        </>
    )
}
export default FooterContacts