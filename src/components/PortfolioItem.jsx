import React from "react";

const PortfolioItem = ({ img, title, url }) => {
  return (
    <div className="portfolio__item">
      {url ? (
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="portfolio__link"
          aria-label={`Open ${title} in a new tab`}
        >
          <img src={img} alt={title} className="portfolio__img" />
          <div className="portfolio__hover">
            <h3 className="portfolio__title">{title}</h3>
            <span className="portfolio__action">View project</span>
          </div>
        </a>
      ) : (
        <>
          <img src={img} alt={title} className="portfolio__img" />
          <div className="portfolio__hover">
            <h3 className="portfolio__title">{title}</h3>
            <span className="portfolio__action">Coming soon</span>
          </div>
        </>
      )}
    </div>
  );
};

export default PortfolioItem;
