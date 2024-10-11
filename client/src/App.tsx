import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Events from '../pages/Events'
import Event from '../pages/Event'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/events" element={<Events/>}/>
          <Route path="/events/:id" element={<Event/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
