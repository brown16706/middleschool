import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "../components/artist.module.css"
import { Link } from "gatsby"


const About = ({ data }) => {
  return (

    <Layout>
      <SEO
        title="Resources"
        description="Links to additional resources."
        image="/logo.png"
        pathname="/resources"
      />

      <>
        <div style={{height: "100vh", width: "100vw"}} className={styles.bubbles}>
          <section className={styles.sectioncontent}>
            <div className={styles.artistname} data-sal="slide-up" data-sal-duration="1600" style={{color: ""}}>Resources</div>
        <div className={styles.descrip} data-sal="slide-up" data-sal-duration="1600"> <a className={styles.resources} href="https://scheduler.athomemiddleschool.com/" rel="noreferrer" target="_blank">Schedule Maker</a></div>

            <div className={styles.descrip} data-sal="slide-up" data-sal-duration="1600"><a className={styles.resources} href="https://checklist.athomemiddleschool.com/" rel="noreferrer" target="_blank">Daily Checklist</a></div>

            <div className={styles.descrip} data-sal="slide-up" data-sal-duration="1600"> <a className={styles.resources} href="https://timer.athomemiddleschool.com/">20 Minute Timer</a></div>
           
            <div className={styles.descrip} data-sal="slide-up" data-sal-duration="1600"><a className={styles.resources} href="https://get.adobe.com/reader/" rel="noreferrer" target="_blank">PDF Reader (Adobe Acrobat)</a></div>

            <div className={styles.descrip} data-sal="slide-up" data-sal-duration="1600"><Link className={styles.resources} to="/termsofuse">Terms of Use </Link></div>

            {/*<div className={styles.descrip} data-sal="slide-up" data-sal-duration="1600"> <Link className={styles.resources} to="/writingprompts">Writing Prompts</Link></div>*/}

            <div> </div>   
            <div> </div>
            
          </section>
        </div>
      </>
      
    </Layout>
  )
}

export default About