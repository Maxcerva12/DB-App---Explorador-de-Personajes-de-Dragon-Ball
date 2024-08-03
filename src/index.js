import React from "react";
import { createRoot } from "react-dom/client"; // Importación corregida
import "./index.css";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";

const rootElement = document.getElementById("root");

// Crear la raíz y montar la aplicación
const root = createRoot(rootElement);
root.render(<App />);

serviceWorkerRegistration.register();

reportWebVitals();
