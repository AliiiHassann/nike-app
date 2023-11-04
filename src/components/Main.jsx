import React from "react";
import "../style/Main.css";
export const Main = ({
  heroapi: { title, subtitle, img, btntext, videos, sociallinks },
}) => {
  return (
    <>
      <div className="bg-theme clip-path opacity-100 w-auto main-clip-thing"></div>
      <div
        className="container"
        style={{
          zIndex: "20",
          opacity: "1",
          position: "relative",
          paddingTop: "140px",
          paddingBottom: "50px",
        }}
      >
        <div className="d-grid align-items-center photos-landing m-1">
          <div className="row">
            <div className="col-2 col-md-2 col-sm-2">
              {videos.map((vid) => {
                return (
                  <div className="p-1">
                    <img className="vid-img" src={vid.imgsrc} alt="#"></img>
                  </div>
                );
              })}
            </div>
            <div className="col-8 col-md-8 col-sm-8">
              <h1 className="text-white fw-bold font-sizing ">{title}</h1>
              <h1 className="text-white pb-3 fw-bold font-sizing">
                {subtitle}
              </h1>
              <button
                className="btn btn-light landing-btn"
                style={{ borderRadius: "6px", borderColor: "transparent" }}
              >
                {btntext}
              </button>
              <div className="pt-5 main-imgdiv">
                <img className=" transition-theme main-img" src={img} alt="" />
              </div>
            </div>
            <div className="col-2 col-md-2 col-sm-2 ">
              {sociallinks.map((img) => {
                return (
                  <div className="socials">
                    <img
                      className=""
                      src={img.icon}
                      alt=""
                      style={{
                        width: "30px",
                        margin: "10px",
                        cursor: "pointer",
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
