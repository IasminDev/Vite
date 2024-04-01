import style from './card.module.css'

export default function Card({heightCard, srcImg, title, widthImg, statusColor, desc}){
    return(
        <div style={{height: heightCard}} className={style.cardWrap}>
            <img src={srcImg} alt={title} style={{width: widthImg}} className={style.imgCard}/>
            <h2>{title}</h2>
            <p style={{color: statusColor}}>{desc}</p>
        </div>
    )
}