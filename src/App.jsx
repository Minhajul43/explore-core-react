import './App.css'

function App() {

  return (
    <>

      <h1>Vite + React</h1>
      <Person/>
      <Person/>
      <Person />
      <Sports/>
      
      
    </>
  )
}

function Person() {
       const age=23;
       const name='Minhajul';
        return(
         <p>This {name} is {age} years old.</p>
        )
}
 
function Sports() {
  return (
    <p> I want to play sports.</p>
  )
}

export default App
