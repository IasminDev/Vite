import Menu from './components/menu'

import style from './Calc.module.css'

export const Calc = () =>{
  return(
    <div>
      <Menu/>
      <div className={style.wrapContainer}>
        <h1>Calculations</h1>
      </div>
    </div>
  )
}