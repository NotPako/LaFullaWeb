'use client';
import React, { useState } from 'react';
import './Merx.css';
import { Carousel } from 'antd';

interface Product {
  image: string;
  name: string;
  price: number;
}

// Una entrada por foto del carrusel, en el orden en que se muestran
const PRODUCTS: Product[] = [
  { image: 'merxan1', name: 'Samarreta Potser No Hauria Passat', price: 20 },
  { image: 'merxan2', name: 'Samarreta Potser No Hauria Passat', price: 20 },
  { image: 'merxan3', name: 'Samarreta Potser No Hauria Passat', price: 20 },
  { image: 'merxan4', name: 'Samarreta Nucs de Vidre', price: 15 },
  { image: 'merxan5', name: 'Samarreta Ment En Guerra', price: 15 },
  { image: 'merxan6', name: 'Samarreta Ment En Guerra', price: 15 },
];

export default function Merx() {
  const [current, setCurrent] = useState(0);
  const product = PRODUCTS[current];

  return (
    <section className="merxStyle">
      <div className="merx-overlay" />
      <div className="merx-inner">
        <div className="merx-header">
          <h2 className="merx-title">Merxandatge</h2>
          <p className="merx-subtitle">Porta La Fulla amb tu</p>
        </div>

        <div className="merx-content">
          <div className="carouselContainer">
            <Carousel autoplay arrows beforeChange={(_, next) => setCurrent(next)}>
              {PRODUCTS.map(({ image, name }) => (
                <div key={image} className="carousel-slide-merx">
                  <img
                    src={`/media/${image}.jpeg`}
                    alt={name}
                    className="carouselImage"
                  />
                </div>
              ))}
            </Carousel>
          </div>

          {/* La key fuerza el remontaje para que la animación se repita en cada cambio */}
          <div key={current} className="merx-product">
            <span className="merx-product-name">{product.name}</span>
            <span className="merx-product-price">{product.price}€</span>
          </div>

          <p className="merx-availability">Disponible als nostres concerts</p>
        </div>
      </div>
    </section>
  );
}
