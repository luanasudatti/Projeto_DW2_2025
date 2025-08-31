import React from "react";
// import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"; //Em caso de erro, verifique se o react-router-dom está instalado
import Index from '../paginas/index.jsx';
import Carro from '../paginas/carro.jsx';
import Auth from './Auth.jsx';


export default function Links() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Index />} />  
                <Route path="/carro/:id" element={<Carro />} />
                <Route path="/auth" element={<Auth />} />
            </Routes>
        </BrowserRouter>
    )

}