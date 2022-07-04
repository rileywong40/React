import { Routes, Route } from "react-router-dom";

import AllStock from "./pages/AllStock";
import FavoritesStock from "./pages/FavoritesStock";
import RecentStock from "./pages/RecentStock";
import Home from "./pages/Home";
import "./App.css";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="favorites" element={<FavoritesStock />} />
          <Route path="recent" element={<RecentStock />} />
          <Route path="all" element={<AllStock />} />
        </Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
