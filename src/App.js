import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Show from "./Show";
import Footer from "./Footer";
import Find from "./Find"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/show" element={<Show />} />
          <Route path="/find" element={<Find />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
