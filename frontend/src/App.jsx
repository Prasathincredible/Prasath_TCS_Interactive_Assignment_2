import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from "./components/Header"

import Home from "./pages/Home"
import Magazine from "./pages/Magazine"
import CEOConnect from "./pages/CEOConnect"
import ValuesEthics from "./pages/ValuesEthics"
import UnitNews from "./pages/UnitNews"
import TcsAI from "./pages/TcsAI"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Dashboard from "./pages/Dashboard"
import ProtectedRoute from "./components/ProtectedRoute"
function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#f5f6f8]">
         <Header />

        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/magazine" element={<Magazine />} />
          <Route path="/ceo-connect" element={<CEOConnect />} />
          <Route path="/values" element={<ValuesEthics />} />
          <Route path="/unit-news" element={<UnitNews />} />
          <Route path="/tcs-ai" element={<TcsAI />} />

           <Route element={<ProtectedRoute />}>
    <Route path="/dashboard" element={<Dashboard />} />
  </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App