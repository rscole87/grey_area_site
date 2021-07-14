import "font-awesome/css/font-awesome.css";
import "./styles/App.css";
import Header from "./components/HeaderComponent";
import Services from "./components/ServicesComponent";
import About from "./components/AboutComponent";
import CallToAction from "./components/CallToActionComponent";
import Footer from "./components/FooterComponent";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Services />
        <About />
        <CallToAction />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
