import React from 'react'
import './Merx.css'
import { Carousel } from "antd";

const contentStyle: React.CSSProperties = {
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

export default function Merx() {
  return (
    <div className='carouselStyle'>
      <Carousel arrows infinite={true} autoplay = {true} autoplaySpeed={10000} >
        <img src="/media/merx1.png" alt="La Fulla" style={{zIndex: '-1', height: '60rem' }} />
        <img src="/media/merx2.jpeg" alt="La Fulla" style={{zIndex: '-1', height: '60rem' }} />
    </Carousel>
    <br />
    </div>
  )
}
