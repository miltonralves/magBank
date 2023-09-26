import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navigation from "./components/Navbar";
import Footer from "./components/Footer";
import AccountModal from "./components/AccountModal";
import Home from "./views/Home";

import "./App.scss";
import NoPage from "./views/NoPage";
import Login from "./views/Login";
import Dashboard from "./views/Dashboard";

const ProtectedRoute = ({ logged, children }) => {
  if (!logged) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

const App = () => {
  const [shoModal, setShowModal] = useState(false);
  const [name, setName] = useState();
  const [account, setAccount] = useState();
  const isLogged = name && account;

  const fakeAuth = {
    login(name, account, cb) {
      setName(name);
      setAccount(account);
      setTimeout(cb, 100);
    },
    logout(cb) {
      setName();
      setAccount();
      setTimeout(cb, 100);
    },
  };

  return (
    <>
      <Navigation
        handleCreateAcc={() => setShowModal(true)}
        auth={fakeAuth}
        logged={isLogged}
      />
      <Routes>
        <Route
          path="/"
          element={<Home handleClick={() => setShowModal(true)} />}
        />
        <Route path="/login" element={<Login auth={fakeAuth} />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute logged={isLogged}>
              <Dashboard name={name} account={account} />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <Footer />
      <AccountModal
        show={shoModal}
        handleClose={() => setShowModal(false)}
        auth={fakeAuth}
      />
    </>
  );
};

export default App;
