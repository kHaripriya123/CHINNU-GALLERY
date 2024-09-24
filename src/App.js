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
import UserTable from "./components/UserTable";
import UserForm from "./components/UserForm";
import CardDetails from "./components/CardDetails";
import ArtsByPrice from "./components/ArtsByPrice";
import Arts from "./components/Arts";

const AppLayout = () => {
    return (
        <div className="App">

            <Header />
            <Outlet />

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
                    element: <Body />,
                },

                {
                    path: "/contact",
                    element: <Contact />,
                },


                {
                    path: "/ipltable",
                    element: <IplTable />,
                },
                {
                    path: "/itcities",
                    element: <ITCities />,
                },
                {
                    path: "/usertable",
                    element: <UserTable />,
                },
                {
                    path: "/userform",
                    element: <UserForm />,
                },
               {
                     path : "artworks",
                     element : <Arts/>,
               }

            ],
        },
    ])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter} />);