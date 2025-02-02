import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { resumeListLt } from "../assets/data/resume";
import { resumeListEn } from "../assets/data/resume";

export default function Resume({ setSection, language }) {
  const [ref, inView] = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      setSection("resume");
    }
  }, [inView, setSection]);

  return (
    <div className="background grey">
      <div className="resume u-section-padding" ref={ref}>
        <h2 className="heading-2">
          {language === "EN" ? "Reziumė" : "Resume"}
        </h2>
        <span className="underline"></span>
        {language === "EN" ? (
          <p className="description">
            Jaunesnioji interneto svetainių programuotoja, specializuojuosi
            SASS, React, NodeJS ir MySQL, ypatingą dėmesį skiriant front-end
            funkcionalumui ir mikro paslaugoms.
          </p>
        ) : (
          <p className="description">
            Junior Full-stack web developer specialising in SASS, React, NodeJS
            and MySQL. Executed and contributed to the full-stack web
            development projects, with an emphasis on front-end features and
            micro-services. Currently freelancing, from previous life has strong
            experiance in management.
          </p>
        )}
        <div className="resume__content">
          {language === "EN"
            ? resumeListLt?.map((r, index) => (
                <div className={`resume__section--${index + 1}`} key={r.id}>
                  <h3 className="heading-3">{r.sectionTitle}</h3>
                  {r.content?.map((c, index) => (
                    <div
                      key={index}
                      className={`resume__text ${inView ? "animated" : ""}`}
                    >
                      <div className="resume__text--line-left"></div>
                      <div className="resume__text--column-right">
                        <div className="resume__text--title">
                          <span></span>
                          <h4 className="heading-4">{c.title}</h4>
                        </div>
                        <p className="resume__text--description">
                          {c.description}
                        </p>
                        <p className="resume__text--date">{c.date}</p>
                        {c.list?.map((l, index) => (
                          <ul className="resume__text--list" key={index}>
                            <li className="skills">{l.item}</li>
                          </ul>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ))
            : resumeListEn?.map((r, index) => (
                <div className={`resume__section--${index + 1}`} key={r.id}>
                  <h3 className="heading-3">{r.sectionTitle}</h3>
                  {r.content?.map((c, index) => (
                    <div
                      key={index}
                      className={`resume__text ${inView ? "animated" : ""}`}
                    >
                      <div className="resume__text--line-left"></div>
                      <div className="resume__text--column-right">
                        <div className="resume__text--title">
                          <span></span>
                          <h4 className="heading-4">{c.title}</h4>
                        </div>
                        <p className="resume__text--description">
                          {c.description}
                        </p>
                        <p className="resume__text--date">{c.date}</p>
                        {c.list?.map((l, index) => (
                          <ul className="resume__text--list" key={index}>
                            <li className="skills">{l.item}</li>
                          </ul>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}
