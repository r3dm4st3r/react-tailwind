import "./assets/css/tailwind.css";
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import Master from "./layout/Master";
import Application from "./Application";
const rootApp = document.getElementById('root');
const root = createRoot(rootApp);
root.render(
    <BrowserRouter>
        <Master>
            <Application/>
        </Master>
    </BrowserRouter>
);