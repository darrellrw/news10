import { useState } from 'react'
import Category from './components/category'
import News from './components/news-card'
import Trendypost from './components/trendypost_card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Category/>
      <News />
      <Trendypost />
    </>
  )
}

export default App
