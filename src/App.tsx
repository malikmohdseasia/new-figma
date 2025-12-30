import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Dashboard from "./components/Dashboard";
import { useState } from "react";

const App = () => {

  const [isOpen, setIsOpen] = useState<Boolean>(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout isOpen={isOpen} setIsOpen={setIsOpen} />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
