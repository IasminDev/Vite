import Menu from './components/menu'

import style from './Tech.module.css'
import reactImg from './assets/react.svg'
import viteImg from '../public/vite.svg'
import axiosImg from './assets/axios.webp'
import routerDomImg from './assets/router-dom.webp'
import npmImg from './assets/npm.png'
import nodeImg from './assets/node.png'

export const Tech = () =>{
  return(
    <div>
      <Menu/>
      <div className={style.wrapContainer}>
        <h1>Technologies</h1>
      </div>
    </div>
  )
}