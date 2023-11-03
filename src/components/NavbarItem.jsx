import { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { BsSuitHeart } from "react-icons/bs";
import { BsCart } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../assets/Nike/logo.png";
import {Container} from "react-bootstrap"
import "../style/NavbarItem.css";
import { selectCartItems, selectTotalQTY, setGetTotals } from "../rtk/slices/PopularSlice";
function NavbarItem() {
  const totalQTY = useSelector(selectTotalQTY)
  const dispatch = useDispatch()
  const [navState, setNavState] = useState(false);
  const cartItems = useSelector(selectCartItems);
  const onNavScroll = () => {
    if (window.scrollY > 30) {
      setNavState(true);
    } else {
      setNavState(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", onNavScroll);
    dispatch(setGetTotals())
  }, [cartItems, dispatch]);
  return (
    <>
      <header
        className={
          !navState
            ? "  d-flex pt-4 align-items-center justify-content-center navbar-notscroll"
            : "  d-flex pt-3 pb-3 fixed-top navState align-items-center justify-content-center"
        }
      >
          <Container>
          <nav className="d-flex align-items-center justify-content-between m-auto">
          <div className="img">
            <img
              className="logo-photo"
              src={logo}
              alt=""
              style={{ width: "60px" }}
            />
          </div>
          <ul className="list-unstyled d-flex gap-4 mb-0 p-2">
            <li className="list-unstyled text-white ">
              <BsSearch style={{ fontSize: "25px" }} />
            </li>
            <li className="list-unstyled text-white">
              <BsSuitHeart style={{ fontSize: "25px" }} />
            </li>
            <li className="list-unstyled position-relative">
              <Link
                to={"cart"}
                className="p-0 m-0 border-0 bg-transparent text-white btn"
              >
                <BsCart style={{ fontSize: "25px" }} className="cart-icon" />
                <Link
                  to={"/cart"}
                  className="cart-number"
                  style={{ textDecoration: "none" }}
                >
                  <div>{totalQTY}</div>
                </Link>
              </Link>
            </li>
          </ul>
        </nav>
          </Container>
      </header>
    </>
  );
}

export default NavbarItem;
