import { useState } from 'react'
import Menu from './components/menu'

import style from './Calc.module.css'

export const Calc = () =>{
  const [first, setFirst] = useState()
  const [second, setSecond] = useState()
  const [third, setThird] = useState()
  const [fourth, setFourth] = useState()
  const [fifth, setFifth] = useState()
  const [average, setAverage] = useState()

  const handleCalc = () =>{
    const firstNum = parseFloat(first)
    const secondNum = parseFloat(second)
    const thirdNum = parseFloat(third)
    const fourthNum = parseFloat(fourth)
    const fifthNum = parseFloat(fifth)

    if(!isNaN(firstNum) && !isNaN(secondNum) && !isNaN(thirdNum) && !isNaN(fourthNum) && !isNaN(fourthNum))
      setAverage((firstNum + secondNum + thirdNum + fourthNum + fourthNum) / 5)
  }

  return(
    <div>
      <Menu/>
      <div className={style.wrapContainer}>
        <h1>Calculations</h1>
        <div className={style.wrapInput}>
          <input type="number" placeholder='First' value={first} onChange={(e) => setFirst(e.target.value)}/>
          <input type="number" placeholder='Second' value={second} onChange={(e) => setSecond(e.target.value)}/>
          <input type="number" placeholder='Third' value={third} onChange={(e) => setThird(e.target.value)}/>
          <input type="number" placeholder='Fourth' value={fourth} onChange={(e) => setFourth(e.target.value)}/>
          <input type="number" placeholder='Fifth' value={fifth} onChange={(e) => setFifth(e.target.value)}/>
        </div>
        <div>
          <button onClick={handleCalc}>Average</button>
        </div>
        <div>
          {!isNaN(average) &&
          <p>{average.toFixed(2)}</p>}
        </div>
      </div>
    </div>
  )
}