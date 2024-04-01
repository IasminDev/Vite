import { useState } from 'react'
import { useEffect } from 'react'
import Menu from './components/menu'
import Card from './components/card'
import {apiRMCharacters} from './api/server.js'

import style from './RaM.module.css'

export const RaM = () => {
  const [data, setData] = useState([])
  const [page, setPage] = useState('')
  const [name, setName] = useState('')

  useEffect(() => {
    apiRMCharacters.get(`character/?page=${page}&name=${name}`)
    .then((response) => {
      if(!response.data.results){
        console.log('Empty array')
      }
      setData(response.data.results)
    }).catch((error) => {
      if(error.response.status === 404){
        console.log('Character doesnt const in this page')
      }
      if(error.response.status === 500){
        console.log('Server connection error')
      }
      console.error(error)
    })
  }, [page, name])

  return(
    <div>
      <Menu/>
      <div className={style.wrapContainer}>
        <h1>Rick And Morty</h1>
        <div className={style.wrapInputs}>
          <input type="number" placeholder='Page' value={page} onChange={(e) => setPage(e.target.value)}/>
          <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)}/>
        </div>
        <div className={style.wrapCards}>
          {data.map((item) => {
            return(
              <div key={item.id}>
                <Card
                  heightCard = '300px'
                  srcImg={item.image}
                  title={item.name}
                  desc={item.status}
                  statusColor={item.status === 'Alive' ? 'var(--alive-color)' 
                              : item.status === 'Dead' ? 'var(--dead-color)' 
                              : 'var(--unknown-color)'}
                />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}