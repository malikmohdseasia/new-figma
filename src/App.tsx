import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Dashboard from "./components/Dashboard";
import { useState } from "react";
import Login from "./components/Auth/Login";

import UnderDevelopment from "./components/UderDevelopment";
import { ToastContainer } from "react-toastify";
import NotFoundPage from "./components/NotFound";
import ProtectedRoute from "./components/Auth/ProtectedRoute";
import LoginRoute from "./components/Auth/LoginRoute";
import ErrorBoundary from "./components/ErrorBoundary";
import WelcomeDashboard from "./components/WelcomeDashboard";

const App = () => {
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  const [modalShow, setModalShow] = useState<Boolean>(false);

  return (
    <BrowserRouter>
      <ToastContainer
        toastStyle={{
          background: "#3E3D45",
          color: "#ffff",
          fontWeight: "500",
        }}
      />
      <Routes>
        <Route
          path="/"
          element={
            <LoginRoute>
              <Login setModalShow={setModalShow} />
            </LoginRoute>
          }
        />

        <Route
          path="/dashboard"
          element={
            <Layout
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              modalShow={modalShow}
              setModalShow={setModalShow}
            />
          }
        >
          <Route
            path="/dashboard"
            element={
              <ErrorBoundary>
                <ProtectedRoute>
                  <WelcomeDashboard />
                </ProtectedRoute>
              </ErrorBoundary>
            }
          />
          <Route
            path="/dashboard/analytics"
            element={
              <ErrorBoundary>
              <ProtectedRoute>
                <Dashboard
                  isOpen={isOpen}
                  modalShow={modalShow}
                  setModalShow={setModalShow}
                />
              </ProtectedRoute>
              </ErrorBoundary>
            }
          />
          <Route
            path="/dashboard/smart-home"
            element={
              <ProtectedRoute>
                <UnderDevelopment />
              </ProtectedRoute>
            }
          />
          <Route
            path="*"
            element={
              <ProtectedRoute>
                <NotFoundPage />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
