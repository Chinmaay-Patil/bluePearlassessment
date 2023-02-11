/** @format */

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Customers from './components/customers/Customers'
import Auth from './components/auth/Auth'
import { EmailService } from './components/emailService/EmailService'

//defining routes to all pagesssssss
function App() {
  return (
    <div className="App">
      <div>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/mail" element={<EmailService />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
