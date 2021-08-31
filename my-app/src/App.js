import React from "react";
import { BrowserRouter } from "react-router-dom";
import Logo from "./components/logo/Logo";
import AppRouter from "./components/AppRouter";

function App() {
  return (
    <BrowserRouter>
      <Logo />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
