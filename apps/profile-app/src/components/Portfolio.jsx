import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { porfolioListLt } from "../assets/data/portfolio";
import { porfolioListEn } from "../assets/data/portfolio";
import Popup from "./Popup";

export default function Portfolio({ setSection, language }) {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectSelection = (project) => {
    setSelectedProject(project);
  };

  const handleColePopup = () => {
    setSelectedProject(null);
  };
  const [ref, inView] = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      setSection("portfolio");
    }
  }, [inView, setSection]);

  return (
    <>
      <div className="background white">
        <section className="portfolio u-section-padding" ref={ref}>
          <h2 className="heading-2">
            {language === "EN" ? "Projektai" : "Projects"}
          </h2>
          <span className="underline"></span>
          <p className="description">
            {language === "EN"
              ? "Žemiau rasite mano projektus, kviečiu panagrinėti."
              : `Below are examples of my work, please feel free to
                        explore.`}
          </p>
          <div className={`portfolio__content ${inView ? "animated" : ""}`}>
            {language === "EN"
              ? porfolioListLt?.map((p) => (
                  <div key={p.id}>
                    <figure className="portfolio__content--item">
                      <img
                        src={p.imageMain}
                        alt={p.title}
                        className="portfolio__content--image"
                      />
                      <figcaption className="portfolio__content--caption">
                        <h5 className="heading-5">{p.title}</h5>
                        <button
                          className="btn"
                          onClick={() => handleProjectSelection(p)}
                        >
                          Daugiau
                        </button>
                      </figcaption>
                    </figure>

                    {selectedProject && (
                      <Popup
                        selectedProject={selectedProject}
                        handleColePopup={handleColePopup}
                      />
                    )}
                  </div>
                ))
              : porfolioListEn?.map((p) => (
                  <div key={p.id}>
                    <figure className="portfolio__content--item">
                      <img
                        src={p.imageMain}
                        alt={p.title}
                        className="portfolio__content--image"
                      />
                      <figcaption className="portfolio__content--caption">
                        <h5 className="heading-5">{p.title}</h5>
                        <button
                          className="btn"
                          onClick={() => handleProjectSelection(p)}
                        >
                          More
                        </button>
                      </figcaption>
                    </figure>

                    {selectedProject && (
                      <Popup
                        selectedProject={selectedProject}
                        handleColePopup={handleColePopup}
                      />
                    )}
                  </div>
                ))}
          </div>
        </section>
      </div>
    </>
  );
}
