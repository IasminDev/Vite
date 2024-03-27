import Menu from './components/menu'

import style from './Home.module.css'

export const Home = () =>{
  return(
    <div>
      <Menu/>
      <div className={style.wrapContainer}>
        <h1>Home</h1>
      </div>
    </div>
  )
}