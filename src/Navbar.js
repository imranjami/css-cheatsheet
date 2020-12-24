import React, { useState } from "react"
import "./styles/Navbar.css"
import { Link, animateScroll as scroll } from "react-scroll"

function Navbar() {
  const [clicked, setClicked] = useState(false)

  return (
    <div>
      <div className="navbar__mobile">
        <div className="navbar__mobile__menuicon">
          <span
            className={clicked ? "fas fa-times" : "fas fa-bars"}
            onClick={() => setClicked(!clicked)}
          ></span>
        </div>

        <p className="navbar__mobile__title">./cheat-sheet.css</p>
      </div>
      <div className={clicked ? "navbar" : "navbar slideout"}>
        <p className="navbar__title">./cheat-sheet.css</p>
        <ul>
          <Link
            activeClass="active"
            to="background"
            spy={true}
            offset={-30}
            onClick={() => setClicked(!clicked)}
          >
            <li>background</li>
          </Link>
          <Link
            activeClass="active"
            to="border"
            spy={true}
            offset={-30}
            onClick={() => setClicked(!clicked)}
          >
            <li>border</li>
          </Link>
          <Link
            activeClass="active"
            to="boxModel"
            spy={true}
            offset={-30}
            onClick={() => setClicked(!clicked)}
          >
            <li>box model</li>
          </Link>
          <Link
            activeClass="active"
            to="font"
            spy={true}
            offset={-30}
            onClick={() => setClicked(!clicked)}
          >
            <li>font</li>
          </Link>
          <Link
            activeClass="active"
            to="text"
            spy={true}
            offset={-30}
            onClick={() => setClicked(!clicked)}
          >
            <li>text</li>
          </Link>
          <Link
            activeClass="active"
            to="table"
            spy={true}
            offset={-30}
            onClick={() => setClicked(!clicked)}
          >
            <li>table</li>
          </Link>
          <Link
            activeClass="active"
            to="listMarkers"
            spy={true}
            offset={-30}
            onClick={() => setClicked(!clicked)}
          >
            <li>list + markers</li>
          </Link>
          <Link
            activeClass="active"
            to="positioning"
            spy={true}
            offset={-30}
            onClick={() => setClicked(!clicked)}
          >
            <li>positioning</li>
          </Link>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
