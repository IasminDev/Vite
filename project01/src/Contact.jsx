import Menu from './components/menu'

import style from './Cont.module.css'

export const Cont = () =>{
  return(
    <div>
      <Menu/>
      <div className={style.wrapContainer}>
        <h1>Contact</h1>
      </div>
    </div>
  )
}