import './App.css';
import Header from './Header'
import Home from './Home';
import Login from './Login'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />


        </Routes>

      </div>

    </BrowserRouter>
  );
}

export default App;
