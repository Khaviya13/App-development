import '../ComponentS/LandingPage.css';


import About from "./About";
import Work from "./Work";

import Contact from "./Contact";
import Footer from "./Footer";
import PublicAwareness from "./PublicAwareness";
import Home from './Home';

function LandingPage() {
  return (
    <div className="LandingPage">
      <Home/>
      <About />
      <Work />
      <PublicAwareness/>
      <Contact />
      <Footer />
    </div>
  );
}

export default LandingPage;