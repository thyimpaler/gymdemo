import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Coaches from "./components/Coaches";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative min-h-screen bg-gym-black overflow-x-hidden selection:bg-brand-yellow selection:text-black">
      {/* Scroll Indicator progress bar */}
      <div className="fixed top-0 left-0 right-0 h-[2px] bg-brand-yellow/30 z-[100] pointer-events-none" />

      {/* Main Navigation */}
      <Navbar />

      {/* Hero Header */}
      <Hero />

      {/* Interactive Pricing Section */}
      <Pricing />

      {/* Coach Directory Section */}
      <Coaches />

      {/* Contact & Location Map Section */}
      <Contact />

      {/* Footer Details */}
      <Footer />
    </div>
  );
}

export default App;
