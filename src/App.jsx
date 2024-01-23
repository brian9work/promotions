import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import P from './pages/P'
import Pulque from './pages/Pulque'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div onSubmit={e =>{ e.preventDefault(); }}>
    {/* <BrowserRouter basename='/promotions'> */}
    <BrowserRouter >
       <Routes>
          <Route exact path='*' element={<P />} />
          <Route exact path='/p' element={<Pulque />} />
          <Route exact path='/p/get/:id' element={<Pulque />} />
       </Routes>
    </BrowserRouter>
 </div>
  )
}

export default App
