import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import {
  FaLocationDot,
  FaDiscord,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa6";
// import Form from './Form';

export default function Contacts({ setSection, language }) {
  const [ref, inView] = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      setSection("contacts");
    }
  }, [inView, setSection]);

  return (
    <div className="background grey">
      <div className="contacts u-section-padding" ref={ref}>
        <h2 className="heading-2">
          {" "}
          {language === "EN" ? "Kontaktai" : "Contacts"}
        </h2>
        <span className="underline"></span>
        <p className="description">
          {language === "EN"
            ? "Jei domina bendradarbiavimas, susisiekite kontaktais žemiau. "
            : "If you are interested in cooperation, please contact me. "}
        </p>
        <div className={`content ${inView ? "animated" : ""}`}>
          <div className="details">
            <div className="text">
              <div className="contact-info">
                <span className="icon">
                  <FaLocationDot className="contact-info__icon" />
                </span>

                <div className="contact-info__texts">
                  <p className="contact-info__title">
                    {language === "EN" ? "Vieta: " : "Location"}
                  </p>
                  <p>Vilnius, Lietuva</p>
                </div>
              </div>
              <div className="contact-info">
                <a
                  href="https://www.linkedin.com/in/inga-gudaite/"
                  className="icon"
                >
                  <FaLinkedin className="contact-info__icon" />
                </a>
                <div className="contact-info__texts">
                  <p className="contact-info__title">LinkedIn: </p>
                  <a href="https://www.linkedin.com/in/inga-gudaite/">
                    linkedin.com/in/inga-gudaite
                  </a>
                </div>
              </div>
              <div className="contact-info">
                <a href="https://discord.com/users/inga1143" className="icon">
                  <FaDiscord className="contact-info__icon" />
                </a>
                <div className="contact-info__texts">
                  <p className="contact-info__title">Discord: </p>
                  <a href="https://discord.com/users/inga1143">
                    discord.com/users/inga1143
                  </a>
                </div>
              </div>
              <div className="contact-info">
                <a href="https://github.com/IngaGd" className="icon">
                  <FaGithub className="contact-info__icon" />
                </a>
                <div className="contact-info__texts">
                  <p className="contact-info__title">GitHub: </p>
                  <a href="https://github.com/IngaGd">github.com/IngaGd</a>
                </div>
              </div>
            </div>
            {/* <div className="contacts__map-box">
                            <iframe
                                src={mapSrc}
                                frameBorder="0"
                                scrolling="no"
                                title="Vilnius City Municipality"
                                allowFullScreen
                                className="map"
                            ></iframe>
                        </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
