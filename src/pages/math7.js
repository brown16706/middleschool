import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import ToggleSwitch from "../components/checkbox"
import "../styles/styles.css"
import ScrollToTop from "react-scroll-to-top"
import LazyLoad from "react-lazyload"
import Video from "../components/video"

const Math7 = ({ data }) => {

  const [selectedMath1, setSelectedMath1] = React.useState(localStorage.getItem("math7-1") === "true")
  const [selectedMath2, setSelectedMath2] = React.useState(localStorage.getItem("math7-2") === "true")
  const [selectedMath3, setSelectedMath3] = React.useState(localStorage.getItem("math7-3") === "true")
  const [selectedMath4, setSelectedMath4] = React.useState(localStorage.getItem("math7-4") === "true")
  const [selectedMath5, setSelectedMath5] = React.useState(localStorage.getItem("math7-5") === "true")
  const [selectedMath6, setSelectedMath6] = React.useState(localStorage.getItem("math7-6") === "true")
  const [selectedMath7, setSelectedMath7] = React.useState(localStorage.getItem("math7-7") === "true")
  const [selectedMath8, setSelectedMath8] = React.useState(localStorage.getItem("math7-8") === "true")
  const [selectedMath9, setSelectedMath9] = React.useState(localStorage.getItem("math7-9") === "true")
  const [selectedMath10, setSelectedMath10] = React.useState(localStorage.getItem("math7-10") === "true")
  const [selectedMath11, setSelectedMath11] = React.useState(localStorage.getItem("math7-11") === "true")
  const [selectedMath12, setSelectedMath12] = React.useState(localStorage.getItem("math7-12") === "true")
  const [selectedMath13, setSelectedMath13] = React.useState(localStorage.getItem("math7-13") === "true")
  const [selectedMath14, setSelectedMath14] = React.useState(localStorage.getItem("math7-14") === "true")
  const [selectedMath15, setSelectedMath15] = React.useState(localStorage.getItem("math7-15") === "true")
  const [selectedMath16, setSelectedMath16] = React.useState(localStorage.getItem("math7-16") === "true")
  const [selectedMath17, setSelectedMath17] = React.useState(localStorage.getItem("math7-17") === "true")
  const [selectedMath18, setSelectedMath18] = React.useState(localStorage.getItem("math7-18") === "true")
  const [selectedMath19, setSelectedMath19] = React.useState(localStorage.getItem("math7-19") === "true")
  const [selectedMath20, setSelectedMath20] = React.useState(localStorage.getItem("math7-20") === "true")
  const [selectedMath21, setSelectedMath21] = React.useState(localStorage.getItem("math7-21") === "true")
  const [selectedMath22, setSelectedMath22] = React.useState(localStorage.getItem("math7-22") === "true")
  const [selectedMath23, setSelectedMath23] = React.useState(localStorage.getItem("math7-23") === "true")
  const [selectedMath24, setSelectedMath24] = React.useState(localStorage.getItem("math7-24") === "true")
  const [selectedMath25, setSelectedMath25] = React.useState(localStorage.getItem("math7-25") === "true")
  const [selectedMath26, setSelectedMath26] = React.useState(localStorage.getItem("math7-26") === "true")
  const [selectedMath27, setSelectedMath27] = React.useState(localStorage.getItem("math7-27") === "true")
  const [selectedMath28, setSelectedMath28] = React.useState(localStorage.getItem("math7-28") === "true")
  const [selectedMath29, setSelectedMath29] = React.useState(localStorage.getItem("math7-29") === "true")
  const [selectedMath30, setSelectedMath30] = React.useState(localStorage.getItem("math7-30") === "true")
  const [selectedMath31, setSelectedMath31] = React.useState(localStorage.getItem("math7-31") === "true")
  const [selectedMath32, setSelectedMath32] = React.useState(localStorage.getItem("math7-32") === "true")
  const [selectedMath33, setSelectedMath33] = React.useState(localStorage.getItem("math7-33") === "true")
  const [selectedMath34, setSelectedMath34] = React.useState(localStorage.getItem("math7-34") === "true")
  const [selectedMath35, setSelectedMath35] = React.useState(localStorage.getItem("math7-35") === "true")
  const [selectedMath36, setSelectedMath36] = React.useState(localStorage.getItem("math7-36") === "true")
  const [selectedMath37, setSelectedMath37] = React.useState(localStorage.getItem("math7-37") === "true")
  const [selectedMath38, setSelectedMath38] = React.useState(localStorage.getItem("math7-38") === "true")
  const [selectedMath39, setSelectedMath39] = React.useState(localStorage.getItem("math7-39") === "true")
  const [selectedMath40, setSelectedMath40] = React.useState(localStorage.getItem("math7-40") === "true")
  const [selectedMath41, setSelectedMath41] = React.useState(localStorage.getItem("math7-41") === "true")
  const [selectedMath42, setSelectedMath42] = React.useState(localStorage.getItem("math7-42") === "true")
  const [selectedMath43, setSelectedMath43] = React.useState(localStorage.getItem("math7-43") === "true")
  const [selectedMath44, setSelectedMath44] = React.useState(localStorage.getItem("math7-44") === "true")
  const [selectedMath45, setSelectedMath45] = React.useState(localStorage.getItem("math7-45") === "true")
  const [selectedMath46, setSelectedMath46] = React.useState(localStorage.getItem("math7-46") === "true")
  const [selectedMath47, setSelectedMath47] = React.useState(localStorage.getItem("math7-47") === "true")
  const [selectedMath48, setSelectedMath48] = React.useState(localStorage.getItem("math7-48") === "true")
  const [selectedMath49, setSelectedMath49] = React.useState(localStorage.getItem("math7-49") === "true")
  const [selectedMath50, setSelectedMath50] = React.useState(localStorage.getItem("math7-50") === "true")
  const [selectedMath51, setSelectedMath51] = React.useState(localStorage.getItem("math7-51") === "true")
  const [selectedMath52, setSelectedMath52] = React.useState(localStorage.getItem("math7-52") === "true")
  const [selectedMath53, setSelectedMath53] = React.useState(localStorage.getItem("math7-53") === "true")
  const [selectedMath54, setSelectedMath54] = React.useState(localStorage.getItem("math7-54") === "true")
  const [selectedMath55, setSelectedMath55] = React.useState(localStorage.getItem("math7-55") === "true")
  const [selectedMath56, setSelectedMath56] = React.useState(localStorage.getItem("math7-56") === "true")
  const [selectedMath57, setSelectedMath57] = React.useState(localStorage.getItem("math7-57") === "true")
  const [selectedMath58, setSelectedMath58] = React.useState(localStorage.getItem("math7-58") === "true")
  const [selectedMath59, setSelectedMath59] = React.useState(localStorage.getItem("math7-59") === "true")
  const [selectedMath60, setSelectedMath60] = React.useState(localStorage.getItem("math7-60") === "true")
  const [selectedMath61, setSelectedMath61] = React.useState(localStorage.getItem("math7-61") === "true")
  const [selectedMath62, setSelectedMath62] = React.useState(localStorage.getItem("math7-62") === "true")
  const [selectedMath63, setSelectedMath63] = React.useState(localStorage.getItem("math7-63") === "true")
  const [selectedMath64, setSelectedMath64] = React.useState(localStorage.getItem("math7-64") === "true")
  const [selectedMath65, setSelectedMath65] = React.useState(localStorage.getItem("math7-65") === "true")
  const [selectedMath66, setSelectedMath66] = React.useState(localStorage.getItem("math7-66") === "true")
  const [selectedMath67, setSelectedMath67] = React.useState(localStorage.getItem("math7-67") === "true")
  const [selectedMath68, setSelectedMath68] = React.useState(localStorage.getItem("math7-68") === "true")
  const [selectedMath69, setSelectedMath69] = React.useState(localStorage.getItem("math7-69") === "true")
  const [selectedMath70, setSelectedMath70] = React.useState(localStorage.getItem("math7-70") === "true")
  const [selectedMath71, setSelectedMath71] = React.useState(localStorage.getItem("math7-71") === "true")
  const [selectedMath72, setSelectedMath72] = React.useState(localStorage.getItem("math7-72") === "true")
  const [selectedMath73, setSelectedMath73] = React.useState(localStorage.getItem("math7-73") === "true")
  const [selectedMath74, setSelectedMath74] = React.useState(localStorage.getItem("math7-74") === "true")
  const [selectedMath75, setSelectedMath75] = React.useState(localStorage.getItem("math7-75") === "true")
  const [selectedMath76, setSelectedMath76] = React.useState(localStorage.getItem("math7-76") === "true")
  const [selectedMath77, setSelectedMath77] = React.useState(localStorage.getItem("math7-77") === "true")
  const [selectedMath78, setSelectedMath78] = React.useState(localStorage.getItem("math7-78") === "true")
  const [selectedMath79, setSelectedMath79] = React.useState(localStorage.getItem("math7-79") === "true")
  const [selectedMath80, setSelectedMath80] = React.useState(localStorage.getItem("math7-80") === "true")
  const [selectedMath81, setSelectedMath81] = React.useState(localStorage.getItem("math7-81") === "true")
  const [selectedMath82, setSelectedMath82] = React.useState(localStorage.getItem("math7-82") === "true")
  const [selectedMath83, setSelectedMath83] = React.useState(localStorage.getItem("math7-83") === "true")
  const [selectedMath84, setSelectedMath84] = React.useState(localStorage.getItem("math7-84") === "true")
  const [selectedMath85, setSelectedMath85] = React.useState(localStorage.getItem("math7-85") === "true")
  const [selectedMath86, setSelectedMath86] = React.useState(localStorage.getItem("math7-86") === "true")
  const [selectedMath87, setSelectedMath87] = React.useState(localStorage.getItem("math7-87") === "true")
  const [selectedMath88, setSelectedMath88] = React.useState(localStorage.getItem("math7-88") === "true")
  const [selectedMath89, setSelectedMath89] = React.useState(localStorage.getItem("math7-89") === "true")
  const [selectedMath90, setSelectedMath90] = React.useState(localStorage.getItem("math7-90") === "true")
  const [selectedMath91, setSelectedMath91] = React.useState(localStorage.getItem("math7-91") === "true")
  const [selectedMath92, setSelectedMath92] = React.useState(localStorage.getItem("math7-92") === "true")
  const [selectedMath93, setSelectedMath93] = React.useState(localStorage.getItem("math7-93") === "true")
  const [selectedMath94, setSelectedMath94] = React.useState(localStorage.getItem("math7-94") === "true")
  const [selectedMath95, setSelectedMath95] = React.useState(localStorage.getItem("math7-95") === "true")
  const [selectedMath96, setSelectedMath96] = React.useState(localStorage.getItem("math7-96") === "true")
  const [selectedMath97, setSelectedMath97] = React.useState(localStorage.getItem("math7-97") === "true")
  const [selectedMath98, setSelectedMath98] = React.useState(localStorage.getItem("math7-98") === "true")
  const [selectedMath99, setSelectedMath99] = React.useState(localStorage.getItem("math7-99") === "true")
  const [selectedMath100, setSelectedMath100] = React.useState(localStorage.getItem("math7-100") === "true")
  const [selectedMath101, setSelectedMath101] = React.useState(localStorage.getItem("math7-101") === "true")
  const [selectedMath102, setSelectedMath102] = React.useState(localStorage.getItem("math7-102") === "true")
  const [selectedMath103, setSelectedMath103] = React.useState(localStorage.getItem("math7-103") === "true")
  const [selectedMath104, setSelectedMath104] = React.useState(localStorage.getItem("math7-104") === "true")
  const [selectedMath105, setSelectedMath105] = React.useState(localStorage.getItem("math7-105") === "true")
  const [selectedMath106, setSelectedMath106] = React.useState(localStorage.getItem("math7-106") === "true")
  const [selectedMath107, setSelectedMath107] = React.useState(localStorage.getItem("math7-107") === "true")
  const [selectedMath108, setSelectedMath108] = React.useState(localStorage.getItem("math7-108") === "true")
  const [selectedMath109, setSelectedMath109] = React.useState(localStorage.getItem("math7-109") === "true")
  const [selectedMath110, setSelectedMath110] = React.useState(localStorage.getItem("math7-110") === "true")
  const [selectedMath111, setSelectedMath111] = React.useState(localStorage.getItem("math7-111") === "true")
  const [selectedMath112, setSelectedMath112] = React.useState(localStorage.getItem("math7-112") === "true")
  const [selectedMath113, setSelectedMath113] = React.useState(localStorage.getItem("math7-113") === "true")
  const [selectedMath114, setSelectedMath114] = React.useState(localStorage.getItem("math7-114") === "true")
  const [selectedMath115, setSelectedMath115] = React.useState(localStorage.getItem("math7-115") === "true")
  const [selectedMath116, setSelectedMath116] = React.useState(localStorage.getItem("math7-116") === "true")
  const [selectedMath117, setSelectedMath117] = React.useState(localStorage.getItem("math7-117") === "true")
  const [selectedMath118, setSelectedMath118] = React.useState(localStorage.getItem("math7-118") === "true")
  const [selectedMath119, setSelectedMath119] = React.useState(localStorage.getItem("math7-119") === "true")
  const [selectedMath120, setSelectedMath120] = React.useState(localStorage.getItem("math7-120") === "true")
  const [selectedMath121, setSelectedMath121] = React.useState(localStorage.getItem("math7-121") === "true")
  const [selectedMath122, setSelectedMath122] = React.useState(localStorage.getItem("math7-122") === "true")
  const [selectedMath123, setSelectedMath123] = React.useState(localStorage.getItem("math7-123") === "true")
  const [selectedMath124, setSelectedMath124] = React.useState(localStorage.getItem("math7-124") === "true")
  const [selectedMath125, setSelectedMath125] = React.useState(localStorage.getItem("math7-125") === "true")
  const [selectedMath126, setSelectedMath126] = React.useState(localStorage.getItem("math7-126") === "true")
  const [selectedMath127, setSelectedMath127] = React.useState(localStorage.getItem("math7-127") === "true")
  const [selectedMath128, setSelectedMath128] = React.useState(localStorage.getItem("math7-128") === "true")
  const [selectedMath129, setSelectedMath129] = React.useState(localStorage.getItem("math7-129") === "true")
  const [selectedMath130, setSelectedMath130] = React.useState(localStorage.getItem("math7-130") === "true")
  const [selectedMath131, setSelectedMath131] = React.useState(localStorage.getItem("math7-131") === "true")
  const [selectedMath132, setSelectedMath132] = React.useState(localStorage.getItem("math7-132") === "true")
  const [selectedMath133, setSelectedMath133] = React.useState(localStorage.getItem("math7-133") === "true")
  const [selectedMath134, setSelectedMath134] = React.useState(localStorage.getItem("math7-134") === "true")
  const [selectedMath135, setSelectedMath135] = React.useState(localStorage.getItem("math7-135") === "true")
  const [selectedMath136, setSelectedMath136] = React.useState(localStorage.getItem("math7-136") === "true")
  const [selectedMath137, setSelectedMath137] = React.useState(localStorage.getItem("math7-137") === "true")
  const [selectedMath138, setSelectedMath138] = React.useState(localStorage.getItem("math7-138") === "true")
  const [selectedMath139, setSelectedMath139] = React.useState(localStorage.getItem("math7-139") === "true")
  const [selectedMath140, setSelectedMath140] = React.useState(localStorage.getItem("math7-140") === "true")
  const [selectedMath141, setSelectedMath141] = React.useState(localStorage.getItem("math7-141") === "true")
  const [selectedMath142, setSelectedMath142] = React.useState(localStorage.getItem("math7-142") === "true")
  const [selectedMath143, setSelectedMath143] = React.useState(localStorage.getItem("math7-143") === "true")
  const [selectedMath144, setSelectedMath144] = React.useState(localStorage.getItem("math7-144") === "true")
  const [selectedMath145, setSelectedMath145] = React.useState(localStorage.getItem("math7-145") === "true")
  const [selectedMath146, setSelectedMath146] = React.useState(localStorage.getItem("math7-146") === "true")
  const [selectedMath147, setSelectedMath147] = React.useState(localStorage.getItem("math7-147") === "true")
  const [selectedMath148, setSelectedMath148] = React.useState(localStorage.getItem("math7-148") === "true")
  const [selectedMath149, setSelectedMath149] = React.useState(localStorage.getItem("math7-149") === "true")
  const [selectedMath150, setSelectedMath150] = React.useState(localStorage.getItem("math7-150") === "true")
  const [selectedMath151, setSelectedMath151] = React.useState(localStorage.getItem("math7-151") === "true")
  const [selectedMath152, setSelectedMath152] = React.useState(localStorage.getItem("math7-152") === "true")
  const [selectedMath153, setSelectedMath153] = React.useState(localStorage.getItem("math7-153") === "true")
  const [selectedMath154, setSelectedMath154] = React.useState(localStorage.getItem("math7-154") === "true")
  const [selectedMath155, setSelectedMath155] = React.useState(localStorage.getItem("math7-155") === "true")
  const [selectedMath156, setSelectedMath156] = React.useState(localStorage.getItem("math7-156") === "true")
  const [selectedMath157, setSelectedMath157] = React.useState(localStorage.getItem("math7-157") === "true")
  const [selectedMath158, setSelectedMath158] = React.useState(localStorage.getItem("math7-158") === "true")
  const [selectedMath159, setSelectedMath159] = React.useState(localStorage.getItem("math7-159") === "true")
  const [selectedMath160, setSelectedMath160] = React.useState(localStorage.getItem("math7-160") === "true")
  const [selectedMath161, setSelectedMath161] = React.useState(localStorage.getItem("math7-161") === "true")
  const [selectedMath162, setSelectedMath162] = React.useState(localStorage.getItem("math7-162") === "true")
  const [selectedMath163, setSelectedMath163] = React.useState(localStorage.getItem("math7-163") === "true")
  const [selectedMath164, setSelectedMath164] = React.useState(localStorage.getItem("math7-164") === "true")
  const [selectedMath165, setSelectedMath165] = React.useState(localStorage.getItem("math7-165") === "true")
  const [selectedMath166, setSelectedMath166] = React.useState(localStorage.getItem("math7-166") === "true")
  const [selectedMath167, setSelectedMath167] = React.useState(localStorage.getItem("math7-167") === "true")
  const [selectedMath168, setSelectedMath168] = React.useState(localStorage.getItem("math7-168") === "true")
  const [selectedMath169, setSelectedMath169] = React.useState(localStorage.getItem("math7-169") === "true")
  const [selectedMath170, setSelectedMath170] = React.useState(localStorage.getItem("math7-170") === "true")
  // const [selectedMath171, setSelectedMath171] = React.useState(localStorage.getItem("math7-171") === "true")
  // const [selectedMath172, setSelectedMath172] = React.useState(localStorage.getItem("math7-172") === "true")
  // const [selectedMath173, setSelectedMath173] = React.useState(localStorage.getItem("math7-173") === "true")
  // const [selectedMath174, setSelectedMath174] = React.useState(localStorage.getItem("math7-174") === "true")
  // const [selectedMath175, setSelectedMath175] = React.useState(localStorage.getItem("math7-175") === "true")
  // const [selectedMath176, setSelectedMath176] = React.useState(localStorage.getItem("math7-176") === "true")
  // const [selectedMath177, setSelectedMath177] = React.useState(localStorage.getItem("math7-177") === "true")
  // const [selectedMath178, setSelectedMath178] = React.useState(localStorage.getItem("math7-178") === "true")
  // const [selectedMath179, setSelectedMath179] = React.useState(localStorage.getItem("math7-179") === "true")
  // const [selectedMath180, setSelectedMath180] = React.useState(localStorage.getItem("math7-180") === "true")

  return (

    <Layout>

      <SEO
        title="Math 7th Grade"
        description="Daily lessons and curriculum for the 7th grade math."
        image="/logo.png"
        pathname="/math7"

      />
      <ScrollToTop smooth color="#78CCC7"/>
      <LazyLoad>
        <>
          <section className="block-circles">
            <div className="subjects-circle circle1"
                 style={{
                   backgroundColor: "#c3e1e6",
                   transform: "translate3d(0px, 0px, 0px) scale(0.9921, 1)",
                   opacity: "0.9881"
                 }}/>
            <div className="subjects-circle circle2"
                 style={{ backgroundColor: "#c3e1e6", transform: "translate(0px, 0px)", opacity: 1 }}/>
            <div className="hero-wrapper pbn hero">
              <h1 className="hero intro in-left">Math</h1>
              <div className="hero info-block info-block-line in-left"
                   style={{ marginBottom: "4em" }}>
                <Link to="/seventh" className='gradeLink'>
                  <h2 className="hero in-left">7th Grade</h2></Link>
              </div>
            </div>
          </section>


          {/*-------------------     LESSONS     -----------------------*/}
          <div className="dot1"/>
          <section className="section math-section raise-top">
            <div className="section-content">
              <h1 className="section-title daily-margin" id="math">Daily Lessons</h1>
              <div className="md-content">
                <form>
                  <p>If you don't already have one, <a href="https://support.khanacademy.org/hc/en-us/articles/204451324-How-do-I-create-my-account-"
                    rel="noreferrer" target="_blank"> set up a free account at Khan Academy </a>
                    and begin <a href="">  </a></p><br/>

                  <span className="days">Lesson 1</span>
                  <ToggleSwitch checked={selectedMath1}
                                id='math7-1'
                                label='Completed (Check this box after you finish the lesson below. It will help you keep track of where you are.)'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-1", `${e.target.checked}`)
                                    setSelectedMath1(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 2</span>
                  <ToggleSwitch checked={selectedMath2}
                                id='math7-2'
                                label='Completed (Check this box after you finish the lesson below.)'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-2", `${e.target.checked}`)
                                    setSelectedMath2(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/> <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 3</span>
                  <ToggleSwitch checked={selectedMath3}
                                id='math7-3'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-3", `${e.target.checked}`)
                                    setSelectedMath3(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/> <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 4</span>
                  <ToggleSwitch checked={selectedMath4}
                                id='math7-4'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-4", `${e.target.checked}`)
                                    setSelectedMath4(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/><p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 5</span>
                  <ToggleSwitch checked={selectedMath5}
                                id='math7-5'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-5", `${e.target.checked}`)
                                    setSelectedMath5(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <span className="days">Lesson 6</span>
                  <ToggleSwitch checked={selectedMath6}
                                id='math7-6'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-6", `${e.target.checked}`)
                                    setSelectedMath6(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 7</span>
                  <ToggleSwitch checked={selectedMath7}
                                id='math7-7'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-7", `${e.target.checked}`)
                                    setSelectedMath7(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 8</span>
                  <ToggleSwitch checked={selectedMath8}
                                id='math7-8'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-8", `${e.target.checked}`)
                                    setSelectedMath8(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 9</span>
                  <ToggleSwitch checked={selectedMath9}
                                id='math7-9'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-9", `${e.target.checked}`)
                                    setSelectedMath9(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <p><span className="days">Lesson 10</span>
                    <ToggleSwitch checked={selectedMath10}
                                  id='math7-10'
                                  label='Completed'
                                  onChange={
                                    (e) => {
                                      localStorage.setItem("math7-10", `${e.target.checked}`)
                                      setSelectedMath10(e.target.checked)
                                      console.log(e.target.checked)
                                    }
                                  }/>
                  </p>
                  
                  {/*ADD LESSON -------------------------------------*/}
                  {/*------------------------------
                  ------------------*/}
                  
                  <span className="days">Lesson 11</span>
                  <ToggleSwitch checked={selectedMath11}
                                id='math7-11'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-11", `${e.target.checked}`)
                                    setSelectedMath11(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 12</span>
                  <ToggleSwitch checked={selectedMath12}
                                id='math7-12'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-12", `${e.target.checked}`)
                                    setSelectedMath12(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 13</span>
                  <ToggleSwitch checked={selectedMath13}
                                id='math7-13'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-13", `${e.target.checked}`)
                                    setSelectedMath13(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 14</span>
                  <ToggleSwitch checked={selectedMath14}
                                id='math7-14'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-14", `${e.target.checked}`)
                                    setSelectedMath14(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 15</span>
                  <ToggleSwitch checked={selectedMath15}
                                id='math7-15'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-15", `${e.target.checked}`)
                                    setSelectedMath15(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 16</span>
                  <ToggleSwitch checked={selectedMath16}
                                id='math7-16'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-16", `${e.target.checked}`)
                                    setSelectedMath16(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 17</span>
                  <ToggleSwitch checked={selectedMath17}
                                id='math7-17'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-17", `${e.target.checked}`)
                                    setSelectedMath17(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 18</span>
                  <ToggleSwitch checked={selectedMath18}
                                id='math7-18'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-18", `${e.target.checked}`)
                                    setSelectedMath18(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 19</span>
                  <ToggleSwitch checked={selectedMath19}
                                id='math7-19'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-19", `${e.target.checked}`)
                                    setSelectedMath19(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 20</span>
                  <ToggleSwitch checked={selectedMath20}
                                id='math7-20'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-20", `${e.target.checked}`)
                                    setSelectedMath20(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 21</span>
                  <ToggleSwitch checked={selectedMath21} id='math7-21' label='Completed' onChange={
                    (e) => {
                      localStorage.setItem("math7-21", `${e.target.checked}`)
                      setSelectedMath21(e.target.checked)
                      console.log(e.target.checked)
                    }}/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  {/*Unit 2 Arithmetic Operations*/}
                  <span className="days">Lesson 22</span>
                  <ToggleSwitch checked={selectedMath22}
                                id='math7-22'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-22", `${e.target.checked}`)
                                    setSelectedMath22(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  Watch the TedEd Video <i>Where do math symbols come from? </i> by John David Walters
                  <Video videoUrl=""/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 23</span>
                  <ToggleSwitch checked={selectedMath23}
                                id='math7-23'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-23", `${e.target.checked}`)
                                    setSelectedMath23(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 24</span>
                  <ToggleSwitch checked={selectedMath24}
                                id='math7-24'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-24", `${e.target.checked}`)
                                    setSelectedMath24(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 25</span>
                  <ToggleSwitch checked={selectedMath25}
                                id='math7-25'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-25", `${e.target.checked}`)
                                    setSelectedMath25(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 26</span>
                  <ToggleSwitch checked={selectedMath26}
                                id='math7-26'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-26", `${e.target.checked}`)
                                    setSelectedMath26(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 27</span>
                  <ToggleSwitch checked={selectedMath27}
                                id='math7-27'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-27", `${e.target.checked}`)
                                    setSelectedMath27(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 28</span>
                  <ToggleSwitch checked={selectedMath28}
                                id='math7-28'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-28", `${e.target.checked}`)
                                    setSelectedMath28(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 29</span>
                  <ToggleSwitch checked={selectedMath29}
                                id='math7-29'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-29", `${e.target.checked}`)
                                    setSelectedMath29(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 30</span>
                  <ToggleSwitch checked={selectedMath30}
                                id='math7-30'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-30", `${e.target.checked}`)
                                    setSelectedMath30(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  Watch the TedEd Video <i>Why can't you divide by zero? </i>
                  <Video videoUrl=""/>
                  <span className="days">Lesson 31</span>
                  <ToggleSwitch checked={selectedMath31}
                                id='math7-31'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-31", `${e.target.checked}`)
                                    setSelectedMath31(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 32</span>
                  <ToggleSwitch checked={selectedMath32}
                                id='math7-32'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-32", `${e.target.checked}`)
                                    setSelectedMath32(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 33</span>
                  <ToggleSwitch checked={selectedMath33}
                                id='math7-33'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-33", `${e.target.checked}`)
                                    setSelectedMath33(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 34</span>
                  <ToggleSwitch checked={selectedMath34}
                                id='math7-34'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-34", `${e.target.checked}`)
                                    setSelectedMath34(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 35</span>
                  <ToggleSwitch checked={selectedMath35}
                                id='math7-35'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-35", `${e.target.checked}`)
                                    setSelectedMath35(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 36</span>
                  <ToggleSwitch checked={selectedMath36}
                                id='math7-36'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-36", `${e.target.checked}`)
                                    setSelectedMath36(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 37</span>
                  <ToggleSwitch checked={selectedMath37}
                                id='math7-37'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-37", `${e.target.checked}`)
                                    setSelectedMath37(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 38</span>
                  <ToggleSwitch checked={selectedMath38}
                                id='math7-38'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-38", `${e.target.checked}`)
                                    setSelectedMath38(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 39</span>
                  <ToggleSwitch checked={selectedMath39}
                                id='math7-39'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-39", `${e.target.checked}`)
                                    setSelectedMath39(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 40</span>
                  <ToggleSwitch checked={selectedMath40}
                                id='math7-40'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-40", `${e.target.checked}`)
                                    setSelectedMath40(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 41</span>
                  <ToggleSwitch checked={selectedMath41}
                                id='math7-41'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-41", `${e.target.checked}`)
                                    setSelectedMath41(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 42</span>
                  <ToggleSwitch checked={selectedMath42}
                                id='math7-42'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-42", `${e.target.checked}`)
                                    setSelectedMath42(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 43</span>
                  <ToggleSwitch checked={selectedMath43}
                                id='math7-43'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-43", `${e.target.checked}`)
                                    setSelectedMath43(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 44</span>
                  <ToggleSwitch checked={selectedMath44}
                                id='math7-44'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-44", `${e.target.checked}`)
                                    setSelectedMath44(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 45</span>
                  <ToggleSwitch checked={selectedMath45}
                                id='math7-45'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-45", `${e.target.checked}`)
                                    setSelectedMath45(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 46</span>
                  <ToggleSwitch checked={selectedMath46}
                                id='math7-46'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-46", `${e.target.checked}`)
                                    setSelectedMath46(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 47</span>
                  <ToggleSwitch checked={selectedMath47}
                                id='math7-47'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-47", `${e.target.checked}`)
                                    setSelectedMath47(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 48</span>
                  <ToggleSwitch checked={selectedMath48}
                                id='math7-48'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-48", `${e.target.checked}`)
                                    setSelectedMath48(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 49</span>
                  <ToggleSwitch checked={selectedMath49}
                                id='math7-49'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-49", `${e.target.checked}`)
                                    setSelectedMath49(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 50</span>
                  <ToggleSwitch checked={selectedMath50}
                                id='math7-50'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-50", `${e.target.checked}`)
                                    setSelectedMath50(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 51</span>
                  <ToggleSwitch checked={selectedMath51}
                                id='math7-51'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-51", `${e.target.checked}`)
                                    setSelectedMath51(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 52</span>
                  <ToggleSwitch checked={selectedMath52}
                                id='math7-52'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-52", `${e.target.checked}`)
                                    setSelectedMath52(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 53</span>
                  <ToggleSwitch checked={selectedMath53}
                                id='math7-53'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-53", `${e.target.checked}`)
                                    setSelectedMath53(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 54</span>
                  <ToggleSwitch checked={selectedMath54}
                                id='math7-54'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-54", `${e.target.checked}`)
                                    setSelectedMath54(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 55</span>
                  <ToggleSwitch checked={selectedMath55}
                                id='math7-55'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-55", `${e.target.checked}`)
                                    setSelectedMath55(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 56</span>
                  <ToggleSwitch checked={selectedMath56}
                                id='math7-56'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-56", `${e.target.checked}`)
                                    setSelectedMath56(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 57</span>
                  <ToggleSwitch checked={selectedMath57}
                                id='math7-57'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-57", `${e.target.checked}`)
                                    setSelectedMath57(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/> <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 58</span>
                  <ToggleSwitch checked={selectedMath58}
                                id='math7-58'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-58", `${e.target.checked}`)
                                    setSelectedMath58(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 59</span>
                  <ToggleSwitch checked={selectedMath59}
                                id='math7-59'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-59", `${e.target.checked}`)
                                    setSelectedMath59(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 60</span>
                  <ToggleSwitch checked={selectedMath60}
                                id='math7-60'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-60", `${e.target.checked}`)
                                    setSelectedMath60(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 61</span>
                  <ToggleSwitch checked={selectedMath61}
                                id='math7-61'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-61", `${e.target.checked}`)
                                    setSelectedMath61(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 62</span>
                  <ToggleSwitch checked={selectedMath62}
                                id='math7-62'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-62", `${e.target.checked}`)
                                    setSelectedMath62(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 63</span>
                  <ToggleSwitch checked={selectedMath63}
                                id='math7-63'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-63", `${e.target.checked}`)
                                    setSelectedMath63(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 64</span>
                  <ToggleSwitch checked={selectedMath64}
                                id='math7-64'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-64", `${e.target.checked}`)
                                    setSelectedMath64(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 65</span>
                  <ToggleSwitch checked={selectedMath65}
                                id='math7-65'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-65", `${e.target.checked}`)
                                    setSelectedMath65(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 66</span>
                  <ToggleSwitch checked={selectedMath66}
                                id='math7-66'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-66", `${e.target.checked}`)
                                    setSelectedMath66(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 67</span>
                  <ToggleSwitch checked={selectedMath67}
                                id='math7-67'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-67", `${e.target.checked}`)
                                    setSelectedMath67(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 68</span>
                  <ToggleSwitch checked={selectedMath68}
                                id='math7-68'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-68", `${e.target.checked}`)
                                    setSelectedMath68(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 69</span>
                  <ToggleSwitch checked={selectedMath69}
                                id='math7-69'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-69", `${e.target.checked}`)
                                    setSelectedMath69(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 70</span>
                  <ToggleSwitch checked={selectedMath70}
                                id='math7-70'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-70", `${e.target.checked}`)
                                    setSelectedMath70(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 71</span>
                  <ToggleSwitch checked={selectedMath71}
                                id='math7-71'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-71", `${e.target.checked}`)
                                    setSelectedMath71(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 72</span>
                  <ToggleSwitch checked={selectedMath72}
                                id='math7-72'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-72", `${e.target.checked}`)
                                    setSelectedMath72(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 73</span>
                  <ToggleSwitch checked={selectedMath73}
                                id='math7-73'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-73", `${e.target.checked}`)
                                    setSelectedMath73(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 74</span>
                  <ToggleSwitch checked={selectedMath74}
                                id='math7-74'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-74", `${e.target.checked}`)
                                    setSelectedMath74(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 75</span>
                  <ToggleSwitch checked={selectedMath75}
                                id='math7-75'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-75", `${e.target.checked}`)
                                    setSelectedMath75(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 76</span>
                  <ToggleSwitch checked={selectedMath76}
                                id='math7-76'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-76", `${e.target.checked}`)
                                    setSelectedMath76(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 77</span>
                  <ToggleSwitch checked={selectedMath77}
                                id='math7-77'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-77", `${e.target.checked}`)
                                    setSelectedMath77(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 78</span>
                  <ToggleSwitch checked={selectedMath78}
                                id='math7-78'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-78", `${e.target.checked}`)
                                    setSelectedMath78(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 79</span>
                  <ToggleSwitch checked={selectedMath79}
                                id='math7-79'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-79", `${e.target.checked}`)
                                    setSelectedMath79(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 80</span>
                  <ToggleSwitch checked={selectedMath80}
                                id='math7-80'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-80", `${e.target.checked}`)
                                    setSelectedMath80(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 81</span>
                  <ToggleSwitch checked={selectedMath81}
                                id='math7-81'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-81", `${e.target.checked}`)
                                    setSelectedMath81(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 82</span>
                  <ToggleSwitch checked={selectedMath82}
                                id='math7-82'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-82", `${e.target.checked}`)
                                    setSelectedMath82(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 83</span>
                  <ToggleSwitch checked={selectedMath83}
                                id='math7-83'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-83", `${e.target.checked}`)
                                    setSelectedMath83(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 84</span>
                  <ToggleSwitch checked={selectedMath84}
                                id='math7-84'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-84", `${e.target.checked}`)
                                    setSelectedMath84(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 85</span>
                  <ToggleSwitch checked={selectedMath85}
                                id='math7-85'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-85", `${e.target.checked}`)
                                    setSelectedMath85(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 86</span>
                  <ToggleSwitch checked={selectedMath86}
                                id='math7-86'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-86", `${e.target.checked}`)
                                    setSelectedMath86(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 87</span>
                  <ToggleSwitch checked={selectedMath87}
                                id='math7-87'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-87", `${e.target.checked}`)
                                    setSelectedMath87(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 88</span>
                  <ToggleSwitch checked={selectedMath88}
                                id='math7-88'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-88", `${e.target.checked}`)
                                    setSelectedMath88(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 89</span>
                  <ToggleSwitch checked={selectedMath89}
                                id='math7-89'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-89", `${e.target.checked}`)
                                    setSelectedMath89(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 90</span>
                  <ToggleSwitch checked={selectedMath90}
                                id='math7-90'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-90", `${e.target.checked}`)
                                    setSelectedMath90(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 91</span>
                  <ToggleSwitch checked={selectedMath91}
                                id='math7-91'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-91", `${e.target.checked}`)
                                    setSelectedMath91(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 92</span>
                  <ToggleSwitch checked={selectedMath92}
                                id='math7-92'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-92", `${e.target.checked}`)
                                    setSelectedMath92(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 93</span>
                  <ToggleSwitch checked={selectedMath93}
                                id='math7-93'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-93", `${e.target.checked}`)
                                    setSelectedMath93(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 94</span>
                  <ToggleSwitch checked={selectedMath94}
                                id='math7-94'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-94", `${e.target.checked}`)
                                    setSelectedMath94(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 95</span>
                  <ToggleSwitch checked={selectedMath95}
                                id='math7-95'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-95", `${e.target.checked}`)
                                    setSelectedMath95(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 96</span>
                  <ToggleSwitch checked={selectedMath96}
                                id='math7-96'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-96", `${e.target.checked}`)
                                    setSelectedMath96(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 97</span>
                  <ToggleSwitch checked={selectedMath97}
                                id='math7-97'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-97", `${e.target.checked}`)
                                    setSelectedMath97(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 98</span>
                  <ToggleSwitch checked={selectedMath98}
                                id='math7-98'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-98", `${e.target.checked}`)
                                    setSelectedMath98(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 99</span>
                  <ToggleSwitch checked={selectedMath99}
                                id='math7-99'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-99", `${e.target.checked}`)
                                    setSelectedMath99(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 100</span>
                  <ToggleSwitch checked={selectedMath100}
                                id='math7-100'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-100", `${e.target.checked}`)
                                    setSelectedMath100(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 101</span>
                  <ToggleSwitch checked={selectedMath101}
                                id='math7-101'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-101", `${e.target.checked}`)
                                    setSelectedMath101(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 102</span>
                  <ToggleSwitch checked={selectedMath102}
                                id='math7-102'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-102", `${e.target.checked}`)
                                    setSelectedMath102(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 103</span>
                  <ToggleSwitch checked={selectedMath103}
                                id='math7-103'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-103", `${e.target.checked}`)
                                    setSelectedMath103(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 104</span>
                  <ToggleSwitch checked={selectedMath104}
                                id='math7-104'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-104", `${e.target.checked}`)
                                    setSelectedMath104(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 105</span>
                  <ToggleSwitch checked={selectedMath105}
                                id='math7-105'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-105", `${e.target.checked}`)
                                    setSelectedMath105(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 106</span>
                  <ToggleSwitch checked={selectedMath106}
                                id='math7-106'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-106", `${e.target.checked}`)
                                    setSelectedMath106(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 107</span>
                  <ToggleSwitch checked={selectedMath107}
                                id='math7-107'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-107", `${e.target.checked}`)
                                    setSelectedMath107(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 108</span>
                  <ToggleSwitch checked={selectedMath108}
                                id='math7-108'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-108", `${e.target.checked}`)
                                    setSelectedMath108(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 109</span>
                  <ToggleSwitch checked={selectedMath109}
                                id='math7-109'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-109", `${e.target.checked}`)
                                    setSelectedMath109(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 110</span>
                  <ToggleSwitch checked={selectedMath110}
                                id='math7-110'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-110", `${e.target.checked}`)
                                    setSelectedMath110(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 111</span>
                  <ToggleSwitch checked={selectedMath111}
                                id='math7-111'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-111", `${e.target.checked}`)
                                    setSelectedMath111(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 112</span>
                  <ToggleSwitch checked={selectedMath112}
                                id='math7-112'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-112", `${e.target.checked}`)
                                    setSelectedMath112(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 113</span>
                  <ToggleSwitch checked={selectedMath113}
                                id='math7-113'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-113", `${e.target.checked}`)
                                    setSelectedMath113(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 114</span> <ToggleSwitch checked={selectedMath114}
                                                                         id='math7-114'
                                                                         label='Completed'
                                                                         onChange={
                                                                           (e) => {
                                                                             localStorage.setItem("math7-114", `${e.target.checked}`)
                                                                             setSelectedMath114(e.target.checked)
                                                                             console.log(e.target.checked)
                                                                           }
                                                                         }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 115</span>
                  <ToggleSwitch checked={selectedMath115}
                                id='math7-115'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-115", `${e.target.checked}`)
                                    setSelectedMath115(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 116</span>
                  <ToggleSwitch checked={selectedMath116}
                                id='math7-116'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-116", `${e.target.checked}`)
                                    setSelectedMath116(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 117</span>
                  <ToggleSwitch checked={selectedMath117}
                                id='math7-117'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-117", `${e.target.checked}`)
                                    setSelectedMath117(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 118</span>
                  <ToggleSwitch checked={selectedMath118}
                                id='math7-118'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-118", `${e.target.checked}`)
                                    setSelectedMath118(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 119</span>
                  <ToggleSwitch checked={selectedMath119}
                                id='math7-119'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-119", `${e.target.checked}`)
                                    setSelectedMath119(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 120</span>
                  <ToggleSwitch checked={selectedMath120}
                                id='math7-120'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-120", `${e.target.checked}`)
                                    setSelectedMath120(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 121</span>
                  <ToggleSwitch checked={selectedMath121}
                                id='math7-121'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-121", `${e.target.checked}`)
                                    setSelectedMath121(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 122</span>
                  <ToggleSwitch checked={selectedMath122}
                                id='math7-122'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-122", `${e.target.checked}`)
                                    setSelectedMath122(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 123</span>
                  <ToggleSwitch checked={selectedMath123}
                                id='math7-123'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-123", `${e.target.checked}`)
                                    setSelectedMath123(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 124</span>
                  <ToggleSwitch checked={selectedMath124}
                                id='math7-124'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-124", `${e.target.checked}`)
                                    setSelectedMath124(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 125</span>
                  <ToggleSwitch checked={selectedMath125}
                                id='math7-125'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-125", `${e.target.checked}`)
                                    setSelectedMath125(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 126</span>
                  <ToggleSwitch checked={selectedMath126}
                                id='math7-126'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-126", `${e.target.checked}`)
                                    setSelectedMath126(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 127</span>
                  <ToggleSwitch checked={selectedMath127}
                                id='math7-127'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-127", `${e.target.checked}`)
                                    setSelectedMath127(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 128</span>
                  <ToggleSwitch checked={selectedMath128}
                                id='math7-128'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-128", `${e.target.checked}`)
                                    setSelectedMath128(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 129</span>
                  <ToggleSwitch checked={selectedMath129}
                                id='math7-129'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-129", `${e.target.checked}`)
                                    setSelectedMath129(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 130</span>
                  <ToggleSwitch checked={selectedMath130}
                                id='math7-130'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-130", `${e.target.checked}`)
                                    setSelectedMath130(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 131</span>
                  <ToggleSwitch checked={selectedMath131}
                                id='math7-131'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-131", `${e.target.checked}`)
                                    setSelectedMath131(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 132</span>
                  <ToggleSwitch checked={selectedMath132}
                                id='math7-132'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-132", `${e.target.checked}`)
                                    setSelectedMath132(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 133 Course Challenge</span>
                  <ToggleSwitch checked={selectedMath133}
                                id='math7-133'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-133", `${e.target.checked}`)
                                    setSelectedMath133(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Getting Ready for the 7th Grade - Lesson 134 </span>
                  <ToggleSwitch checked={selectedMath134}
                                id='math7-134'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-134", `${e.target.checked}`)
                                    setSelectedMath134(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>

                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 135</span>
                  <ToggleSwitch checked={selectedMath135}
                                id='math7-135'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-135", `${e.target.checked}`)
                                    setSelectedMath135(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 136</span>
                  <ToggleSwitch checked={selectedMath136}
                                id='math7-136'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-136", `${e.target.checked}`)
                                    setSelectedMath136(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 137</span>
                  <ToggleSwitch checked={selectedMath137}
                                id='math7-137'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-137", `${e.target.checked}`)
                                    setSelectedMath137(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 138</span>
                  <ToggleSwitch checked={selectedMath138}
                                id='math7-138'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-138", `${e.target.checked}`)
                                    setSelectedMath138(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 139</span>
                  <ToggleSwitch checked={selectedMath139}
                                id='math7-139'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-139", `${e.target.checked}`)
                                    setSelectedMath139(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 140</span>
                  <ToggleSwitch checked={selectedMath140}
                                id='math7-140'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-140", `${e.target.checked}`)
                                    setSelectedMath140(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 141</span>
                  <ToggleSwitch checked={selectedMath141}
                                id='math7-141'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-141", `${e.target.checked}`)
                                    setSelectedMath141(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 142</span>
                  <ToggleSwitch checked={selectedMath142}
                                id='math7-142'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-142", `${e.target.checked}`)
                                    setSelectedMath142(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 143</span>
                  <ToggleSwitch checked={selectedMath143}
                                id='math7-143'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-143", `${e.target.checked}`)
                                    setSelectedMath143(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 144</span>
                  <ToggleSwitch checked={selectedMath144}
                                id='math7-144'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-144", `${e.target.checked}`)
                                    setSelectedMath144(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 145</span>
                  <ToggleSwitch checked={selectedMath145}
                                id='math7-145'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-145", `${e.target.checked}`)
                                    setSelectedMath145(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 146</span>
                  <ToggleSwitch checked={selectedMath146}
                                id='math7-146'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-146", `${e.target.checked}`)
                                    setSelectedMath146(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 147</span>
                  <ToggleSwitch checked={selectedMath147}
                                id='math7-147'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-147", `${e.target.checked}`)
                                    setSelectedMath147(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 148</span>
                  <ToggleSwitch checked={selectedMath148}
                                id='math7-148'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-148", `${e.target.checked}`)
                                    setSelectedMath148(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 149</span>
                  <ToggleSwitch checked={selectedMath149}
                                id='math7-149'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-149", `${e.target.checked}`)
                                    setSelectedMath149(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 150</span>
                  <ToggleSwitch checked={selectedMath150}
                                id='math7-150'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-150", `${e.target.checked}`)
                                    setSelectedMath150(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 151</span>
                  <ToggleSwitch checked={selectedMath151}
                                id='math7-151'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-151", `${e.target.checked}`)
                                    setSelectedMath151(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 152</span>
                  <ToggleSwitch checked={selectedMath152}
                                id='math7-152'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-152", `${e.target.checked}`)
                                    setSelectedMath152(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 153</span>
                  <ToggleSwitch checked={selectedMath153}
                                id='math7-153'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-153", `${e.target.checked}`)
                                    setSelectedMath153(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 154</span>
                  <ToggleSwitch checked={selectedMath154}
                                id='math7-154'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-154", `${e.target.checked}`)
                                    setSelectedMath154(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 155</span>
                  <ToggleSwitch checked={selectedMath155}
                                id='math7-155'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-155", `${e.target.checked}`)
                                    setSelectedMath155(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 156</span>
                  <ToggleSwitch checked={selectedMath156}
                                id='math7-156'
                                label='Completed'
                                onChange={
                                  (e) => {
                                    localStorage.setItem("math7-156", `${e.target.checked}`)
                                    setSelectedMath156(e.target.checked)
                                    console.log(e.target.checked)
                                  }
                                }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 157</span> <ToggleSwitch checked={selectedMath157}
                                                                         id='math7-157'
                                                                         label='Completed'
                                                                         onChange={
                                                                           (e) => {
                                                                             localStorage.setItem("math7-157", `${e.target.checked}`)
                                                                             setSelectedMath157(e.target.checked)
                                                                             console.log(e.target.checked)
                                                                           }
                                                                         }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 158</span> <ToggleSwitch checked={selectedMath158}
                                                                         id='math7-158'
                                                                         label='Completed'
                                                                         onChange={
                                                                           (e) => {
                                                                             localStorage.setItem("math7-158", `${e.target.checked}`)
                                                                             setSelectedMath158(e.target.checked)
                                                                             console.log(e.target.checked)
                                                                           }
                                                                         }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 159</span> <ToggleSwitch checked={selectedMath159}
                                                                         id='math7-159'
                                                                         label='Completed'
                                                                         onChange={
                                                                           (e) => {
                                                                             localStorage.setItem("math7-159", `${e.target.checked}`)
                                                                             setSelectedMath159(e.target.checked)
                                                                             console.log(e.target.checked)
                                                                           }
                                                                         }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 160</span> <ToggleSwitch checked={selectedMath160}
                                                                         id='math7-160'
                                                                         label='Completed'
                                                                         onChange={
                                                                           (e) => {
                                                                             localStorage.setItem("math7-160", `${e.target.checked}`)
                                                                             setSelectedMath160(e.target.checked)
                                                                             console.log(e.target.checked)
                                                                           }
                                                                         }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 161</span> <ToggleSwitch checked={selectedMath161}
                                                                         id='math7-161'
                                                                         label='Completed'
                                                                         onChange={
                                                                           (e) => {
                                                                             localStorage.setItem("math7-161", `${e.target.checked}`)
                                                                             setSelectedMath161(e.target.checked)
                                                                             console.log(e.target.checked)
                                                                           }
                                                                         }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 162</span> <ToggleSwitch checked={selectedMath162}
                                                                         id='math7-162'
                                                                         label='Completed'
                                                                         onChange={
                                                                           (e) => {
                                                                             localStorage.setItem("math7-162", `${e.target.checked}`)
                                                                             setSelectedMath162(e.target.checked)
                                                                             console.log(e.target.checked)
                                                                           }
                                                                         }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 163</span> <ToggleSwitch checked={selectedMath163}
                                                                         id='math7-163'
                                                                         label='Completed'
                                                                         onChange={
                                                                           (e) => {
                                                                             localStorage.setItem("math7-163", `${e.target.checked}`)
                                                                             setSelectedMath163(e.target.checked)
                                                                             console.log(e.target.checked)
                                                                           }
                                                                         }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 164</span> <ToggleSwitch checked={selectedMath164}
                                                                         id='math7-164'
                                                                         label='Completed'
                                                                         onChange={
                                                                           (e) => {
                                                                             localStorage.setItem("math7-164", `${e.target.checked}`)
                                                                             setSelectedMath164(e.target.checked)
                                                                             console.log(e.target.checked)
                                                                           }
                                                                         }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 165</span> <ToggleSwitch checked={selectedMath165}
                                                                         id='math7-165'
                                                                         label='Completed'
                                                                         onChange={
                                                                           (e) => {
                                                                             localStorage.setItem("math7-165", `${e.target.checked}`)
                                                                             setSelectedMath165(e.target.checked)
                                                                             console.log(e.target.checked)
                                                                           }
                                                                         }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 166</span> <ToggleSwitch checked={selectedMath166}
                                                                         id='math7-166'
                                                                         label='Completed'
                                                                         onChange={
                                                                           (e) => {
                                                                             localStorage.setItem("math7-166", `${e.target.checked}`)
                                                                             setSelectedMath166(e.target.checked)
                                                                             console.log(e.target.checked)
                                                                           }
                                                                         }/><p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 167</span> <ToggleSwitch checked={selectedMath167}
                                                                         id='math7-167'
                                                                         label='Completed'
                                                                         onChange={
                                                                           (e) => {
                                                                             localStorage.setItem("math7-167", `${e.target.checked}`)
                                                                             setSelectedMath167(e.target.checked)
                                                                             console.log(e.target.checked)
                                                                           }
                                                                         }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 168</span> <ToggleSwitch checked={selectedMath168}
                                                                         id='math7-168'
                                                                         label='Completed'
                                                                         onChange={
                                                                           (e) => {
                                                                             localStorage.setItem("math7-168", `${e.target.checked}`)
                                                                             setSelectedMath168(e.target.checked)
                                                                             console.log(e.target.checked)
                                                                           }
                                                                         }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">Lesson 169</span> <ToggleSwitch checked={selectedMath169}
                                                                         id='math7-169'
                                                                         label='Completed'
                                                                         onChange={
                                                                           (e) => {
                                                                             localStorage.setItem("math7-169", `${e.target.checked}`)
                                                                             setSelectedMath169(e.target.checked)
                                                                             console.log(e.target.checked)
                                                                           }
                                                                         }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  <span className="days">FINAL COURSE CHALLENGE - LESSON 170</span> <ToggleSwitch
                  checked={selectedMath170}
                  id='math7-170'
                  label='Completed'
                  onChange={
                    (e) => {
                      localStorage.setItem("math7-170", `${e.target.checked}`)
                      setSelectedMath170(e.target.checked)
                      console.log(e.target.checked)
                    }
                  }/>
                  <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>
                  {/*<span className="days">Lesson 171</span><p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>*/}
                  {/*<span className="days">Lesson 172</span><p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>*/}
                  {/*<span className="days">Lesson 173</span><p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>*/}
                  {/*<span className="days">Lesson 174</span><p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>*/}
                  {/*<span className="days">Lesson 175</span><p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>*/}
                  {/*<span className="days">Lesson 176</span><p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>*/}
                  {/*<span className="days">Lesson 177</span><p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>*/}
                  {/*<span className="days">Lesson 178</span><p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>*/}
                  {/*<span className="days">Lesson 179</span> <p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>*/}
                  {/*<span className="days">Lesson 180</span><p className="margin-para"> <a href="" rel="noreferrer" target="_blank"> </a></p>*/}
                </form>
              </div>
            </div>
          </section>
        </>
      </LazyLoad>
    </Layout>

  )
}

export default Math7
