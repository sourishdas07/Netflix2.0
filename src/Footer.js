import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer_body">
      <Link to="/profile">
        <div className="footer_links">
          <h4>Profile</h4>
        </div>
      </Link>

      <Link to="/">
        <h4>Pricing</h4>
      </Link>

      <div className="personal">
        <h6>@Sourish Das 2023</h6>
      </div>
    </div>
  );
}

export default Footer
