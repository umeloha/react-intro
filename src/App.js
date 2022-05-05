import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, About, Discovery, NotFound } from "./pages";
import { default as Layout } from "./layout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="discovery" element={<Discovery />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
