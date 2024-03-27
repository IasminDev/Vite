import style from './menu.module.css'

export default function Menu(){
    return(
        <div className={style.menuWrap}>
        <p><a href={'/'}>Home</a></p>
        <p><a href={'/Calc'}>Calculations</a></p>
        <p><a href={'/Profiles'}>Profiles</a></p>
        <p><a href={'/Tec'}>Tecnologies</a></p>
        <p><a href={'/Contact'}>Contact</a></p>
        </div>
    )
}