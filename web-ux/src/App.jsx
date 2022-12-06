import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import SecuredRoute from './components/SecuredRoute'
import Home from './pages/Home'
import Login from './pages/Login'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route element={<SecuredRoute />}>
          <Route path='/home' element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
