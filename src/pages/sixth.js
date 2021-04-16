import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import "../styles/styles.css"

const Sixth = ({ data }) => {
  return (

    <Layout>

      <SEO
        title="Sixth Grade"
        description="Daily lessons and curriculum for the seventh grade."
        image="/logo.png"
        pathname="/sixth"

      />

      <div>
        <div>
          <section className="block-circles">
            <div className="circle one6th"
                 style={{ transform: "translate3d(0px, 0px, 0px) scale(0.9921, 1)", opacity: "0.9881" }}/>
            <div className="circle two6th" style={{ transform: "translate(0px, 0px)", opacity: 1 }}/>
            <div className="hero-wrapper pbn hero">
              <h1 className="hero intro in-left">6th Grade</h1>
              <div className="hero info-block info-block-line in-left" style={{ marginBottom: "4em" }}>
                <h2 className="hero in-left">daily lesson plans</h2>
              </div>
            </div>
          </section>
        </div>

        {/*SUBJECTS SECTION*/}
        <main className="main">
          <div className="main-content">
            <div className="subjects" id="start-subjects">

              <div className="subject math6">
                <Link to="/math6">
                  <img className="week" alt="math symbol" src={require("../../content/images/subjectimages/math.png")}/>
                  <p className="subject-info">math</p>
                </Link></div>

              <div className="subject science6">
                <Link to="/science6">
                  <img className="week" alt="science" src={require("../../content/images/subjectimages/science.png")}/>
                  <p className="subject-info">life science</p>
                </Link></div>

              <div className="subject la6">
                <Link to="/languagearts6">
                  <img className="week" alt="la" src={require("../../content/images/subjectimages/la.png")}/>
                  <p className="subject-info">language arts</p>
                </Link></div>

              <div className="subject social-studies6">
                <Link to="/socialstudies6">
                  <img className="week" alt="social studies" src={require("../../content/images/subjectimages/socialstudies.png")}/>
                  <p className="subject-info">social studies</p>
                </Link></div>


              <div className="subject languages6">
                <Link to="/languages6">
                  <img className="week" alt="languages" src={require("../../content/images/subjectimages/languages.png")}/>
                  <p className="subject-info">languages</p>
                </Link></div>


              <div className="subject art6">
                <Link to="/art6">
                  <img className="week" alt="art" src={require("../../content/images/subjectimages/art.png")}/>
                  <p className="subject-info">art history</p>
                </Link></div>


              <div className="subject chess6">
                <Link to="/chess">
                  <img className="week" alt="chess" src={require("../../content/images/subjectimages/chess.png")}/>
                  <p className="subject-info">chess</p>
                </Link></div>


              <div className="subject coding6">
                <Link to="/coding">
                  <img className="week" alt="coding" src={require("../../content/images/subjectimages/coding.png")}/>
                  <p className="subject-info">coding</p>
                </Link></div>
            </div>
          </div>
        </main>

      </div>

    </Layout>

  )
}

export default Sixth

