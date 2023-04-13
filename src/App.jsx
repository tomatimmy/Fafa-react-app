import "./App.css";
import Header from "./Header/Header";
import Preheader from "./Preheader/Preheader";
import Postheader from "./Postheader/Postheader";
import Postheader2 from "./Postheader2/Postheader2";
import VideoContainer from "./VideoContainer/VideoContainer";
import VideoButton from "./VideoButton/VideoButton";
import QuickFilter from "./QuickFilterContainer/QuickFilter";
import Hr from "./Hr/Hr";
import Chargehope from "./ChargehopeContainer/Chargehope";
import Footer from "./FooterContainer/Footer";
import CategoriesHome from "./CategoriesContainer/CategoriesHome";
import CategoriesHomeB from "./CategoriesContainerB/CategoriesHomeB";
import SectionH2 from "./SectionH2/SectionH2"
import ProductCardsContainer from "./ProductCardsContainer/ProductCardsContainer";

function App() {
  return (
    <>
      <Preheader />
      <Header />
      <Postheader />
      <Postheader2 />
      <VideoContainer />
      <VideoButton />
      <Hr />
      <QuickFilter />
      <ProductCardsContainer />
      <SectionH2 content="FaFa categories" />
      <CategoriesHome />
      <Chargehope />
      <CategoriesHomeB />
      <SectionH2 content="more products" />
      <ProductCardsContainer />
      <Footer />
    </>
  );
}

export default App;
