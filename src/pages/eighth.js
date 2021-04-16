import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import "../styles/styles.css"

const Eighth = ({ data }) => {
  return (

    <Layout>

      <SEO
        title="Eighth Grade"
        description="Daily lessons and curriculum for the eighth grade."
        image="/logo.png"
        pathname="/eighth"

      />

      <div>
        <div>
          <section className="block-circles">
            <div className="circle one8th"
                 style={{ transform: "translate3d(0px, 0px, 0px) scale(0.9921, 1)", opacity: "0.9881" }}/>
            <div className="circle two8th" style={{ transform: "translate(0px, 0px)", opacity: 1 }}/>
            <div className="hero-wrapper pbn hero">
              <h1 className="hero intro in-left">8th Grade</h1>
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

              <div className="subject math8">
                <Link to="/math8">
                  <img className="week" alt="math symbol" src={require("../../content/images/subjectimages/math.png")}/>
                  <p className="subject-info">math</p>
                </Link></div>

              <div className="subject science8">
                <Link to="/science8">
                  <img className="week" alt="science" src={require("../../content/images/subjectimages/science.png")}/>
                  <p className="subject-info">physical science</p>
                </Link></div>

              <div className="subject la8">
                <Link to="/la8">
                  <img className="week" alt="la" src={require("../../content/images/subjectimages/la.png")}/>
                  <p className="subject-info">language arts</p>
                </Link></div>

              <div className="subject social-studies8">
                <Link to="/socialstudies8">
                  <img className="week" alt="social studies" src={require("../../content/images/subjectimages/socialstudies.png")}/>
                  <p className="subject-info">social studies</p>
                </Link></div>

              <div className="subject languages8">
                <Link to="./science/languages8">
                  <img className="week" alt="languages" src={require("../../content/images/subjectimages/languages.png")}/>
                  <p className="subject-info">languages</p>
                </Link></div>

              <div className="subject art8">
                <Link to="/art8">
                  <img className="week" alt="art" src={require("../../content/images/subjectimages/art.png")}/>
                  <p className="subject-info">art history</p>
                </Link></div>

              <div className="subject chess8">
                <Link to="/chess">
                  <img className="week" alt="chess" src={require("../../content/images/subjectimages/chess.png")}/>
                  <p className="subject-info">chess</p>
                </Link></div>


              <div className="subject coding8">
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

export default Eighth

