import React from "react";
import { Container } from "react-bootstrap";
import "../style/Highlights.css"
export const Highlights = ({
  highlights: { heading, title, text, btn, url, img },
}) => {
  return (
    <>
      <Container>
        <div className="d-flex justify-content-between align-items-center highlight-box">
        <div>
          <img
            src={img}
            alt="No Photo"
            className="highlight-img"
          />
        </div>
        <div
          className="d-grid highlights-textbox"
        >
          <h1 className="highlights-heading"
          >
            {heading}
          </h1>
          <h1 className="highlights-title"
          >
            {title}
          </h1>
          <p className="highlights-text"
          >
            {text}
          </p>
          <a href={url} role="button" target="_blank">
            <button
              type="button"
              className="btn bg-dark text-white highlight-btn"
            >
              {btn}
            </button>
          </a>
        </div>
        </div>
      </Container>
    </>
  );
};
