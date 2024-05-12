import { Helmet } from "react-helmet-async";
import Header from "../Components/Header/Header";
import OurChefs from "../Components/OurChefs";
import OurStrength from "../Components/OurStrength";
import TopFoods from "../Components/TopFoods";

const Home = () => {
    return (
        <div>
            {/* Title */}
            <Helmet>
                <title>FusionDine || Home</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>


            {/* components  */}
            <Header />
            <TopFoods />
            <OurStrength />
            <OurChefs />
        </div>
    );
};

export default Home;