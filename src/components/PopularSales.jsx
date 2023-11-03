import React from "react";
import { GiShoppingBag } from "react-icons/gi";
import { FaStar } from "react-icons/fa";
import { Container, Row } from "react-bootstrap";
import "../style/PopularSales.css";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart } from "../rtk/slices/PopularSlice";
export const PopularSales = ({ popularsales: { title, items } }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  return (
    <>
      <Container style={{ paddingTop: "80px", paddingBottom: "80px" }}>
        <div className="d-flex">
          <h1 className="popular-title">{title}</h1>
        </div>
        <div className="d-grid ">
          <Row>
            {items?.map((item, i) => {
              return (
                <div className="col-lg-4 col-md-6 p-2 popular-box" key={i}>
                  <div
                    style={{
                      position: "relative",
                      backgroundImage: `linear-gradient(to bottom,${item.fromcolor}, ${item.tocolor} )`,
                      borderRadius: "1.75rem",
                      boxShadow: `${item.shadow}`,
                      padding : "5px 10px"
                    }}
                  >
                    <div
                      className="popular-text d-flex justify-content-start pt-2 p-3 pb-1"
                      style={{ flexDirection: "column" }}
                    >
                      <h1 className="text-white fs-4 p-2 d-flex justify-content-start mb-0">
                        {item.title}
                      </h1>
                      <p className="text-white fs-6 p-2 pt-0 d-flex justify-content-start mb-0">
                        {item.text}
                      </p>
                      <div className="popular-ratings ">
                        <div className=" d-flex justify-content-start gap-3 align-items-center">
                          <div>
                            <h1
                              className="p-1 rounded popular-price"
                              style={{
                                fontSize: "1rem",
                                backgroundColor: "#fffc",
                                fontWeight: "500",
                              }}
                            >
                              ${item.price}
                            </h1>
                          </div>
                          <div className="d-flex justify-content-start gap-1 align-items-center mb-2">
                            <FaStar className="text-white" />
                            <h5 className="text-white m-0">{item.rating}</h5>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-start gap-3  align-items-center pb-1 popular-buy">
                        <div className="popular-cart bg-light rounded p-1">
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
                        <button
                          className="popular-btn"
                          style={{
                            borderColor: "transparent",
                            borderRadius: "6px",
                          }}
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
                    <div className="popular-img d-flex justify-content-end">
                      <img
                        src={item.img}
                        className="mw-100 popular-imgbox"
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
