import './App.css'
import { AnimatedBackground } from './components/AnimatedBackground'
import EntryForm from './components/EntryForm'

function App() {
  return (
    <div className="app-container">
      <AnimatedBackground />
      <div className="form-overlay">
        <EntryForm />
      </div>
      </div>
  )
}

export default App
