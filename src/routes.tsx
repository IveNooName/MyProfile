import {createBrowserRouter} from "react-router";
import AboutMePage from "./components/LandingPage/AboutMePage.tsx";
import ContactPage from "./components/ContactPage/ContactPage.tsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.tsx";
import App from "./App.tsx";

export const router = createBrowserRouter([
    {
        path: "",
        element: <App></App>,
        children: [
            { index: true, element: <AboutMePage></AboutMePage> },
            { path: "about-me", element: <AboutMePage></AboutMePage> },
            { path: "contact", element: <ContactPage></ContactPage> },
            { path: "*", element: <ErrorPage></ErrorPage> }
        ]
    }
]);
