import About from "./About";
import FeaturedDestinations from "./FeaturedDestinations";
import Hero from "./Hero";
import "./Home.css";
import Newsletter from "./Newsletter";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <FeaturedDestinations />
      <Testimonials />
      <div className="empty"></div>
      <Newsletter />
    </div>
  );
};

export default Home;
