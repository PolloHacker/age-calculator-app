import './App.css'
import CalcButton from './components/button'
import Form from './components/form'
import DisplayResult from './components/result'

function App() {

  return (
    <div className="App">
      <Form />
      <CalcButton />
      <DisplayResult />
    </div>
  )
}

export default App
