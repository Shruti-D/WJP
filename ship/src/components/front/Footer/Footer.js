import React from 'react';
import './Footer.css';


const Footer = () => {
    return(
        <footer className="footer-distributed">
  <div className="footer-left">
    <h3>
      Ship<span>Yard</span>
    </h3>
    <p className="footer-links">
      <ul>
        <li>Fastest Delivery.</li>
        <li>Best Quality of service.</li>
        <li>Always there for our Customers.</li>
      </ul>
    </p>
    <p className="footer-company-name">ShipYard© 2015</p>
  </div>
  <div className="footer-center">
    <div>
      <i className="fa fa-map-marker" />
      <p>
        <span>Plot No-251,Near Anna Saheb Patil Garden</span> Koparkhairane,Navi
        Mumbai
      </p>
    </div>
    <div>
      <i className="fa fa-phone" />
      <p>022 23758863</p>
    </div>
    <div>
      <i className="fa fa-envelope" />
      <p>
        <a href="mailto:support@company.com">support@shipyard.com</a>
      </p>
    </div>
  </div>
  <div className="footer-right">
    <p className="footer-company-about">
      <span>About the company</span>
      Owner - Mr.xyz <br />
      Mrs.abcd <br />
      Mr.efg
    </p>
  </div>
</footer>

    );
};

export default Footer;