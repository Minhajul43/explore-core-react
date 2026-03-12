import './App.css'

function App() {

  return (
    <>

      <h1>Core Concept of React!</h1>
      <Student></Student>
      <Student></Student>
      <Person></Person>
      <Developer name="Minhajul" tech="JavaScript"></Developer>
      <Developer name="Juel" tech="Python"></Developer>
      <Developer name="Tahmeed" tech="Java"></Developer>
      
      
    </>
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
      <p>Name: </p>
      <p>Dept: </p>
    </div>
  )
}

export default App
