import React from "react";
import image from "../assets/images/profile/profile-7.png";
import { FaChevronRight } from "react-icons/fa6";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function About({ setSection, language }) {
  const [ref, inView] = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      setSection("about");
    }
  }, [inView, setSection]);

  return (
    <div className="background white">
      <div className="about u-section-padding" ref={ref}>
        {language === "EN" ? (
          <h2 className="heading-2">Apie</h2>
        ) : (
          <h2 className="heading-2">About</h2>
        )}
        <span className="underline"></span>
        {language === "EN" ? (
          <p className="description">
            Tiksliujų mokslų išsilavinimas suformavo mano problemų sprendimo
            strategiją, kurioje susilieja meilė kūrybiškumui ir atidumui. Pilnai
            išnarsčius praktiškai visas tiekimo grandies srytis, genama žinių
            bei najovių alkio nusprendžiau pasukti į man naują IT pasaulį ir
            tapti programuotoja.
          </p>
        ) : (
          <p className="description">
            My background in formal sciences has shaped my approach, blending a
            love for detail with creative thinking. Starting out in the supply
            chain world, I've taken a big leap to become a programmer, driven by
            a deep love for learning and growing.
          </p>
        )}
        <div className="about__content">
          <div className={`about__content--image ${inView ? "animated" : ""}`}>
            <img src={image} alt="Profile" />
          </div>
          <div
            className={`about__content--description ${
              inView ? "animated" : ""
            }`}
          >
            <h2 className="heading-3">
              {language === "EN"
                ? "Full-Stack programuotoja"
                : "Full-Stack Developer"}
            </h2>
            <p>
              {language === "EN"
                ? `Itin džiugina darbas su SASS ir React - smagu matyti, kaip kodas
              transformuojasi į vizualizaciją. Taip pat turiu patirites
              naudojant backend technologijas (NodeJS) ir duomenų bazes
              (MariaDB), bei praplėčiau žinias talpinant puslapius į VPS.`
                : `Right now, I'm into SASS and React - love seeing my
                code come to life visually. I've also got a solid
                grasp on the backend with technologies like Node.js
                and MariaDB, and more - I have expanded my skills
                for my freelancing work, getting hands-on with
                DevOps.`}
            </p>
            <div className="personal-info">
              <ul className="personal-info--list-left">
                <li className="list-item">
                  <span>
                    <FaChevronRight />
                  </span>
                  <p>
                    <b>{language === "EN" ? "Miestas" : "Town"}: </b> Vilnius
                  </p>
                </li>
                <li className="list-item">
                  <span>
                    <FaChevronRight />
                  </span>
                  <p>
                    <b>{language === "EN" ? "Laipnsis" : "Degree"}: </b>
                    {language === "EN" ? "Magistras" : `Master's`}
                  </p>
                </li>
              </ul>
              <ul className="personal-info--list-right">
                <li className="list-item">
                  <span>
                    <FaChevronRight />
                  </span>
                  <p>
                    <b>
                      {language === "EN" ? "Pilnas etatas:" : "Full time"}:{" "}
                    </b>
                    {language === "EN" ? "Aktualu" : "Available"}
                  </p>
                </li>
                <li className="list-item">
                  <span>
                    <FaChevronRight />
                  </span>
                  <p>
                    <b>
                      {language === "EN"
                        ? "Laisvai samdomas darbas: "
                        : "Freelance: "}
                    </b>
                    {language === "EN" ? "Aktualu" : "Available"}
                  </p>
                </li>
              </ul>
            </div>
            <div className="text">
              {language === "EN"
                ? `Laisvu laiku protą maitinu domėdamasi fizika, sąmonės
              tyrinėjimais, kūną - sportu, sielą - piešimu`
                : `Even when I'm not programming, I'm diving into
                physics, exploring human consciousness - my journey
                is about never settling, always curious.
                `}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
