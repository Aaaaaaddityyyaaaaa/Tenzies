import { useState } from "react";
import Die from "./die"
import Confetti from "react-confetti";
export default function Main()
{
  
  function generateDice() {
    return Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,                       
      value: Math.floor(Math.random() * 6) + 1,
      isHeld: false                    
    }));
  }

  const[die ,setDie] = useState(generateDice()) 
  
  function roll()
  {
    setDie((die )=>die.map(function(d) 
    {
      return (d.isHeld === false ?{...d,value:Math.floor(Math.random() * 6) + 1}:d)
    }
  ))
  
  }
  function startNew()
  {
    setDie(generateDice())
  }
  let won =  false ;
  if(die.every(d => d.isHeld===true)&&die.every(d=>d.value==die[0].value))
  {
    won = true
    
    
  }
  const  diceElement = die.map((die)=>< Die key = {die.id} id = {die.id} value = {die.value} held = {die.isHeld} setdie ={setDie}/>);
  return <main className="window">
    <h1>Tenzies</h1>
    <p>Roll until all dice are the same. Click each die to freeze it at its current no.</p>
    <div>{diceElement}</div>
    <button onClick={!won?roll:startNew}>{!won?"Roll!":"Start new game"}</button>
    {won&&<Confetti width={window.innerWidth} height={window.innerHeight}/>}
  </main>
}