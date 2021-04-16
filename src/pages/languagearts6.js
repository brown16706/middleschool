import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import LA6 from "../components/la6"
import ScrollToTop from "react-scroll-to-top"
import LazyLoad from 'react-lazyload';

const LanguageArts6 = ({ data }) => {

  return (

    <Layout>
      <SEO
        title="6th Grade Language Arts"
        description="Daily assignments for 6th grade language arts"
        image="/logo.png"
        pathname="/languagearts6"
      />

      <ScrollToTop smooth color="#78CCC7"/>

      <section className="block-circles">
        <div className="subjects-circle circle1"
             style={{backgroundColor: '#80d7da', transform: "translate3d(0px, 0px, 0px) scale(0.9921, 1)", opacity: "0.9881" }}/>
        <div className="subjects-circle circle2" style={{backgroundColor: '#80d7da', transform: "translate(0px, 0px)", opacity: 1 }}/>
        <div className="hero-wrapper pbn hero">
          <h1 className="hero intro in-left">Language Arts</h1>
          <div className="hero info-block info-block-line in-left"
               style={{ marginBottom: "4em"}}>
            <Link to="/sixth" className='gradeLink'>
              <h2 className="hero in-left">6th Grade</h2></Link>
          </div>
        </div>
      </section>

      <LazyLoad>
      <LA6/>
      </LazyLoad>

    </Layout>
  )
}

export default LanguageArts6