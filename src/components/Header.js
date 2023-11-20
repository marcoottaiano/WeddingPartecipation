import React, { useEffect } from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className={`navbar`}>
      <div className="container">
        <div className="menu-icon" onClick={() => handleShowNavbar()}>
          <div className={`bar ${showNavbar && "active"}`} />
        </div>
        <div className={`nav-elements  ${showNavbar && "active"} d-flex align-items-center justify-content-center`}>
          <ul onClick={handleShowNavbar}>
            <li>
              <a href="#invite-section">Partecipazione</a>
            </li>
            <li>
              <a href="#location-section">Location</a>
            </li>
            <li>
              <a href="#accomodation-section">Pernottamento</a>
            </li>
            <li>
              <a href="#travel-section">Lista di nozze</a>
            </li>
            <li>
              <a href="">RSVP</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header