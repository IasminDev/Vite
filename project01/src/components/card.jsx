import style from './card.module.css'

export default function Card({srcImg, title, statusColor, desc}){
    return(
        <div className={style.cardWrap}>
            <img src={srcImg} alt={title} className={style.imgCard}/>
            <h2>{title}</h2>
            <p style={{color: statusColor}}>{desc}</p>
        </div>
    )
}