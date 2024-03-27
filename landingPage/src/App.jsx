import style from './App.module.css'
import Menu from './components/menu'

export default function App(){
  return(
    <div className={style.mainWrap}>
      <Menu/>
      <h1>Hello</h1>
    </div>
  )
}