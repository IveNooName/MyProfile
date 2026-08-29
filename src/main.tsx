import {createRoot} from 'react-dom/client';
import './index.css';
import {RouterProvider} from "react-router";
import {StrictMode} from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import {router} from "./routes.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router}></RouterProvider>
    </StrictMode>
);
