import './App.css'
import { initFlowbite } from 'flowbite'
import { useEffect } from "react"
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'

import RootLayout from './layouts/RootLayout'

import ArticleBoard from './pages/ArticleBoard'
import ArticlePost from './pages/ArticlePost'

import About from './pages/About'
import Error from './pages/Error'
import Login from './pages/Login'
import Register from './pages/Register'
import SavedPost from './pages/SavedPost'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route index element={<ArticleBoard/>}/>
      <Route path='/article' element={<ArticlePost/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/saved' element={<SavedPost/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='*' element={<Error/>}/>
    </Route>
  )
)

function App() {
  useEffect(() => {
    initFlowbite();
    if (!localStorage.getItem("savedPage")) {
      localStorage.setItem("savedPage", JSON.stringify([]));
    }
  }, []);

  return (
      <RouterProvider router={router}/>
  )
}

export default App
