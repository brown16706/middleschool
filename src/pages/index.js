import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import style from "./index.module.css"
import {Link} from "gatsby"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="At Home Middle School"
        description="Middle school curriculum and lesson plans that are easy to follow."
        image="/logo.png"
        pathname="/"
        // Boolean indicating whether this is an article:
        // article
      />

      <div className={style.bubbles}>
        <p className={style.mainTitle} data-sal="slide-up" data-sal-duration="600"
           data-sal-easing="ease">Easy to follow daily lesson plans.</p>
        <div className={style.content}>
          <div className={style.giantText} data-sal="slide-left"
               data-sal-duration="800" data-sal-easing="ease"> <Link to="/sixth">6th Grade</Link></div>
          <div className={style.giantText + " " + style.seven} data-sal="slide-right"
               data-sal-duration="1000" data-sal-easing="ease"> <Link to="/seventh">7th Grade</Link></div>
          <div className={style.giantText + " " + style.eight} data-sal="slide-right"
               data-sal-duration="1200" data-sal-easing="ease"> <Link to="/eighth">8th Grade</Link></div>
        </div>
      </div>

    </Layout>
  )
}
export default IndexPage
