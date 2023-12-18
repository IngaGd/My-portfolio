import porfolioList from '../assets/data/portfolio';

export default function Portfolio({ setVisibility }) {
    const list = porfolioList;

    return (
        <>
            <section className="portfolio" id="section-portfolio">
                <h2 className="heading-2">Portfolio</h2>
                <span className="underline"></span>
                <p className="description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quibusdam, voluptate atque enim ut, vitae sit voluptatum aut
                    nam vero alias qui debitis facere reprehenderit minus magni
                    assumenda quia id fuga.
                </p>
                <div className="portfolio__content">
                    {list?.map((p) => (
                        <figure className="portfolio__content--item" key={p.id}>
                            <img
                                src={p.image}
                                alt={p.title}
                                className="portfolio__content--image"
                            />
                            <figcaption className="portfolio__content--caption">
                                <h5 className="heading-5">{p.title}</h5>
                                {/* <a href="#popup" className="btn caption">
                                More about
                            </a> */}
                                <button
                                    onClick={() =>
                                        setVisibility('popup visible')
                                    }
                                >
                                    More about
                                </button>
                            </figcaption>
                            {/* <p className="description">{p.description}</p>
                        <a href={p.link}>GitHub link</a> */}
                        </figure>
                    ))}
                </div>
            </section>
        </>
    );
}
