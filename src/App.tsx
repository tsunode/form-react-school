import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  console.log('Aplicação sendo renderizada')

  function handleSubmit(event) {
    event.preventDefault();

    console.log(name, email);
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          onChange={event => setName(event.target.value)}
        />
        <input 
          type="email" 
          onChange={event => setEmail(event.target.value)}
        />

        <button type='submit'>Cadastrar</button>
      </form>
    </div>
  )
}

export default App
