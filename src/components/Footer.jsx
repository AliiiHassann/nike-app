import React from 'react'
import { Container, Row } from 'react-bootstrap'
import "../style/Footer.css"
export const Footer = ({footerAPI : {titles, links}}) => {
  return (
    <>
    <footer className="footer">
      <Container className="p-5 pb-0">
        <div className='d-grid w-100 align-items-center'>
          <Row>
              {titles.map((val, i) => {
                return (
                  <div className='col'>
                    <div key={i} className="d-grid align-items-center">
                      <h1 className="footer-title">{val.title}</h1>
                    </div>
                  </div>
                )
              })}
                </Row>
              <Row>
              {links.map((link, i) => {
                return (
                  <div className='col align-items-center'>
                    <ul key={i} className="d-grid gap-1 align-items-center p-0">
                      {link.map((val, i) => {
                        return <li className="footer-link" key={i}>{val.link}</li>
                      })}
                    </ul>
                  </div>
                )
              })}
              </Row>
        </div>
      </Container>
    </footer>
    </>
  )
}
