import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/header/home1/Home";
import Docs from "./components/header/docs/Docs";
import Content from "./components/header/content/Content";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Notfound from "./components/header/notfound/Notfound";
import Time from "./components/time/Time";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <Time />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Docs" element={<Docs />} />
          <Route path="/content" element={<Content />} />
          <Route path="/404" element={<Notfound />} />
          <Route path="*" element={<Navigate replace to="/404" />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
};

export default App;
