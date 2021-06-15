import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "../components/artist.module.css"


const About = ({ data }) => {
  return (

    <Layout>
      <SEO
        title="About"
        description="A little summary about the site Artists Who Changed the World."
        image="/logo.png"
        pathname="/about"
      />

      <>
        <div style={{ minHeight: "100vh", width: "100vw",  "--bubble2": "rgba(59, 181, 207, .36)" }} className={styles.bubbles}>
          <section className={styles.sectioncontent}>
            <div className={styles.artistname} data-sal="slide-up" data-sal-duration="1600">About
            </div>
            <div className={styles.about}>
              <p className={styles.pararesources} data-sal="slide-up" data-sal-duration="1600">This is the site I wish I
                had when I was homeschooling my kids.</p>

              <p className={styles.pararesources} data-sal="slide-up" data-sal-duration="1600">At Home Middle School
                pulls together
                the best free curriculum and organizes it into daily lessons.</p>

              <p className={styles.pararesources} data-sal="slide-up" data-sal-duration="1600">There are
                180 lessons for each subject (same as a school year). The curriculum is not meant
                to replace at-home or in-class learning, but fill in gaps and reduce the number of hours it takes to
                prepare daily lesson plans for your student.</p>

              <p className={styles.pararesources} data-sal="slide-up" data-sal-duration="1600">While much of the
                curriculum aligns with many state core requirements, your state may be more stringent or have different
                requirements. Make sure you cover the curriculum your state requires.</p>

              <p className={styles.pararesources} data-sal="slide-up" data-sal-duration="1600">This site is free, there
                is no registration, no ads, no affiliate links and none of your data is tracked or saved.</p>

              <p className={styles.pararesources} data-sal="slide-up" data-sal-duration="1600">Saving your work -
                IMPORTANT:<br/></p>
              <p> All of your work from this site will be saved to the localStorage of your computer or the device your student uses.
                This means no data is collected from you. This also means if you clear your cookies, you will erase all work saved from 
                this site. Be sure to back up your work! Depending on your device you have several options.</p>

              <p className={styles.pararesources} data-sal="slide-up" data-sal-duration="1600">OPTIONS FOR SAVING
                WORK</p>
              <p className={styles.leftmarg} data-sal="slide-up" data-sal-duration="1600">a) 'Select All' and right
                click to 'Print' and then save as a PDF on your computer/device.</p>
              <p className={styles.leftmarg} data-sal="slide-up" data-sal-duration="1600">b) Right click to 'Share' and
                email to a parent or teacher.</p>
              <p className={styles.leftmarg} data-sal="slide-up" data-sal-duration="1600">c) Copy/paste and save to a
                document in Google docs or an application on your device.</p>

              <p className={styles.pararesources} data-sal="slide-up" data-sal-duration="1600">At Home Middle School
                uses free online resources that usually require you to sign up and log in. Students can often sign up on
                their own, but parents or teachers may need to help. All sites used and linked to are legitimate and not
                linked to spamware or viruses. External sites used that require signing in include Khan Academy, Chess
                kid, CK-12, Quizlet, TedEd, Duolingo, CodeAcademy and YouTube.</p>

              <p className={styles.pararesources} data-sal="slide-up" data-sal-duration="1600">Who developed At Home
                Middle School?</p>
              <p>My name is Melissa Brown and I am a web developer. Before this I was a professor of business at the
                University of Alaska. I created and taught courses online and in the classroom for over 15 years. Most
                importantly, I have been a homeschool mom and understand the challenges of making learning meaningful
                and effective. I believe every child deserves to build the lives they want for themselves and I know
                this starts with a solid education. My oldest daughter recently graduated from college and works as a
                civil engineer. My son is currently studying computer science in college and my youngest daughter is in
                homeschool.</p>

              <p className={styles.pararesources} data-sal="slide-up" data-sal-duration="1600">I hope you find the
                website useful. If you have any suggestions for improvements, concerns, or just want to reach out to say
                hi, you can contact me at athomemiddleschool@gmail.com.</p>
            </div>

          </section>
        </div>
      </>


    </Layout>
  )
}

export default About