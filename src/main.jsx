import React from "react";
import ReactDOM from "react-dom/client";
import Contador from "./components/Contador";
// import Profile from './components/Profile'
import Navbar from "./components/Navbar";
import Grid from "./components/Grid";
import UserGrid from "./components/UserGrid";
import Alert from "./components/Alert";
import "./index.css";
import ThemeProvider from "./Context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <Alert />
      <Navbar />
      <Grid />
      <Contador />
      <UserGrid />
    </ThemeProvider>
  </React.StrictMode>
);
