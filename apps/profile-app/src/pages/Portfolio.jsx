import React from 'react';
import porfolioList from '../assets/data/portfolio';

export default function Portfolio() {
    const list = porfolioList;
    return (
        <div className="portfolio">
            <h2 className="heading-2">Portfolio</h2>
            <p className="portfolio__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam, voluptate atque enim ut, vitae sit voluptatum aut nam
                vero alias qui debitis facere reprehenderit minus magni
                assumenda quia id fuga.
            </p>
            <div className="portfolio__content">
                {list?.map((p) => (
                    <div className="portfolio__content--item" key={p.id}>
                        {/* <h5 className="heading-5">{p.title}</h5> */}
                        <figure className="image">
                            <img src={p.image} alt={p.title} />
                        </figure>
                        {/* <p className="description">{p.description}</p>
                        <a href={p.link}>GitHub link</a> */}
                    </div>
                ))}
            </div>
        </div>
    );
}
