import './App.css'
import ToDo from './Todo';

function App() {

  return (
    <>
      <h1>Core Concept of React!</h1>
      {/* <ToDo task="Learn React"></ToDo>
      <ToDo task="Learn React"></ToDo>
      <ToDo task="Learn React"></ToDo> */}
      <Student></Student>
      <Student></Student>
      <Person></Person>
      <Person></Person>
      <Developer name="Minhajul" dept="CSE"  tech="JavaScript"></Developer>
      <Developer name="Juel" dept="BBA" tech="Python"></Developer>
      <Developer name="Tahmeed" dept="SWE" tech="Java"></Developer>

      <Player name="Tamin" run="3000"></Player>
      <Player name="Minhajul" run="3500"></Player>

      <Salami salami="Rojer Eid" amount="200"></Salami>
    </>
  )
}

function Salami({salami,amount}) {
  return (
    <div className='student'>
      <h3>Salami For:{salami}</h3>
      <p>Amount:{amount}</p>
    </div>
  )
}

// Now using distructuring 
// const {name,tech}={name="Tamin" run="3000"}
function Player({name,run}) {
  return (
    <div className='student'>
      <h3>Name:{name} </h3>
      <p>Runs:{run} </p>
    </div>
  )
}
function Developer(props) {
  return (
    <div
      style={{
        border: '2px solid blue',
        margin: '10px',
        padding: '10px',
        borderRadius:'10px'
    }}>
      <h3>Developer:{props.name} </h3>
      <p>Department:{props.dept}</p>
      <p>Technology:{props.tech} </p>
    </div>
  )
}

const personStyle = {
  color: 'red',
  backgroundColor: 'white',
  border: '1px solid green',
  borderRadius:'10px'
  
}

function Person() {
       const age=23;
       const name='Minhajul';
        return(
         <p style={personStyle}>This {name} is {age} years old.</p>
        )
}
 
function Sports() {
  return (
    <p> I want to play sports.</p>
  )
}

function Student() {
  return (
    <div className='student'>
      <p>Name: Minhajul Islam </p>
      <p>Dept: CSE </p>
    </div>
  )
}

export default App
