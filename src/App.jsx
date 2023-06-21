/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Paragee Sharma",
  title: "Cybersecurity & Networking Enthusiast 🌐",
  email: "paragee.rpr@gmail.com",
  gitHub: "https://github.com/ParageeSharma",
  instagram: "https://instagram.com/paragee_s_?igshid=MzNlNGNkZWQ4Mg==",
  linkedIn: "https://www.linkedin.com/in/paragee-sharma-976968202",
  medium: "",
  twitter: "https://twitter.com/Paragee23?t=kjDpV7RgNaG2nlp987rK6A&s=09",
  youTube: "https://youtube.com/@parageesharma386",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
