import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/styles.css"
import ScrollToTop from "react-scroll-to-top"

import loadable from "@loadable/component"

const SpanishComponent = loadable(() => import("../components/spanishComponent"))

const Spanish = ({ data }) => {

  return (

    <Layout>
      <SEO
        title="Spanish"
        description="Daily assignments for Spanish"
        image="/logo.png"
        pathname="/spanish"
      />

      <ScrollToTop smooth color="#78CCC7"/>

      <section className="block-circles">
        <div className="subjects-circle circle1"
             style={{
               backgroundColor: "#fd4f5f",
               transform: "translate3d(0px, 0px, 0px) scale(0.9921, 1)",
               opacity: "0.9881"
             }}/>
        <div className="subjects-circle circle2"
             style={{ backgroundColor: "#fd4f5f", transform: "translate(0px, 0px)", opacity: 1 }}/>
        <div className="hero-wrapper pbn hero">
          <h1 className="hero intro in-left">Spanish</h1>
          <div className="hero info-block info-block-line in-left"
               style={{ marginBottom: "4em" }}>
            <Link to="/eighth" className='gradeLink'>
              <h2 className="hero in-left">8th Grade</h2></Link>
          </div>
        </div>
      </section>
      <SpanishComponent/>

    </Layout>
  )
}
export default Spanish