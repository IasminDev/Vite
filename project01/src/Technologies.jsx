import Menu from './components/menu'
import Card from './components/card'
import { useState } from 'react'

import style from './Tech.module.css'
import reactImg from './assets/react.svg'
import viteImg from '../public/vite.svg'
import axiosImg from './assets/axios.webp'
import routerDomImg from './assets/router-dom.webp'
import npmImg from './assets/npm.png'
import nodeImg from './assets/node.png'

export const Tech = () =>{
  const [show, setShow] = useState('all')

  return(
    <div>
      <Menu/>
      <div className={style.wrapContainer}>
        <h1>Technologies</h1>
        <div className={style.wrapBtn}>
          <button className={style.btnTech} onClick={() => setShow('react')}>React</button>
          <button className={style.btnTech} onClick={() => setShow('vite')}>Vite</button>
          <button className={style.btnTech} onClick={() => setShow('axios')}>Axios</button>
          <button className={style.btnTech} onClick={() => setShow('router-dom')}>Router Dom</button>
          <button className={style.btnTech} onClick={() => setShow('npm')}>Npm</button>
          <button className={style.btnTech} onClick={() => setShow('node')}>Node.js</button>
          <button className={style.btnTech} onClick={() => setShow('all')}>All</button>
        </div>
        <div className={style.wrapCards}>
          {show === 'react' && 
            <Card
              srcImg={reactImg}
              title='React'
              desc='React text 1'     
            />}
          {show === 'vite' && 
            <Card
              srcImg={viteImg}
              title='Vite'
              desc='React text 1'     
            />}
          {show === 'axios' && 
            <Card
              srcImg={axiosImg}
              title='Axios'
              desc='React text 1'     
            />}
          {show === 'router-dom' && 
            <Card
              srcImg={routerDomImg}
              title='React Router Dom'
              desc='React text 1'     
            />}
          {show === 'npm' && 
            <Card
              srcImg={npmImg}
              title='Npm'
              desc='React text 1'     
            />}
          {show === 'node' && 
            <Card
              srcImg={nodeImg}
              title='Node.js'
              desc='React text 1'     
            />}
          {show === 'all' && 
          <>
            <Card
              srcImg={reactImg}
              title='React'
              desc='React text 1'     
            />
            <Card
              srcImg={viteImg}
              title='Vite'
              desc='React text 1'     
            />
            <Card
              srcImg={axiosImg}
              title='Axios'
              desc='React text 1'     
            />
            <Card
              srcImg={routerDomImg}
              title='React Router Dom'
              desc='React text 1'     
            />
            <Card
              srcImg={npmImg}
              title='Npm'
              desc='React text 1'     
            />
            <Card
              srcImg={nodeImg}
              title='Node.js'
              desc='React text 1'     
            />
          </>
          }
        </div>
      </div>
    </div>
  )
}