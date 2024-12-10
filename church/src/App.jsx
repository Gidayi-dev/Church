import Home from "./Components/Home";
import About from "./Components/About";
import Service from "./Components/Service";
import Visit from "./Components/Visit";
import Values from "./Components/Values";
import Footer from "./Components/Footer";  // Fixed: extra quotes removed
import Events from "./Components/Events";  // Fixed: renamed from 'UpcomingEvents' to 'Events'
import Programs from "./Components/Programs";  // Fixed: renamed from 'OurPrograms' to 'Programs'

function App() {
  return (
    <div>
      {/* Components all on the same page */}
      <Home />
      <About />
      <Service />
      <Visit />
      <Values />
      <Programs />  {/* Fixed: corrected to 'Programs' */}
      <Events />  {/* Fixed: corrected to 'Events' */}
      <Footer />
    </div>
  );
}

export default App;
