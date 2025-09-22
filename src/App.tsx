import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import OnePage from './OnePage'
import SystemicLanding from './SystemicLanding'
import PrivacyPolicy from './PrivacyPolicy'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OnePage />} />
        <Route path="/systemic" element={<SystemicLanding />} />
        <Route path="/systemic/privacy" element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App