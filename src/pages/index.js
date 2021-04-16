import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import style from "./index.module.css"
import {Link} from "gatsby"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="At Home Middle School"
        description="Middle school curriculum and lesson plans that are easy to follow."
        image="/logo.png"
        pathname="/"
        // Boolean indicating whether this is an article:
        // article
      />

      <div className={style.bubbles}>
        <p className={style.mainTitle} data-sal="slide-up" data-sal-duration="1000"
           data-sal-easing="ease">Easy to follow daily lesson plans.</p>
        <div className={style.content}>
          <div className={style.giantText} data-sal="slide-left"
               data-sal-duration="2000" data-sal-easing="ease"> <Link to="/sixth">6th Grade</Link></div>
          <div className={style.giantText + " " + style.seven} data-sal="slide-right"
               data-sal-duration="2000" data-sal-easing="ease"> <Link to="/seventh">7th Grade</Link></div>
          <div className={style.giantText + " " + style.eight} data-sal="slide-right"
               data-sal-duration="2000" data-sal-easing="ease"> <Link to="/eighth">8th Grade</Link></div>
        </div>
      </div>

    </Layout>
  )
}
export default IndexPage

export const query = graphql`
{
  monet: file(relativePath: {eq: "portraits/1.monet.jpg"}) {
  childImageSharp {
  fluid(maxWidth: 800) {
  ...GatsbyImageSharpFluid
}
}
}
  davinci: file(relativePath: {eq: "portraits/2.davinci.jpg"}) {
  childImageSharp {
  fluid(maxWidth: 800) {
  ...GatsbyImageSharpFluid
}
}
}
  cassat: file(relativePath: {eq: "portraits/3.cassat.jpg"}) {
  childImageSharp {
  fluid(maxWidth: 800) {
  ...GatsbyImageSharpFluid
}
}
}
  degas: file(relativePath: {eq: "portraits/4.degas.jpg"}) {
  childImageSharp {
  fluid(maxWidth: 800) {
  ...GatsbyImageSharpFluid
}
}
}
  vangogh: file(relativePath: {eq: "portraits/5.vangogh.jpg"}) {
  childImageSharp {
  fluid(maxWidth: 800) {
  ...GatsbyImageSharpFluid
}
}
}
  picasso: file(relativePath: {eq: "portraits/6.picasso.jpg"}) {
  childImageSharp {
  fluid(maxWidth: 800) {
  ...GatsbyImageSharpFluid
}
}
}
  okeefe: file(relativePath: {eq: "portraits/7.okeefe.jpg"}) {
  childImageSharp {
  fluid(maxWidth: 800) {
  ...GatsbyImageSharpFluid
}
}
}
  renoir: file(relativePath: {eq: "portraits/8.renoir.jpg"}) {
  childImageSharp {
  fluid(maxWidth: 800) {
  ...GatsbyImageSharpFluid
}
}
}
  seurat: file(relativePath: {eq: "portraits/9.seurat.jpg"}) {
  childImageSharp {
  fluid(maxWidth: 800) {
  ...GatsbyImageSharpFluid
}
}
}
}
`
