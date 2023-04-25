import "./App.css";
import GlobalHeader from "./GlobalHeader/GlobalHeader";
import HomePage from "./HomePage/HomePage";
import Footer from "./GlobalFooter/Footer";
import MenLandingPage from "./Landings/MenLandingPage/MenLandingPage";
import WomenLandingPage from "./Landings/WomenLandingPage/WomenLandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalHeader />
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/men' element={<MenLandingPage />} />
            <Route path='/women' element={<WomenLandingPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
