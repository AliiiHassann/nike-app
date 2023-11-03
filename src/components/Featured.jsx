import React from "react";
import { Container } from "react-bootstrap";
import "../style/Featured.css";

export const Featured = ({
  sneaker: { heading, title, text, btn, url, img },
}) => {
  return (
    <>
      <Container>
        <div className="d-flex justify-content-between align-items-center featured-box">
          <div
          className="d-grid featured-grid"
          >
            <h1 className="featured-heading"
            >
              {heading}
            </h1>
            <h1 className="featured-title"
            >
              {title}
            </h1>
            <p className="featured-text"
          >
            {text}
          </p>
          <a href={url} role="button" target="_blank">
            <button
              type="button"
              className="btn bg-dark text-white featured-btn"
            >
              {btn}
            </button>
          </a>
        </div>
        <div>
          <img
            src={img}
            alt=""
            className="featured-img"
          />
        </div>
      </div>
      </Container>
    </>
  );
};
