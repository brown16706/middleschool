import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ScrollToTop from "react-scroll-to-top"
import LazyLoad from "react-lazyload"
import Video from "../components/video"
import { graphql } from "gatsby"
import Img from "gatsby-image"

const LanguageArts7 = ({ data }) => {

  return (

    <Layout>
      <SEO
        title="7th Grade Language Arts"
        description="Daily assignments for 7th grade language arts"
        image="/logo.png"
        pathname="/languagearts7"
      />

      <ScrollToTop smooth color="#78CCC7"/>

      <section className="block-circles">
        <div className="subjects-circle circle1"
             style={{
               backgroundColor: "#4fb6c3",
               transform: "translate3d(0px, 0px, 0px) scale(0.9921, 1)",
               opacity: "0.9881"
             }}/>
        <div className="subjects-circle circle2"
             style={{ backgroundColor: "#4fb6c3", transform: "translate(0px, 0px)", opacity: 1 }}/>
        <div className="hero-wrapper pbn hero">
          <h1 className="hero intro in-left">Language Arts</h1>
          <div className="hero info-block info-block-line in-left"
               style={{ marginBottom: "4em" }}>
            <Link to="/seventh" className='gradeLink'>
              <h2 className="hero in-left">7th Grade</h2></Link>
          </div>
        </div>
      </section>

      <LazyLoad>
        <form>
          <div className="dot1"/>
          <section className="section raise-top">
            <div className="section-content">
              <h1 className="section-title">Daily Lessons</h1>
              <span className="days">Books</span>
              <p className="margin-para">The books required for this course are: <i> </i> by , <i> </i> by ,
                and <i> </i> by . They are all available at your local library, local bookstore, or can be
                purchased online. Until you get a copy, the first chapter for each book is linked as a PDF. The entire
                book available here for download if it is out of copyright.</p>

              <span className="days">LESSON 1</span>
              <h4>Before I Got My Eye Put Out - The Poetry of Emily Dickinson</h4>
              <Video videoUrl="https://www.youtube.com/embed/R4WwhOdk_Eg"/>
              <Img fluid={data.hope.childImageSharp.fluid} alt="Hope Poem"/><br/>
                            {/*Analysis of Hope*/}
              <Video videoUrl="https://www.youtube.com/embed/j3VWZJmuvhg"/>
              <Img fluid={data.imNobody.childImageSharp.fluid} alt="Nobody Poem"/><br/>


            </div>
          </section>
        </form>
      </LazyLoad>
    </Layout>
  )
}

export default LanguageArts7


export const query = graphql`
  {
hope: file(relativePath: { eq: "subjects/poems/hope.jpg" }) {
  childImageSharp {
    fluid(maxWidth: 900) {
    ...GatsbyImageSharpFluid
    }
  }
}
imNobody: file(relativePath: { eq: "subjects/poems/imNobody.jpg" }) {
  childImageSharp {
    fluid(maxWidth: 900) {
    ...GatsbyImageSharpFluid
    }
  }
}
    }
`