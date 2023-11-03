import React from 'react'
import {Container, Row} from "react-bootstrap"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FaHashtag } from "react-icons/fa";
import { truncate } from "lodash";
import "../style/Stories.css"
export const Stories = ({story : {title, news}}) => {
  const splideOptions = {
    perPage: 4,
    perMove: 1,
    type: 'loop',
    rewind: true,
    keyboard: 'global',
    gap: '1rem',
    pagination: false,
    padding: '2rem',
    breakpoints: {
      1200: { perPage: 3},
      991: { perPage: 2.3},
      768: { perPage: 2},
      500: { perPage: 1.3},
      425: { perPage: 1},
    },
  }
  return (
  <Container style={{paddingTop : "100px"}}>
    <h1 className="stories-bigtitle">
      {title}
    </h1>
    <div className='mt-2 mb-5'>
    <Splide options={splideOptions}>
      {news.map((val, i) => {
        return (
        <SplideSlide key={i}>
          <div className="d-grid gap-4 position-relative">
            <div className='d-flex justify-content-center align-items-center'>
              <img src={val.img} alt="" style={{height : "auto", width : "100%", objectFit :"cover", borderRadius : "1.75rem"}}/>
            </div>
            <div className="d-flex justify-content-between w-100">
              <div className="d-flex align-items-center gap-1">
                <AiFillHeart style={{color : "#ef4444"}} size={"20px"}/>
                <span className="fw-semibold stories-span" >{val.like}</span>
              </div>
              <div className="d-flex align-items-center gap-1">
                <AiOutlineClockCircle size={"20px"}/>
                <span className="fw-semibold stories-span">{val.time}</span>
              </div>
              <div className="d-flex align-items-center gap-1">
              <FaHashtag size={"20px"} style={{color : "#3d74ed"}}/>
              <span className="fw-semibold stories-span" style={{ color : "#3d74ed"}}>{val.by}</span>
              </div>
            </div>
            <div className="d-grid stories-text px-2">
              <h1 className="stories-title ">{val.title}</h1>
              <p className="stories-paragraph">{truncate(val.text, {length :175})}</p>
            </div>
            <div className="d-flex justify-content-center px-2 w-100 align-items-center">
              <a href={val.url} target="_blank" role={"button"} className="w-100 stories-btn">{val.btn}</a>
            </div>
          </div>
        </SplideSlide>
        )
      })}
    </Splide>
    </div>
    </Container>
  )
}
