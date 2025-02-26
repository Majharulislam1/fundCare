import { Helmet } from "react-helmet";
import Blogs from "./Blogs";
import Hero from "./Hero";
import Home_volunteer from "./Home_volunteer";
import Volunteer_needs_home from "./Volunteer_needs_home";
import Sponsored_section from "./Sponsored_section";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Hero></Hero>
            <Volunteer_needs_home></Volunteer_needs_home>
            <Home_volunteer></Home_volunteer>
            <Blogs></Blogs>
            <Sponsored_section></Sponsored_section>
        </div>
    );
};

export default Home;