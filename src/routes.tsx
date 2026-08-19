import {createBrowserRouter} from "react-router";
import LandingPage from "./components/LandingPage/LandingPage.tsx";
import ContactPage from "./components/ContactPage/ContactPage.tsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.tsx";
import App from "./App.tsx";

export const router = createBrowserRouter([
    {
        path: "",
        element: <App></App>,
        children: [
            { index: true, element: <LandingPage></LandingPage> },
            { path: "contact", element: <ContactPage></ContactPage> },
            { path: "*", element: <ErrorPage></ErrorPage> }
        ]
    }
]);
