import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "../components/Header";
import { MainPage } from "../pages/MainPage";
import "../styles/reset.css"

export const AppRoutes = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Router>
    </>
  );
};
