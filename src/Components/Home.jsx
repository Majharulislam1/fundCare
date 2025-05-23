import { Helmet } from "react-helmet";
import Blogs from "./Blogs";
import Hero from "./Hero";
import Home_volunteer from "./Home_volunteer";
import Volunteer_needs_home from "./Volunteer_needs_home";
import Sponsored_section from "./Sponsored_section";
import Team from "./Team";
import Faq_section from "./Faq_section";
import Our_Mission_home from "./Our_Mission_home";
import CharitySection from "./CharitySection";
import Funded_Charity from "./Funded_Charity";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Hero></Hero>
            <Volunteer_needs_home></Volunteer_needs_home>
        
             <Our_Mission_home></Our_Mission_home>

            <Sponsored_section></Sponsored_section>

            <CharitySection></CharitySection>

            <Blogs></Blogs>

 <Funded_Charity></Funded_Charity>

            <Home_volunteer></Home_volunteer>
            <Team></Team>
            <Faq_section></Faq_section>
        </div>
    );
};

export default Home;