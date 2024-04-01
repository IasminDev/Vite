import Menu from './components/menu'
import Card from './components/card'
import { useState } from 'react'
import Data from './constants/tech.json'

import style from './Tech.module.css'

export const Tech = () =>{  
  const [selectedTitle, setSelectedTitle] = useState('All');
  const handleTitleSelect = (title) => {
    setSelectedTitle(title);
  };

  const renderTechCards = () => {
    if (selectedTitle === 'All') {
      return Data.map((tech) => (
        <Card
          key={tech.id}
          heightCard = {tech.heightCard}
          widthImg = {tech.widthImg}
          srcImg={tech.srcImg}
          title={tech.title}
          desc={tech.desc}
        />
      ));
    } else {
      return Data.filter((tech) => tech.title === selectedTitle).map((tech) => (
        <Card
          key={tech.id}
          srcImg={tech.srcImg}
          title={tech.title}
          desc={tech.desc}
        />
      ));
    }
  };

  const categories = ['All', ...new Set(Data.map((tech) => tech.title))];
  
  return(
    <div>
      <Menu/>
      <div className={style.wrapContainer}>
        <h1>Technologies</h1>
        <div className={style.wrapBtn}>
            {categories.map((title) => (
              <button
                key={title}
                className={style.btnTech}
                onClick={() => handleTitleSelect(title)}>
                {title}
              </button>
            ))}
        </div>
        <div className={style.wrapCards}>
          {renderTechCards()}
        </div>
      </div>
    </div>
  )
}

// Another way to do it:

  // import reactImg from './assets/react.svg'
  // import viteImg from '../public/vite.svg'
  // import axiosImg from './assets/axios.png'
  // import routerDomImg from './assets/router-dom.png'
  // import npmImg from './assets/npm.png'
  // import nodeImg from './assets/node.png'


  // const [show, setShow] = useState('all')


  {/* <button className={style.btnTech} onClick={() => setShow('react')}>React</button>
  <button className={style.btnTech} onClick={() => setShow('vite')}>Vite</button>
  <button className={style.btnTech} onClick={() => setShow('axios')}>Axios</button>
  <button className={style.btnTech} onClick={() => setShow('router-dom')}>Router Dom</button>
  <button className={style.btnTech} onClick={() => setShow('npm')}>Npm</button>
  <button className={style.btnTech} onClick={() => setShow('node')}>Node.js</button>
  <button className={style.btnTech} onClick={() => setShow('all')}>All</button> */} 

  {/* {show === 'react' && 
    <Card
      srcImg={reactImg}
      widthImg = '100px'
      title='React'
      desc='A JavaScript library for building user interfaces, allowing developers to create interactive web applications efficiently.'     
    />}
  {show === 'vite' && 
    <Card
      srcImg={viteImg}
      widthImg = '100px'
      title='Vite'
      desc='A fast, modern build tool that aims to provide a lightning-fast development experience for web projects, especially those using modern JavaScript frameworks like React.'     
    />}
  {show === 'axios' && 
    <Card
      srcImg={axiosImg}
      title='Axios'
      desc='A promise-based HTTP client for making asynchronous HTTP requests in JavaScript environments, commonly used for fetching data from APIs in web applications.'     
    />}
  {show === 'router-dom' && 
    <Card
      srcImg={routerDomImg}
      title='React Router Dom'
      desc='A routing library for React applications, enabling developers to manage navigation and rendering of components based on the URL.'     
    />}
  {show === 'npm' && 
    <Card
      srcImg={npmImg}
      title='Npm'
      desc='The package manager for JavaScript, used to discover, share, and install packages of code from the npm registry, allowing developers to easily manage dependencies in their projects.'     
    />}
  {show === 'node' && 
    <Card
      srcImg={nodeImg}
      title='Node.js'
      desc='A JavaScript runtime built on Chromes V8 JavaScript engine, enabling developers to run JavaScript code outside of a web browser, commonly used for building server-side applications and APIs.'     
    />} */}
  {/* {show === 'all' && 
  <>
  {Data.map((item) => {
    return(
      <Card
        id={item.id}
        heightCard = {item.heightCard}
        widthImg = {item.widthImg}
        srcImg={item.srcImg}
        title={item.title}
        desc={item.desc}
      />)
  })}</>} */}