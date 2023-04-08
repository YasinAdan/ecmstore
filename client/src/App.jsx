import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./Components/Home/Home";
import Products from "./Components/Products/Products";
import Product from "./Components/Product/Product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "products/:id",
    element: <Products />,
  },
  {
    path: "product/:id",
    element: <Product />,
  }
]);

function App() {

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
