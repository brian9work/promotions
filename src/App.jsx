import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import P from './pages/P'
import Pulque from './pages/Pulque'
import {ReseivedInput, ReceivedCode} from './pages/Received'

function App() {
  return (
    <div onSubmit={e =>{ e.preventDefault(); }}>
    <BrowserRouter basename='/promotions'>
    {/* <BrowserRouter > */}
       <Routes>
          <Route exact path='*' element={<P />} />
          <Route exact path='/p' element={<Pulque />} />
          <Route exact path='/received/:code' element={<ReceivedCode />} />
          <Route exact path='/received/' element={<ReseivedInput />} />
       </Routes>
    </BrowserRouter>
 </div>
  )
}

export default App
