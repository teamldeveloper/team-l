import {
  Navbar,
  Hero,
  FeatureApp,
  OurTeam,
  ContactUs,
  Footer,
} from "./components";
import "./App.css";

function App() {
  return (
    <div className="App bg-white ">
      <Navbar />
      <Hero />
      <FeatureApp />
      <OurTeam />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
