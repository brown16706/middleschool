import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import ToggleSwitch from "../components/checkbox"
import "../styles/styles.css"
import ScrollToTop from "react-scroll-to-top"
import Video from "../components/video"

const Coding = ({ data }) => {

  const [selectedCoding1, setSelectedCoding1] = React.useState(localStorage.getItem("coding-1") === "true")
  const [selectedCoding2, setSelectedCoding2] = React.useState(localStorage.getItem("coding-2") === "true")
  const [selectedCoding3, setSelectedCoding3] = React.useState(localStorage.getItem("coding-3") === "true")
  const [selectedCoding4, setSelectedCoding4] = React.useState(localStorage.getItem("coding-4") === "true")
  const [selectedCoding5, setSelectedCoding5] = React.useState(localStorage.getItem("coding-5") === "true")
  const [selectedCoding6, setSelectedCoding6] = React.useState(localStorage.getItem("coding-6") === "true")
  const [selectedCoding7, setSelectedCoding7] = React.useState(localStorage.getItem("coding-7") === "true")
  const [selectedCoding8, setSelectedCoding8] = React.useState(localStorage.getItem("coding-8") === "true")
  const [selectedCoding9, setSelectedCoding9] = React.useState(localStorage.getItem("coding-9") === "true")
  const [selectedCoding10, setSelectedCoding10] = React.useState(localStorage.getItem("coding-10") === "true")
  const [selectedCoding11, setSelectedCoding11] = React.useState(localStorage.getItem("coding-11") === "true")
  const [selectedCoding12, setSelectedCoding12] = React.useState(localStorage.getItem("coding-12") === "true")
  const [selectedCoding13, setSelectedCoding13] = React.useState(localStorage.getItem("coding-13") === "true")
  const [selectedCoding14, setSelectedCoding14] = React.useState(localStorage.getItem("coding-14") === "true")
  const [selectedCoding15, setSelectedCoding15] = React.useState(localStorage.getItem("coding-15") === "true")
  const [selectedCoding16, setSelectedCoding16] = React.useState(localStorage.getItem("coding-16") === "true")
  const [selectedCoding17, setSelectedCoding17] = React.useState(localStorage.getItem("coding-17") === "true")
  const [selectedCoding18, setSelectedCoding18] = React.useState(localStorage.getItem("coding-18") === "true")
  const [selectedCoding19, setSelectedCoding19] = React.useState(localStorage.getItem("coding-19") === "true")
  const [selectedCoding20, setSelectedCoding20] = React.useState(localStorage.getItem("coding-20") === "true")
  const [selectedCoding21, setSelectedCoding21] = React.useState(localStorage.getItem("coding-21") === "true")
  const [selectedCoding22, setSelectedCoding22] = React.useState(localStorage.getItem("coding-22") === "true")
  const [selectedCoding23, setSelectedCoding23] = React.useState(localStorage.getItem("coding-23") === "true")
  const [selectedCoding24, setSelectedCoding24] = React.useState(localStorage.getItem("coding-24") === "true")
  const [selectedCoding25, setSelectedCoding25] = React.useState(localStorage.getItem("coding-25") === "true")
  const [selectedCoding26, setSelectedCoding26] = React.useState(localStorage.getItem("coding-26") === "true")
  const [selectedCoding27, setSelectedCoding27] = React.useState(localStorage.getItem("coding-27") === "true")
  const [selectedCoding28, setSelectedCoding28] = React.useState(localStorage.getItem("coding-28") === "true")
  const [selectedCoding29, setSelectedCoding29] = React.useState(localStorage.getItem("coding-29") === "true")
  const [selectedCoding30, setSelectedCoding30] = React.useState(localStorage.getItem("coding-30") === "true")
  const [selectedCoding31, setSelectedCoding31] = React.useState(localStorage.getItem("coding-31") === "true")
  const [selectedCoding32, setSelectedCoding32] = React.useState(localStorage.getItem("coding-32") === "true")
  const [selectedCoding33, setSelectedCoding33] = React.useState(localStorage.getItem("coding-33") === "true")
  const [selectedCoding34, setSelectedCoding34] = React.useState(localStorage.getItem("coding-34") === "true")
  const [selectedCoding35, setSelectedCoding35] = React.useState(localStorage.getItem("coding-35") === "true")
  const [selectedCoding36, setSelectedCoding36] = React.useState(localStorage.getItem("coding-36") === "true")
  const [selectedCoding37, setSelectedCoding37] = React.useState(localStorage.getItem("coding-37") === "true")
  const [selectedCoding38, setSelectedCoding38] = React.useState(localStorage.getItem("coding-38") === "true")
  const [selectedCoding39, setSelectedCoding39] = React.useState(localStorage.getItem("coding-39") === "true")
  const [selectedCoding40, setSelectedCoding40] = React.useState(localStorage.getItem("coding-40") === "true")
  const [selectedCoding41, setSelectedCoding41] = React.useState(localStorage.getItem("coding-41") === "true")
  const [selectedCoding42, setSelectedCoding42] = React.useState(localStorage.getItem("coding-42") === "true")
  const [selectedCoding43, setSelectedCoding43] = React.useState(localStorage.getItem("coding-43") === "true")
  const [selectedCoding44, setSelectedCoding44] = React.useState(localStorage.getItem("coding-44") === "true")
  const [selectedCoding45, setSelectedCoding45] = React.useState(localStorage.getItem("coding-45") === "true")
  const [selectedCoding46, setSelectedCoding46] = React.useState(localStorage.getItem("coding-46") === "true")
  const [selectedCoding47, setSelectedCoding47] = React.useState(localStorage.getItem("coding-47") === "true")
  const [selectedCoding48, setSelectedCoding48] = React.useState(localStorage.getItem("coding-48") === "true")
  const [selectedCoding49, setSelectedCoding49] = React.useState(localStorage.getItem("coding-49") === "true")
  const [selectedCoding50, setSelectedCoding50] = React.useState(localStorage.getItem("coding-50") === "true")
  const [selectedCoding51, setSelectedCoding51] = React.useState(localStorage.getItem("coding-51") === "true")
  const [selectedCoding52, setSelectedCoding52] = React.useState(localStorage.getItem("coding-52") === "true")
  const [selectedCoding53, setSelectedCoding53] = React.useState(localStorage.getItem("coding-53") === "true")
  const [selectedCoding54, setSelectedCoding54] = React.useState(localStorage.getItem("coding-54") === "true")
  const [selectedCoding55, setSelectedCoding55] = React.useState(localStorage.getItem("coding-55") === "true")
  const [selectedCoding56, setSelectedCoding56] = React.useState(localStorage.getItem("coding-56") === "true")
  const [selectedCoding57, setSelectedCoding57] = React.useState(localStorage.getItem("coding-57") === "true")
  const [selectedCoding58, setSelectedCoding58] = React.useState(localStorage.getItem("coding-58") === "true")
  const [selectedCoding59, setSelectedCoding59] = React.useState(localStorage.getItem("coding-59") === "true")
  const [selectedCoding60, setSelectedCoding60] = React.useState(localStorage.getItem("coding-60") === "true")
  const [selectedCoding61, setSelectedCoding61] = React.useState(localStorage.getItem("coding-61") === "true")
  const [selectedCoding62, setSelectedCoding62] = React.useState(localStorage.getItem("coding-62") === "true")
  const [selectedCoding63, setSelectedCoding63] = React.useState(localStorage.getItem("coding-63") === "true")
  const [selectedCoding64, setSelectedCoding64] = React.useState(localStorage.getItem("coding-64") === "true")
  const [selectedCoding65, setSelectedCoding65] = React.useState(localStorage.getItem("coding-65") === "true")
  const [selectedCoding66, setSelectedCoding66] = React.useState(localStorage.getItem("coding-66") === "true")
  const [selectedCoding67, setSelectedCoding67] = React.useState(localStorage.getItem("coding-67") === "true")
  const [selectedCoding68, setSelectedCoding68] = React.useState(localStorage.getItem("coding-68") === "true")
  const [selectedCoding69, setSelectedCoding69] = React.useState(localStorage.getItem("coding-69") === "true")
  const [selectedCoding70, setSelectedCoding70] = React.useState(localStorage.getItem("coding-70") === "true")
  const [selectedCoding71, setSelectedCoding71] = React.useState(localStorage.getItem("coding-71") === "true")
  const [selectedCoding72, setSelectedCoding72] = React.useState(localStorage.getItem("coding-72") === "true")
  const [selectedCoding73, setSelectedCoding73] = React.useState(localStorage.getItem("coding-73") === "true")
  const [selectedCoding74, setSelectedCoding74] = React.useState(localStorage.getItem("coding-74") === "true")
  const [selectedCoding75, setSelectedCoding75] = React.useState(localStorage.getItem("coding-75") === "true")
  const [selectedCoding76, setSelectedCoding76] = React.useState(localStorage.getItem("coding-76") === "true")
  const [selectedCoding77, setSelectedCoding77] = React.useState(localStorage.getItem("coding-77") === "true")
  const [selectedCoding78, setSelectedCoding78] = React.useState(localStorage.getItem("coding-78") === "true")
  const [selectedCoding79, setSelectedCoding79] = React.useState(localStorage.getItem("coding-79") === "true")
  const [selectedCoding80, setSelectedCoding80] = React.useState(localStorage.getItem("coding-80") === "true")
  const [selectedCoding81, setSelectedCoding81] = React.useState(localStorage.getItem("coding-81") === "true")
  const [selectedCoding82, setSelectedCoding82] = React.useState(localStorage.getItem("coding-82") === "true")
  const [selectedCoding83, setSelectedCoding83] = React.useState(localStorage.getItem("coding-83") === "true")
  const [selectedCoding84, setSelectedCoding84] = React.useState(localStorage.getItem("coding-84") === "true")
  const [selectedCoding85, setSelectedCoding85] = React.useState(localStorage.getItem("coding-85") === "true")
  const [selectedCoding86, setSelectedCoding86] = React.useState(localStorage.getItem("coding-86") === "true")
  const [selectedCoding87, setSelectedCoding87] = React.useState(localStorage.getItem("coding-87") === "true")
  const [selectedCoding88, setSelectedCoding88] = React.useState(localStorage.getItem("coding-88") === "true")
  const [selectedCoding89, setSelectedCoding89] = React.useState(localStorage.getItem("coding-89") === "true")
  const [selectedCoding90, setSelectedCoding90] = React.useState(localStorage.getItem("coding-90") === "true")
  const [selectedCoding91, setSelectedCoding91] = React.useState(localStorage.getItem("coding-91") === "true")
  const [selectedCoding92, setSelectedCoding92] = React.useState(localStorage.getItem("coding-92") === "true")
  const [selectedCoding93, setSelectedCoding93] = React.useState(localStorage.getItem("coding-93") === "true")
  const [selectedCoding94, setSelectedCoding94] = React.useState(localStorage.getItem("coding-94") === "true")
  const [selectedCoding95, setSelectedCoding95] = React.useState(localStorage.getItem("coding-95") === "true")
  const [selectedCoding96, setSelectedCoding96] = React.useState(localStorage.getItem("coding-96") === "true")
  const [selectedCoding97, setSelectedCoding97] = React.useState(localStorage.getItem("coding-97") === "true")
  const [selectedCoding98, setSelectedCoding98] = React.useState(localStorage.getItem("coding-98") === "true")
  const [selectedCoding99, setSelectedCoding99] = React.useState(localStorage.getItem("coding-99") === "true")
  const [selectedCoding100, setSelectedCoding100] = React.useState(localStorage.getItem("coding-100") === "true")
  const [selectedCoding101, setSelectedCoding101] = React.useState(localStorage.getItem("coding-101") === "true")
  const [selectedCoding102, setSelectedCoding102] = React.useState(localStorage.getItem("coding-102") === "true")
  const [selectedCoding103, setSelectedCoding103] = React.useState(localStorage.getItem("coding-103") === "true")
  const [selectedCoding104, setSelectedCoding104] = React.useState(localStorage.getItem("coding-104") === "true")
  const [selectedCoding105, setSelectedCoding105] = React.useState(localStorage.getItem("coding-105") === "true")
  const [selectedCoding106, setSelectedCoding106] = React.useState(localStorage.getItem("coding-106") === "true")
  const [selectedCoding107, setSelectedCoding107] = React.useState(localStorage.getItem("coding-107") === "true")
  const [selectedCoding108, setSelectedCoding108] = React.useState(localStorage.getItem("coding-108") === "true")
  const [selectedCoding109, setSelectedCoding109] = React.useState(localStorage.getItem("coding-109") === "true")
  const [selectedCoding110, setSelectedCoding110] = React.useState(localStorage.getItem("coding-110") === "true")
  const [selectedCoding111, setSelectedCoding111] = React.useState(localStorage.getItem("coding-111") === "true")
  const [selectedCoding112, setSelectedCoding112] = React.useState(localStorage.getItem("coding-112") === "true")
  const [selectedCoding113, setSelectedCoding113] = React.useState(localStorage.getItem("coding-113") === "true")
  const [selectedCoding114, setSelectedCoding114] = React.useState(localStorage.getItem("coding-114") === "true")
  const [selectedCoding115, setSelectedCoding115] = React.useState(localStorage.getItem("coding-115") === "true")
  const [selectedCoding116, setSelectedCoding116] = React.useState(localStorage.getItem("coding-116") === "true")
  const [selectedCoding117, setSelectedCoding117] = React.useState(localStorage.getItem("coding-117") === "true")
  const [selectedCoding118, setSelectedCoding118] = React.useState(localStorage.getItem("coding-118") === "true")
  const [selectedCoding119, setSelectedCoding119] = React.useState(localStorage.getItem("coding-119") === "true")
  const [selectedCoding120, setSelectedCoding120] = React.useState(localStorage.getItem("coding-120") === "true")
  const [selectedCoding121, setSelectedCoding121] = React.useState(localStorage.getItem("coding-121") === "true")
  const [selectedCoding122, setSelectedCoding122] = React.useState(localStorage.getItem("coding-122") === "true")
  const [selectedCoding123, setSelectedCoding123] = React.useState(localStorage.getItem("coding-123") === "true")
  const [selectedCoding124, setSelectedCoding124] = React.useState(localStorage.getItem("coding-124") === "true")
  const [selectedCoding125, setSelectedCoding125] = React.useState(localStorage.getItem("coding-125") === "true")
  const [selectedCoding126, setSelectedCoding126] = React.useState(localStorage.getItem("coding-126") === "true")
  const [selectedCoding127, setSelectedCoding127] = React.useState(localStorage.getItem("coding-127") === "true")
  const [selectedCoding128, setSelectedCoding128] = React.useState(localStorage.getItem("coding-128") === "true")
  const [selectedCoding129, setSelectedCoding129] = React.useState(localStorage.getItem("coding-129") === "true")
  // const [selectedCoding130, setSelectedCoding130] = React.useState(localStorage.getItem("coding-130") === "true")
  // const [selectedCoding131, setSelectedCoding131] = React.useState(localStorage.getItem("coding-131") === "true")
  // const [selectedCoding132, setSelectedCoding132] = React.useState(localStorage.getItem("coding-132") === "true")
  // const [selectedCoding133, setSelectedCoding133] = React.useState(localStorage.getItem("coding-133") === "true")
  // const [selectedCoding134, setSelectedCoding134] = React.useState(localStorage.getItem("coding-134") === "true")
  // const [selectedCoding135, setSelectedCoding135] = React.useState(localStorage.getItem("coding-135") === "true")
  // const [selectedCoding136, setSelectedCoding136] = React.useState(localStorage.getItem("coding-136") === "true")
  // const [selectedCoding137, setSelectedCoding137] = React.useState(localStorage.getItem("coding-137") === "true")
  // const [selectedCoding138, setSelectedCoding138] = React.useState(localStorage.getItem("coding-138") === "true")
  // const [selectedCoding139, setSelectedCoding139] = React.useState(localStorage.getItem("coding-139") === "true")
  // const [selectedCoding140, setSelectedCoding140] = React.useState(localStorage.getItem("coding-140") === "true")
  // const [selectedCoding141, setSelectedCoding141] = React.useState(localStorage.getItem("coding-141") === "true")
  // const [selectedCoding142, setSelectedCoding142] = React.useState(localStorage.getItem("coding-142") === "true")
  // const [selectedCoding143, setSelectedCoding143] = React.useState(localStorage.getItem("coding-143") === "true")
  // const [selectedCoding144, setSelectedCoding144] = React.useState(localStorage.getItem("coding-144") === "true")
  // const [selectedCoding145, setSelectedCoding145] = React.useState(localStorage.getItem("coding-145") === "true")
  // const [selectedCoding146, setSelectedCoding146] = React.useState(localStorage.getItem("coding-146") === "true")
  // const [selectedCoding147, setSelectedCoding147] = React.useState(localStorage.getItem("coding-147") === "true")
  // const [selectedCoding148, setSelectedCoding148] = React.useState(localStorage.getItem("coding-148") === "true")
  // const [selectedCoding149, setSelectedCoding149] = React.useState(localStorage.getItem("coding-149") === "true")
  // const [selectedCoding150, setSelectedCoding150] = React.useState(localStorage.getItem("coding-150") === "true")
  // const [selectedCoding151, setSelectedCoding151] = React.useState(localStorage.getItem("coding-151") === "true")
  // const [selectedCoding152, setSelectedCoding152] = React.useState(localStorage.getItem("coding-152") === "true")
  // const [selectedCoding153, setSelectedCoding153] = React.useState(localStorage.getItem("coding-153") === "true")
  // const [selectedCoding154, setSelectedCoding154] = React.useState(localStorage.getItem("coding-154") === "true")
  // const [selectedCoding155, setSelectedCoding155] = React.useState(localStorage.getItem("coding-155") === "true")
  // const [selectedCoding156, setSelectedCoding156] = React.useState(localStorage.getItem("coding-156") === "true")
  // const [selectedCoding157, setSelectedCoding157] = React.useState(localStorage.getItem("coding-157") === "true")
  // const [selectedCoding158, setSelectedCoding158] = React.useState(localStorage.getItem("coding-158") === "true")
  // const [selectedCoding159, setSelectedCoding159] = React.useState(localStorage.getItem("coding-159") === "true")
  // const [selectedCoding160, setSelectedCoding160] = React.useState(localStorage.getItem("coding-160") === "true")
  // const [selectedCoding161, setSelectedCoding161] = React.useState(localStorage.getItem("coding-161") === "true")
  // const [selectedCoding162, setSelectedCoding162] = React.useState(localStorage.getItem("coding-162") === "true")
  // const [selectedCoding163, setSelectedCoding163] = React.useState(localStorage.getItem("coding-163") === "true")
  // const [selectedCoding164, setSelectedCoding164] = React.useState(localStorage.getItem("coding-164") === "true")
  // const [selectedCoding165, setSelectedCoding165] = React.useState(localStorage.getItem("coding-165") === "true")
  // const [selectedCoding166, setSelectedCoding166] = React.useState(localStorage.getItem("coding-166") === "true")
  // const [selectedCoding167, setSelectedCoding167] = React.useState(localStorage.getItem("coding-167") === "true")
  // const [selectedCoding168, setSelectedCoding168] = React.useState(localStorage.getItem("coding-168") === "true")
  // const [selectedCoding169, setSelectedCoding169] = React.useState(localStorage.getItem("coding-169") === "true")
  // const [selectedCoding170, setSelectedCoding170] = React.useState(localStorage.getItem("coding-170") === "true")
  // const [selectedCoding171, setSelectedCoding171] = React.useState(localStorage.getItem("coding-171") === "true")
  // const [selectedCoding172, setSelectedCoding172] = React.useState(localStorage.getItem("coding-172") === "true")
  // const [selectedCoding173, setSelectedCoding173] = React.useState(localStorage.getItem("coding-173") === "true")
  // const [selectedCoding174, setSelectedCoding174] = React.useState(localStorage.getItem("coding-174") === "true")
  // const [selectedCoding175, setSelectedCoding175] = React.useState(localStorage.getItem("coding-175") === "true")
  // const [selectedCoding176, setSelectedCoding176] = React.useState(localStorage.getItem("coding-176") === "true")
  // const [selectedCoding177, setSelectedCoding177] = React.useState(localStorage.getItem("coding-177") === "true")
  // const [selectedCoding178, setSelectedCoding178] = React.useState(localStorage.getItem("coding-178") === "true")
  // const [selectedCoding179, setSelectedCoding179] = React.useState(localStorage.getItem("coding-179") === "true")
  // const [selectedCoding180, setSelectedCoding180] = React.useState(localStorage.getItem("coding-180") === "true")

  return (

    <Layout>

      <SEO
        title="Coding"
        description="Learn and develop your coding skills."
        image="/logo.png"
        pathname="/coding"

      />
      <ScrollToTop smooth color="#78CCC7"/>
      <>
      <section className="block-circles">
        <div className="subjects-circle circle1"
             style={{
               background: "#B8D8BF",
               transform: "translate3d(0px, 0px, 0px) scale(0.9921, 1)",
               opacity: "1"
             }}/>

        <div className="subjects-circle circle2"
             style={{ background: "#B8D8BF", transform: "translate(0px, 0px)", opacity: 1 }}/>
        <div className="hero-wrapper pbn hero">
          <h1 className="hero intro" data-sal="slide-up" data-sal-duration="1000"
              data-sal-easing="ease">Coding</h1>
          <div className="hero info-block info-block-line" data-sal="slide-up" data-sal-duration="1000"
               data-sal-easing="ease">
            <h1 className="section-title daily-margin" data-sal="slide-up"
                data-sal-delay="300" data-sal-easing="ease" id="math">Daily Lessons</h1>
          </div>
        </div>
      </section>


      {/*-------------------     LESSONS     -----------------------*/}
      <section className="section math-section raise-top">
        <div className="section-content">
          <form>
            <span className="days">LESSON 1</span>
            <ToggleSwitch checked={selectedCoding1} id='code-1' label='Completed' onChange={
              (e) => {
                localStorage.setItem("code-1", `${e.target.checked}`)
                setSelectedCoding1(e.target.checked)
                console.log(e.target.checked)
              }}/>

            <p>Watch the video below: <b>Is Computer Programming hard to learn?</b></p>
            <Video videoUrl="https://www.youtube.com/embed/Zwwzrynqv_o"/>
            <p>After you watch the video, go to <a href="https://codecombat.com/" target="_blank"
                                                   rel="noopener noreferrer"> Code Combat </a>and
              sign up for a free account. A paid subscription is not
              required to use this site.
            </p>
            <ul className="assnList">
              <li>Sign up as an "Individual." The site will ask that your parent or teacher sign you up since
                there's
                an age requirement. Sign up requires only an email address, username and password. As with your
                other usernames and password be sure to save these in a safe place.
              </li>
              <li>Choose your character and select Javascript for your programming language. This course will
                focus on JavaScript but if there is another language you prefer to use, select this instead. Then
                start playing the game. The course will start with basic coding concepts and become more
                complicated, developing coding skills as you go. Each level will offer tips on how to progress.
              </li>
              <li>Play for 30 to 50 minutes. Happy coding! Remember to check the <i>Completed</i> checkbox above
                when you're done.
              </li>
            </ul>
            <br/>

            <span className="days">LESSON 2</span>
            <ToggleSwitch checked={selectedCoding2} id='code-2' label='Completed' onChange={
              (e) => {
                localStorage.setItem("code-2", `${e.target.checked}`)

                setSelectedCoding2(e.target.checked)
                console.log(e.target.checked)
              }}/>
            <ul className="assnList">
              <li>Watch the video below: <b>The Prison Break | Think Like A Coder, Episode 1</b></li>
              <Video videoUrl="https://www.youtube.com/embed/KFVdHDMcepw"/>
              <li>Go to <a href="https://codecombat.com/" target="_blank" rel="noopener noreferrer"> Code
                Combat </a>and play for 30 to 50
                minutes. Happy coding! Don't forget to check the <i>Completed</i> checkbox above
                when you're done.
              </li>
            </ul>
            <br/>

            <span className="days">LESSON 3</span>
            <ToggleSwitch checked={selectedCoding3} id='code-3' label='Completed' onChange={
              (e) => {
                localStorage.setItem("code-3", `${e.target.checked}`)

                setSelectedCoding3(e.target.checked)
                console.log(e.target.checked)
              }}/>
            <ul className="assnList">
              <li>Watch the video below: <b>Computer Science is Changing Everything</b></li>
              <Video videoUrl="https://www.youtube.com/embed/QvyTEx1wyOY"/>
              <li>Create a free account with <a href="https://studio.code.org/users/sign_up"
                                                target="_blank" rel="noopener noreferrer"><b> Code.org</b> by clicking
                here. </a>
              </li>
              <li>After your account is set up, complete <a href="https://studio.code.org/s/express-2020"
                                                            target="_blank" rel="noopener noreferrer">Dance Party, Units
                1-15.</a>
              </li>
              <li>Go to <a href="https://codecombat.com/" target="_blank" rel="noopener noreferrer"> Code Combat </a>and
                play for the remainder of your code class time. Remember to check the <i>Completed</i> checkbox above
                when you're done.
              </li>
            </ul>
            <br/>

            <span className="days">LESSON 4</span>
            <ToggleSwitch checked={selectedCoding4} id='code-4' label='Completed' onChange={
              (e) => {
                localStorage.setItem("code-4", `${e.target.checked}`)

                setSelectedCoding4(e.target.checked)
                console.log(e.target.checked)
              }}/>
            <ul className="assnList">
              <li>Complete <a href="https://studio.code.org/s/express-2020/stage/2/puzzle/1" target="_blank"
                              rel="noopener noreferrer">Programming
                with Angry Birds, Units 1-11</a>
              </li>
              <li>Go to <a href="https://codecombat.com/" target="_blank" rel="noopener noreferrer"> Code Combat </a>and
                play for
                the remainder of your code class time. Remember to check the <i>Completed</i> checkbox above
                when you're done.
              </li>
            </ul>
            <br/>

            <span className="days">LESSON 5</span>
            <ToggleSwitch checked={selectedCoding5} id='code-5' label='Completed' onChange={
              (e) => {
                localStorage.setItem("code-5", `${e.target.checked}`)

                setSelectedCoding5(e.target.checked)
                console.log(e.target.checked)
              }}/>
            <ul className="assnList">
              <li>Complete <a href="https://studio.code.org/s/express-2020/stage/3/puzzle/1" target="_blank"
                              rel="noopener noreferrer">Debugging
                with Scrat, Units 1-10 </a>
              </li>
              <li>If time allows, go to <a href="https://codecombat.com/" target="_blank"
                                           rel="noopener noreferrer"> Code Combat </a>and play for
                the remainder of your code class time. Remember to check the <i>Completed</i> checkbox above
                when you're done.
              </li>
            </ul>
            <br/>

            <span className="days">LESSON 6</span>
            <ToggleSwitch checked={selectedCoding6} id='code-6' label='Completed' onChange={
              (e) => {
                localStorage.setItem("code-6", `${e.target.checked}`)

                setSelectedCoding6(e.target.checked)
                console.log(e.target.checked)
              }}/>
            <ul className="assnList">
              <li>Complete <a href="https://studio.code.org/s/express-2020/stage/4/puzzle/1" target="_blank"
                              rel="noopener noreferrer"> Collecting
                Treasure with Laurel, Units 1-13</a>
              </li>
              <li>If time allows, go to <a href="https://codecombat.com/" target="_blank"
                                           rel="noopener noreferrer"> Code Combat </a>and play for
                the remainder of your code class time.
              </li>
            </ul>
            <br/>

            <span className="days">LESSON 7</span>
            <ToggleSwitch checked={selectedCoding7} id='code-7' label='Completed' onChange={
              (e) => {
                localStorage.setItem("code-7", `${e.target.checked}`)

                setSelectedCoding7(e.target.checked)
                console.log(e.target.checked)
              }}/>
            <ul className="assnList">
              <li>Complete <br/>
                <a href="https://studio.code.org/s/express-2020/stage/5/puzzle/1" target="_blank"
                   rel="noopener noreferrer"> Creating Art with
                  Code, Units 1-10</a>
              </li>
              <li>Go to <a href="https://codecombat.com/" target="_blank" rel="noopener noreferrer"> Code Combat </a>and
                play for
                the remainder of your code class time. Remember to check the <i>Completed</i> checkbox above
                when you're done.
              </li>
            </ul>
            <br/>

            <span className="days">LESSON 8</span>
            <ToggleSwitch checked={selectedCoding8} id='code-8' label='Completed' onChange={
              (e) => {
                localStorage.setItem("code-8", `${e.target.checked}`)

                setSelectedCoding8(e.target.checked)
                console.log(e.target.checked)
              }}/>
            <ul className="assnList">
              <li>Complete <a href="https://studio.code.org/s/express-2020/stage/6/puzzle/1" target="_blank"
                              rel="noopener noreferrer"> Loops with
                Rey and BB-8, Units 1-14 </a></li>
              <li>Watch the video below: <b>The Resistance | Think Like A Coder, Ep 2 </b></li>
            </ul>
            <Video videoUrl="https://www.youtube.com/embed/axBuiB55CfA"/><br/>

            <span className="days">LESSON 9</span>
            <ToggleSwitch checked={selectedCoding9} id='code-9' label='Completed' onChange={
              (e) => {
                localStorage.setItem("code-9", `${e.target.checked}`)

                setSelectedCoding9(e.target.checked)
                console.log(e.target.checked)
              }}/>
            <ul className="assnList">
              <li>Complete <a href="https://studio.code.org/s/express-2020/stage/7/puzzle/1" target="_blank"
                              rel="noopener noreferrer"> Sticker Art
                with Loops, Units 1-12</a></li>
              <li>Go to <a href="https://codecombat.com/" target="_blank" rel="noopener noreferrer"> Code Combat </a>and
                play for
                the remainder of your code class time. Remember to check the <i>Completed</i> checkbox above
                when you're done.
              </li>
            </ul>
            <br/>

            <span className="days">LESSON 10</span>
            <ToggleSwitch checked={selectedCoding10} id='code-10' label='Completed' onChange={
              (e) => {
                localStorage.setItem("code-10", `${e.target.checked}`)

                setSelectedCoding11(e.target.checked)
                console.log(e.target.checked)
              }}/>
            <ul className="assnList">
              <li>Complete <a href="https://studio.code.org/s/express-2020/stage/8/puzzle/1" target="_blank"
                              rel="noopener noreferrer"> Nested
                Loops in Maze, Units 1-13 </a></li>
              <li>Watch the video below: <b>What most schools don’t teach</b></li>
              <Video videoUrl="https://www.youtube.com/embed/nKIu9yen5nc"/></ul>
            <br/>

            <span className="days">LESSON 11</span>
            <ToggleSwitch checked={selectedCoding11} id='code-11' label='Completed' onChange={
              (e) => {
                localStorage.setItem("code-11", `${e.target.checked}`)
                setSelectedCoding12(e.target.checked)
                console.log(e.target.checked)
              }}/>
            <ul className="assnList">
              <li>Complete <a href="https://studio.code.org/s/express-2020/stage/9/puzzle/1" target="_blank"
                              rel="noopener noreferrer"> Snowflakes
                with Anna and Elsa, Units 1-6</a></li>
              <li>Go to <a href="https://codecombat.com/" target="_blank" rel="noopener noreferrer"> Code Combat </a>and
                play for
                the remainder of your code class time. Remember to check the <i>Completed</i> checkbox above
                when you're done.
              </li>
            </ul>
            <br/>

            <span className="days">LESSON 12</span>
            <ToggleSwitch checked={selectedCoding12} id='code-12' label='Completed' onChange={
              (e) => {
                localStorage.setItem("code-12", `${e.target.checked}`)

                setSelectedCoding13(e.target.checked)
                console.log(e.target.checked)
              }}/>
            <ul className="assnList">
              <li>Complete <a href="https://studio.code.org/s/express-2020" target="_blank"
                              rel="noopener noreferrer"> Looking Ahead with
                Minecraft, Units 1-14</a></li>
              <li>Go to <a href="https://codecombat.com/" target="_blank" rel="noopener noreferrer"> Code Combat </a>and
                play for
                the remainder of your code class time. Remember to check the <i>Completed</i> checkbox above
                when you're done.
              </li>
            </ul>
            <br/>

            <span className="days">LESSON 13</span>
            <ToggleSwitch checked={selectedCoding13} id='code-13' label='Completed' onChange={
              (e) => {
                localStorage.setItem("code-13", `${e.target.checked}`)

                setSelectedCoding14(e.target.checked)
                console.log(e.target.checked)
              }}/>
            <ul className="assnList">
              <li>Complete <a href="https://studio.code.org/s/express-2020/stage/11/puzzle/1" target="_blank"
                              rel="noopener noreferrer"> If/Else
                with Bee</a></li>
              <li>Go to <a href="https://codecombat.com/" target="_blank" rel="noopener noreferrer"> Code Combat </a>and
                play for
                the remainder of your code class time. Remember to check the <i>Completed</i> checkbox above
                when you're done.
              </li>
            </ul>
            <br/>

            <span className="days">LESSON 14</span>
            <ToggleSwitch checked={selectedCoding14} id='code-14' label='Completed' onChange={
              (e) => {
                localStorage.setItem("code-14", `${e.target.checked}`)

                setSelectedCoding15(e.target.checked)
                console.log(e.target.checked)
              }}/>
            <ul className="assnList">
              <li>Complete <a href="https://studio.code.org/s/express-2020/stage/12/puzzle/1" target="_blank"
                              rel="noopener noreferrer"> While
                Loops with the Farmer</a></li>
              <li>Watch the video below: <b>The Furnace Bots | Think Like A Coder, Ep 3</b></li>
              <Video videoUrl="https://www.youtube.com/embed/wQPArC8NN5o"/></ul>
            <br/>

            <span className="days">LESSON 15</span>
            <ToggleSwitch checked={selectedCoding15} id='code-15' label='Completed' onChange={
              (e) => {
                localStorage.setItem("code-15", `${e.target.checked}`)

                setSelectedCoding16(e.target.checked)
                console.log(e.target.checked)
              }}/>
            <ul className="assnList">
              <li>Complete <a href="https://studio.code.org/s/express-2020/stage/13/puzzle/1"
                              target="_blank" rel="noopener noreferrer"> Conditionals in Minecraft: Voyage
                AquaticConditionals in Minecraft: Voyage
                Aquatic</a></li>
              <li>Go to <a href="https://codecombat.com/" target="_blank" rel="noopener noreferrer"> Code
                Combat </a>and play for
                the remainder of your code class time. Remember to check the <i>Completed</i> checkbox above
                when you're done.
              </li>
            </ul>
            <br/>

            <span className="days">LESSON 16</span>
            <ToggleSwitch checked={selectedCoding16} id='code-16' label='Completed' onChange={
              (e) => {
                localStorage.setItem("code-16", `${e.target.checked}`)

                setSelectedCoding17(e.target.checked)
                console.log(e.target.checked)
              }}/>
            <ul className="assnList">
              <li>Complete <a href="https://studio.code.org/s/express-2020/stage/14/puzzle/1" target="_blank"
                              rel="noopener noreferrer"> Until
                Loops in Maze </a></li>
              <li>Go to <a href="https://codecombat.com/" target="_blank" rel="noopener noreferrer"> Code
                Combat </a>and play for
                the remainder of your code class time. Remember to check the <i>Completed</i> checkbox above
                when you're done.
              </li>
            </ul>
            <br/>

            <span className="days">LESSON 17</span>
            <ToggleSwitch checked={selectedCoding17} id='code-17' label='Completed' onChange={
              (e) => {
                localStorage.setItem("code-17", `${e.target.checked}`)

                setSelectedCoding18(e.target.checked)
                console.log(e.target.checked)
              }}/>
            <ul className="assnList">
              <li>Complete <a href="https://studio.code.org/s/express-2020/stage/15/puzzle/1" target="_blank"
                              rel="noopener noreferrer"> Harvesting
                with Conditionals</a></li>
              <li>Watch the video below: <b>The Train Heist | Think Like A Coder, Ep 4</b></li>
              <Video videoUrl="https://www.youtube.com/embed/_kR93WRw31Y"/></ul>

            <span className="days">LESSON 18</span>
            <ToggleSwitch checked={selectedCoding18} id='code-18' label='Completed' onChange={
              (e) => {
                localStorage.setItem("code-18", `${e.target.checked}`)

                setSelectedCoding19(e.target.checked)
                console.log(e.target.checked)
              }}/>
            <ul className="assnList">
              <li>Complete <a href="https://studio.code.org/s/express-2020/stage/16/puzzle/1" target="_blank"
                              rel="noopener noreferrer"> Functions
                in Minecraft</a></li>
              <li>Go to <a href="https://codecombat.com/" target="_blank" rel="noopener noreferrer"> Code
                Combat </a>and play for
                the remainder of your code class time. Remember to check the <i>Completed</i> checkbox above
                when you're done.
              </li>
            </ul>
            <br/>

            <span className="days">LESSON 19</span>
            <ToggleSwitch checked={selectedCoding19} id='code-19' label='Completed' onChange={
              (e) => {
                localStorage.setItem("code-19", `${e.target.checked}`)

                setSelectedCoding19(e.target.checked)
                console.log(e.target.checked)
              }}/>
            <ul className="assnList">
              <li>Complete <a href="https://studio.code.org/s/express-2020/stage/17/puzzle/1" target="_blank"
                              rel="noopener noreferrer">Functions
                with Harvester </a></li>
              <li>Go to <a href="https://codecombat.com/" target="_blank" rel="noopener noreferrer"> Code
                Combat </a>and play for
                the remainder of your code class time.
              </li>
            </ul>
            <br/>

            <span className="days">LESSON 20</span>
            <ToggleSwitch checked={selectedCoding20} id='code-20' label='Completed' onChange={
              (e) => {
                localStorage.setItem("code-20", `${e.target.checked}`)

                setSelectedCoding20(e.target.checked)
                console.log(e.target.checked)
              }}/>
            <ul className="assnList">
              <li>Complete <a href="https://studio.code.org/s/express-2020/stage/18/puzzle/1" target="_blank"
                              rel="noopener noreferrer"> Functions
                with Artist </a></li>
              <li>Go to <a href="https://codecombat.com/" target="_blank" rel="noopener noreferrer"> Code
                Combat </a>and play for
                the remainder of your code class time. Remember to check the <i>Completed</i> checkbox above
                when you're done.
              </li>
            </ul>
            <br/>

            <span className="days">LESSON 21</span>
            <ToggleSwitch checked={selectedCoding21} id='code-21' label='Completed' onChange={
              (e) => {
                localStorage.setItem("code-21", `${e.target.checked}`)

                setSelectedCoding21(e.target.checked)
                console.log(e.target.checked)
              }}/>
            <ul className="assnList">
              <li>Complete <a href="https://studio.code.org/s/express-2020/stage/19/puzzle/1" target="_blank"
                              rel="noopener noreferrer"> Variables
                with Artist</a></li>
              <li>Watch the video below: <b> The Artists | Think Like A Coder, Ep 5</b></li>
              <Video videoUrl="https://www.youtube.com/embed/7mOev8v3D1U"/></ul>

            <span className="days">LESSON 22</span>
            <ToggleSwitch checked={selectedCoding22} id='code-22' label='Completed' onChange={
              (e) => {
                localStorage.setItem("code-22", `${e.target.checked}`)

                setSelectedCoding22(e.target.checked)
                console.log(e.target.checked)
              }}/>
            <ul className="assnList">
              <li>Complete <a href="https://studio.code.org/s/express-2020/stage/20/puzzle/1" target="_blank"
                              rel="noopener noreferrer"> Changing
                Variables with Bee</a></li>
              <li>Go to <a href="https://codecombat.com/" target="_blank" rel="noopener noreferrer"> Code
                Combat </a>and play for
                the remainder of your code class time. Remember to check the <i>Completed</i> checkbox above
                when you're done.
              </li>
            </ul>
            <br/>

            <span className="days">LESSON 23</span>
            <ToggleSwitch checked={selectedCoding23} id='code-23' label='Completed' onChange={
              (e) => {
                localStorage.setItem("code-23", `${e.target.checked}`)

                setSelectedCoding23(e.target.checked)
                console.log(e.target.checked)
              }}/>
            <ul className="assnList">
              <li>Complete <a href="https://studio.code.org/s/express-2020/stage/21/puzzle/1" target="_blank"
                              rel="noopener noreferrer"> Changing
                Variables with Artist</a></li>
              <li>Watch the video below: <b>The Chasm | Think Like A Coder, Ep 6</b></li>
              <Video videoUrl="https://www.youtube.com/embed/bbM-zSkjvHo"/></ul>

            <span className="days">LESSON 24</span>
            <ToggleSwitch checked={selectedCoding24} id='code-24' label='Completed' onChange={
              (e) => {
                localStorage.setItem("code-24", `${e.target.checked}`)

                setSelectedCoding24(e.target.checked)
                console.log(e.target.checked)
              }}/>
            <ul className="assnList">
              <li>Complete <a href="https://studio.code.org/s/express-2020/stage/22/puzzle/1" target="_blank"
                              rel="noopener noreferrer"> For Loops
                with Bee</a></li>
              <li>Go to <a href="https://codecombat.com/" target="_blank" rel="noopener noreferrer"> Code
                Combat </a>and play for
                the remainder of your code class time. Remember to check the <i>Completed</i> checkbox above
                when you're done.
              </li>
            </ul>
            <br/>

            <span className="days">LESSON 25</span>
            <ToggleSwitch checked={selectedCoding25} id='code-25' label='Completed' onChange={
              (e) => {
                localStorage.setItem("code-25", `${e.target.checked}`)

                setSelectedCoding25(e.target.checked)
                console.log(e.target.checked)
              }}/>
            <ul className="assnList">
              <li>Complete <a href="https://studio.code.org/s/express-2020/stage/23/puzzle/1" target="_blank"
                              rel="noopener noreferrer">For Loops
                with Artist </a></li>
              <li>Watch the video below: <b>The Tower of Epiphany | Think Like A Coder, Ep 7</b></li>
              <Video videoUrl="https://www.youtube.com/embed/Xq-szohkAqU"/></ul>
            <br/>

            <span className="days">LESSON 26</span>
            <ToggleSwitch checked={selectedCoding26} id='code-26' label='Completed' onChange={
              (e) => {
                localStorage.setItem("code-26", `${e.target.checked}`)

                setSelectedCoding26(e.target.checked)
                console.log(e.target.checked)
              }}/>
            <ul className="assnList">
              <li>Complete <a href="https://studio.code.org/s/express-2020/stage/24/puzzle/1"
                              target="_blank" rel="noopener noreferrer">Swimming
                Fish in Sprite Lab </a></li>
              <li>Go to <a href="https://codecombat.com/" target="_blank" rel="noopener noreferrer"> Code
                Combat </a>and play for
                the remainder of your code class time. Remember to check the <i>Completed</i> checkbox above
                when you're done.
              </li>
            </ul>
            <br/>

            <span className="days">LESSON 27</span>
            <ToggleSwitch checked={selectedCoding27} id='code-27' label='Completed' onChange={
              (e) => {
                localStorage.setItem("code-27", `${e.target.checked}`)

                setSelectedCoding27(e.target.checked)
                console.log(e.target.checked)
              }}/>
            <ul className="assnList">
              <li>Complete <a href="https://studio.code.org/s/express-2020/stage/25/puzzle/1"
                              target="_blank" rel="noopener noreferrer"> Alien
                Dance Party</a></li>
              <li>Watch the video below: <b> The Gauntlet | Think Like A Coder, Ep 8</b></li>
              <Video videoUrl="https://www.youtube.com/embed/8dEdCea-UVU"/>
            </ul>

            <span className="days">LESSON 28</span>
            <ToggleSwitch checked={selectedCoding28} id='code-28' label='Completed' onChange={
              (e) => {
                localStorage.setItem("code-28", `${e.target.checked}`)

                setSelectedCoding28(e.target.checked)
                console.log(e.target.checked)
              }}/>
            <ul className="assnList">
              <li>Complete <a href="https://studio.code.org/s/express-2020/stage/26/puzzle/1"
                              target="_blank" rel="noopener noreferrer"> Behaviors
                in Sprite Lab</a></li>
              <li>Go to <a href="https://codecombat.com/" target="_blank" rel="noopener noreferrer"> Code
                Combat </a>and
                play for
                the remainder of your code class time. Remember to check the <i>Completed</i> checkbox above
                when you're done.
              </li>
            </ul>
            <br/>

            <span className="days">LESSON 29</span>
            <ToggleSwitch checked={selectedCoding29} id='code-29' label='Completed' onChange={
              (e) => {
                localStorage.setItem("code-29", `${e.target.checked}`)

                setSelectedCoding29(e.target.checked)
                console.log(e.target.checked)
              }}/>

            {/*<li>Complete <a href 
target="_blank" rel="noopener noreferrer"> </a></li>*/}
            <ul>
              <li>Watch the video below: <b>The Factory | Think Like A Coder, Ep 9</b></li>
              <Video videoUrl="https://www.youtube.com/embed/5y0pcLkD7-I"/>
            </ul>
            <br/>

            <span className="days">LESSON 30</span>
            <ToggleSwitch checked={selectedCoding30} id='code-30' label='Completed' onChange={
              (e) => {
                localStorage.setItem("code-30", `${e.target.checked}`)

                setSelectedCoding30(e.target.checked)
                console.log(e.target.checked)
              }}/>
            <ul className="assnList">
              <li>Complete <a href="https://studio.code.org/s/express-2020/stage/27/puzzle/1" target="_blank"
                              rel="noopener noreferrer">Virtual Pet
                with Sprite Lab </a></li>
              <li>Go to <a href="https://codecombat.com/" target="_blank" rel="noopener noreferrer"> Code
                Combat </a>and play for
                the remainder of your code class time. Remember to check the <i>Completed</i> checkbox above
                when you're done.
              </li>
            </ul>
            <br/>

            <span className="days">LESSON 31</span>
            <ToggleSwitch checked={selectedCoding31} id='code-31' label='Completed' onChange={
              (e) => {
                localStorage.setItem("code-31", `${e.target.checked}`)

                setSelectedCoding31(e.target.checked)
                console.log(e.target.checked)
              }}/>
            <ul className="assnList">
              <li>Complete <a href="https://studio.code.org/s/express-2020/stage/28/puzzle/1" target="_blank"
                              rel="noopener noreferrer">End of
                Course Project </a></li>
              <li>Watch the video below: <b>The World Machine | Think Like A Coder, Ep 10</b></li>
              <Video videoUrl="https://www.youtube.com/embed/2_CNihv5PCs"/>
            </ul>
            <br/>

            {/*https://code.org/student/middle-high*/}
            <span className="days">LESSON 32</span>
            <ToggleSwitch checked={selectedCoding32} id='code-32' label='Completed' onChange={
              (e) => {
                localStorage.setItem("code-32", `${e.target.checked}`)

                setSelectedCoding32(e.target.checked)
                console.log(e.target.checked)
              }}/>
            {/****************TO DO ********************************/}
            {/*<li>Complete  <a href=""  
target="_blank" rel="noopener noreferrer"> </a> </li>*/}
           <ul> <li>Go to <a href="https://codecombat.com/" target="_blank" rel="noopener noreferrer"> Code
              Combat </a>and play for
              the remainder of your code class time. Remember to check the <i>Completed</i> checkbox above
              when you're done.
            </li>
          </ul>
          <br/>

          <span className="days">LESSON 33</span>
          <ToggleSwitch checked={selectedCoding33} id='code-33' label='Completed' onChange={
            (e) => {
              localStorage.setItem("code-33", `${e.target.checked}`)

              setSelectedCoding33(e.target.checked)
              console.log(e.target.checked)
            }}/>
          <ul className="assnList">
            <li>Go to <a href="https://codecombat.com/" target="_blank" rel="noopener noreferrer"> Code
              Combat </a>and play for
              the remainder of your code class time. Remember to check the <i>Completed</i> checkbox above
              when you're done.
            </li>
          </ul>
          <br/>


          <span className="days">LESSON 34</span>
          <ToggleSwitch checked={selectedCoding34} id='code-34' label='Completed' onChange={
            (e) => {
              localStorage.setItem("code-34", `${e.target.checked}`)

              setSelectedCoding34(e.target.checked)
              console.log(e.target.checked)
            }}/>
          <ul className="assnList">
            <li>Go to <a href="https://codecombat.com/" target="_blank" rel="noopener noreferrer"> Code
              Combat </a>and play for
              the remainder of your code class time. Remember to check the <i>Completed</i> checkbox above
              when you're done.
            </li>
          </ul>
          <br/>

          <span className="days">LESSON 35</span>
          <ToggleSwitch checked={selectedCoding35} id='code-35' label='Completed' onChange={
            (e) => {
              localStorage.setItem("code-35", `${e.target.checked}`)

              setSelectedCoding35(e.target.checked)
              console.log(e.target.checked)
            }}/>
          <ul className="assnList">
            <li>Go to <a href="https://codecombat.com/" target="_blank" rel="noopener noreferrer"> Code
              Combat </a>and play for
              the remainder of your code class time. Remember to check the <i>Completed</i> checkbox above
              when you're done.
            </li>
          </ul>
          <br/>

          <span className="days">LESSON 36</span>
          <ToggleSwitch checked={selectedCoding36} id='code-36' label='Completed' onChange={
            (e) => {
              localStorage.setItem("code-36", `${e.target.checked}`)
              setSelectedCoding36(e.target.checked)
              console.log(e.target.checked)
            }}/>
          <ul className="assnList">
            <li>Watch the video below: <b>A brief history of video games by Safwat Saleem </b></li>
            <Video videoUrl="https://www.youtube.com/embed/x24KoVNliMk"/>
            {/*<li>After you watch the video, answer the following questions:<br/>*/}
            {/*1. What kinds of people use video games? <br/>*/}
            {/*2. Is the Damsel in distress a common storyline in video games? Why do you think this is? Do you like*/}
            {/*this kind of storyline? Explain.<br/>*/}
            {/*3. What kind of a person was most likely to develop an interest in video games in the 50s, 60s and 70s?*/}
            {/*Why?<br/>*/}
            {/*4. It took a while for video games to catch on. What factors do you think contribute to whether or not a*/}
            {/*new technology catches on?<br/>*/}
            {/*</li>*/}
          </ul>
          <br/>

        </form>
      </div>
      </section>
    </>
    </Layout>
  )
}
export default Coding