import { Outlet } from "react-router-dom"
import Header from "../components/Header"

const Root = () => {
  return (
    <div className="bg-gray-100 pt-8">
      <Header />
      <Outlet />
    </div>
  )
}

export default Root