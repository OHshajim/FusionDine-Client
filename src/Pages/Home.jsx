import Header from "../Components/Header/Header";
import OurChefs from "../Components/OurChefs";
import OurStrength from "../Components/OurStrength";
import TopFoods from "../Components/TopFoods";

const Home = () => {
    return (
        <div>
            <Header />
            <TopFoods />
            <OurStrength/>
            <OurChefs/>
        </div>
    );
};

export default Home;