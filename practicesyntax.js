import { createBrowserRouter, RouterProvider } from "react-router-dom"

const AppLayout = () => {
    return (
        <div>
            <Header/>
            <Body/>
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <AppLayout/>,

    },
    {
        path : "about",
        element : <About/>,
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);