const { createBrowserRouter } = require("react-router-dom");
const { default: Login } = require("../Auth/Login/Login");
const { default: Register } = require("../Auth/Register/Register");
const { default: Main } = require("../main/Main");
const { default: Home } = require("../Pages/Home/Home");

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/login",
                element: <Login />
            }
        ]
    }
])


export default routes