import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import OnePage from './OnePage'
import SystemicLanding from './SystemicLanding'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OnePage />} />
        <Route path="/systemic" element={<SystemicLanding />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App