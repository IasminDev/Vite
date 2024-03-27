import style from './card.module.css'

export default function Card(props){
    return(
        <div className={style.cardWrap}>
            <img src={props.srcImg} alt={props.title} width={100} height={'auto'}/>
            <h1>{props.title}</h1>
            <p>{props.desc}</p>
        </div>
    )
}