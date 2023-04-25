import Header from "../Header/Header";
import Preheader from "../Preheader/Preheader";
import Postheader from "../Postheader/Postheader";
import Postheader2 from "../Postheader2/Postheader2";

const GlobalHeader = () => {
    return (
        <>
            <Preheader />
            <Header />
            <Postheader />
            <Postheader2 />
        </>
    )
}

export default GlobalHeader