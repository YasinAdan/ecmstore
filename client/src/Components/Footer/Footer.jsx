import React from 'react';

import payment from "/images/payment.png";

import "./Footer.scss";

export default function Footer() {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel 
           soluta sint in? Dolore iste, quidem maxime sed incidunt ut esse.
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, qui!
           Lorem ipsum dolor sit amet.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem, ipsum dolor sit
             amet consectetur adipisicing elit. 
             Fugiat id quam hic nulla quaerat nobis 
             facilis nostrum minima expedita dolorem.
             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae animi 
             necessitatibus aliquam quod, qui perferendis?
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className='logo'>ECMStore</span>
          <span>© 2023 ECMStore. All rights reserved.</span>
        </div>
        <div className="right">
          <img src={payment} alt="" />
        </div>
      </div>
    </div>
  )
}
