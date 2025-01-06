import Blogs from "./Blogs";
import Hero from "./Hero";
import Home_volunteer from "./Home_volunteer";
import Volunteer_needs_home from "./Volunteer_needs_home";


const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Volunteer_needs_home></Volunteer_needs_home>
            <Home_volunteer></Home_volunteer>
            <Blogs></Blogs>
        </div>
    );
};

export default Home;