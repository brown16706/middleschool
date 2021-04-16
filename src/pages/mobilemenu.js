import React from "react"
import { Link } from "gatsby"
import "../components/navigation.css"

// import { Link } from "react-router-dom";

const MobileMenu = ({ data }) => {

  return (
    <div className="gradanimate full">
      <ul className="mobileList">
        <li data-sal="slide-up"
            data-sal-duration="400" data-sal-easing="ease">
          <Link to="/">home</Link></li>
        <li className="mobileList" data-sal="slide-up"
            data-sal-duration="400" data-sal-easing="ease">
          <Link to="/cassatt">cassatt</Link>
        </li>
      </ul>
    </div>
  )
}

export default MobileMenu