import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Artist from "../components/artist"


const About = ({ data }) => {
  return (

    <Layout>
      <SEO
        title="About"
        description="A little summary about the site Artists Who Changed the World."
        image="/logo.png"
        pathname="/about"
      />

      <Artist
        bubble2={{ "--bubble2": "#42c6cf" }}
        name={"About"}
        descrip={"Description about the website here. "}
      />

    </Layout>
  )
}

export default About