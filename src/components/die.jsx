export default function Die(props)
{
  function toggle()
  {
    props.setdie(die=>die.map(d=>d.id === props.id
      ? { ...d, isHeld: !d.isHeld } 
      : d
))}
  return <button onClick={toggle} className ={!props.held?"die":"dieGreen" } >{props.value}</button>
  }
  
