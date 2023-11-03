import React from "react";
import {
  footerAPI,
  heroapi,
  highlight,
  popularsales,
  sneaker,
  story,
  topratesales,
} from "../data/data";
import { Featured } from "./Featured";
import { Footer } from "./Footer";
import { Highlights } from "./Highlights";
import { Main } from "./Main";
import NavbarItem from "./NavbarItem";
import { PopularSales } from "./PopularSales";
import { Stories } from "./Stories";
import { TopRated } from "./TopRated";

export const AllComponent = () => {
  return (
    <>
      <NavbarItem />
      <Main heroapi={heroapi} />
      <PopularSales popularsales={popularsales} />
      <Highlights highlights={highlight} />
      <TopRated topratedsales={topratesales} />
      <Featured sneaker={sneaker} />
      <Stories story={story} />
      <Footer footerAPI={footerAPI} />
    </>
  );
};
