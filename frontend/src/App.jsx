import React from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Loader from "./components/Loader";

import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import DiaryPage from "./pages/DiaryPage";
import CalculatorPage from "./pages/CalculatorPage";

function App() {
  const isLoading = useSelector((state) => state.loader.isLoading);

  return (
    <>
      {isLoading && <Loader />}

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/diary" element={<DiaryPage />} />
        <Route path="/calculator" element={<CalculatorPage />} />
      </Routes>
    </>
  );
}

export default App;
