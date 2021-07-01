import React from "react"
import { Link } from "gatsby"
import style from "./footer.module.css"

const Footer = ({ }) => (
  <footer className={style.colophon}>
    SimpleDzn © {new Date().getFullYear()}
    <Link style={{paddingLeft: "4em", color: "#9e9d9d"}} to="/termsofuse">Terms of Use </Link> 
  </footer>
)

export default Footer
