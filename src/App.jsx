import * as React from "react";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";
import ErrorBoundary from "./pages/ErrorBoundary";
import Navigation from "./pages/Navigation";
import { Route, Routes } from "react-router-dom";
import Auth from "./container/Auth";
import Header from "./container/Header";
import { UserContextProvider } from "./context/userContext";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="errorboundary" element={<ErrorBoundary />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      <div className="ui container">
        <UserContextProvider>
          <Header />
          <Auth />
        </UserContextProvider>
      </div>
    </>
  );
}

export default App;
