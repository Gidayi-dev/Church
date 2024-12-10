import Home from "./components/home";
import About from "./components/about";
import Service from "./components/service";
import Visit from "./components/visit";
import Values from "./Components/values";
import Footer from "./Components/footer";  // Fixed: extra quotes removed
import Events from "./components/events";  // Fixed: renamed from 'UpcomingEvents' to 'Events'
import Programs from "./Components/programs";  // Fixed: renamed from 'OurPrograms' to 'Programs'

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
