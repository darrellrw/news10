import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import ArticlePost from './pages/ArticlePost'
import Login from './pages/Login'
import Register from './pages/Register'

import { initFlowbite } from 'flowbite'

import { useEffect, useState } from "react"

import { NavigationBar } from './components/NavigationBar'
import { FooterBar } from './components/FooterBar'

import { ArticleBoard } from './components/ArticleBoard'

function App() {
  const [category, setCategory] = useState("general");
  const [nation, setNation] = useState("us");
  const [search, setSearch] = useState("");

  useEffect(() => {
    initFlowbite();
  }, []);

  return (
    <div className="flex flex-col h-screen justify-between">
      <BrowserRouter>
        <NavigationBar setCategory={setCategory} setSearch={setSearch} setNation={setNation}/>
        <Routes>
          <Route path='/' element={<ArticleBoard category={category} nation={nation} search={search}/>}/>
          <Route path='/article' element={<ArticlePost/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
        <FooterBar setCategory={setCategory}/>
      </BrowserRouter>
    </div>
  )
}

export default App
