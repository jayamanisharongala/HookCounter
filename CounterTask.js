import React ,{useState} from 'react'

function CounterTask() {
    const initialValue = 0
    const [value,setValue] = useState(initialValue)
    const [theme,setTheme] = useState("black")
    return (
        <div>
         <h2  className='primary'> Counter</h2>
         <h2  className='primary' style={{color:theme}}> {value}</h2>
          <button onClick={() =>[setValue(value + 1),setTheme(theme =>(value >=0?"green":"red"))]}>Increment</button>
          <button onClick={() =>[setValue(initialValue),setTheme("black")]}>Reset</button>
          <button onClick={() =>[ setValue(value - 1),setTheme(theme =>(value <=0?"red":"green"))]}>Decrement</button>
        </div>
    )
}
export default CounterTask
