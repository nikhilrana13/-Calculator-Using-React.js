
import React, { useState } from "react";
import './Calculator.css'


const Calculator = () => {
    const [input, setInput]= useState('')
    console.log(useState(''))

    const AppendtoDisplay = (value)=> {
        setInput(input + value)
    }
    const Cleardisplay = ()=>{
       setInput('')
    }

    const Calculate = ()=>{
        try{
            setInput(eval(input));
        } catch(error){
            setInput('error')

        }
    }

    


  return (
    <div className="Main">
      <h1>Calculator</h1>
      <div className="calculator">
        <input type="text" value={input}id="Displayinput"/>
        <div className="button">
       <span onClick={Cleardisplay}>C</span>
        <span onClick={()=>AppendtoDisplay('1')}>1</span>
        <span onClick={()=>AppendtoDisplay('2')}>2</span>
        <span onClick={()=>AppendtoDisplay('3')}>3</span>
        <span onClick={()=>(AppendtoDisplay('4'))}>4</span>
        <span onClick={()=>AppendtoDisplay('6')}>5</span>
        <span onClick={()=>AppendtoDisplay('7')}>6</span>
        <span onClick={()=>AppendtoDisplay('7')}>7</span>
        <span onClick={()=>AppendtoDisplay('8')}>8</span>
        <span onClick={()=>AppendtoDisplay('9')}>9</span>
        <span onClick={()=>AppendtoDisplay('.')}>.</span>
        <span onClick={()=>AppendtoDisplay('.0')}>0</span>
        <span onClick={Calculate}>=</span>
        <span onClick={()=>AppendtoDisplay('+')}id="operator">+</span>
        <span onClick={()=>AppendtoDisplay('-')}id="operator">-</span>
        <span onClick={()=>AppendtoDisplay('*')}id="operator">*</span>
        <span  onClick={()=>AppendtoDisplay('/')} id="operator">/</span>
        </div>
       
      </div>
    </div>

  )
}

export default Calculator;


