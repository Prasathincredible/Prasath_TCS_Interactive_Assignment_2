import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"

import Magazine from "./pages/Magazine"
import CEOConnect from "./pages/CEOConnect"
import ValuesEthics from "./pages/ValuesEthics"
import UnitNews from "./pages/UnitNews"
import TcsAI from "./pages/TcsAI"

import Dashboard from "./pages/Dashboard"
import ProtectedRoute from "./components/ProtectedRoute"
import EmployeeLayout from "./components/EmployeeLayout"

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#f5f6f8]">

        <Routes>

          {/* Public pages */}

          <Route path="/" element={<Login />} />

          <Route path="/register" element={<Register />} />


          {/* Protected employee pages */}

          <Route element={<ProtectedRoute />}>

            <Route element={<EmployeeLayout />}>

              <Route
                path="/dashboard"
                element={<Dashboard />}
              />

              <Route
                path="/magazine"
                element={<Magazine />}
              />

              <Route
                path="/ceo-connect"
                element={<CEOConnect />}
              />

              <Route
                path="/values"
                element={<ValuesEthics />}
              />

              <Route
                path="/unit-news"
                element={<UnitNews />}
              />

              <Route
                path="/tcs-ai"
                element={<TcsAI />}
              />

            </Route>

          </Route>

        </Routes>

      </div>
    </BrowserRouter>
  )
}

export default App