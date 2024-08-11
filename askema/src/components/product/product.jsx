import React from 'react';
import product1 from '../../Assets/product1.png';
import product2 from '../../Assets/product2.png';
import product3 from '../../Assets/product3.png';
import product4 from '../../Assets/product4.png';
import './product.css';
import { useTranslation } from 'react-i18next';

export default function WhatWeDo() {

  const {t, i18n} = useTranslation();
  return (
    <div className="whatwedo">
      <h1 className=" text-center mb-4">{t("Our product")} </h1>
      <hr />

      <div className="products row g-4">
        <div className="col">
          <div className="product-card p-3 m-1">
            <div className="product-info d-flex align-items-center">
              <img src={product1} alt="Product 1" className="product-image" />
              <div className="text-center p-2">
                <h2>{t("Clutch")}</h2>
                <p>{t("clutch")} </p>
              </div>
            </div>
          </div>
          
          <div className="product-card p-3 m-1">
            <div className="product-info d-flex align-items-center">
              <img src={product2} alt="Product 2" className="product-image" />
              <div className='text-center p-2'>
                <h2>{t("BRAKE SHOE")} </h2>
                <p>{t("brake shoe")} </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="product-card p-3 m-1">
            <div className="product-info d-flex align-items-center">
              <img src={product3} alt="Product 3" className="product-image" />
              <div className='text-center p-2'>
                <h2>{t("BRAKE PAD")} </h2>
                <p>{t("brake pad")} </p>
              </div>
            </div>
          </div>
          
          <div className="product-card p-3 m-1">
            <div className="product-info d-flex align-items-center">
              <img src={product4} alt="Product 4" className="product-image" />
              <div className='text-center p-2'>
                <h2>{t("BRAKE SHOE")} </h2>
                {/* <p>{t("brake shoe")} </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
