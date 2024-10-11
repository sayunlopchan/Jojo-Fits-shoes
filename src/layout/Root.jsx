import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import PromoBanner from "../components/PromoBanner"

const Root = () => {
  return (
    <div className="bg-gray-100 ">
      <PromoBanner />
      <Header />
      <Outlet />
    </div>
  )
}

export default Root