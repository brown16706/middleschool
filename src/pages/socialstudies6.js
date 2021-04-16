import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SS6 from "../components/ss6"
import ScrollToTop from "react-scroll-to-top"
import LazyLoad from "react-lazyload"

const SocialStudies6 = ({ data }) => {

  return (

    <Layout>
      <SEO
        title="6th Grade Social Studies"
        description="Daily assignments for 6th grade social studies"
        image="/logo.png"
        pathname="/socialstudies6"
      />

      <ScrollToTop smooth color="#78CCC7"/>

        <section className="block-circles">
        <div className="subjects-circle circle1"
             style={{backgroundColor: '#64ccbc', transform: "translate3d(0px, 0px, 0px) scale(0.9921, 1)", opacity: "0.9881" }}/>
        <div className="subjects-circle circle2" style={{backgroundColor: '#64ccbc', transform: "translate(0px, 0px)", opacity: 1 }}/>
        <div className="hero-wrapper pbn hero">
          <h1 className="hero intro in-left">Social Studies</h1>
          <div className="hero info-block info-block-line in-left"
               style={{ marginBottom: "4em"}}>
            <Link to="/sixth" className='gradeLink'>
              <h2 className="hero in-left">6th Grade</h2></Link>
          </div>
        </div>
      </section>
      <LazyLoad>
        <SS6/>
      </LazyLoad>

    </Layout>
  )
}

export default SocialStudies6