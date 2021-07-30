import { useEffect } from "react";
import "font-awesome/css/font-awesome.css";
import "./styles/App.css";
import Header from "./components/HeaderComponent";
import Services from "./components/ServicesComponent";
import About from "./components/AboutComponent";
import CallToAction from "./components/CallToActionComponent";
import Footer from "./components/FooterComponent";
import ContactModal from "./components/ContactComponent";
import { BrowserRouter } from "react-router-dom";
import AOS from 'aos'
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Services />
        <About />
        <CallToAction />
        <ContactModal />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
