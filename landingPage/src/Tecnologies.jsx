import { useState } from "react"
import Card from "./components/card"
import Menu from "./components/menu"
import style from "./Tecnologies.module.css"
import reactImg from "./assets/svgs/react.svg"
import htmlImg from './assets/imgs/HTML.png'
import cssImg from './assets/imgs/CSS.png'
import jsImg from './assets/imgs/JS.png'

export const Tecnologies = () =>{
    const [show, setShow] = useState('all');

    return(
        <>
            <Menu/>
            <section className={style.tecWrap}>
                <h1>Tecnologies</h1>
                <div className={style.btnWrap}>
                    <button className={style.btnTec} onClick={() => setShow('html')}>HTML</button>
                    <button className={style.btnTec} onClick={() => setShow('css')}>CSS</button>
                    <button className={style.btnTec} onClick={() => setShow('js')}>JS</button>
                    <button className={style.btnTec} onClick={() => setShow('react')}>REACT</button>
                    <button className={style.btnTec} onClick={() => setShow('all')}>ALL</button>
                </div>
                <div className={style.cardsWrap}>
                    {show === 'html' && 
                        <Card title='HTML'
                        imgSrc={htmlImg}
                        desc="Sou o Html"
                        />}
                    {show === 'css' && 
                        <Card title='CSS'
                        imgSrc={cssImg}
                        desc="Sou o Css"
                        />}
                    {show === 'js' && 
                        <Card title='JS'
                        imgSrc={jsImg}
                        desc="Sou o JavaScript"
                        />}
                    {show === 'react' && 
                        <Card title='REACT'
                        imgSrc={reactImg}
                        desc="Sou o React"
                        />}
                    {show === 'all' && <>
                        <Card title='HTML'imgSrc={htmlImg}desc="Sou o Html"/>
                        <Card title='CSS'imgSrc={cssImg}desc="Sou o Css"/>
                        <Card title='JS'imgSrc={jsImg}desc="Sou o JavaScript"/>
                        <Card title='REACT'imgSrc={reactImg}desc="Sou o React"/>
                    </>}
                </div>
            </section>        
        </>
    )
}