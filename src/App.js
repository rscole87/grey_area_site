import { useEffect } from "react";
import "font-awesome/css/font-awesome.css";
import "./styles/App.css";
import Main from "./components/MainComponent";
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
        <Main />
      </BrowserRouter>
    </>
  );
}

export default App;
