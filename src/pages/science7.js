import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Sci7 from "../components/sci7"
import ScrollToTop from "react-scroll-to-top"
import LazyLoad from 'react-lazyload'

const Science7 = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="7th Grade Science"
        description="Daily assignments for 7th grade science"
        image="/logo.png"
        pathname="/science7"
      />

      <ScrollToTop smooth color="#78CCC7"/>

      <section className="block-circles">
        <div className="subjects-circle circle1"
             style={{backgroundColor: '#ffa298', transform: "translate3d(0px, 0px, 0px) scale(0.9921, 1)", opacity: "0.9881" }}/>
        <div className="subjects-circle circle2" style={{backgroundColor: '#ffa298', transform: "translate(0px, 0px)", opacity: 1 }}/>
        <div className="hero-wrapper pbn hero">
          <h1 className="hero intro in-left">Earth Science</h1>
          <div className="hero info-block info-block-line in-left"
               style={{ marginBottom: "4em"}}>
            <Link to="/seventh" className='gradeLink'>
              <h2 className="hero in-left">7th Grade</h2></Link>
          </div>
        </div>
      </section>
      <LazyLoad>
        <Sci7/>
      </LazyLoad>

    </Layout>
  )
}

export default Science7