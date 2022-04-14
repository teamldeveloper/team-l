import { Hero, FeatureApp, OurTeam, ContactUs } from "./components";

import { Navbar, Footer } from "../../components";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <FeatureApp />
      <OurTeam />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
