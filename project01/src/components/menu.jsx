import style from "./menu.module.css"

export default function Menu(){
    return(
        <div className={style.menuWrap}>
            <p><a href={'/'}>Home</a></p>
            <p><a href={'/Tech'}>Technologies</a></p>
            <p><a href={'/Calc'}>Calculations</a></p>
            <p><a href={'/Cont'}>Contact</a></p>
            <p><a href={'/RaM'}>Rick And Morty</a></p>
        </div>
    )
}