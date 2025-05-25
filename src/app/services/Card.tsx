import type { FC } from 'react'
import styles from './Services.module.scss'

interface IProps{
    img: string,
    title: string,
    info: string,
    price: string
}

const Card: FC<IProps> = (props) =>{
    return(
        <>
            <article 
                className={styles.card}
                style={{backgroundImage: `url(${props.img})`}}
            >
                <div className={styles.card_title}>
                    <h5>{props.title}</h5>
                    <p>{props.info}</p>
                </div>
                <p className={styles.price}>{props.price}</p>
            </article>
        </>
    )
}

export default Card