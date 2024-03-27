import Menu from './components/menu'

import style from './RaM.module.css'

export const RaM = () =>{
  return(
    <div>
      <Menu/>
      <div className={style.wrapContainer}>
        <h1>Rick And Morty</h1>
      </div>
    </div>
  )
}