import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import IplTable from "./components/IplTable";
import Contact from "./components/Contact";
import ITCities from "./components/ITCities";
import Login from "./components/Login";
import { ThemeProvider } from "@material-tailwind/react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const AppLayout = () => {
    return (
        <div className="App">

            <Header/>
            <Outlet/>

        </div>
    )
}

const AppRouter = createBrowserRouter(
    [

        {

            path: "/login",
            element: <Login />,

            
        },

        {

            path: "/",
            element: <AppLayout />,



            children: [

                {
                    path: "/",
                    element: <Body />
                },

                {
                    path: "/contact",
                    element: <Contact />
                },


                {
                    path: "/IPLTABLE",
                    element: <IplTable />,
                },
                {
                    path: "/ITCities",
                    element: <ITCities />
                },


            ]
        },
    ])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ThemeProvider><RouterProvider router={AppRouter} /></ThemeProvider>);