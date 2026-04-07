import React from "react";
import ReactDOM from 'react-dom/client';
import App from './App'
import DataProvider from "./context/DataContext";
import './style.css'
import { BrowserRouter } from "react-router-dom";

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el)

root.render(
<BrowserRouter>
    <DataProvider>
            <App/>
    </DataProvider>
</BrowserRouter>
)