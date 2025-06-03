import React from "react";
import { Carousel } from "antd";
import "./GigCarrousel.css";
import Gig from "../Gig/Gig";

const gigs = [
  { titulo: "XODOS", fecha: "10 de Abril, 2025", lugar: "Aplec del Penyagolosa", url: "" },
  { titulo: "AGRES", fecha: "15 de Juny, 2025", lugar: "Pomarock", url: "https://www.notikumi.com/channel/pomarock/2025/8/9/pomarock-xi-edicio-1?fbclid=PAZXh0bgNhZW0CMTEAAae5FpuuR3CurTabuYqafQMxDHiVUNye2ePiR7oprglnuG9V_RafHbONjEyk1w_aem_FA-YyTxNyroCMTL0__xefg"  },
  { titulo: "TIBI", fecha: "17 de Septembre, 2025", lugar: "TibiFest", url: ""  },
];

const GigCarrousel: React.FC = () => {

    const onGigClick = (url: string) => {
        if(url) {
            window.open(url, "_blank");
        }
    }
  return (
    <div className="carousel-container">
      <h2 className="carousel-title">Pròxims concerts</h2>
      <Carousel autoplay={{dotDuration: true}} dots arrows>
        {gigs.map((gig, index) => (
          <div key={index} className="carousel-slide">
            <Gig {...gig} onClick={onGigClick}/>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default GigCarrousel;
