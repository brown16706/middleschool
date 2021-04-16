import React from "react"

import style from "./footer.module.css"

const Footer = ({ }) => (
  <footer className={style.colophon}>
    SimpleDZN © {new Date().getFullYear()}
  </footer>
)

export default Footer
