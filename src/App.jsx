import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import ArticlePost from './pages/ArticlePost'

import { NavigationBar } from './components/NavigationBar'
import { FooterBar } from './components/FooterBar'
import { ArticleBoard } from './components/ArticleBoard'

import { useState } from 'react'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {

  const [category, setCategory] = useState("general");
  const [nation, setNation] = useState("us");

  return (
    <div className="flex flex-col h-screen justify-between">
      <NavigationBar setCategory={setCategory} setNation={setNation}/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ArticleBoard category={category} nation={nation}/>}/>
          <Route path='/article' element={<ArticlePost/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
      </BrowserRouter>
      <FooterBar/>
    </div>
  )
}

export default App
