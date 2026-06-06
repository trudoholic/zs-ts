import './App.css'
import CountDisplay from './components/CountDisplay.tsx'
import CountControls from './components/CountControls.tsx'

function App() {
  return (
    <>
      <section id="center">
        <CountDisplay/>
        <CountControls/>
      </section>
    </>
  )
}

export default App
