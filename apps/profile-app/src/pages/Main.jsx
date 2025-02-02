import React, { useState } from "react";
import About from "../components/About";
import Contacts from "../components/Contacts";
import Home from "../components/Home";
import Navigation from "../components/Navigation";
import Portfolio from "../components/Portfolio";
import Resume from "../components/Resume";

export default function Main() {
  const [section, setSection] = useState("");

  const [language, setLanguage] = useState("EN");

  const handleClick = () => {
    if (language === "EN") {
      setLanguage("LT");
    } else {
      setLanguage("EN");
    }
  };

  return (
    <>
      <div className="container">
        <Navigation section={section} language={language} />
        <Home
          setSection={setSection}
          handleClick={handleClick}
          language={language}
        />
        <About setSection={setSection} language={language} />
        <Resume setSection={setSection} language={language} />
        <Portfolio setSection={setSection} language={language} />
        <Contacts setSection={setSection} language={language} />
      </div>
    </>
  );
}
