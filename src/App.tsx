import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Dashboard from "./components/Dashboard";
import { useState } from "react";
import Login from "./components/Auth/Login";

const App = () => {

  const [isOpen, setIsOpen] = useState<Boolean>(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/dashboard" element={<Layout isOpen={isOpen} setIsOpen={setIsOpen} />}>
          <Route path="/dashboard" element={<Dashboard isOpen={isOpen} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
