import './App.css'
import { NavigationBar } from './components/NavigationBar'
import { FooterBar } from './components/FooterBar'

function App() {
  
  return (
    <div className="flex flex-col h-screen justify-between">
      <NavigationBar></NavigationBar>
      <FooterBar></FooterBar>
    </div>
  )
}

export default App
