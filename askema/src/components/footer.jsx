import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faTiktok, faTelegram, faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './footer.css';
import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4 mb-md-0">
            <div className="d-flex justify-content-between p-5">
              <a href="https://www.facebook.com/behailu.seboka" className="text-secondary " target='_blank'>
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </a>
              <a href="https://twitter.com/" className="text-secondary" target='_blank'>
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
              <a href="https://www.linkedin.com/in/bethlehem-ayele-74335b106" className="text-secondary" target='_blank'>
                <FontAwesomeIcon icon={faLinkedin} size="lg"  />
              </a>
              <a href="http://t.me/BethyAskemaBrakepad" className="text-secondary" target='_blank'>
                <FontAwesomeIcon icon={faTelegram} size="lg" />
              </a>
              <a href="https://web.whatsapp.com/" className="text-secondary" target='_blank'>
                <FontAwesomeIcon icon={faWhatsapp} size="lg" />
              </a>
            </div>
          </div>

          <div className="col-md-4">
            <h6 className="text-sm">Company</h6>
            <ul className="list-unstyled">
              <li>
                <a href="/aboutus" className="">About Us</a>
              </li>
              <li>
                <a href="/products" className="">Careers</a>
              </li>
              <li>
                <a href="#" className=""></a>
              </li>
              <li>
                <a href="/founders" className="">Founders</a>
              </li>
              <li>
                <NavLink to="/admin" >
                  <a href="./admin/admin.php" className="">admin</a>
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="col-md-4">
            <h6 className="text-sm">Resources</h6>
            <ul className="list-unstyled">
              <li>
                <a href="/comment" className="">Blog</a>
              </li>
              <li>
                <a href="/products" className="">Service</a>
              </li>
              <li>
                <a href="/products" className="">Product</a>
              </li>
              <li>
                <a href="#" className=""></a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-dark mt-4 mb-4" />

        <div className="text-center d-flex justify-content-center space-10">
          <p className="text-sm ">
            Copyright © 2024  |
          </p>
          <p className="text-sm">
           | <a href="https://www.linkedin.com/in/haile-adugna-hordofa" className="">ByteSpark Lab</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
