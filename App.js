import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import {
    createBrowserRouter,
    Outlet,
    RouterProvider,
  } from "react-router-dom";
import Cart from "./src/components/Cart";

const AppComponent = () => {
    return (
        <div className="m-1 p-1">
            <Header/>
            <Body/>
            <Outlet/>
        </div>
    )
}
const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppComponent/>,
        children : [
            {
                path: "/",
                element: <Body/>,
              },
            {
                path: "/Cart",
                element: <Cart/>,
              },
        ]


      },
    
    
  ]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter} />);
