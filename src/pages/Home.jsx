import React from "react";
import { Helmet } from "react-helmet";
import Hero from "../components/Hero/Hero";
import ServiceCard from "../components/ServiceCard/ServiceCard";
import Counter from "../components/Counter/Counter";
import CustomerRev from "../components/CustomerRev/CustomerRev";
import Contact from "../components/Header/Contact";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>PCS Global Pvt. Ltd. — Digital, Cloud and Software Solutions</title>
        <meta
          name="description"
          content="PCS Global builds enterprise software, mobile apps, cloud and data solutions that accelerate growth. Explore services, portfolio, and careers."
        />
        <meta property="og:title" content="PCS Global Pvt. Ltd." />
        <meta
          property="og:description"
          content="PCS Global builds enterprise software, mobile apps, cloud and data solutions that accelerate growth."
        />
      </Helmet>
      <section id="home" className="section scroll-mt-28"><Hero /></section>
      <section id="services" className="section scroll-mt-28"><ServiceCard /></section>
      <section id="about" className="section scroll-mt-28"><Counter /></section>
      <section id="projects" className="section scroll-mt-28"><CustomerRev /></section>
      <section id="contact" className="section scroll-mt-28"><Contact /></section>
    </div>
  )
}

export default Home
