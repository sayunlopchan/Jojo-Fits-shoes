import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Root from "./layout/Root"
import HomePage from "./Home/Page/HomePage"

// Routes
import * as paths from "./routes/path";
import DetailPage from "./Home/Page/DetailPage";

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
      ]
    }
  ])


  return (
    <RouterProvider router={router} />
  )
}

export default App