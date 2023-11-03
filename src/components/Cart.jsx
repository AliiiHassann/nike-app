import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useSelector, useDispatch } from "react-redux";
import NavbarItem from "./NavbarItem";
import { FaTrash } from "react-icons/fa";
import "../style/Cart.css";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { BiHomeAlt2 } from "react-icons/bi";
import { Link } from "react-router-dom";
import {
  clearCart,
  decreaseAmount,
  deleteItem,
  increaseAmount,
  selectCartItems,
  selectTotalAmount,
  selectTotalQTY,
  setGetTotals,
} from "../rtk/slices/PopularSlice";
import Swal from "sweetalert2";
export const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const totalAmount = useSelector(selectTotalAmount);
  const totalQTY = useSelector(selectTotalQTY);
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setGetTotals())
  },[cartItems, dispatch])
  return (
    <>
      <Container
      className="cart-container"
      >
        <div className="d-flex justify-content-between align-items-center">
          <h1 className="cart-title"
          >
            Cart Items
          </h1>
          <Link to={"/"} className="text-black cart-home">
            <BiHomeAlt2 size={"32px"} />
          </Link>
        </div>
        <hr />
        <div className="d-grid ">
          <div className="d-flex justify-content-between align-items-center">
            <Link
              to={"/"}
              className=" bg-dark text-white cart-btn"
            >
              Back To Home
            </Link>
            <button
              className="clear-cart text-white rounded"
              style={{ width: "150px", padding: "10px" }}
              onClick={() => {
                Swal.fire({
                  title: `Are You Sure?`,
                  icon: "warning",
                  showCancelButton: true,
                  showConfirmButton: true,
                  heightAuto: false,
                  backdrop: true,
                }).then((result) => {
                  if (result.isConfirmed) {
                    dispatch(clearCart(cart));
                  }
                });
              }}
            >
              Clear Cart
            </button>
          </div>
          <Row className="pt-4 pb-4">
            {cartItems.map((prod) => {
              return (
                <>
                  <div className=" col-lg-4 col-md-4 cart-box" key={prod.key}>
                    <div
                    className="cart-things"
                      style={{
                        position: "relative",
                        backgroundImage: `linear-gradient(to bottom,${prod.fromcolor}, ${prod.tocolor} )`,
                        borderRadius: "1.75rem",
                        boxShadow: `${prod.shadow}`,
                      }}
                    >
                      <div>
                      <img
                        src={prod.img}
                        alt=""
                        className="cart-img"
                      />
                      </div>
                    </div>
                  </div>
                  <div className=" col-lg-4 col-md-4 text-start">
                    <h2
                      className="cart-secondtitle"
                    >
                      {prod.title}
                    </h2>
                    <p className="cart-firsttext">
                      {prod.text}
                    </p>
                    <p className="cart-secondtext"
                    >
                      ${prod.price}
                    </p>
                  </div>
                  <div className=" col-lg-4 col-md-4 align-items-center d-flex justify-content-evenly ">
                    <div
                      className="d-flex align-items-center justify-content-center"
                      style={{ border: "1px solid #acaeb3" }}
                    >
                      <button
                        className="btn fs-2"
                        onClick={() => {
                          dispatch(decreaseAmount(prod));
                          if (prod.quantity > 1) {
                            Swal.fire({
                              timer: 1000,
                              title: `${prod.title} Decreased`,
                              icon: "success",
                              showCancelButton: false,
                              showConfirmButton: false,
                              heightAuto: false,
                              backdrop: false,
                            });
                          }
                        }}
                      >
                        <AiOutlineMinus size={"28px"} />
                      </button>
                      <h4 className="m-0">{prod.quantity}</h4>
                      <button
                        className="btn fs-2"
                        onClick={() => {
                          dispatch(increaseAmount(prod));
                          Swal.fire({
                            timer: 1000,
                            title: `${prod.title} Increased`,
                            icon: "success",
                            showCancelButton: false,
                            showConfirmButton: false,
                            heightAuto: false,
                            backdrop: false,
                          });
                        }}
                      >
                        <AiOutlinePlus size={"28px"} />
                      </button>
                    </div>
                    <div className="trash-cart" onClick={() => {
                Swal.fire({
                  title: `You Want To Delete It?`,
                  icon: "warning",
                  showCancelButton: true,
                  showConfirmButton: true,
                  heightAuto: false,
                  backdrop: true,
                }).then((result) => {
                  if (result.isConfirmed) {
                    dispatch(deleteItem(prod));
                  }
                });
              }}>
                      <FaTrash size={"32px"} />
                    </div>
                  </div>
                </>
              );
            })}
          </Row>
        </div>
          <div className="d-flex justify-content-between m-2 fixed-bottom cart-fixed">
            {totalAmount > 0 ? <><h2 className="cart-price">Total :  ${totalAmount}</h2>
            <button className="cart-checkout">Check Out</button></> : false}
          </div>
      </Container>
    </>
  );
};
