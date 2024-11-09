import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Routes from "./Routes/Routes";
import AuthProvider from "./Provider/AuthProvider";
import {Toaster} from "react-hot-toast";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={Routes}></RouterProvider>
      <Toaster></Toaster>
    </AuthProvider>
  </React.StrictMode>
)