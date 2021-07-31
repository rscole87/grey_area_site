import React, { useState } from "react";
import Header from "./HeaderComponent";
import Services from "./ServicesComponent";
import About from "./AboutComponent";
import CallToAction from "./CallToActionComponent";
import Footer from "./FooterComponent";
import ContactModal from "./ContactComponent";

const Main = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <Header isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} toggleModal={toggleModal} />
      <Services />
      <About isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} toggleModal={toggleModal} />
      <CallToAction isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} toggleModal={toggleModal} />
      <Footer />
    </>
  );
};

export default Main;
