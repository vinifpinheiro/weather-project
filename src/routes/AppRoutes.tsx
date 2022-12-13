import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "../components/Header";
import { MainPage } from "../pages/MainPage";
import "../styles/reset.css"
import "../styles/global.scss"
import { SearchPageBrazil } from "../pages/SearchPageBrazil";

export const AppRoutes = () => {
  return (
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
        <Routes>
          <Route path="/brazil" element={<SearchPageBrazil/>}/>
        </Routes>
      </Router>
  );
};
