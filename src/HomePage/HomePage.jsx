import VideoContainer from "../VideoContainer/VideoContainer";
import VideoButton from "../VideoButton/VideoButton";
import Hr from "../Hr/Hr";
import Chargehope from "../ChargehopeContainer/Chargehope";
import CategoriesHome from "../CategoriesContainer/CategoriesHome";
import CategoriesHomeB from "../CategoriesContainerB/CategoriesHomeB";
import SectionH2 from "../SectionH2/SectionH2"
import ProductCardsContainer from "../ProductCardsContainer/ProductCardsContainer";
import ProductFilter from "../QuickFilterContainer/ProductFilter";

function HomePage() {
    return (
        <>
            <VideoContainer />
            <VideoButton />
            <Hr />
            <ProductFilter />
            <SectionH2 content="FaFa categories" />
            <CategoriesHome />
            <Chargehope />
            <CategoriesHomeB />
            <SectionH2 content="more products" />
            <ProductCardsContainer />
        </>
    )
}


export default HomePage