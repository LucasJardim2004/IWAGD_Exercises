import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import FormVoluntario from "./FormVoluntario";
import {SurveyProvider} from "./context/SurveyContext";
import Survey from "./components/Inqueritos/Survey";
import SurveyResult from './components/Inqueritos/SurveyResults';
import SurveyAllResults from './components/Inqueritos/SurveyAllResults';


const root = createRoot(document.getElementById("root"));
root.render(
<React.StrictMode>
    <BrowserRouter>
        <SurveyProvider>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/inscricao" element={<FormVoluntario />} />
                <Route path="/inquerito" element={<Survey />} />
                <Route path="/inquerito/resposta" element={<SurveyResult />} />
                <Route path="/inquerito/resultados" element={<SurveyAllResults />} />
            </Routes>
        </SurveyProvider>
    </BrowserRouter>
</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
