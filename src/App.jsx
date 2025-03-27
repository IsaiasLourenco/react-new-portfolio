import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SplashScreen from "./components/pages/SplashScreen";
import Home from "./components/pages/Home";
import { ThemeContextProvider } from "./components/context/ThemeContextProvider"
import { GlobalStyle } from "./components/styles/GlobalStyle";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashFinish = () => {
    setShowSplash(false); // Finaliza a splash
  };

  return (
    <ThemeContextProvider>
      <GlobalStyle />
      {showSplash ? (
        <SplashScreen onFinish={handleSplashFinish} />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      )}
    </ThemeContextProvider>
  );
}

export default App;
