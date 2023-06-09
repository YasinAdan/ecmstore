import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

import Home from "./Components/Home/Home";
import Products from "./Components/Products/Products";
import Product from "./Components/Product/Product";
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

import "./App.scss";


const Layout = () => {
  return (
    <div className="app">
      <Navbar />
        <Outlet />
      <Footer />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
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
    ]
  },
]);


function App() {

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
