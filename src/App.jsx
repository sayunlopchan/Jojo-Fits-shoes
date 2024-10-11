import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Root from "./layout/Root"
import HomePage from "./Home/Page/HomePage"

// Routes
import * as paths from "./routes/path";
import DetailPage from "./Home/Page/DetailPage";
import CartPage from "./Home/Page/CartPage";
import FavouritePage from "./Home/Page/FavouritePage";

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {
          index: true,
          element: <HomePage />
        },
        {
          path: paths.DETAIL_PAGE,
          element: <DetailPage />
        },
        {
          path: paths.CART_PAGE,
          element: <CartPage />
        },
        {
          path: paths.FAVOURITE_PAGE,
          element: <FavouritePage /> || <div className="h-screen w-screen flex justify-center items-center">PAGE ON CONSTRUCTION!</div>
        },
      ]
    }
  ])


  return (
    <RouterProvider router={router} />
  )
}

export default App