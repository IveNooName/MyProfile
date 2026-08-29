import {createBrowserRouter} from "react-router";
import AboutMePage from "./components/LandingPage/AboutMePage.tsx";
import ContactPage from "./components/ContactPage/ContactPage.tsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.tsx";
import App from "./App.tsx";
import ProjectPage from "./components/ProjectPage/ProjectPage.tsx";
import IStealYourCreditCard from "./components/IStealYourCreditCard/IStealYourCreditCard.tsx";
import Hosting from "./components/Articles/Hosting/Hosting.tsx";

export const router = createBrowserRouter([
    {
        path: "",
        element: <App></App>,
        children: [
            { index: true, element: <AboutMePage></AboutMePage> },
            { path: "about-me", element: <AboutMePage></AboutMePage> },
            { path: "projects", element: <ProjectPage></ProjectPage>},
            { path: "contact", element: <ContactPage></ContactPage> },
            { path: "i-steal-your-credit-card", element: <IStealYourCreditCard></IStealYourCreditCard> },
            { path: "articles/hosting", element: <Hosting></Hosting> },
            { path: "*", element: <ErrorPage></ErrorPage> }
        ]
    }
]);
