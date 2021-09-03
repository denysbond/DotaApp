import React from "react";
import { BrowserRouter } from "react-router-dom";
import Logo from "./components/logo/Logo";
import AppRouter from "./components/AppRouter";

import HeroForm from "./components/form/HeroForm";

function App() {
  return (
    <BrowserRouter>
      <Logo />
      <HeroForm />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
