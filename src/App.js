import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import Home from "./components/home";
import ImagesComponent from "./components/images";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/images" element={<ImagesComponent />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
