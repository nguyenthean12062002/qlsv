import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { UserProvider } from "./Context/UseContext";
import GloabalStyles from "./Component/GlobalStyles/GloabalStyles";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GloabalStyles>
      <UserProvider>
        <App />
      </UserProvider>
    </GloabalStyles>
  </React.StrictMode>
);
