import React from "react";
import { Container, Row } from "react-bootstrap";
import { GiShoppingBag } from "react-icons/gi";
import { FaStar } from "react-icons/fa";
import Swal from "sweetalert2";
import "../style/TopRated.css";
import { useDispatch } from "react-redux";
import { AddToCart } from "../rtk/slices/PopularSlice";
export const TopRated = ({ topratedsales: { title, items } }) => {
  const dispatch = useDispatch();
  return (
    <>
      <Container style={{ paddingTop: "80px", paddingBottom: "80px" }}>
        <h1 className="toprated-title">
          {title}
        </h1>
        <div className="d-grid pt-4 align-items-center">
          <Row>
            {items.map((item) => {
              return (
                <div className="col-lg-3 col-md-4 col-sm-6 pb-3 toprated-box position-relative">
                  <div
                    className="top-main"
                    style={{
                      boxShadow: `${item.shadow}`,
                      borderRadius: "0.75rem",
                      backgroundImage: `linear-gradient(to bottom , ${item.fromcolor}, ${item.tocolor})`,
                    }}
                  >
                    <div className="d-grid justify-content-center ">
                      <h3
                        className="top-filter top-title"
                      >
                        {item.title}
                      </h3>
                      <p
                        className="top-filter"
                      >
                        {item.text}
                      </p>
                      <div className=" gap-3 d-flex justify-content-center align-items-center pb-2">
                        <h5
                          className="m-0 toprated-price p-1 rounded"
                        >
                          ${item.price}
                        </h5>
                        <div className="d-flex align-items-center gap-1">
                          <FaStar className="m-0 text-white" />
                          <h5 className="text-white m-0">{item.rating}</h5>
                        </div>
                      </div>
                      <div className="d-flex justify-content-center gap-3 pb-1">
                        <div className="top-cart rounded p-1">
                          <GiShoppingBag
                            size={"24px"}
                            onClick={() => {
                              dispatch(AddToCart(item));
                              Swal.fire({
                                timer: 1000,
                                title: `You Added ${item.title}`,
                                icon: "success",
                                showCancelButton: false,
                                showConfirmButton: false,
                                heightAuto: false,
                                backdrop: false,
                              });
                            }}
                          />
                        </div>
                        <div className="top-btn">
                          <button className="toprated-btn"
                            onClick={() => {
                              dispatch(AddToCart(item));
                              Swal.fire({
                                timer: 1000,
                                title: `You Added ${item.title}`,
                                icon: "success",
                                showCancelButton: false,
                                showConfirmButton: false,
                                heightAuto: false,
                                backdrop: false,
                              });
                            }}
                          >
                            {item.btn}
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center top-imgs pt-1">
                      <img
                      className="toprated-img"
                        src={item.img}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </Row>
        </div>
      </Container>
    </>
  );
};
