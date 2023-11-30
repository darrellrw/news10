import { useState } from 'react'
import Category from './components/category'
import News from './components/news-card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Category/>
      <News />
    </>
  )
}

export default App
