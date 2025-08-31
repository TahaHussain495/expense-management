import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


// bulb on/off 

function App() {

  //   let [isOn, setIson] = useState(false)

  //   let toggleButton = () => {

  // setIson(!isOn)

  //   }





  // let cars = [

  //   {
  //     carId: '01',
  //     carName: "Corrola",
  //     carModel: '2025'
  //   },
  //   {
  //     carId: '02',
  //     carName: "Civic",
  //     carModel: '2025'
  //   },
  //   {
  //     carId: '03',
  //     carName: "BMW",
  //     carModel: '2025'
  //   }

  // ]

  let [inp, setInp] = useState()
  let [sel, setSell] = useState('income')
  let [transactions, setTransaction] = useState([])


  function handleInput(e) {
    setInp(e.target.value)
    inp = ""
  }


  function handleSelect(e) {
    setSell(e.target.value)
  }


  function submitExpense() {
    setTransaction([...transactions, { inp, sel }])
    setInp("")
    setSell("income")
  }

  return (
    <>


      <h1>Expense Management System</h1>
      <hr /><br />
      <input value={inp} onChange={handleInput} type="number" name='' id='' />
      <select value={sel} onChange={handleSelect} name="" id="">
        <option value="income">income</option>
        <option value="expense">expense</option>
      </select>
      <button onClick={submitExpense}>Submit</button>
      <hr />
      <ul>
        {transactions.map((value, index) => (
          <li
            key={index}
            className={value.sel}   // 👈 will add "income" or "expense" class
          >
            {value.inp} - {value.sel} <button onClick={() => setTransaction(transactions.filter((_, i) => i !== index))}>Delete</button>
   {/* i is the current element’s index in the array. */}
   {/* index is the one you clicked to delete (passed into delItem). */}
   {/* If i !== index → keep the element. */}
   {/* If i === index → skip (delete) that element. */}

          </li>
        ))}
      </ul>



      {/* {
        cars.map((value, index) => {
          return <div style={{border:'1px solid white' , margin:'10px' , padding:'30px'}} key={index}>
            <p>{value.carId}</p>
            <p>{value.carName}</p>
            <p>{value.carModel}</p>
          </div>
        })
      } */}
      {/* <img src={isOn ? "https://www.w3schools.com/js/pic_bulbon.gif" : "https://www.w3schools.com/js/pic_bulboff.gif"} /> */}
      {/* <button onClick={toggleButton}>On/Off</button> */}
    </>
  )
}




export default App
