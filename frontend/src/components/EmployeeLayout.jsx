import Header from "./Header"
import { Outlet } from "react-router-dom"

function EmployeeLayout() {
  return (
    <>
      <Header />

      <Outlet />
    </>
  )
}

export default EmployeeLayout