import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ScrollToTop from "react-scroll-to-top"
import LazyLoad from "react-lazyload"
import Video from "../components/video"
import Img from "gatsby-image"

function useLocalStorageState(key, defaultValue = "") {
  const [state, setState] = React.useState(
    () => window.localStorage.getItem(key) || defaultValue
  )
  React.useEffect(() => {
    window.localStorage.setItem(key, state)
  }, [state, key])
  return [state, setState]
}

const LanguageArts8 = ({ data }) => {
  const [la8Essay1, setla8Essay1] = useLocalStorageState("la8Essay1", "")
  const [la8Essay2, setla8Essay2] = useLocalStorageState("la8Essay2", "")
  const [la8Essay3, setla8Essay3] = useLocalStorageState("la8Essay3", "")
  const [la8Essay4, setla8Essay4] = useLocalStorageState("la8Essay4", "")
  const [la8Essay5, setla8Essay5] = useLocalStorageState("la8Essay5", "")
  const [la8Essay6, setla8Essay6] = useLocalStorageState("la8Essay6", "")
  const [la8Essay7, setla8Essay7] = useLocalStorageState("la8Essay7", "")
  const [la8Essay8, setla8Essay8] = useLocalStorageState("la8Essay8", "")
  const [la8Essay9, setla8Essay9] = useLocalStorageState("la8Essay9", "")
  const [la8Essay10, setla8Essay10] = useLocalStorageState("la8Essay10", "")
  const [la8Essay11, setla8Essay11] = useLocalStorageState("la8Essay11", "")
  const [la8Essay12, setla8Essay12] = useLocalStorageState("la8Essay12", "")
  const [la8Essay13, setla8Essay13] = useLocalStorageState("la8Essay13", "")
  const [la8Essay14, setla8Essay14] = useLocalStorageState("la8Essay14", "")
  const [la8Essay15, setla8Essay15] = useLocalStorageState("la8Essay15", "")
  const [la8Essay16, setla8Essay16] = useLocalStorageState("la8Essay16", "")
  const [la8Essay17, setla8Essay17] = useLocalStorageState("la8Essay17", "")
  const [la8Essay18, setla8Essay18] = useLocalStorageState("la8Essay18", "")
  const [la8Essay19, setla8Essay19] = useLocalStorageState("la8Essay19", "")
  const [la8Essay20, setla8Essay20] = useLocalStorageState("la8Essay20", "")
  const [la8Essay21, setla8Essay21] = useLocalStorageState("la8Essay21", "")
  const [la8Essay22, setla8Essay22] = useLocalStorageState("la8Essay22", "")
  const [la8Essay23, setla8Essay23] = useLocalStorageState("la8Essay23", "")
  const [la8Essay24, setla8Essay24] = useLocalStorageState("la8Essay24", "")
  const [la8Essay25, setla8Essay25] = useLocalStorageState("la8Essay25", "")
  const [la8Essay26, setla8Essay26] = useLocalStorageState("la8Essay26", "")
  const [la8Essay27, setla8Essay27] = useLocalStorageState("la8Essay27", "")
  const [la8Essay28, setla8Essay28] = useLocalStorageState("la8Essay28", "")
  const [la8Essay29, setla8Essay29] = useLocalStorageState("la8Essay29", "")
  const [la8Essay30, setla8Essay30] = useLocalStorageState("la8Essay30", "")
  const [la8Essay31, setla8Essay31] = useLocalStorageState("la8Essay31", "")
  const [la8Essay32, setla8Essay32] = useLocalStorageState("la8Essay32", "")
  const [la8Essay33, setla8Essay33] = useLocalStorageState("la8Essay33", "")
  const [la8Essay34, setla8Essay34] = useLocalStorageState("la8Essay34", "")
  const [la8Essay35, setla8Essay35] = useLocalStorageState("la8Essay35", "")
  const [la8Essay36, setla8Essay36] = useLocalStorageState("la8Essay36", "")
  const [la8Essay37, setla8Essay37] = useLocalStorageState("la8Essay37", "")
  const [la8Essay38, setla8Essay38] = useLocalStorageState("la8Essay38", "")
  const [la8Essay39, setla8Essay39] = useLocalStorageState("la8Essay39", "")
  const [la8Essay40, setla8Essay40] = useLocalStorageState("la8Essay40", "")
  const [la8Essay41, setla8Essay41] = useLocalStorageState("la8Essay41", "")
  const [la8Essay42, setla8Essay42] = useLocalStorageState("la8Essay42", "")
  const [la8Essay43, setla8Essay43] = useLocalStorageState("la8Essay43", "")
  const [la8Essay44, setla8Essay44] = useLocalStorageState("la8Essay44", "")
  const [la8Essay45, setla8Essay45] = useLocalStorageState("la8Essay45", "")
  const [la8Essay46, setla8Essay46] = useLocalStorageState("la8Essay46", "")
  const [la8Essay47, setla8Essay47] = useLocalStorageState("la8Essay47", "")
  const [la8Essay48, setla8Essay48] = useLocalStorageState("la8Essay48", "")
  const [la8Essay49, setla8Essay49] = useLocalStorageState("la8Essay49", "")
  const [la8Essay50, setla8Essay50] = useLocalStorageState("la8Essay50", "")
  const [la8Essay51, setla8Essay51] = useLocalStorageState("la8Essay52", "")
  const [la8Essay52, setla8Essay52] = useLocalStorageState("la8Essay53", "")
  const [la8Essay53, setla8Essay53] = useLocalStorageState("la8Essay54", "")
  const [la8Essay54, setla8Essay54] = useLocalStorageState("la8Essay54", "")
  const [la8Essay55, setla8Essay55] = useLocalStorageState("la8Essay5", "")
  const [la8Essay56, setla8Essay56] = useLocalStorageState("la8Essay56", "")
  const [la8Essay57, setla8Essay57] = useLocalStorageState("la8Essay57", "")
  const [la8Essay58, setla8Essay58] = useLocalStorageState("la8Essay58", "")
  const [la8Essay59, setla8Essay59] = useLocalStorageState("la8Essay59", "")
  const [la8Essay60, setla8Essay60] = useLocalStorageState("la8Essay60", "")
  const [la8Essay61, setla8Essay61] = useLocalStorageState("la8Essay61", "")
  const [la8Essay62, setla8Essay62] = useLocalStorageState("la8Essay62", "")
  const [la8Essay63, setla8Essay63] = useLocalStorageState("la8Essay63", "")
  const [la8Essay64, setla8Essay64] = useLocalStorageState("la8Essay64", "")
  const [la8Essay65, setla8Essay65] = useLocalStorageState("la8Essay65", "")
  const [la8Essay66, setla8Essay66] = useLocalStorageState("la8Essay66", "")
  const [la8Essay67, setla8Essay67] = useLocalStorageState("la8Essay67", "")
  const [la8Essay68, setla8Essay68] = useLocalStorageState("la8Essay68", "")
  const [la8Essay69, setla8Essay69] = useLocalStorageState("la8Essay69", "")
  const [la8Essay70, setla8Essay70] = useLocalStorageState("la8Essay70", "")
  const [la8Essay71, setla8Essay71] = useLocalStorageState("la8Essay71", "")
  const [la8Essay72, setla8Essay72] = useLocalStorageState("la8Essay72", "")
  const [la8Essay73, setla8Essay73] = useLocalStorageState("la8Essay73", "")
  const [la8Essay74, setla8Essay74] = useLocalStorageState("la8Essay74", "")
  const [la8Essay75, setla8Essay75] = useLocalStorageState("la8Essay75", "")
  const [la8Essay76, setla8Essay76] = useLocalStorageState("la8Essay76", "")
  const [la8Essay77, setla8Essay77] = useLocalStorageState("la8Essay77", "")
  const [la8Essay78, setla8Essay78] = useLocalStorageState("la8Essay78", "")
  const [la8Essay79, setla8Essay79] = useLocalStorageState("la8Essay79", "")
  const [la8Essay80, setla8Essay80] = useLocalStorageState("la8Essay80", "")
  const [la8Essay81, setla8Essay81] = useLocalStorageState("la8Essay81", "")
  const [la8Essay82, setla8Essay82] = useLocalStorageState("la8Essay82", "")
  const [la8Essay83, setla8Essay83] = useLocalStorageState("la8Essay83", "")
  const [la8Essay84, setla8Essay84] = useLocalStorageState("la8Essay84", "")
  const [la8Essay85, setla8Essay85] = useLocalStorageState("la8Essay85", "")
  const [la8Essay86, setla8Essay86] = useLocalStorageState("la8Essay86", "")
  const [la8Essay87, setla8Essay87] = useLocalStorageState("la8Essay87", "")
  const [la8Essay88, setla8Essay88] = useLocalStorageState("la8Essay88", "")
  const [la8Essay89, setla8Essay89] = useLocalStorageState("la8Essay89", "")
  const [la8Essay90, setla8Essay90] = useLocalStorageState("la8Essay90", "")
  const [la8Essay91, setla8Essay91] = useLocalStorageState("la8Essay91", "")
  const [la8Essay92, setla8Essay92] = useLocalStorageState("la8Essay93", "")
  const [la8Essay93, setla8Essay93] = useLocalStorageState("la8Essay94", "")
  const [la8Essay94, setla8Essay94] = useLocalStorageState("la8Essay95", "")
  const [la8Essay95, setla8Essay95] = useLocalStorageState("la8Essay96", "")
  const [la8Essay96, setla8Essay96] = useLocalStorageState("la8Essay97", "")
  const [la8Essay97, setla8Essay97] = useLocalStorageState("la8Essay98", "")
  const [la8Essay98, setla8Essay98] = useLocalStorageState("la8Essay98", "")
  const [la8Essay99, setla8Essay99] = useLocalStorageState("la8Essay99", "")
  const [la8Essay100, setla8Essay100] = useLocalStorageState("la8Essay100", "")
  const [la8Essay101, setla8Essay101] = useLocalStorageState("la8Essay101", "")
  const [la8Essay102, setla8Essay102] = useLocalStorageState("la8Essay102", "")
  const [la8Essay103, setla8Essay103] = useLocalStorageState("la8Essay103", "")
  const [la8Essay104, setla8Essay104] = useLocalStorageState("la8Essay104", "")
  const [la8Essay105, setla8Essay105] = useLocalStorageState("la8Essay105", "")
  const [la8Essay106, setla8Essay106] = useLocalStorageState("la8Essay106", "")
  const [la8Essay107, setla8Essay107] = useLocalStorageState("la8Essay107", "")
  const [la8Essay108, setla8Essay108] = useLocalStorageState("la8Essay108", "")
  const [la8Essay109, setla8Essay109] = useLocalStorageState("la8Essay109", "")
  const [la8Essay110, setla8Essay110] = useLocalStorageState("la8Essay110", "")
  const [la8Essay111, setla8Essay111] = useLocalStorageState("la8Essay111", "")
  const [la8Essay112, setla8Essay112] = useLocalStorageState("la8Essay112", "")
  const [la8Essay113, setla8Essay113] = useLocalStorageState("la8Essay113", "")
  const [la8Essay114, setla8Essay114] = useLocalStorageState("la8Essay114", "")
  const [la8Essay115, setla8Essay115] = useLocalStorageState("la8Essay115", "")
  const [la8Essay116, setla8Essay116] = useLocalStorageState("la8Essay116", "")
  const [la8Essay117, setla8Essay117] = useLocalStorageState("la8Essay117", "")
  const [la8Essay118, setla8Essay118] = useLocalStorageState("la8Essay118", "")
  const [la8Essay119, setla8Essay119] = useLocalStorageState("la8Essay119", "")
  const [la8Essay120, setla8Essay120] = useLocalStorageState("la8Essay120", "")
  const [la8Essay121, setla8Essay121] = useLocalStorageState("la8Essay121", "")
  const [la8Essay122, setla8Essay122] = useLocalStorageState("la8Essay122", "")
  const [la8Essay123, setla8Essay123] = useLocalStorageState("la8Essay123", "")
  const [la8Essay124, setla8Essay124] = useLocalStorageState("la8Essay124", "")
  const [la8Essay125, setla8Essay125] = useLocalStorageState("la8Essay125", "")
  const [la8Essay126, setla8Essay126] = useLocalStorageState("la8Essay126", "")
  const [la8Essay127, setla8Essay127] = useLocalStorageState("la8Essay127", "")
  const [la8Essay128, setla8Essay128] = useLocalStorageState("la8Essay128", "")
  const [la8Essay129, setla8Essay129] = useLocalStorageState("la8Essay129", "")
  const [la8Essay130, setla8Essay130] = useLocalStorageState("la8Essay130", "")
  const [la8Essay131, setla8Essay131] = useLocalStorageState("la8Essay131", "")
  const [la8Essay132, setla8Essay132] = useLocalStorageState("la8Essay132", "")
  const [la8Essay133, setla8Essay133] = useLocalStorageState("la8Essay133", "")
  const [la8Essay134, setla8Essay134] = useLocalStorageState("la8Essay134", "")
  const [la8Essay135, setla8Essay135] = useLocalStorageState("la8Essay135", "")
  const [la8Essay136, setla8Essay136] = useLocalStorageState("la8Essay136", "")
  const [la8Essay137, setla8Essay137] = useLocalStorageState("la8Essay137", "")
  const [la8Essay138, setla8Essay138] = useLocalStorageState("la8Essay138", "")
  const [la8Essay139, setla8Essay139] = useLocalStorageState("la8Essay139", "")
  const [la8Essay140, setla8Essay140] = useLocalStorageState("la8Essay140", "")
  const [la8Essay141, setla8Essay141] = useLocalStorageState("la8Essay141", "")
  const [la8Essay142, setla8Essay142] = useLocalStorageState("la8Essay142", "")
  const [la8Essay143, setla8Essay143] = useLocalStorageState("la8Essay143", "")
  const [la8Essay144, setla8Essay144] = useLocalStorageState("la8Essay144", "")
  const [la8Essay145, setla8Essay145] = useLocalStorageState("la8Essay145", "")
  const [la8Essay146, setla8Essay146] = useLocalStorageState("la8Essay146", "")
  const [la8Essay147, setla8Essay147] = useLocalStorageState("la8Essay147", "")
  const [la8Essay148, setla8Essay148] = useLocalStorageState("la8Essay148", "")
  const [la8Essay149, setla8Essay149] = useLocalStorageState("la8Essay149", "")
  const [la8Essay150, setla8Essay150] = useLocalStorageState("la8Essay150", "")
  const [la8Essay151, setla8Essay151] = useLocalStorageState("la8Essay151", "")
  const [la8Essay152, setla8Essay152] = useLocalStorageState("la8Essay152", "")
  const [la8Essay153, setla8Essay153] = useLocalStorageState("la8Essay153", "")
  const [la8Essay154, setla8Essay154] = useLocalStorageState("la8Essay154", "")
  const [la8Essay155, setla8Essay155] = useLocalStorageState("la8Essay155", "")
  const [la8Essay156, setla8Essay156] = useLocalStorageState("la8Essay156", "")
  const [la8Essay157, setla8Essay157] = useLocalStorageState("la8Essay157", "")
  const [la8Essay158, setla8Essay158] = useLocalStorageState("la8Essay158", "")
  const [la8Essay159, setla8Essay159] = useLocalStorageState("la8Essay159", "")
  const [la8Essay160, setla8Essay160] = useLocalStorageState("la8Essay160", "")
  const [la8Essay161, setla8Essay161] = useLocalStorageState("la8Essay161", "")
  const [la8Essay162, setla8Essay162] = useLocalStorageState("la8Essay162", "")
  const [la8Essay163, setla8Essay163] = useLocalStorageState("la8Essay163", "")
  const [la8Essay164, setla8Essay164] = useLocalStorageState("la8Essay164", "")
  const [la8Essay165, setla8Essay165] = useLocalStorageState("la8Essay165", "")
  const [la8Essay166, setla8Essay166] = useLocalStorageState("la8Essay166", "")
  const [la8Essay167, setla8Essay167] = useLocalStorageState("la8Essay167", "")
  const [la8Essay168, setla8Essay168] = useLocalStorageState("la8Essay168", "")
  const [la8Essay169, setla8Essay169] = useLocalStorageState("la8Essay169", "")
  const [la8Essay170, setla8Essay170] = useLocalStorageState("la8Essay170", "")
  const [la8Essay171, setla8Essay171] = useLocalStorageState("la8Essay171", "")
  const [la8Essay172, setla8Essay172] = useLocalStorageState("la8Essay172", "")
  const [la8Essay173, setla8Essay173] = useLocalStorageState("la8Essay173", "")
  const [la8Essay174, setla8Essay174] = useLocalStorageState("la8Essay174", "")
  const [la8Essay175, setla8Essay175] = useLocalStorageState("la8Essay175", "")
  const [la8Essay176, setla8Essay176] = useLocalStorageState("la8Essay176", "")
  const [la8Essay177, setla8Essay177] = useLocalStorageState("la8Essay177", "")
  const [la8Essay178, setla8Essay178] = useLocalStorageState("la8Essay178", "")
  const [la8Essay179, setla8Essay179] = useLocalStorageState("la8Essay179", "")
  const [la8Essay180, setla8Essay180] = useLocalStorageState("la8Essay180", "")


  const onChangela8Listener1 = (event) => {
    setla8Essay1(event.target.value)
  }
  const onChangela8Listener2 = (event) => {
    setla8Essay2(event.target.value)
  }
  const onChangela8Listener3 = (event) => {
    setla8Essay3(event.target.value)
  }
  const onChangela8Listener4 = (event) => {
    setla8Essay4(event.target.value)
  }
  const onChangela8Listener5 = (event) => {
    setla8Essay5(event.target.value)
  }
  const onChangela8Listener6 = (event) => {
    setla8Essay6(event.target.value)
  }
  const onChangela8Listener7 = (event) => {
    setla8Essay7(event.target.value)
  }
  const onChangela8Listener8 = (event) => {
    setla8Essay8(event.target.value)
  }
  const onChangela8Listener9 = (event) => {
    setla8Essay9(event.target.value)
  }
  const onChangela8Listener10 = (event) => {
    setla8Essay10(event.target.value)
  }
  const onChangela8Listener11 = (event) => {
    setla8Essay11(event.target.value)
  }
  const onChangela8Listener12 = (event) => {
    setla8Essay12(event.target.value)
  }
  const onChangela8Listener13 = (event) => {
    setla8Essay13(event.target.value)
  }
  const onChangela8Listener14 = (event) => {
    setla8Essay14(event.target.value)
  }
  const onChangela8Listener15 = (event) => {
    setla8Essay15(event.target.value)
  }
  const onChangela8Listener16 = (event) => {
    setla8Essay16(event.target.value)
  }
  const onChangela8Listener17 = (event) => {
    setla8Essay17(event.target.value)
  }
  const onChangela8Listener18 = (event) => {
    setla8Essay18(event.target.value)
  }
  const onChangela8Listener19 = (event) => {
    setla8Essay19(event.target.value)
  }
  const onChangela8Listener20 = (event) => {
    setla8Essay20(event.target.value)
  }
  const onChangela8Listener21 = (event) => {
    setla8Essay21(event.target.value)
  }
  const onChangela8Listener22 = (event) => {
    setla8Essay22(event.target.value)
  }
  const onChangela8Listener23 = (event) => {
    setla8Essay23(event.target.value)
  }
  const onChangela8Listener24 = (event) => {
    setla8Essay24(event.target.value)
  }
  const onChangela8Listener25 = (event) => {
    setla8Essay25(event.target.value)
  }
  const onChangela8Listener26 = (event) => {
    setla8Essay26(event.target.value)
  }
  const onChangela8Listener27 = (event) => {
    setla8Essay27(event.target.value)
  }
  const onChangela8Listener28 = (event) => {
    setla8Essay28(event.target.value)
  }
  const onChangela8Listener29 = (event) => {
    setla8Essay29(event.target.value)
  }
  const onChangela8Listener30 = (event) => {
    setla8Essay30(event.target.value)
  }
  const onChangela8Listener31 = (event) => {
    setla8Essay31(event.target.value)
  }
  const onChangela8Listener32 = (event) => {
    setla8Essay32(event.target.value)
  }
  const onChangela8Listener33 = (event) => {
    setla8Essay33(event.target.value)
  }
  const onChangela8Listener34 = (event) => {
    setla8Essay34(event.target.value)
  }
  const onChangela8Listener35 = (event) => {
    setla8Essay35(event.target.value)
  }
  const onChangela8Listener36 = (event) => {
    setla8Essay36(event.target.value)
  }
  const onChangela8Listener37 = (event) => {
    setla8Essay37(event.target.value)
  }
  const onChangela8Listener38 = (event) => {
    setla8Essay38(event.target.value)
  }
  const onChangela8Listener39 = (event) => {
    setla8Essay39(event.target.value)
  }
  const onChangela8Listener40 = (event) => {
    setla8Essay40(event.target.value)
  }
  const onChangela8Listener41 = (event) => {
    setla8Essay41(event.target.value)
  }
  const onChangela8Listener42 = (event) => {
    setla8Essay42(event.target.value)
  }
  const onChangela8Listener43 = (event) => {
    setla8Essay43(event.target.value)
  }
  const onChangela8Listener44 = (event) => {
    setla8Essay44(event.target.value)
  }
  const onChangela8Listener45 = (event) => {
    setla8Essay45(event.target.value)
  }
  const onChangela8Listener46 = (event) => {
    setla8Essay46(event.target.value)
  }
  const onChangela8Listener47 = (event) => {
    setla8Essay47(event.target.value)
  }
  const onChangela8Listener48 = (event) => {
    setla8Essay48(event.target.value)
  }
  const onChangela8Listener49 = (event) => {
    setla8Essay49(event.target.value)
  }
  const onChangela8Listener50 = (event) => {
    setla8Essay50(event.target.value)
  }
  const onChangela8Listener51 = (event) => {
    setla8Essay51(event.target.value)
  }
  const onChangela8Listener52 = (event) => {
    setla8Essay52(event.target.value)
  }
  const onChangela8Listener53 = (event) => {
    setla8Essay53(event.target.value)
  }
  const onChangela8Listener54 = (event) => {
    setla8Essay54(event.target.value)
  }
  const onChangela8Listener55 = (event) => {
    setla8Essay55(event.target.value)
  }
  const onChangela8Listener56 = (event) => {
    setla8Essay56(event.target.value)
  }
  const onChangela8Listener57 = (event) => {
    setla8Essay57(event.target.value)
  }
  const onChangela8Listener58 = (event) => {
    setla8Essay58(event.target.value)
  }
  const onChangela8Listener59 = (event) => {
    setla8Essay59(event.target.value)
  }
  const onChangela8Listener60 = (event) => {
    setla8Essay60(event.target.value)
  }
  const onChangela8Listener61 = (event) => {
    setla8Essay61(event.target.value)
  }
  const onChangela8Listener62 = (event) => {
    setla8Essay62(event.target.value)
  }
  const onChangela8Listener63 = (event) => {
    setla8Essay63(event.target.value)
  }
  const onChangela8Listener64 = (event) => {
    setla8Essay64(event.target.value)
  }
  const onChangela8Listener65 = (event) => {
    setla8Essay65(event.target.value)
  }
  const onChangela8Listener66 = (event) => {
    setla8Essay66(event.target.value)
  }
  const onChangela8Listener67 = (event) => {
    setla8Essay67(event.target.value)
  }
  const onChangela8Listener68 = (event) => {
    setla8Essay68(event.target.value)
  }
  const onChangela8Listener69 = (event) => {
    setla8Essay69(event.target.value)
  }
  const onChangela8Listener70 = (event) => {
    setla8Essay70(event.target.value)
  }
  const onChangela8Listener71 = (event) => {
    setla8Essay71(event.target.value)
  }
  const onChangela8Listener72 = (event) => {
    setla8Essay72(event.target.value)
  }
  const onChangela8Listener73 = (event) => {
    setla8Essay73(event.target.value)
  }
  const onChangela8Listener74 = (event) => {
    setla8Essay74(event.target.value)
  }
  const onChangela8Listener75 = (event) => {
    setla8Essay75(event.target.value)
  }
  const onChangela8Listener76 = (event) => {
    setla8Essay76(event.target.value)
  }
  const onChangela8Listener77 = (event) => {
    setla8Essay77(event.target.value)
  }
  const onChangela8Listener78 = (event) => {
    setla8Essay78(event.target.value)
  }
  const onChangela8Listener79 = (event) => {
    setla8Essay79(event.target.value)
  }
  const onChangela8Listener80 = (event) => {
    setla8Essay80(event.target.value)
  }
  const onChangela8Listener81 = (event) => {
    setla8Essay81(event.target.value)
  }
  const onChangela8Listener82 = (event) => {
    setla8Essay82(event.target.value)
  }
  const onChangela8Listener83 = (event) => {
    setla8Essay83(event.target.value)
  }
  const onChangela8Listener84 = (event) => {
    setla8Essay84(event.target.value)
  }
  const onChangela8Listener85 = (event) => {
    setla8Essay85(event.target.value)
  }
  const onChangela8Listener86 = (event) => {
    setla8Essay86(event.target.value)
  }
  const onChangela8Listener87 = (event) => {
    setla8Essay87(event.target.value)
  }
  const onChangela8Listener88 = (event) => {
    setla8Essay88(event.target.value)
  }
  const onChangela8Listener89 = (event) => {
    setla8Essay89(event.target.value)
  }
  const onChangela8Listener90 = (event) => {
    setla8Essay90(event.target.value)
  }
  const onChangela8Listener91 = (event) => {
    setla8Essay91(event.target.value)
  }
  const onChangela8Listener92 = (event) => {
    setla8Essay92(event.target.value)
  }
  const onChangela8Listener93 = (event) => {
    setla8Essay93(event.target.value)
  }
  const onChangela8Listener94 = (event) => {
    setla8Essay94(event.target.value)
  }
  const onChangela8Listener95 = (event) => {
    setla8Essay95(event.target.value)
  }
  const onChangela8Listener96 = (event) => {
    setla8Essay96(event.target.value)
  }
  const onChangela8Listener97 = (event) => {
    setla8Essay97(event.target.value)
  }
  const onChangela8Listener98 = (event) => {
    setla8Essay98(event.target.value)
  }
  const onChangela8Listener99 = (event) => {
    setla8Essay99(event.target.value)
  }
  const onChangela8Listener100 = (event) => {
    setla8Essay100(event.target.value)
  }
  const onChangela8Listener101 = (event) => {
    setla8Essay101(event.target.value)
  }
  const onChangela8Listener102 = (event) => {
    setla8Essay102(event.target.value)
  }
  const onChangela8Listener103 = (event) => {
    setla8Essay103(event.target.value)
  }
  const onChangela8Listener104 = (event) => {
    setla8Essay104(event.target.value)
  }
  const onChangela8Listener105 = (event) => {
    setla8Essay105(event.target.value)
  }
  const onChangela8Listener106 = (event) => {
    setla8Essay106(event.target.value)
  }
  const onChangela8Listener107 = (event) => {
    setla8Essay107(event.target.value)
  }
  const onChangela8Listener108 = (event) => {
    setla8Essay108(event.target.value)
  }
  const onChangela8Listener109 = (event) => {
    setla8Essay109(event.target.value)
  }
  const onChangela8Listener110 = (event) => {
    setla8Essay110(event.target.value)
  }
  const onChangela8Listener111 = (event) => {
    setla8Essay111(event.target.value)
  }
  const onChangela8Listener112 = (event) => {
    setla8Essay112(event.target.value)
  }
  const onChangela8Listener113 = (event) => {
    setla8Essay113(event.target.value)
  }
  const onChangela8Listener114 = (event) => {
    setla8Essay114(event.target.value)
  }
  const onChangela8Listener115 = (event) => {
    setla8Essay115(event.target.value)
  }
  const onChangela8Listener116 = (event) => {
    setla8Essay116(event.target.value)
  }
  const onChangela8Listener117 = (event) => {
    setla8Essay117(event.target.value)
  }
  const onChangela8Listener118 = (event) => {
    setla8Essay118(event.target.value)
  }
  const onChangela8Listener119 = (event) => {
    setla8Essay119(event.target.value)
  }
  const onChangela8Listener120 = (event) => {
    setla8Essay120(event.target.value)
  }
  const onChangela8Listener121 = (event) => {
    setla8Essay121(event.target.value)
  }
  const onChangela8Listener122 = (event) => {
    setla8Essay122(event.target.value)
  }
  const onChangela8Listener123 = (event) => {
    setla8Essay123(event.target.value)
  }
  const onChangela8Listener124 = (event) => {
    setla8Essay124(event.target.value)
  }
  const onChangela8Listener125 = (event) => {
    setla8Essay125(event.target.value)
  }
  const onChangela8Listener126 = (event) => {
    setla8Essay126(event.target.value)
  }
  const onChangela8Listener127 = (event) => {
    setla8Essay127(event.target.value)
  }
  const onChangela8Listener128 = (event) => {
    setla8Essay128(event.target.value)
  }
  const onChangela8Listener129 = (event) => {
    setla8Essay129(event.target.value)
  }
  const onChangela8Listener130 = (event) => {
    setla8Essay130(event.target.value)
  }
  const onChangela8Listener131 = (event) => {
    setla8Essay131(event.target.value)
  }
  const onChangela8Listener132 = (event) => {
    setla8Essay132(event.target.value)
  }
  const onChangela8Listener133 = (event) => {
    setla8Essay133(event.target.value)
  }
  const onChangela8Listener134 = (event) => {
    setla8Essay134(event.target.value)
  }
  const onChangela8Listener135 = (event) => {
    setla8Essay135(event.target.value)
  }
  const onChangela8Listener136 = (event) => {
    setla8Essay136(event.target.value)
  }
  const onChangela8Listener137 = (event) => {
    setla8Essay137(event.target.value)
  }
  const onChangela8Listener138 = (event) => {
    setla8Essay138(event.target.value)
  }
  const onChangela8Listener139 = (event) => {
    setla8Essay139(event.target.value)
  }
  const onChangela8Listener140 = (event) => {
    setla8Essay140(event.target.value)
  }
  const onChangela8Listener141 = (event) => {
    setla8Essay141(event.target.value)
  }
  const onChangela8Listener142 = (event) => {
    setla8Essay142(event.target.value)
  }
  const onChangela8Listener143 = (event) => {
    setla8Essay143(event.target.value)
  }
  const onChangela8Listener144 = (event) => {
    setla8Essay144(event.target.value)
  }
  const onChangela8Listener145 = (event) => {
    setla8Essay145(event.target.value)
  }
  const onChangela8Listener146 = (event) => {
    setla8Essay146(event.target.value)
  }
  const onChangela8Listener147 = (event) => {
    setla8Essay147(event.target.value)
  }
  const onChangela8Listener148 = (event) => {
    setla8Essay148(event.target.value)
  }
  const onChangela8Listener149 = (event) => {
    setla8Essay149(event.target.value)
  }
  const onChangela8Listener150 = (event) => {
    setla8Essay150(event.target.value)
  }
  const onChangela8Listener151 = (event) => {
    setla8Essay151(event.target.value)
  }
  const onChangela8Listener152 = (event) => {
    setla8Essay152(event.target.value)
  }
  const onChangela8Listener153 = (event) => {
    setla8Essay153(event.target.value)
  }
  const onChangela8Listener154 = (event) => {
    setla8Essay154(event.target.value)
  }
  const onChangela8Listener155 = (event) => {
    setla8Essay155(event.target.value)
  }
  const onChangela8Listener156 = (event) => {
    setla8Essay156(event.target.value)
  }
  const onChangela8Listener157 = (event) => {
    setla8Essay157(event.target.value)
  }
  const onChangela8Listener158 = (event) => {
    setla8Essay158(event.target.value)
  }
  const onChangela8Listener159 = (event) => {
    setla8Essay159(event.target.value)
  }
  const onChangela8Listener160 = (event) => {
    setla8Essay160(event.target.value)
  }
  const onChangela8Listener161 = (event) => {
    setla8Essay161(event.target.value)
  }
  const onChangela8Listener162 = (event) => {
    setla8Essay162(event.target.value)
  }
  const onChangela8Listener163 = (event) => {
    setla8Essay163(event.target.value)
  }
  const onChangela8Listener164 = (event) => {
    setla8Essay164(event.target.value)
  }
  const onChangela8Listener165 = (event) => {
    setla8Essay165(event.target.value)
  }
  const onChangela8Listener166 = (event) => {
    setla8Essay166(event.target.value)
  }
  const onChangela8Listener167 = (event) => {
    setla8Essay167(event.target.value)
  }
  const onChangela8Listener168 = (event) => {
    setla8Essay168(event.target.value)
  }
  const onChangela8Listener169 = (event) => {
    setla8Essay169(event.target.value)
  }
  const onChangela8Listener170 = (event) => {
    setla8Essay170(event.target.value)
  }
  const onChangela8Listener171 = (event) => {
    setla8Essay171(event.target.value)
  }
  const onChangela8Listener172 = (event) => {
    setla8Essay172(event.target.value)
  }
  const onChangela8Listener173 = (event) => {
    setla8Essay173(event.target.value)
  }
  const onChangela8Listener174 = (event) => {
    setla8Essay174(event.target.value)
  }
  const onChangela8Listener175 = (event) => {
    setla8Essay175(event.target.value)
  }
  const onChangela8Listener176 = (event) => {
    setla8Essay176(event.target.value)
  }
  const onChangela8Listener177 = (event) => {
    setla8Essay177(event.target.value)
  }
  const onChangela8Listener178 = (event) => {
    setla8Essay178(event.target.value)
  }
  const onChangela8Listener179 = (event) => {
    setla8Essay179(event.target.value)
  }
  const onChangela8Listener180 = (event) => {
    setla8Essay180(event.target.value)
  }

  return (

    <Layout>
      <SEO
        title="8th Grade Language Arts"
        description="Daily assignments for 8th grade language arts"
        image="/logo.png"
        pathname="/languagearts8"
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
            <Link to="/eighth" className='gradeLink'>
              <h2 className="hero in-left">8th Grade</h2></Link>
          </div>
        </div>
      </section>

      <LazyLoad>
        <form>
          <section className="section raise-top">
            <div className="section-content">
              <h1 className="section-title">Daily Lessons</h1>
              <span className="days">Books</span>
              <p className="margin-para">The books required for this course are: <i>The Alchemist </i> by Paulo
                Coehlo, <i>Piecing Me Together </i> by Renee Watson, <i> The Old Man and the Sea</i> by Ernest
                Hemingway, <i> The Book Thief</i> by Markus Zusak, and <i>The Giver </i> by Lois Lowry.
                Until you get a copy, the first chapter of each book is linked as a PDF. The novels are available at
                your local library, local bookstore, or can be purchased online. If the books are out of copyright, they
                are provided below as PDFs. </p>

              <span className="days">LESSON 1 </span>
              <p className="margin-para"> The first book you will read for this course is <a
                href={require("../resources/books/The_Alchemist.pdf")} rel="noreferrer" target="_blank"> <i>The
                Alchemist.</i> </a> It is available <a href={require("../resources/books/The_Alchemist.pdf")}
                                                       rel="noreferrer" target="_blank"> here as a PDF. </a> If you
                prefer a hard copy, it is available at your local library, local bookstore, and can be purchased online.
              </p>
              <Img fluid={data.theAlchemist.childImageSharp.fluid} alt="The Alchemist novel"/><br/>
              <p className="margin-para"> The Alchemist is a fable about following your dreams and paying attention to
                signs the universe sends you. Like most fables, The Alchemist has a theme or moral that describes a
                universal truth about life. </p>
              <p className="margin-para">The Alchemist is an allegory, or a story that reveals a deeper, hidden meaning.
                The author does not make his point directly. As you read, look for hidden meanings that are found
                throughout the fable.</p>
              <p>After you read the Prologue through page 11, answer the questions below. Be sure to number your
                responses. <br/>
                1. Who is Santiago? How is he introduced at the beginning of the story?<br/>
                2. What is strange or unusual about Santiago's dream?<br/>
                3. Recall a dream you have had. What makes this dream especially memorable? Do you think dreams have
                deeper "meanings"?<br/>
                4. What is the geographical setting at the beginning of the novel?<br/>
                5. What do Santiago's parents plan for him, and how does he change that plan?<br/>
                6. What does Santiago plan to do in Tarifa?<br/>
              </p>
              <textarea className="textArea" onChange={onChangela8Listener1} value={la8Essay1}/>

              <span className="days">LESSON 2 </span>
              <p> Read pp. 12 - 34 in <a href={require("../resources/books/The_Alchemist.pdf")} rel="noreferrer"
                                         target="_blank"> <i>The Alchemist.</i></a> Then answer the following questions:<br/>
                1. Santiago stops in Tarifa to consult with an old woman about his recurring dream. What price does she
                charge him?<br/>
                2. Santiago meets an old man in the village. What is his name and why do you think that the author
                would have included this name in the novel?<br/>
                3. What does the old man ask for in payment for helping Santiago?<br/>
                4. How does the old man convince Santiago of his power?<br/>
                5. How does the old man explain the concept of Personal Legends to Santiago? Why does the old man
                believe that few people ever really attain their Personal Legends?<br/>
                6. Why does the old man tell Santiago to follow "omens"? Do you believe that omens exist? Why or
                why not?<br/>
                7. What does the old man take from the breastplate as a gift to Santiago?<br/>
                8. The old man tells Santiago a story that concludes with the secret of happiness. According to the old
                man, what is the secret of happiness?<br/></p>
              <textarea className="textArea" onChange={onChangela8Listener2} value={la8Essay2}/>

              <span className="days">LESSON 3 </span>
              <p>Read pp. 34 - 49 in <a href={require("../resources/books/The_Alchemist.pdf")} rel="noreferrer"
                                        target="_blank"> <i>The Alchemist.</i></a> Then answer the
                questions below. Be sure to number your responses. <br/>
                1. When Santiago decides to leave his home country of Spain in order to follow his personal legend,
                where does he go?<br/>
                2. How are the two locations different in regards to food/drink, religion, customs, etc.?<br/>
                3. What happens when Santiago follows his new friend into the marketplace?<br/>
                4. Although Santiago does not speak Arabic, he has a conversation with the candy seller. Why is this
                important?<br/>
                5. What comfort do the black and white stones provide to Santiago?<br/>
                6. Describe the first interaction between Santiago and the crystal merchant.
              </p>
              <textarea className="textArea" onChange={onChangela8Listener3} value={la8Essay3}/>

              <span className="days">LESSON 4 </span>
              <p>PART TWO</p>
              <p>Read pp. 53 – 82 (to the asterisks) in <a href={require("../resources/books/The_Alchemist.pdf")}
                                                           rel="noreferrer" target="_blank"> <i>The
                Alchemist.</i></a> Then answer the following questions:<br/>
                1. What lessons does Santiago teach the crystal merchant?<br/>
                2. Who is the Englishman and what do we learn about him?<br/>
                3. What motivates the Englishman to befriend Santiago?<br/>
                4. On page 71, the leader of the caravan provides us with a metaphor about the desert. What comparison
                5. is being made here?<br/>
                6. According to the Englishman, what is the Soul of the World?<br/>
                7. What is an alchemist?<br/>
              </p>
              <textarea className="textArea" onChange={onChangela8Listener4} value={la8Essay4}/>

              <span className="days">LESSON 5 </span>

              <p>Watch the the video below about <b>Figurative Language</b> and then answer the questions that follow.
              </p>
              <Video videoUrl="https://www.youtube.com/embed/rW4DtZGxjq0"/>
              <p className="topBottom">Figurative language refers to any use of language that goes beyond the literal
                meaning of the words
                themselves.</p>

              <p className="topBottom">We most often associate figurative language with poetry, but figurative language
                widely is found in
                everything from fiction and folk music to drama and our daily speech. It's a sophisticated, creative use
                of language to convey meaning and mood. It's an important tool in the writer's toolbox. </p>

              <p className="topBottom"><b>Hyperbole</b> uses extreme exaggeration and is not meant to be taken
                literally. Examples: I'm so
                hungry I could eat a horse. I could have died of embarrassment.</p>

              <p className="topBottom"><b>Idioms</b> are figures of speech that cannot be understood from a literal
                understanding of the words
                alone. Examples: The cat is out of the bag. Stop beating around the bush. <br/>Someone visiting from
                another country would not understand these phrases without someone explaining the meaning.</p>

              <p className="topBottom"><b>Similes </b>make comparisons between two unrelated elements by using 'like' or
                'as' to highlight a
                common quality both things share. Examples: Her eyes shone like diamonds. He was as strong as a horse.
              </p>

              <p className="topBottom">A <b>metaphor</b> makes a comparison between two unrelated things by stating one
                thing is the other
                thing. Example: Life is a rollercoaster.</p>

              <p className="topBottom"><b>Oxymorons </b>combine two opposing elements into a single phrase to be thought
                provoking or funny.
                Example: Deafening silence. A known secret.</p>

              <p className="topBottom"><b>Personification</b> is a metaphor where human actions, feelings or traits are
                given to a non-human.
                Examples: Books were her constant companions. That car's a beauty. An angry sky.</p>

              <p className="topBottom"><b>Alliteration </b>is the repetition of the same letter sound across the start
                of several words in a
                line of text. The word comes from the Latin "littera," meaning "letter of the alphabet". Example: The
                slithering snake slid sideways silently. </p>

              <p className="topBottom"><b>Assonance </b>is the repetition of vowel <i>sounds</i> within a group of
                words. Example: Fleet feet
                sweep by sleeping geese. Dr. Suess often used alliteration and assonance in his books: Through three
                cheese trees three free fleas flew. While these fleas flew, freezy breeze blew. </p>

              <p className="topBottom">Allusion is an <i>implied </i>reference to a person, event, or thing based on the
                assumption that you
                know what the person is talking about. The author assumes the reader will understand the reference.
                Example: <i> You're acting like such a Scrooge! </i>This assumes the reader is familiar with the Scrooge
                character from Dickens's A Christmas Carol. This means that the person is being selfish, like the
                character from the story.</p>

              <p className="topBottom">State which type of figurative language is used in each example below:<br/>
                1. "Her face is like a sunbeam." <br/>
                2. "The tropical storm slept for two days." <br/>
                3. "I had so much homework, I needed a pickup truck to carry all my books home!" <br/>
                4. What is a literary technique in which two contradictory words come together for a special effect? For
                example, <i>original copy</i> or <i>jumbo shrimp</i>?<br/>
                5. "Let us go forth and lead the land we love" contains an example of what type of figurative
                language?<br/>
                6. "We real cool. We Left school. We Lurk late. We Strike straight. We Sing sin. We Thin gin. We Jazz
                June. We Die soon." In this poem by Gwendolyn Brooks, what poetic device is used?</p>
              <p>
                <ol className="vocab">Give an example for each of the following. <br/>
                  <li>Hyperbole</li>
                  <li>Idiom</li>
                  <li>Simile</li>
                  <li>Metaphor</li>
                  <li>Oxymorons</li>
                  <li>Personification</li>
                  <li>Alliteration</li>
                  <li>Assonance</li>
                  <li>Allusion</li>
                </ol>
              </p>

              <textarea className="textArea" onChange={onChangela8Listener5} value={la8Essay5}/>

              <span className="days">LESSON 6 </span>
              <p>Read pp. 82 - 106 in <a href={require("../resources/books/The_Alchemist.pdf")} rel="noreferrer"
                                         target="_blank"> <i>The Alchemist.</i></a> Then answer the following questions:<br/>
                1. Explain the Elixir of Life, the Master Work, and the Philosopher's Stone.<br/>
                2. Why was the alchemist watching people as they entered the oasis from the caravan?<br/>
                3. Describe the Oasis.<br/>
                4. What does it mean when a woman in the Oasis is dressed in black? (Keep in mind: this is a Muslim
                society.)<br/>
                5. What is the language of the world and how does Santiago learn it?<br/>
                6. What agreement do Fatima and Santiago come to?<br/>
              </p>
              <textarea className="textArea" onChange={onChangela8Listener6} value={la8Essay6}/>

              <span className="days">LESSON 7 </span>
              <p>Read pp. 108 - 126 in <a href={require("../resources/books/The_Alchemist.pdf")} rel="noreferrer"
                                          target="_blank"> <i>The Alchemist.</i></a> Then answer the following
                questions:<br/>
                1. Santiago sees two hawks as an omen. What do they signify?<br/>
                2. What happens when Santiago visits the tribal chieftains to tell them about his vision?<br/>
                3. What is the one moment or image that sticks in your mind thus far?<br/>
                4. What test do the chieftains outline for Santiago?<br/>
                5. Describe Santiago's first interaction with the Alchemist.<br/>
                6. Describe the battle at the oasis.<br/>
                7. What was Santiago's reward for saving the oasis?<br/>
                8. Describe the "goodbyes" that are said between Fatima and Santiago as he is leaving.<br/>
              </p>
              <textarea className="textArea" onChange={onChangela8Listener7} value={la8Essay7}/>

              <span className="days">LESSON 8 </span>
              <p>Read pp. 126 – 148 (to the asterisk) in <a href={require("../resources/books/The_Alchemist.pdf")}
                                                            rel="noreferrer" target="_blank"> <i>The
                Alchemist.</i></a> Then answer the following questions:<br/>
                1. What advice does the alchemist give about listening to one's heart? Do you agree or disagree?<br/>
                2. The author includes many examples of foreshadowing here. How do we know that Santiago awaits
                more trouble on his quest?<br/>
                3. What did the Arabs find when they searched the alchemist? Why did they allow the alchemist to keep
                the treasure?<br/>
                4. What happens when the alchemist and the boy are both taken into the military camp?<br/>
                5. Why would the alchemist set up such a "test" for Santiago?<br/>
                6. Who is at risk of death here? Why?<br/>
              </p>
              <textarea className="textArea" onChange={onChangela8Listener8} value={la8Essay8}/>

              <span className="days">LESSON 9 </span>
              <p>Watch the video <b> What is Personification? </b>Then complete the assignment below. </p>
              <Video videoUrl="https://www.youtube.com/embed/1Mb6NxixRk8"/>
              <p>Read pp. 148-173 in <a href={require("../resources/books/The_Alchemist.pdf")} rel="noreferrer"
                                        target="_blank"> <i>The Alchemist.</i></a> Then answer the following
                questions:<br/>
                1. As Santiago is attempting to turn himself into the wind, who does he hold conversations with?<br/>
                2. Critics apply the term pathetic fallacy to instances in which human characteristics (such as reason
                and the ability to speak) are given to parts of the natural world. Based upon this definition, what
                three aspects of the natural world are personified in this way during Santiago's efforts to turn himself
                into the wind?<br/>
                3. Two people were smiling after Santiago turned himself into the wind. Who were they and why was each
                smiling?<br/>
                4. What did the alchemist do at the Coptic monastery?<br/>
                5. How did the alchemist distribute the gold? Why did he think Santiago might need the gold later?<br/>
                6. What is the point of the alchemist's story about the sons of Roman emperor Tiberius?<br/>
                7. What advice did the boy's heart give him as he approached the Pyramids? What did he do when he saw
                the Pyramids?<br/>
                8. Who approaches Santiago as he digs in the sand, and what did they do?<br/>
                9. What story does one attacker tell Santiago?<br/>
                10. After the attackers leave, Santiago gets up from the sand and begins to laugh. Why?<br/>
                11. The Alchemist presents us with a lot of important lessons learned by Santiago throughout his
                journey. <br/>
                12. Was there one lesson more important than the other that he learned? Explain your answer. <br/>
              </p>
              <textarea className="textArea" onChange={onChangela8Listener9} value={la8Essay9}/>

              <span className="days">LESSON 10 </span>
              <p>After you watch the video below<b> The Alchemist, a Summary & Analysis, </b> answer the following
                questions: </p>
              <Video videoUrl="https://www.youtube.com/embed/6Xi06683LPo"/>
              <p>1. At the start of his journey, when Santiago asks a gypsy woman to interpret his dream about a
                treasure in the Egyptian pyramids, she asks for one tenth of the treasure in return. When Santiago asks
                the old man to show him the path to the treasure, the old man requests one tenth of his flock as
                "payment." Both payments represent a different price we have to pay to fulfill a dream; however, only
                one will yield a true result. Which payment represents false hope? Can you think of examples from your
                own life when you had to give up something to meet a goal and found the price too high? <br/>

                2. Paulo Coelho once said that alchemy is all about pursuing our spiritual quest in the physical world
                as it was given to us. It is the art of transmuting the reality into something sacred, of mixing the
                sacred and the profane. With this in mind, can you define your Personal Legend? At what time in your
                life were you first able to act on it? What was your "beginner's luck"? Did anything prevent you from
                following it to conclusion? Having read The Alchemist, do you know what inner resources you need to
                continue the journey? <br/>

                3. One of the first major diversions from Santiago's journey was the theft of his money in Tangiers,
                which forced him into taking a menial job with the crystal merchant. There, Santiago learned many
                lessons on everything from the art of business to the art of patience. Of all these, which lessons were
                the most crucial to the pursuit of his Personal Legend? <br/>

                4. When he talked about the pilgrimage to Mecca, the crystal merchant argued that having a dream is more
                important than fulfilling it, which is what Santiago was trying to do. Do you agree with Santiago's
                rationale or crystal merchant's? <br/>

                5. The Englishman, whom Santiago meets when he joins the caravan to the Egyptian pyramids, is searching
                for "a universal language, understood by everybody." What is that language? According to the Englishman,
                what are the parallels between reading and alchemy? How does the Englishman's search for the alchemist
                compares to Santiago's search for a treasure? How did the Englishman and Santiago feel about each
                other? <br/>

                6. The alchemist tells Santiago "you don't have to understand the desert: all you have to do is
                contemplate a simple grain of sand, and you will see in it all the marvels of creation." With this in
                mind, why do you think the alchemist chose to befriend Santiago, though he knew that the Englishman was
                the one looking for him? What is the meaning of two dead hawks and the falcon in the oasis? At one point
                the alchemist explains to Santiago the secret of successfully turning metal into gold. How does this
                process compare to finding a Personal Legend? <br/>
                7. At the very end of the journey, why did the alchemist leave Santiago alone to complete it? <br/>
                8. Earlier in the story, the alchemist told Santiago "when you possess great treasures within you, and
                try to tell others of them, seldom are you believed." At the end of the story, how did this simple
                lesson save Santiago's life? How did it lead him back to the treasure he was looking for? <br/></p>

              <textarea className="textArea" onChange={onChangela8Listener10} value={la8Essay10}/>

              <span className="days">LESSON 11 </span>
              <p>After you watch the video below <b> Top Quotes And Lessons,</b> answer the questions below to best of
                your ability. <br/>
                <Video videoUrl="https://www.youtube.com/embed/rnQ5OJgGM6g"/>
                1. List four lessons that The Alchemist tries to teach. <br/>
                2. Which quote was the most meaningful to you? Explain.<br/>
                3. Do you believe every person has a personal legend they must pursue? If so, what is yours? If not, Why
                do you believe this?<br/>
                4. Coelho states that "simple things are the most valuable and only wise people appreciate them."
                Produce a written or artistic response which depicts something that is "simple" yet valuable to you and
                explain why it is so important. <br/>
                5. The alchemist (in the form of Melchizedek) says to Santiago, "When you really want something to
                happen, the whole universe conspires so that your wish comes true." Write or create a response which
                captures a time in your own life when you had a wish, and you felt that the whole universe conspired for
                OR against you. What happened to make you feel that way? Did your wish come true? <br/>
                6. The old man states that the "world's greatest lie….is that at a certain point in our lives, we lose
                control of what's happening to us, and our lives become controlled by fate." Do you, like the old man,
                believe this is a lie, and that we are always in control of our destinies? Why/ why not? Why do you
                think people believe the "World's greatest lie"? Or…..Write about/explore artistically a time in your
                life when you felt as though you had "lost control," and your fate was being determined by other forces.
                Why did you feel that way? Did you regain control? <br/>
                7. Santiago is told that "people are afraid to pursue their most important dreams because they feel they
                don't deserve them, or that they'll be unable to achieve them." Create a written or artistic response to
                the following: Do you have a goal or dream which intimidates you? Why do you feel unworthy or fearful of
                it? What practical steps might you take to make the goal more accessible or easier to accomplish? On the
                other hand, are there some dreams which we are correct to fear? Do you believe some dreams should simply
                remain as dreams? Why/why not? <br/>
              </p>
              <textarea className="textArea" onChange={onChangela8Listener11} value={la8Essay11}/>

              <span className="days">LESSON 12 </span>
              <p>Complete ONE of the projects listed below. <br/>
                1. Map out Santiago's journey. Include obstacles he encounters and lessons he learns in their
                geographically correct locations. Provide a key which suggests ideas, progress, symbolism, etc. <br/>
                2. Create a painting, sketch, collage, photo-essay, or sculpture which captures an idea, relationship or
                moment from the story. Provide a written explanation of your work. <br/>
                3. Scrapbook (with explanatory notes) of Santiago's travels—feature pictures and items which Santiago
                accumulates as he learns about life. <br/>
              </p>
              <textarea className="textArea" onChange={onChangela8Listener12} value={la8Essay12}/>

              <span className="days">LESSON 13 </span>
              <p>Produce a creative writing piece which captures some of the central ideas of the book. You can come up
                with your own or choose from one of the ideas below. <br/></p>
              <ul className='assnList'>
                <li> Journal: A Day in the Life of a Shepherd</li>
                <li> Rewrite a portion of the story from a different perspective: Fatima, the Alchemist, the Fortune
                  Teller, the crystal merchant the sheep!
                </li>
                <li> Write Santiago's "How-To Find Your Treasure" Handbook, or "Personal Legends for Dummies"</li>
                <li> Write a letter from Santiago to Fatima and a second one Fatima to Santiago.</li>
              </ul>
              <textarea className="textArea" onChange={onChangela8Listener13} value={la8Essay13}/>

              <span className="days">LESSON 14 </span>
              <h4>Funny Business with Khan Academy</h4>
              <p className="topBottom">If you don't already have one, <a
                href="https://support.khanacademy.org/hc/en-us/articles/204451324-How-do-I-create-my-account-"
                rel="noreferrer" target="_blank"> set up a free account at Khan Academy </a> and then begin the lesson
                below.</p>
              <p> Complete all assignments listed below for this unit (readings, videos and
                practice).<br/> Write a brief summary of what you learned in the textbox below. <br/>
                <ul className='assnList'><a
                  href="https://www.khanacademy.org/ela/cc-8th-reading-vocab/xe1f784c7c84e84fc:cc-8th-funny-business/xe1f784c7c84e84fc:building-knowledge/a/welcome-to-the-funny-business-unit"
                  rel="noreferrer" target="_blank"> Building knowledge: Funny Business </a>
                  <li>Welcome to the Funny Business unit!</li>
                  <li>Funny Business: unit vocabulary</li>
                </ul>

                <ul className='assnList'><a
                  href="https://www.khanacademy.org/ela/cc-8th-reading-vocab/xe1f784c7c84e84fc:cc-8th-funny-business/xe1f784c7c84e84fc:close-reading/v/citing-evidence-in-literary-analysis-reading"
                  rel="noreferrer" target="_blank"> Close reading: drama: Funny Business
                </a>
                  <li>Citing evidence in literary analysis | Reading</li>
                  <li>Making objective summaries of literary texts | Reading</li>
                  <li>The elements of a drama | Reading</li>
                  <li>Changes in POV and dramatic irony | Reading</li>
                  <li>Introduction to A Midsummer Night's Dream</li>
                  <li>Practice: Funny Business: reading drama; A Midsummer Night's Dream 8</li>
                </ul>
              </p>
              <textarea className="textArea" onChange={onChangela8Listener14} value={la8Essay14}/>

              <span className="days">LESSON 15 </span>
              <p className="margin-para"> Complete all assignments listed below for this unit (readings, videos and
                practice). <br/> Write a brief summary of what you learned in the textbox below. <br/></p>

              <ul className='assnList'><a
                href="https://www.khanacademy.org/ela/cc-8th-reading-vocab/xe1f784c7c84e84fc:cc-8th-funny-business/xe1f784c7c84e84fc:untitled-71/v/two-or-more-main-ideas-reading"
                rel="noreferrer" target="_blank"> Close reading: informational text: Funny Business</a>
                <li>How can a text have two or more main ideas? | Reading</li>
                <li>Analyzing tone through word choice | Reading</li>
                <li>What is an argument? | Reading</li>
                <li>Practice: Funny Business: reading informational text; This Is Your Brain on Comedy 8</li>
              </ul>
              <textarea className="textArea" onChange={onChangela8Listener15} value={la8Essay15}/>

              <span className="days">LESSON 16 </span>
              <p> Complete all assignments listed below for this unit (readings, videos and
                practice). <br/> Write a brief summary of what you learned in the textbox below. <br/></p>
              <ul className='assnList'><a
                href="https://www.khanacademy.org/ela/cc-8th-reading-vocab/xe1f784c7c84e84fc:cc-8th-funny-business/xe1f784c7c84e84fc:applying-knowledge/v/figurative-language-reading"
                rel="noreferrer" target="_blank"> Applying vocabulary knowledge: Funny Business</a>
                <li>Figurative language | Reading</li>
                <li>Connotation | Reading</li>
                <li>Practice: Funny business: vocabulary; A Midsummer Night's Dream 8</li>
              </ul>
              <textarea className="textArea" onChange={onChangela8Listener16} value={la8Essay16}/>

              <span className="days">LESSON 17 </span>
              <p> Complete all assignments listed below for this unit (readings, videos and
                practice). <br/> Write a brief summary of what you learned in the textbox below. <br/></p>
              <ul className='assnList'><a
                href="https://www.khanacademy.org/ela/cc-8th-reading-vocab/xe1f784c7c84e84fc:cc-8th-funny-business/xe1f784c7c84e84fc:reading-for-understanding/v/developing-themes-reading"
                rel="noreferrer" target="_blank"> Reading for understanding: fiction; Use What You Have: Funny
                Business</a>
                <li>Developing themes | Reading</li>
                <li>Practice: Funny business: reading realistic fiction; Use What You Have 8</li>
              </ul>
              <textarea className="textArea" onChange={onChangela8Listener17} value={la8Essay17}/>

              <span className="days">LESSON 18 </span>
              <p> Complete all assignments listed below for this unit (readings, videos
                and practice). <br/> Write a brief summary of what you learned in the textbox below. <br/></p>
              <ul className='assnList'><a
                href="https://www.khanacademy.org/ela/cc-8th-reading-vocab/xe1f784c7c84e84fc:cc-8th-funny-business/xe1f784c7c84e84fc:reading-for-understanding-fiction-an-uncomfortable-bed/v/how-pov-affects-readers-reading"
                rel="noreferrer" target="_blank"> Reading for understanding: fiction;<br/> An Uncomfortable Bed:
                Funny Business</a><br/>
                <li>How POV affects readers | Reading</li>
                <li>Practice: Funny business: reading realistic fiction; An Uncomfortable Bed 8</li>
              </ul>
              <textarea className="textArea" onChange={onChangela8Listener18} value={la8Essay18}/>

              <span className="days">LESSON 19 </span>
              <p>Begin reading the novel <b>Piecing Me Together</b> by Renee Watson. It is a story about Jade, a
                teen girl who believes she must get out of her neighborhood if she's going to succeed. Along the
                way, she addresses issues surrounding race, privilege, identity, education and opportunity. The
                novel is available at your local library, local bookstore and online for purchase. Until your
                copy arrives, the <a href={require("../resources/books/PiecingMeTogetherExcerpt.pdf")}
                                     rel="noreferrer" target="_blank"> reading for today's lesson is provided
                  here. </a></p> <br/>
              <a href={require("../resources/books/PiecingMeTogetherExcerpt.pdf")} rel="noreferrer"
                 target="_blank">
                <Img fluid={data.piecingMeTogether.childImageSharp.fluid} alt="Piecing Me Together novel"/><br/>
              </a>
              <ol className="vocab">
                <li>What language is Jade learning to speak to find a way out?</li>
                <li>What does 'tener exito' mean and what language is it?</li>
                <li>What do you think of the school Jade attends?</li>
                <li>What year is Jade in?</li>
                <li>What is the name of the neighborhood Jade lives in?</li>
                <li>Where did Mom used to work and why did she lose her job?</li>
                <li>Who does Mom currently work for?</li>
                <li>Give examples of opportunities Jade has previously been offered by Mrs Parker.</li>
                <li>Where does Mrs Parker like taking Jade to and why?</li>
                <li>Why did EJ drop out of college?</li>
                <li>What are Mrs Parkers' grandsons doing in the photo on her desk?</li>
                <li>What do you think of the Woman to Woman group?</li>
                <li>What does Jade have to do for a scholarship to any Oregon College?</li>
                <li>What did Sacagawea do to aid the Lewis & Clark Expedition?</li>
                <li>Who is York and what did York do to aid the Lewis and Clark expedition?</li>
                <li>What special privilege did York and Sacagawea have?</li>
                <li>Lee lee tells jade about her new history teacher and how she learned about york, a black
                  slave who traveled with whom?
                </li>
                <li>Which two historical characters does Jade think about and wonder how they felt having some
                  freedom but no real power?
                </li>
              </ol>
              <h4>Vocabulary</h4>
              For each vocabulary word below, write a definition and then write a sentence using the word.<br/>
              <ol className="vocab">
                <li>ironic</li>
                <li>humanities</li>
                <li>exquisite</li>
                <li>defer</li>
                <li>modest</li>
                <li>savor</li>
                <li>biased</li>
              </ol>
              <textarea className=" textArea" onChange={onChangela8Listener19} value={la8Essay19}/>

              <span className=" days">LESSON 20 </span>
              <p>Read <b>Chapters 7 - 12</b> in the novel <i> Piecing Me Together. </i> Then complete the
                assignment below.</p>
              <ol className=" vocab">
                <li>What is " St. John's Review"?</li>
                <li>Who lives near Peninsula Park?</li>
                <li>Where do Sam and Jade meet during lunch to eat together?</li>
                <li>What do you think of the Woman to Woman group after the meeting?</li>
                <li>What is Sam' s locker filled with?</li>
                <li>What does Jade do (with the refreshments) when at the first Woman to Woman meeting ?</li>
                <li>Who sits next to Jade at the first Woman to Woman meeting?</li>
                <li>Why does Jade find it difficult to connect with Kennedy?</li>
                <li>Why is mom staying at Ms Louise's house for three days?</li>
                <li>What does Maxine give Jade the first time they meet?</li>
                <li>Describe Jade's family.</li>
                <li>What were some of the things Maxine did while she studied at St. Francis?</li>
                <li>Where did Maxine get to go with the study abroad program?</li>
                <li>Why does Sam warn Jade not to take it personally if her grandma doesn't like her?</li>
                <li>Describe Mrs Franklin. What do you think of her?</li>
                <li>How long has the Franklins lived in Oregon?</li>
                <li>How many different places did Jade live?</li>
                <li>Why is Sam upset with her mom?</li>
                <li>Where is Sam's brother?</li>
                <li>How is Sam's father's situation like?</li>
              </ol>
              <h4>Vocabulary</h4>
              For each vocabulary word below, write a definition and then write a sentence using the word.<br/>
              <ol className="vocab">
                <li>stereotype</li>
                <li>orator</li>
                <li>mentor</li>
                <li>proactive</li>
                <li>statistic</li>
                <li>morsel</li>
                <li>serenade</li>
                <li>discreet</li>
                <li>cohort</li>
                <li>regal</li>
              </ol>
              <textarea className=" textArea" onChange={onChangela8Listener20} value={la8Essay20}/>

              <span className=" days">LESSON 21 </span>
              <p>Read <b>Chapters 13 - 18</b> in the novel <i> Piecing Me Together. </i> Then complete the
                assignment below.</p>
              <ol className=" vocab">
                <li>Describe Mom's favorite mug and how she got it</li>
                <li>What does Jade eat for breakfast on her b'day?</li>
                <li>What does Jade plan to do on her b'day?</li>
                <li>What kind of music does Jade listen to on her bday?</li>
                <li>What kind of cake do they eat on Jade's b'day?</li>
                <li>What does jade use out of her mother's closet on the Sunday when she doesn't have her hair
                  in braids?
                </li>
                <li>What does Sam do for Jade for her B'day?</li>
                <li>What does Dad get Jade for her birthday?</li>
                <li>What does Jade eat when she visits her dad?</li>
                <li>Jade takes pictures of many things on her way home from her father's house after he gave her
                  a digital camera for her birthday. What was the last thing jade took a picture of before she
                  went into her home?
                </li>
              </ol>
              <h4>Vocabulary</h4>
              For each vocabulary word below, write a definition and then write a sentence using the word.<br/>
              <ol className="vocab">
                <li>graze</li>
                <li>sustain</li>
                <li>collage</li>
                <li>momentum</li>
                <li>cliche</li>
                <li>blare</li>
                <li>disclaimer</li>
                <li>barren</li>
                <li>excursion</li>
                <li>slather</li>
                <li>rain check</li>
                <li>belated</li>
                <li>conjure</li>
                <li>commodity</li>
              </ol>
              <textarea className="textArea" onChange={onChangela8Listener21} value={la8Essay21}/>

              <span className="days">LESSON 22 </span>
              <p>Read <b>Chapters 19 - 24</b> in the novel <i> Piecing Me Together. </i> Then complete the
                assignment
                below.</p>
              <ol className="vocab">
                <li>Where does Max take Jade on their first outing together?</li>
                <li>When Max gets Jade two books,what are the name of the artists whose artwork is featured?
                </li>
                <li>How many women were chosen to be part of the woman to woman mentorship program?</li>
                <li>Where is the second Woman to Woman gathering and what is the topic?</li>
                <li>Where do Sam and Jade sometimes hang out and do homework?</li>
                <li>What is Glamour Girl's real name?</li>
                <li>Where do they eat when they go and eat lunch with Kennedy?</li>
                <li>Where does Jade go when she gets a note from Mom to get herself something for dinner and
                  why?
                </li>
              </ol>
              <h4>Vocabulary</h4>
              <ol className="vocab">
                For each vocabulary word below, write a definition and then write a sentence using the
                word.<br/>
                <li>haven</li>
                <li>complement</li>
                <li>hummus</li>
                <li>dignity</li>
                <li>cobbler</li>
                <li>arugula</li>
                <li>pessimist</li>
                <li>oblivious</li>
                <li>gibberish</li>
              </ol>
              <textarea className=" textArea" onChange={onChangela8Listener22} value={la8Essay22}/>

              <span className=" days">LESSON 23 </span>
              <p>Read <b>Chapters 25 - 30</b> in the novel <i> Piecing Me Together. </i> Then complete the
                assignment below.</p>
              <ol className=" vocab">
                <li>What does Frank give Jade?</li>
                <li>Where does Sam,Lee Lee and Jade go when Sam comes to their neighborhood for the first time?
                </li>
                <li>Who is Kobe?</li>
                <li>Who is Andrea?</li>
                <li>Who is Lee Lee's English teacher and what does she let them do?</li>
                <li>What is the Thanksgiving tradition Jade and her mom have and who joins them this year?</li>
                <li>What does Jade,EJ,Mom and Lee Lee eat during Thanksgiving dinner?</li>
                <li>What is discussed over Thanksgiving dinner?</li>
                <li>What do they do on Thanksgiving after dinner?</li>
                <li>What did Max do during the Woman to Woman outing to the Portland Art Museum that upsets
                  Jade?
                </li>
                <li>Why does Max take Jade out for dinner after the woman to woman Portland Art museum outing?
                </li>
                <li>When Max and Jade have dinner together after going to the museum,what do they order?</li>
                <li>What does Max's mom work as?</li>
                <li>What was jade going to do downtown when she was on the bus and saw the weeping woman?</li>
                <li>What was on the mural that jade had never seen downtown when she was taking pictures?</li>
              </ol>
              <h4>Vocabulary</h4>
              For each vocabulary word below, write a definition and then write a sentence using the word.<br/>
              <ol className="vocab">
                <li>synchronized</li>
                <li>dismissive</li>
                <li>ghetto</li>
                <li>assess</li>
                <li>derogatory</li>
                <li>dainty</li>
                <li>indigenous</li>
                <li>somber</li>
              </ol>
              <textarea className="textArea" onChange={onChangela8Listener23} value={la8Essay23}/>

              <span className="days">LESSON 24 </span>
              <p>Read <b>Chapters 31 - 36</b> in the novel <i> Piecing Me Together. </i> Then complete the
                assignment
                below.</p>
              <ol className="vocab">
                <li>What is Lee Lee's real name?</li>
                <li>When Jade,Lee Lee and Sam are making holiday cards, who do they each make cards for?</li>
                <li>What is Jade's new year's resolution?</li>
                <li>When Jade goes to hang out at Max's apartment,what snacks do they have?</li>
                <li>What is hanging in her living room?</li>
                <li>What are the names of Max's two friends that Jade meets?</li>
                <li>Describe Bailey's appearance.</li>
                <li>Describe Kira's appearance.</li>
                <li>Where does Kira study at?</li>
                <li>Where did Bailey study at?</li>
                <li>Where do Sam and Jade go to shop?</li>
                <li>List some of the things Jade considers black and beautiful:</li>
                <li>When does Mom go into music gospel mode?</li>
              </ol>
              <h4>Vocabulary</h4>
              For each vocabulary word below, write a definition and then write a sentence using the word.<br/>
              <ol className="vocab">
                <li>solemn</li>
                <li>fare</li>
                <li>mural</li>
                <li>frail</li>
                <li>resolution</li>
                <li>unison</li>
                <li>loiter</li>
                <li>idle</li>
                <li>sear</li>
                <li>uppity</li>
              </ol>
              <textarea className=" textArea" onChange={onChangela8Listener24} value={la8Essay24}/>

              <span className=" days">LESSON 25 </span>
              <p>Read <b>Chapters 37 - 42</b> in the novel <i> Piecing Me Together. </i> Then complete the
                assignment below.</p>
              <ol className=" vocab">
                <li>What event does woman to woman have planned that jade thinks she needs a new dress for?</li>
                <li>What is the name of the symphony Jade goes to?</li>
                <li>What notable thing did James DePriest do ?</li>
                <li>What notable thing did Marian Anderson do?</li>
                <li>Why is mom working extra shifts?</li>
                <li>Who nominated Sam for the study abroad program?</li>
                <li>What is Soul Food Sunday and when does it happen?</li>
                <li>Its a tradition in Max's family to come together and eat dinner on the first Sunday of every
                  month
                </li>
                <li>For Soul Food Sunday,what is Max in charge of?</li>
                <li>Why is Max in trouble when she goes to the bakery on Fridays?</li>
                <li>What does Jade and Max get from the bakery?</li>
                <li>List everyone Jade meets in Maxine's family.</li>
                <li>What is the name of the artist whose work decorates the Winters' foyer?</li>
                <li>Where is the house Mr Winters sold?</li>
                <li>What does Mia's husband work as?</li>
                <li>What does jade's mom bring out of her bedroom to prove a point to jade when jade talks about
                  quitting woman to woman?
                </li>
              </ol>
              <h4>Vocabulary</h4>
              For each vocabulary word below, write a definition and then write a sentence using the word.<br/>
              <ol className="vocab">
                <li>akin</li>
                <li>percussion</li>
                <li>contralto</li>
                <li>acclaim</li>
                <li>heathen</li>
                <li>intricate</li>
                <li>generic</li>
                <li>torte</li>
              </ol>
              <textarea className="textArea" onChange={onChangela8Listener25} value={la8Essay25}/>

              <span className="days">LESSON 26 </span>
              <p>Read <b>Chapters 43 - 48</b> in the novel <i> Piecing Me Together. </i> Then complete the
                assignment
                below.</p>
              <ol className="vocab">
                <li>Who convinces Jade to not quit Woman to Woman?</li>
                <li>What street was the McMennamins on that Jade and Maxine visited?</li>
                <li>What did McMenamins on the 33rd use to be?</li>
                <li>What did the bar in McMenamins use to be?</li>
                <li>What does Maxine drink when at McMenamins?</li>
                <li>How far away (minutes) is Vancouver from Jade's house?</li>
                <li>What does EJ think praying is?</li>
                <li>What is the name of the girl who was in the news (Vancouver) and what happened (what was
                  broken and by who)?
                </li>
                <li>Who sends Jade to Mrs Parker for 'being disrespectful'?</li>
                <li>Before Jade goes home after the Ms Weber incident in school,who does see?</li>
              </ol>
              <h4>Vocabulary</h4>
              For each vocabulary word below, write a definition and then write a sentence using the word.<br/>
              <ol className="vocab">
                <li>secluded</li>
                <li>plush</li>
                <li>foyer</li>
                <li>interject</li>
                <li>bombard</li>
                <li>emerging</li>
                <li>sonogram</li>
                <li>rake</li>
                <li>gawk</li>
                <li>remnant</li>
              </ol>

              <textarea className=" textArea" onChange={onChangela8Listener26} value={la8Essay26}/>

              <span className=" days">LESSON 27 </span>
              <p>Read <b>Chapters 49 - 54</b> in the novel <i> Piecing Me Together. </i> Then complete the
                assignment below.</p>
              <ol className=" vocab">
                <li>What is Sam's excuse for Hannah not getting in trouble(for being disrespectful to Ms Weber)?
                </li>
                <li>What were Jade and Lee Lee thankful for when they were talking on the phone about Natasha
                  ramsey?
                </li>
                <li>Who used to joke with children about monstrous tales and made themselves a monster because
                  of
                  their dark skin?
                </li>
                <li>Where did Jade and Max walk during their outing together?</li>
                <li>What is Mr Flores eating when Jade talks to him about the study abroad program?</li>
              </ol>
              <h4>Vocabulary</h4>
              For each vocabulary word below, write a definition and then write a sentence using the word.<br/>
              <ol className="vocab">
                <li>resentment</li>
                <li>backlash</li>
                <li>alcove</li>
                <li>spare</li>
                <li>valedictorian</li>
                <li>pertain</li>
                <li>insubordinate</li>
                <li>defiant</li>
                <li>persevere</li>
                <li>colossal</li>
              </ol>
              <textarea className="textArea" onChange={onChangela8Listener27} value={la8Essay27}/>

              <span className="days">LESSON 28 </span>
              <p>Read <b>Chapters 55 - 60</b> in the novel <i> Piecing Me Together. </i> Then complete the
                assignment below.
              </p>
              <ol className="vocab">
                <li>What shopping mall does Jade and Lee Lee often go to?</li>
                <li>Why does Lee Lee want to avoid Target?</li>
                <li>What is Andrea's crush's name?</li>
                <li>Where does Maxine take Jade to walk?</li>
                <li>What bridges do they cross during their walk along the Esplanade?</li>
                <li>Who does Max's grandma "bear witness" with?</li>
                <li>Where is the Woman to Woman Money Matters Workshop held?</li>
                <li>During the Money Matters Workshop,while in college, what are they advised?</li>
              </ol>
              <h4>Vocabulary</h4>
              For each vocabulary word below, write a definition and then write a sentence using the word.<br/>
              <ol className="vocab">
                <li>advocate</li>
                <li>para abogar</li>
                <li>trivial</li>
                <li>reflection</li>
                <li>downplay</li>
                <li>contort</li>
                <li>heave</li>
                <li>commotion</li>
              </ol>
              <textarea className=" textArea" onChange={onChangela8Listener28} value={la8Essay28}/>

              <span className=" days">LESSON 29 </span>
              <p>Read <b>Chapters 61 - 66</b> in the novel <i> Piecing Me Together. </i> Then complete the
                assignment below.</p>
              <ol className=" vocab">
                <li>What days does EJ work?</li>
                <li>What does Jade and Maxine use to brush Jade's hair?</li>
                <li>What are two artists whose work are mentioned in Mia's gallery?</li>
                <li>How many paid internhips does Mia have to offer?</li>
                <li>What are some of the food served by the waiters in the auction event?</li>
                <li>What is Lee Lee's homework about?</li>
              </ol>
              <ol className="vocab">
                <li>pry</li>
                <li>intact</li>
                <li>vibrant</li>
                <li>pedestrian</li>
                <li>internalize</li>
                <li>dispel</li>
                <li>nestle</li>
                <li>anticipate</li>
                <li>anticiparse</li>
                <li>gig</li>
              </ol>
              <textarea className="textArea" onChange={onChangela8Listener29} value={la8Essay29}/>

              <span className="days">LESSON 30 </span>
              <p>Read <b>Chapters 67 - 72</b> in the novel <i> Piecing Me Together. </i> Then complete the
                assignment below.
              </p>
              <ol className="vocab">
                <li>What year did Lewis and Clark each the Pacific Ocean?</li>
                <li>What year did York get his freedom?</li>
                <li>When did the Lewis and Clark expedition head to St Louis?</li>
                <li>How does Mr Flores support Jade with the event?</li>
              </ol>
              <h4>Vocabulary</h4>
              For each vocabulary word below, write a definition and then write a sentence using the
              word.<br/>
              <ol className="vocab">
                <li>marginalize</li>
                <li>contemporary</li>
                <li>exclusively</li>
                <li>appropriate</li>
                <li>exposure</li>
                <li>gala</li>
                <li>ensemble</li>
              </ol>
              <textarea className=" textArea" onChange={onChangela8Listener30} value={la8Essay30}/>

              <span className=" days">LESSON 31 </span>
              <p>Read <b>Chapters 73 - 76</b> in the novel <i> Piecing Me Together. </i> Then complete the
                assignment below.</p>
              <ol className=" vocab">
                <li>What is EJ doing at the event?</li>
                <li>What is Mia doing for the event?</li>
                <li>What is Maxine doing for the event?</li>
                <li>What is Josiah doing for the event?</li>
                <li>What happened/was reported to happen in 1832?</li>
              </ol>
              <h4>Vocabulary</h4>
              For each vocabulary word below, write a definition and then write a sentence using the
              word.<br/>
              <ol className="vocab">
                <li>articulate</li>
                <li>profound</li>
                <li>proceeds</li>
                <li>tapestry</li>
                <li>redeem</li>
                <li>mosaic</li>
                <li>scrutinize</li>
              </ol>
              <textarea className="textArea" onChange={onChangela8Listener31} value={la8Essay31}/>

              <span className="days">LESSON 32 </span>
              <p><i>Sometimes it feels like I leave home a whole person, <br/>
                sent off with kisses from Mom, who is hanging her<br/>
                every hope on my future. By the time I get home I feel<br/>
                like my soul has been shattered into a million pieces. <br/>
                Mom's love repairs me…<br/>
                Listening to these mentors, I feel like I can prove the<br/>
                negative stereotypes about girls like me wrong. That<br/>
                I can and will do more, be more. <br/>
                But when I leave? It happens again. The shattering. <br/>
                And this makes me wonder if a black girl's life is only<br/>
                about being stitched together and coming undone, <br/>
                being stitched together and coming undone. I wonder<br/>
                if there's ever a way for a girl like me to feel whole. <br/>
                —PIECING ME TOGETHER (p. 85)</i></p>
              <h4>Deeper Thinking about <i>Piecing Me Together. </i></h4>
              <p>Answer the questions below to the best of your ability.</p>
              <ol className="vocab">
                <li> When you read the passage above, is it something you can relate to or is it difficult
                  to
                  understand what
                  Jade is experiencing? Explain your thoughts.
                </li>
                <li> How do we know that Jade is considered poor or "low income?</li>
                <li> Does Jade take for granted how much things cost? Do other people in the story?
                  Explain how
                  you know
                  this.
                </li>
                <li> How does Jade feel about Lee Lee taking her around to expensive restaurants? Does she
                  enjoy it?
                  Explain.
                </li>
                <li> What feelings does Jade have about her economic situation and why?</li>
                <li>There are instances when Jade's lack of money causes her to keep secrets from people in
                  her life. Why does she choose to do this? What might be the impact on her relationships when she's
                  unable to
                  be honest about her reality?
                </li>
                <li>Are there certain people with whom Jade can be transparent about money? If she chose to
                  reveal the truth
                  of her situation with others, how might she share it? What might be the impact of her
                  honesty on those
                  relationships?
                </li>
                <li>Jade thinks, "Always the realist, I think. Always the poorest." What skills does Jade
                  have
                  that perhaps
                  her wealthy classmate Kennedy or her mentor Maxine may not have?
                </li>
                <li>Have you ever hidden something about your family reality from others?</li>
              </ol>
              <textarea className="textArea" onChange={onChangela8Listener32} value={la8Essay32}/>

              <span className="days">LESSON 33 </span>
              <h4>Deeper Thinking continued… <i>Piecing Me Together: Class Identity </i></h4>
              <p>Answer the questions below to the best of your ability.</p>
              <ol className="vocab">
                <li>How does the gap between Jade's experience and that of more affluent people distance her
                  from them?
                </li>
                <li>How does it make it possible for her to be aware of things they can't see?</li>
                <li>Are there things you see about your peers' privileges that others might not see?</li>
                <li>How does Jade feel when she recognizes her shared identity with Sam? How does this
                  recognition affect their relationship?
                </li>
                <li>Have you ever found an unexpected or unspoken connection with someone centered around
                  what
                  you can and cannot afford?
                </li>
                <li>How does Mrs. Parker try to help Jade, but also ends up stereotyping her?</li>
                <li>Author Jason Reynolds said that this book "somehow gets the toxicity of sympathy." What
                  do
                  you think he means? How are sympathy and empathy different?
                </li>
                <li> Are there ways that Mrs. Parker or Maxine could offer Jade opportunities that would
                  make
                  her feel more empowered?
                </li>
                <li>Mrs. Parker asks Jade, "What do you want?" Why isn't this effective?</li>
                <li>Describe Jade's bus trip from her neighborhood to St. Francis High School. How does the
                  distance make her feel more disconnected?
                </li>
                <li> Explain why Jade is troubled by the fact that the word "exit" is included in the
                  Spanish
                  word "succeed."
                </li>
                <li>Jade's mother seems thankful that her family is not worse off. Does this show her
                  strength
                  or the challenge of the family's economic position or both?
                </li>
                <li>Jade collages with everyday things she finds in her neighborhood. What does that say
                  about
                  how she views her neighborhood?
                </li>
                <li>What assumptions do people make about your neighborhood? What don't they know?</li>
              </ol>
              <textarea className="textArea" onChange={onChangela8Listener33} value={la8Essay33}/>

              <span className="days">LESSON 34 </span>
              <h4>Deeper Thinking continued… <i>Piecing Me Together: Racial Identity </i></h4>
              <p>Answer the questions below to the best of your ability.</p>
              <ol className="vocab">
                <li>When does Jade experience herself as "too black" or check her behavior so she won't be
                  seen that way?
                </li>
                <li> Why do Maxine's parents coach her not to be too black? What are they afraid of? What
                  might be the
                  consequences of being too black?
                </li>
                <li> Are there times Jade might experience herself as "not black enough"? How might that
                  impact her
                  relationships and her feelings about herself?
                </li>
                <li> Do you agree that "white people can handle black sadness better than black anger"? Why?
                </li>
                <li> What part of yourself, what identity, do you sometimes or always repress to fit in?
                </li>
                <li> Why is it so hard for Sam and other white people in Jade's life (school staff) to see
                  the
                  ways in which
                  Jade experiences mistreatment as a black girl?
                </li>
                <li> Describe Jade's experience at the mall store. What does it feel like for Jade to see
                  that
                  she's being mistreated? Did you think it was because of her race?
                </li>
                <li> Jade was sure it was because of race. What do you think it felt like for her to have
                  Sam
                  and the other shoppers ignore, deny, or explain it away?
                </li>
                <li> Do you think they should have behaved differently? How so?</li>
                <li> What's the difference between the opportunities Jade is offered and the opportunities
                  Sam
                  is offered? How
                  is race playing a role?
                </li>
              </ol>
              <textarea className="textArea" onChange={onChangela8Listener34} value={la8Essay34}/>

              <span className="days">LESSON 35 </span>
              <h4>Deeper Thinking continued… <i>Piecing Me Together: Racial Identity </i></h4>
              <p>Answer the questions below to the best of your ability.</p>
              <ol className="vocab">
                <li>Why are Jade and Lee Lee so distressed to hear about the assault on a girl they do not
                  know?
                </li>
                <li>Why are so few other people aware of the incident, or disturbed by it?</li>
                <li>If Jade feels Natasha's attack deeply, how do you think that affects her feeling of
                  safety? How do you think that changes her behavior?
                </li>
                <li>What do you know about the #BlackLivesMatter movement? How does Jade, Sam, and Lee Lee's
                  experience of the Natasha Ramsey incident connect with the meaning of that movement?
                </li>
                <li>Thinking about intersectionality or simply about Jade's life, what are your responses to
                  the insistence of some whites that #AllLivesMatter?
                </li>
                <li>More police interactions with black men and women end in police committing violence than
                  with white men and women. How does that make you feel?
                </li>
                <li>Lewis and Clark are seen as great American explorers in our history books. Why is it
                  important to also understand that Clark was a slave owner?
                </li>
                <li>Why is Jade drawn to York's role in the story?</li>
                <li>Jade asks what it would have been like if York had received land and freedom. She
                  wonders
                  what would have happened if he could have built something and passed on that strength and
                </li>
                <li>accomplishment to other generations. How might York's ancestors have been changed? What
                  does this help you see about being the descendants of a slave?
                </li>
                <li>What do you think is the most important story from your ancestry?</li>
              </ol>
              <textarea className="textArea" onChange={onChangela8Listener35} value={la8Essay35}/>

              <span className="days">LESSON 36 </span>
              <h4>Deeper Thinking continued… <i>Piecing Me Together: Racial Identity </i></h4>
              <p>Answer the questions below to the best of your ability.</p>
              <ol className="vocab">
                <li>Jade is embarrassed that she has never thought about Thanksgiving as "celebrating that
                  our
                  nation was stolen from indigenous people." Can we be thankful on a national holiday while
                  at
                  the same time acknowledging the reality of what our nation did to native people?
                </li>
                <li>Sports team logos are long-term symbols of our pride in our community's teams. When that
                  logo is offensive to marginalized people, should it be changed? Explain your opinion.
                </li>
                <li>Is there a reason the author includes Sacagawea and York's story within Jade's story?
                  Are
                  there any parallels in their stories?
                </li>
                <li>Sacagawea and York provide such a potent metaphor for Jade's situation. Jade is selected
                  out of and removed from her community for special treatment, but what actual power does
                  she
                  have? Do you think anything is expected of her? Explain your answer.
                </li>
                <li>When talking with Lee Lee about Sacagawea and York, Jade is "wondering how they must
                  have
                  felt having a form of freedom but no real power"? Does that statement also apply to Jade?
                  To
                  you? Explain why or why not.
                </li>
                <li>Are there moments when you are learning about marginalized and/or oppressed people that
                  make you feel uncomfortable? What in particular do you notice stirs up the most
                  discomfort?
                </li>
              </ol>
              <textarea className="textArea" onChange={onChangela8Listener36} value={la8Essay36}/>

              <span className="days">LESSON 37 </span>
              <h4>Deeper Thinking continued… <i>Piecing Me Together: Racial Identity </i></h4>
              <p>Answer the questions below to the best of your ability.</p>
              <ol className="vocab">
                <li>Do the Dairy Queen boys know Jade? Why do the boys feel they can rank girls and comment
                </li>
                <li>on their bodies? How do their comments affect Jade's belief that she is both plus sized
                  and
                </li>
                <li>beautiful?</li>
                <li>Do girls comment on boys' bodies and looks? Is it different? If so, how?</li>
                <li>What do you wish Jade had said to those boys? Would you have said that?</li>
                <li>Why can Jade speak up for herself with E.J. and celebrate her beauty? How is it
                  different
                  from
                </li>
                <li>her silence with the Dairy Queen boys?</li>
                <li>Do you publicly rank people by appearance? Have you been ranked?</li>
                <li>Where do Jade and the girls in her neighborhood "connect and are just the same"?</li>
                <li>How has Jade's scholarship and mentor situation put her on another path? How does this
                  divide Jade from her peers? How does it create a divide within herself?
                </li>
                <li>How are Maxine and Sabrina a "different type of black"? How does this split Jade in two?
                </li>
                <li>Do you tend to be aware of yourself more as just an individual, or as part of a group?
                  Why
                  do you think that is?
                </li>
                <li>What did you think of the book and how did you like it?</li>
              </ol>
              <textarea className="textArea" onChange={onChangela8Listener37} value={la8Essay37}/>

              <span className="days">LESSON 38 </span>
              <h4>In four or five paragraphs, <b>write a book review for Piecing Me Together.</b></h4>
              <ul className="assnList">
                <li>Begin with a brief summary of the novel that introduces the main character, the main
                  conflict and the question the novel tries to answer.
                </li>
                <li>Then, give an overview of how you liked the novel. Discuss what you didn't enjoy, followed
                  by the aspects you liked most and why.
                </li>
                <li>Include at least one excerpt or direct quote from the novel that will give your readers a
                  feel for the novel and the author's writing style.
                </li>
                <li>Conclude with a summary of your recommendation. The video below can help you get started.</li>
              </ul>
              <Video videoUrl="https://www.youtube.com/embed/0t78opcFHAM"/>
              <textarea placeholder="Book Review: 4 - 5 paragraphs" className="textArea"
                        onChange={onChangela8Listener38} value={la8Essay38}/>

              <span className="days">LESSON 39 </span>
              <p>Watch the video <b> Literary Genres and Subgenres. </b></p>
              <Video videoUrl="https://www.youtube.com/embed/oarGRayak5o"/>
              1. What are the four main literary genres? and subgenres.<br/>
              2. Which genre and subgenre category do the examples below fall into? Write the genre and
              subgenre for each:
              <ol className="assnLetters">
                <li>William Shakespeare's sad play Romeo and Juliet</li>
                <li>a story about a girl who finds a door to a world where animals talk and everyone can
                  fly
                </li>
                <li>the story Barrack Obama wrote about his life</li>
                <li>very old stories from Germany that about different topics important in life</li>
                <li>a story about an alien from Mars who becomes
                  friends with a boy
                </li>
                <li>a poem about a mother's ideas about children</li>
              </ol>
              3. List 2 <i>subgenres</i>s for each <i>main</i> genre, a total of eight examples. You can use
              examples from the video and also include others not mentioned. For example, <i>urban
              fantasy</i> is a subgenre of fiction, which features supernatural creatures interacting with
              humans in a contemporary city. <br/>
              4. Which subgenre of books do you enjoy reading most? Which subgenre of movies are your
              favorites? Explain. <br/>
              5. Write definitions for the following terms:
              <ul className="assnList">
                <li> Literary</li>
                <li> Subgenre</li>
                <li> Literature</li>
                <li> Genre</li>
              </ul>
              <textarea className="textArea" onChange={onChangela8Listener39} value={la8Essay39}/>

              <span className="days">LESSON 40 </span>
              <p className="topBottom"> The next book you will read is the classic<a
                href={require("../resources/books/TheOldManandTheSea.pdf")} rel="noreferrer" target="_blank"> <i>The
                Old Man and the Sea</i> </a> by Earnest Hemingway. It is linked <a
                href={require("../resources/books/TheOldManandTheSea.pdf")} rel="noreferrer" target="_blank"> here as a
                PDF. </a> If you prefer a hard copy, it is available at your local library, local bookstore, and can be
                purchased online. </p> <p className="topBottom"> The Old Man and the Sea is a short novel about an
              aging fisherman who goes on an epic battle to catch a giant marlin. </p>
              <Img fluid={data.oldmanandthesea.childImageSharp.fluid} alt="The Old Man and the Sea novel"/><br/>
              <p className="topBottom">After you read <a href={require("../resources/books/TheOldManandTheSea.pdf")}
                                                         rel="noreferrer" target="_blank">Day 1 – Preparation, pages 2 -
                20,</a> answer the following questions:</p>
              <ol className="vocab">
                <li>How is Santiago (the old man) described/characterized early in the story?</li>
                <li>How is luck important to Santiago and Manolin (the boy)?</li>
                <li>What is the relationship between Santiago and Manolin?</li>
                <li>How is Santiago separated from or different from the other fishermen?</li>
                <li>Describe how Manolin treats Santiago. Why does he behave this way?</li>
                <li>How are the nightly precautions Santiago takes with his fishing equipment both realistic and
                  optimistic?
                </li>
                <li>Identify some details of Santiago's house. How is Santiago's house described? What do these</li>
                <li>details reveal about him?</li>
                <li>What do Santiago and Manolin pretend? Why do they do this?</li>
                <li>Describe Santiago and Manolin's differing reactions to the Yankee's defeat. What might this suggest
                  about each character?
                </li>
                <li>Why won't Santiago borrow money? What does this reveal about him?</li>
              </ol>
              <textarea className="textArea" onChange={onChangela8Listener40} value={la8Essay40}/>

              <span className="days">LESSON 41 </span>
              <p>Read <a href={require("../resources/books/TheOldManandTheSea.pdf")} rel="noreferrer" target="_blank">
                <i> The Old Man and the Sea: </i> Day 2 – The Voyage Out (pp. 21-49). </a> Then answer the following
                questions:</p>
              <ol className="vocab">
                <li>How does this day's trip differ from Santiago's usual pattern?</li>
                <li>Why does Santiago call the sea "la mar"? What might this indicate about Santiago?</li>
                <li>What are Santiago's feelings for creatures of the sea including the birds?</li>
                <li>Describe ways in which Santiago demonstrates his fishing skill. Explain why this might be important
                  for Santiago to be a Code Hero.
                </li>
                <li>What two signs indicate that there are fish nearby?</li>
                <li>What might the Portuguese Man-of-war symbolize?</li>
                <li>Why doesn't Santiago worry about talking to himself?</li>
                <li>Describe the steps Santiago must take in order to make sure the fish is caught:</li>
                <li>How does Santiago know he has caught a fish of extraordinary size?</li>
                <li>How does Santiago feel about the marlin? Describe his feelings.</li>
              </ol>
              <textarea className="textArea" onChange={onChangela8Listener41} value={la8Essay41}/>

              <span className="days">LESSON 42 </span>
              <p>Read <a href={require("../resources/books/TheOldManandTheSea.pdf")} rel="noreferrer" target="_blank">
                <i> The Old Man and the Sea.</i> Day 3 – The Struggle (pp.49-84). </a> Then answer the following
                questions:</p>
              <ol className="vocab">
                <li>Why does Santiago wish mandolin was there?</li>
                <li>What does the fish's course tell about his strength?</li>
                <li>Why does Santiago want the fish to jump?</li>
                <li>Explain how Santiago can love the fish yet wish to kill it?</li>
                <li>In what ways are the fish and Santiago and the fish alike?</li>
                <li>Describe Santiago's right and left hands:</li>
                <li>Why does Santiago say the fish is more noble than he? Explain:</li>
                <li>Some critics see Santiago as a Christ symbol. What about Santiago's current physical</li>
                <li>condition supports this idea?</li>
                <li>In which direction does the fish turn? What does this tell Santiago?</li>
                <li>What does Santiago think of while the fish pulls? What do these thoughts have in common?</li>
                <li>Identify two (2) things Santiago does to preserve his strength:</li>
                <li>What does Santiago dream of? What is the dream symbolic of? What might Santiago's dreams</li>
                <li>show about his present situation?</li>
              </ol>
              <textarea className="textArea" onChange={onChangela8Listener42} value={la8Essay42}/>

              <span className="days">LESSON 43 </span>
              <p>Read <a href={require("../resources/books/TheOldManandTheSea.pdf")} rel="noreferrer" target="_blank">
                <i> The Old Man and the Sea.</i> Day 4 – The Catch (pp. 84-117). </a> Then answer the following
                questions:</p>
              <ol className="vocab">
                <li>How does Hemingway stress the endurance of Santiago? How do we know Santiago is working hard?</li>
                <li>How is the fish's size described? Does the description make it easier or harder to visualize th
                  efish?
                </li>
                <li>What is the slave work?</li>
                <li>Hemingway surprises the reader by placing the first appearance of the sharks in the middle of a
                  sentence in the middle of a paragraph. Why does Hemingway want to surprise the reader here?
                </li>
                <li>Does Santiago despair? How might his reactions help define the behavior of Code Hero?</li>
                <li>What is Santiago's question about sin? What is his answer?</li>
                <li>Distinguish the second shark attack from the first. What is different about the second attack?</li>
                <li>Why do the attacks come in this order?</li>
                <li>What does Santiago conclude even when things are hopeless?</li>
                <li>As Santiago is returning home, what happens to him that reinforces the idea that he is a Christ
                  symbol?
                </li>
              </ol>
              <textarea className="textArea" onChange={onChangela8Listener43} value={la8Essay43}/>

              <span className="days">LESSON 44 </span>
              <p>Read <a href={require("../resources/books/TheOldManandTheSea.pdf")} rel="noreferrer" target="_blank">
                <i> The Old Man and the Sea.</i> Day 5 – The Return (pp. 117- 121). </a> Then answer the following
                questions:<br/>
                <ol className="vocab">
                  <li>How has the attitude of the other fishermen changed?</li>
                  <li>What is the confusion between the tourist and the waiter in the restaurant? What effect does the
                    tourist's comment have on the story's meaning?
                  </li>
                  <li>What premonitions (predictions) of Santiago's death are there?</li>
                  <li>Is the ending hopeful or discouraging? Explain.</li>
                </ol>
                <textarea className="textArea" onChange={onChangela8Listener44} value={la8Essay44}/>

                <span className="days">LESSON 45 </span>
                <h4>Five Paragraph Essay</h4>
                <p className="topBottom"> Many of Ernest Hemingway's greatest novels include the Code Hero. In The Old
                  Man and the Sea,
                  Santiago fits the profile of a code hero in many different ways.</p>
                <p className="topBottom"> In a well written, five paragraph essay, explain how Santiago fits the mold of
                  a Hemingway Code
                  Hero. Make sure you identify and explain 3 Code Hero characteristics (read below) and provide examples
                  explaining how Santiago fulfills these characteristics. Be sure to choose characteristics you
                  understand, can explain and can provide examples for from the novel.</p>
                <p className="topBottom"><b>HEMINGWAY CODE HERO:</b> Hemingway's protagonists are usually figures who
                  try to follow a
                  hyper-masculine moral code and make sense of the world through those beliefs. Hemingway himself
                  defined the Code Hero as "a man who lives correctly, following the ideals of honor, courage and
                  endurance in a world that is sometimes chaotic, often stressful, and always painful." This code
                  typically involves several traits for the Code Hero:<br/>
                  (1) Measuring himself against the difficulties life throws in his way, realizing that we will all lose
                  ultimately because we are mortals, but playing the game honestly and passionately in spite of that
                  knowledge <br/>
                  (2) Facing death with dignity, enduring physical and emotional pain in silence<br/>
                  (3) Never showing emotions<br/>
                  (4) Maintaining free-will and individualism, never weakly allowing commitment to a single woman or
                  social convention to prevent adventure, travel, and acts of bravery<br/>
                  (5) Being completely honest, keeping one's word or promise<br/>
                  (6) Being courageous and brave, daring to travel and have "beautiful adventures," as Hemingway would
                  phrase it<br/>
                  (7) Admitting the truth of Nada (Spanish, "nothing"), i.e., that no external source outside of oneself
                  can provide meaning or purpose. This existential awareness also involves facing death without hope of
                  an afterlife, which the Hemingway Code Hero considers more brave than "cowering" behind false
                  religious hopes. <br/>
                  (8) The Hemingway Code Hero typically has some sort of physical or psychological wound symbolizing his
                  tragic flaw or a weakness of his character, which must be overcome before he can prove his manhood (or
                  re-prove it, since the struggle to be honest and brave is a continual one). Also, many Hemingway Code
                  Heroes suffer from a fear of the dark, which represents the transience or meaninglessness of life in
                  the face of eventual and permanent death. <br/></p>
                <p>Your five paragraph essay should follow the format below: </p>
                <ul className="assnList">
                  <li>Write a hook to grab your reader's attention.</li>
                  <li>Your first paragraph should have a clear thesis statement (main idea of your essay). This
                    statement should convey the points or arguments you are going to
                    make.
                  </li>
                  <li>Paragraphs 2-4 should provide examples from the book that support your thesis statement. Each
                    paragraph should discuss a different point and use a different example. Using direct
                    quotes from the novel can be effective in proving your point.
                  </li>
                  <li>Your conclusion should restate your thesis in a different way. End with a thoughtful summary.</li>
                  <li>Each paragraph should be 3-5 sentences.</li>
                </ul>
                <p className="topBottom"><a href={require("../resources/FiveParagraphEssayOutline.pdf")}
                                            rel="noreferrer"
                                            target="_blank">Click
                  here for a 5 Paragraph Essay outline </a>if you need help getting started.</p>
                <textarea className="textArea" onChange={onChangela8Listener45} value={la8Essay45}/>

                <span className="days">LESSON 46 </span>
                <p className="topBottom">Create a new book cover design for <i> The Old Man and the Sea</i>. <br/>
                  A book cover often helps a person decide if he or she will buy a book. Think about the impression you
                  want the images, colors and text to create for viewers. Create a cover for <i> The Old Man and the
                    Sea </i> that gives viewers a glimpse of the content and mood of the book. You can use whatever
                  medium
                  you choose: collage, paper and markers, or <a href="https://www.canva.com/create/book-covers/"
                                                                rel="noreferrer"
                                                                target="_blank"> Canva's online book cover creation
                    tool. </a>You
                  choose how you want to design it.</p>
                <Img fluid={data.oldmanandtheseabookcover.childImageSharp.fluid}
                     alt="The Old Man and the Sea creative book cover"/><br/>
                <p className="topBottom"> Your cover (or jacket) should include:</p>
                1. A clear title and the author's name. <br/>
                2. A graphic design that reflects the book's theme. <br/>
                3. A summary of the plot without giving away the ending. <br/>
                4. A review (your opinion) about the book.
              </p>
              <textarea className="textArea" onChange={onChangela8Listener46} value={la8Essay46}/>

              <span className="days">LESSON 47 </span>
              <p> Watch the video below <b>The Old Man and the Sea - Short, Animation Recipient of the Academy Award for
                Best Short Animated Film, </b> then complete the assignment that follows.</p>
              <Video videoUrl="https://www.youtube.com/embed/NNCxNntn2yc"/>
              <ol className="vocab">
                <li>Are there any aspects of the novel you would have liked to go differently? For example, a version in
                  which Manolin went fishing with him or one in which Santiago brought the marlin back in perfect
                  condition? Explain why you like to see this change. If you wouldn't change anything about the novel,
                  explain why.
                </li>
                <li>Describe the important aspects of Santiago's relationship with Manolin.</li>
                <li>Santiago says, "A man can be destroyed but not defeated." Do you agree? Explain.</li>
                <li>What does the old man symbolize and what does the sea symbolize?</li>
                <li><i>The Old Man and the Sea</i> is often described as the story of man. Do you agree? Why or why not?
                </li>
                <li>What did you think of the novel? Did you like it? Hate it? Explain why.</li>
                <li>The Old Man and the Sea won the 1953 Pulitzer Prize in Literature and in 1954, Hemingway won the
                  Nobel Prize in Literature. Do you believe these awards were deserved? Explain why or why not.
                </li>
              </ol>
              <textarea className="textArea" onChange={onChangela8Listener47} value={la8Essay47}/>

              <span className="days">LESSON 48 </span>
              <p className="margin-para"> Complete all assignments listed below for this unit (readings, videos and
                practice). <br/> Write a brief summary of what you learned in the textbox below. <br/> <a
                  href="https://www.khanacademy.org/ela/cc-8th-reading-vocab/xe1f784c7c84e84fc:cc-8th-obscuring-the-truth/xe1f784c7c84e84fc:untitled-46/a/welcome-to-the-obscuring-the-truth-unit"
                  rel="noreferrer" target="_blank"> Building knowledge: Obscuring the Truth</a>
                <ul className='assnList'>
                  <li>Welcome to the Obscuring the Truth unit!</li>
                  <li>Obscuring the Truth: unit vocabulary</li>
                </ul>
                <a
                  href="https://www.khanacademy.org/ela/cc-8th-reading-vocab/xe1f784c7c84e84fc:cc-8th-obscuring-the-truth/xe1f784c7c84e84fc:close-reading-informational-text-why-do-we-lie/v/two-or-more-main-ideas-reading"
                  rel="noreferrer" target="_blank"> Close reading: informational text; Why Do We Lie?: Obscuring the
                  Truth</a>
                <ul className='assnList'>
                  <li>How can a text have two or more main ideas? | Reading</li>
                  <li>Incorporating opposing viewpoints | Reading</li>
                  <li>What is an argument? | Reading</li>
                  <li>Practice: Obscuring the truth: reading informational text; Why Do We Lie? 8</li>
                </ul>
              </p>
              <textarea className="textArea" onChange={onChangela8Listener48} value={la8Essay48}/>

              <span className="days">LESSON 49 </span>
              <p className="margin-para"> Complete all assignments listed below for this unit (readings, videos and
                practice). <br/> Write a brief summary of what you learned in the textbox below. <br/> <a
                  href="https://www.khanacademy.org/ela/cc-8th-reading-vocab/xe1f784c7c84e84fc:cc-8th-obscuring-the-truth/xe1f784c7c84e84fc:close-reading-informational-text-the-science-of-lying/v/connotation-reading"
                  rel="noreferrer" target="_blank"> Close reading: informational text; The Science of Lying: Obscuring
                  the Truth</a>
                <ul className='assnList'>
                  <li>Connotation | Reading</li>
                  <li>Part-to-whole relationships in text structure | Reading</li>
                  <li>Quantitative information in texts | Reading</li>
                  <li>Practice: Obscuring the truth: reading informational text; The Science of Lying 8</li>
                </ul>
              </p>
              <textarea className="textArea" onChange={onChangela8Listener49} value={la8Essay49}/>

              <span className="days">LESSON 50 </span>
              <p className="margin-para"> Complete all assignments listed below for this unit (readings, videos and
                practice). <br/> Write a brief summary of what you learned in the textbox below. <br/> <a
                  href="https://www.khanacademy.org/ela/cc-8th-reading-vocab/xe1f784c7c84e84fc:cc-8th-obscuring-the-truth/xe1f784c7c84e84fc:untitled-48/v/figurative-language-reading"
                  rel="noreferrer" target="_blank"> Applying vocabulary knowledge: Obscuring the Truth</a>
                <ul className='assnList'>
                  <li>Figurative language | Reading</li>
                  <li>Analyzing tone through word choice | Reading</li>
                  <li>Practice: Obscuring the truth: vocabulary; Why Do We Lie? 8</li>
                </ul>
              </p>
              <textarea className="textArea" onChange={onChangela8Listener50} value={la8Essay50}/>

              <span className="days">LESSON 51 </span>
              <p className="margin-para"> Complete all assignments listed below for this unit (readings, videos
                and practice). <br/> Write a brief summary of what you learned in the textbox below. <br/> <a
                  href="https://www.khanacademy.org/ela/cc-8th-reading-vocab/xe1f784c7c84e84fc:cc-8th-obscuring-the-truth/xe1f784c7c84e84fc:reading-for-understanding-fiction-one-big-mess/v/citing-evidence-in-literary-analysis-reading"
                  rel="noreferrer" target="_blank"> Reading for understanding: fiction; One Big Mess: Obscuring
                  the Truth</a>
                <ul className='assnList'>
                  <li>Citing evidence in literary analysis | Reading</li>
                  <li>Developing themes | Reading</li>
                  <li>Making objective summaries of literary texts | Reading</li>
                  <li>Practice: Obscuring the truth: reading realistic fiction; One Big Mess 8</li>
                </ul>
              </p>
              <textarea className="textArea" onChange={onChangela8Listener51} value={la8Essay51}/>

              <span className="days">LESSON 52 </span>
              <p className="margin-para"> Complete all assignments listed below for this unit (readings, videos
                and practice). <br/> Write a brief summary of what you learned in the textbox below. <br/> <a
                  href="https://www.khanacademy.org/ela/cc-8th-reading-vocab/xe1f784c7c84e84fc:cc-8th-obscuring-the-truth/xe1f784c7c84e84fc:reading-for-understanding-fiction-the-open-window/v/changes-in-pov-and-dramatic-irony-reading"
                  rel="noreferrer" target="_blank"> Reading for understanding: fiction; The Open Window:
                  Obscuring the Truth</a></p>
              <ul className='assnList'>
                <li>Changes in POV and dramatic irony | Reading</li>
                <li>Different mediums and the tone of the text</li>
                <li>Practice: Obscuring the truth: reading realistic fiction; The Open Window 8</li>
              </ul>
              <textarea className="textArea" onChange={onChangela8Listener52} value={la8Essay52}/>

              <span className="days">LESSON 53 </span>
              <p>Watch the videos below: <b> Personification</b> and <b><i>Because I Could Not Stop for
                Death. </i> </b> Then, read the poem and answer the questions below. </p>
              <Video videoUrl="https://www.youtube.com/embed/5GOfjV6u0Co"/>
              <Video videoUrl="https://www.youtube.com/embed/4eGFMw3U1ts"/>
              <p><i> Because I Could Not Stop for Death</i> by Emily Dickinson.
                <blockquote
                  cite="https://www.poetryfoundation.org/poems/47652/because-i-could-not-stop-for-death-479">Because I
                  could not stop for Death – <br/>
                  He kindly stopped for me –<br/>
                  The Carriage held but just Ourselves –<br/>
                  And Immortality. <br/><br/>
                  We slowly drove – He knew no haste<br/>
                  And I had put away<br/>
                  My labor and my leisure too, <br/>
                  For His Civility –<br/><br/>
                  We passed the School, where Children strove<br/>
                  At Recess – in the Ring –<br/>
                  We passed the Fields of Gazing Grain –<br/>
                  We passed the Setting Sun –<br/><br/>
                  Or rather – He passed Us –<br/>
                  The Dews drew quivering and Chill –<br/>
                  For only Gossamer, my Gown –<br/>
                  My Tippet – only Tulle –<br/><br/>
                  We paused before a House that seemed<br/>
                  A Swelling of the Ground –<br/>
                  The Roof was scarcely visible –<br/>
                  The Cornice – in the Ground –<br/><br/>
                  Since then – 'tis Centuries – and yet<br/>
                  Feels shorter than the Day<br/>
                  I first surmised the Horses' Heads<br/>
                  Were toward Eternity –<br/><br/>
                  1. Understanding poetry begins with visualizing the central
                  images in the poem. Describe the imagery in the poem? What do you see, taste, smell, hear, and
                  feel? <br/>
                  2. What is the mood of the poem? (How does it make you feel?) <br/>
                  3. What is the message of the poem? All of the above questions point to the message the poet
                  wants to convey. <br/>
                  4. Were you intrigued by the title of the piece? <br/>
                  5. Did the poem match your expectation after reading the title? Explain. <br/></blockquote>
              </p>
              <textarea className="textArea" onChange={onChangela8Listener53} value={la8Essay53}/>

              <span className="days">LESSON 54 - The Book Thief</span>
             <p className="margin-para"> <a
                href={require("../resources/books/TheBookThiefChapter1.pdf")} rel="noreferrer" target="_blank"> <Img
               fluid={data.bookthief.childImageSharp.fluid} alt="The Book Thief novel"/></a></p>
                <p>After you watch the video below, begin reading <a
                  href={require("../resources/books/TheBookThiefChapter1.pdf")} rel="noreferrer" target="_blank"><i>The
                  Book
                  Thief.</i></a> It is available at your local library, local bookstore, or can be purchased online.
                  Until
                  you get a copy, it is posted above
                  as a PDF. You can zoom in or out by using the + - icons. </p>
                <Video videoUrl="https://www.youtube.com/embed/soP7d3e212k "/>
                <p> Read <a
                  href={require("../resources/books/TheBookThiefChapter1.pdf")} rel="noreferrer" target="_blank"> the
                  Prologue and Continuation of Prologue: Death and Chocolate, Beside the Railway Line, The
                  Eclipse, and The Flag.</a> Then, complete the questions below in the textbox. You may want to read
                  through
                  the questions before doing the reading so you know what to look for. <br/>
                  Continuation of Prologue: A Mountain Range of Rubble<br/>
                  Death and Chocolate<br/>
                  1. From what point of view is the novel told? Who is the narrator of the story? How do you know?<br/>
                  2. Compare Death as a narrator in <i>The Book Thief</i> with Emily Dickinson's depiction of Death in
                  her poem <i> Because I Could Not Stop For Death.</i><br/>
                  3. What theory does the narrator suggest about colors? Purpose? Why does the narrator need
                  distractions?<br/>
                  4. What are the most important parts of the story according to the narrator?<br/>
                  5. Who do you think is <i> The Book Thief</i>? Has he or she already been named? Explain your
                  answer.<br/>
                  6. Comment on the following quote: "Here is a small fact. You are going to die." How<br/>
                  7. does this impact the story's tone? What was your reaction to it?<br/>
                  8. What word choices does the narrator (author) use to try to convince the reader that he is being
                  cheerful about the subject of death? Is the narrator able to fully present death as a cheerful topic?
                  Why or why not? <br/>
                  9. Death, the narrator, finds his duties painful. Cite textual evidence showing why Death<br/>
                  feels this way.<br/>
                  <i>Beside the Railway Line</i><br/>
                  10. What purpose does this section of the novel serve?<br/>
                  11. What impression does Death give himself? Do you feel you can trust Death as the narrator? Why or
                  why not?<br/>
                  12. Whose death does Death describe first in the novel?<br/>
                  <i> The Eclipse </i> <br/>
                  13. In addition to describing the pilot's death, what does Death describe for the reader?<br/>
                  14. What does an eclipse frequently symbolize for Death?<br/>
                  <i> The Flag </i><br/>
                  15. Infer (guess from the information) what has happened just prior to Death's arrival based on the
                  description of the setting.<br/>
                  16. What image does Death paint for the reader when he sees <i> The Book Thief</i> the third time? How
                  does Death "feel" about the image of Liesel? Why does Death not comfort the child? What does this
                  imply about Death's ultimate power?<br/>
                  17. Why does Death take the item from the garbage truck?<br/>
                  18. Identify the three colors associated with <i> The Book Thief</i>. What clue to the novel"s
                  historical context does the reader first get from "the colors"? For a hint, look up the German Nazi
                  flag during WWII. <br/>
                  19. Death says, "First the colours. Then the humans. That's how I usually see things." Death describes
                  the way he sees colors: "A single hour can consist of thousands of different colours. Waxy yellows,
                  cold-spat blues. Murky darknesses." Why are colors important to Death?<br/>
                  20. Choose a significant or memorable day from your life. Imagine colors that reflect the events, your
                  feelings and emotions. Describe the colors you would use to describe these things? <br/>
                  21. What colors do you associate with:<br/>
                  <ul className="assnList2">
                    <li>death</li>
                    <li>peace</li>
                    <li>passion</li>
                    <li>happiness</li>
                    <li>childhood</li>
                    <li>anger</li>
                  </ul>
                  <b>Vocabulary</b><br/>
                  For each vocabulary word below, write a definition and then write a sentence using the word.<br/>
                  1. hindered <br/>
                  2. protestations <br/>
                  3. amiable <br/>
                  4. genially <br/>
                  5. abhorrence <br/>
                  6. versatility <br/>
                  7. trepidation <br/>
                  8. legion <br/>
                  9. septic <br/>
                </p>
                <textarea className="textArea" onChange={onChangela8Listener54} value={la8Essay54}/>

                <span className="days">LESSON 55 </span>
                <p className="topBottom"><b> Personification: </b> Giving human-­‐like characteristics to non-­‐living
                  things. <br/>
                  <b> Simile: </b> Comparing two things using "like" or "as". <br/>
                  <b> Metaphor: </b> Comparing two things not using "like" or "as". <br/></p>
                <p>The author uses figurative language throughout the novel. Below are quotes from <i> The Book
                  Thief</i>. For each quote, state which literary device (personification, simile, or metaphor) the
                  author used and explain how you know this. For example, "The bodies were stuck there, like driftwood
                  after the<br/>
                  flood." This is a simile; "like" was used to compare the bodies to driftwood. <br/>

                  Prologue: <br/>
                  1. "What will the sky be saying?" Personification, simile, or metaphor? Explain why. <br/>
                  2.…I witness the ones who are left behind, crumbling among the jigsaw puzzle of realization, despair,
                  and surprise." <br/>
                  3. "Trees wore blankets of ice." <br/>
                  4. "The plane was still coughing. Smoke was leaking from both its lungs." <br/>
                  5. "The sky was like soup, boiling and stirring." <br/>
                  6. "The children-­‐voices laughing, and the smiles like salt, but decaying fast." <br/>
                  7. "The streets were ruptured veins."<br/></p>
                <p className="topBottom"> There are many examples of personification in <i> The Book Thief</i>, but the
                  most important example
                  is personifying death. "Death" is the narrator and has human characteristics that allow readers to
                  "connect" with him. At one point in the book, Death expresses sadness "taking" children who are so
                  young. He says, 'Even Death has a heart'. While death does not really have a heart, the character of
                  Death certainly does.</p>
                <p> After you finish the assignment above, take a few moments to picture in your head what Death looks
                  like. <br/>
                  1. Write a brief description of Death's physical appearance. How tall is he? What color are his eyes,
                  skin and hair? How does he dress? <br/>
                  2. Next, either sketch a picture on paper or create Death's character online using <a
                    href="https://charactercreator.org/#" rel="noreferrer" target="_blank"> a character
                    creator.</a> When
                  you finish, take a screen shot and send this to your teacher/parent.<br/>
                </p>
                <textarea className="textArea" onChange={onChangela8Listener55} value={la8Essay55}/>

                <span className="days">LESSON 56 </span>
                <p>After you read Part One: <i>The Grave Digger's Handbook and Arrival on Himmel Street in The Book
                  Thief, </i>answer the questions below. Be sure to use complete sentences and number your
                  responses. <br/>
                  1. Death opens Part 1 with a flashback, what is it? <br/>
                  2. Who are Liesel and Werner Meminger? Describe the setting. How old is Liesel?<br/>
                  3. What happens when Liesel wakes form her dream about the Fuher?<br/>
                  4. What observation does Death make for the reader?<br/>
                  5. What falls from the grave digger apprentice's pocket without his knowledge? What does Liesel do
                  with the object?<br/>
                  6. Why are the Memingers on the train? Liesel's ultimate destination is to where?<br/>
                  7. What does Himmel translate to?<br/>
                  8. What kind of atmosphere does Death describe on Himmel Street? How does Liesel respond to her new
                  home?<br/>
                  9. Identify and describe Liesel's foster parents.<br/>
                  10. What literary devise does Zusak use to close the chapter? What might the reader infer from the
                  final sentence in the chapter?<br/>
                </p>
                <textarea className="textArea" onChange={onChangela8Listener56} value={la8Essay56}/>

                <span className="days">LESSON 57 </span>
                <p>After you read Part One: <i> Growing up Saumensch </i> and <i> The Woman with the Iron Fist, </i>answer
                  the questions below. Be sure to use complete sentences and number your responses. <br/>
                  1. How many books made up the story of Liesel's life? What similarity do you notice between Death"s
                  explanation of Liesel's book collection and the organization of the novel?<br/>
                  2. How does Death's admitted preoccupation with colors show itself in the chapter?<br/>
                  3. What single fact does Liesel know about her father?<br/>
                  4. What act does Liesel refuse to do from the beginning of her stay at the Hubermanns? How does she
                  overcome her unwillingness? <br/>
                  5. What does Death explain to the reader regarding Rosa's actions toward Liesel?<br/>
                  6. What is Liesel suppose to call the Hubermanns" after a few months? Why do you think Rosa tells
                  Liesel to do this?<br/>
                  7. Which parent does Liesel seem to bond with more easily?<br/>
                  8. What makes Liesel's adjustment to life with the Hubermanns" particularly difficult? How does Papa
                  help her?<br/>
                  9. Why is The Gravedigger's Handbook so important to Liesel?<br/>
                  10. Identify the Hubermanns" children.<br/>
                  11. What makes school particularly difficult for Liesel?<br/>
                  12. After Liesel's 10th birthday, what is she enrolled in?<br/>
                  13. Describe Rosa's feelings and behavior with regard to her laundry clients. Which client does Rosa
                  detest the most? What happens when she sends Liesel to the client's door? Why does Rosa tell Liesel
                  she has to do other people's laundry?<br/>
                  14. Briefly decribe Frau Holtzapfel. What is Frau Holtzapfel known for at the Hubermanns" home? Why
                  and how does it affect Liesel?<br/>
                </p>
                <textarea className="textArea" onChange={onChangela8Listener57} value={la8Essay57}/>

                <span className="days">LESSON 58 </span>
                <p> Read <i> The Kiss (A Childhood Maker)</i> and <i> The Jesse Owens Incident in The Book
                  Thief.</i> Use complete sentences when answering the questions.<br/>
                  1. Briefly identify each of the following characters: Rudy Steiner, Frau Diller, Tommy Mueller, and
                  "Pfiffikus." Make sure to note their connection to Liesel, if any.<br/>
                  2. How are the friendships between children made on Himmel Street?<br/>
                  3. Briefly describe the "Jesse Owens" incident? <br/>
                  4. Who introduces Liesel to the "secrets" of the neighbors? Explain.<br/>
                  5. What challenge does Rudy offer Liesel following their taunting of Pfiffikus? What is the
                  outcome?<br/>
                  6. Who is Jesse Owens? Was Liesel present for the Jesse Owens incident? Explain.<br/>
                  7. How does Death's explanation of Mr. Steiner's politics explain his anger with his son emulation of
                  Jesse Owens?<br/>
                  8. What is Rudy's father trying to make Rudy understand when he tells Rudy that he should be happy he
                  was born with blonde hair and blue eyes?<br/>
                  9. What is the significance of the event Death foreshadows at the end of the chapter?<br/>
                  <b>Vocabulary</b><br/>
                  For each vocabulary word below, write a definition and then write a sentence using the word.<br/>
                  1. torrent <br/>
                  2. unsavory <br/>
                  3. apprentice <br/>
                  4. innocuously <br/>
                  5. echelons <br/>
                  6. enviable <br/>
                  7. illustrious <br/>
                  8. hiatus <br/>
                  9. eventuated <br/>
                  10. vehement <br/>
                </p>
                <textarea className="textArea" onChange={onChangela8Listener58} value={la8Essay58}/>

                <span className="days">LESSON 59 </span>
                <p> Read <i> The Other Side of Sandpaper and The Smell of Friendship.</i><br/>
                  1. What important number does Death provide in regard to the Germans support of Hitler? How does it
                  relate to Hans?<br/>
                  2. What even led to Liesel's bed wetting? How is it a defining moment in her life?<br/>
                  3. Why is the sandpaper useful?<br/>
                  The Smell of Friendship<br/>
                  4. Where does Papa take Liesel for reading lessons? How does he get Mama to agree?<br/>
                  5. Liesel notices a change in Hans when they are at the river, but doesn"t realize what it means. Why
                  do you believe Hans is going to the river?<br/>
                  6. Where do Papa and Liesel work on reading most often at home? Why? <br/>
                  7. What elements blend together to create the "Smell of Friendship" for Liesel? Why do you think
                  Liesel finds the smell so appealing yet Rosa so offensive?<br/>
                </p>
                <textarea className="textArea" onChange={onChangela8Listener59} value={la8Essay59}/>

                <span className="days">LESSON 60 </span>
                <p> Read <i> The Heavyweight Champion of the School Yard </i><br/>
                  1. According to Death, what 2 important events occur in September –November 1939? What do you think is
                  the significance of the fact that Death lists these 2 events under the same heading?<br/>
                  2. What piece of news arrives at the Hubermann household? How does Papa react?<br/>
                  3. What change does Liesel experience in school?<br/>
                  4. What event in the classroom sets Liesel up for antagonism in the school yard? Why does she attack
                  Ludwig and Tommy?<br/>
                  5. Why are Liesel's classmates quiet when Sister Maria beats her for fighting?<br/>
                  6. Why is Liesel overcome with emotion? How does Rudy respond?<br/>
                  <b>Vocabulary</b><br/>
                  For each vocabulary word below, write a definition and then write a sentence using the word.<br/>
                  1. prolific <br/>
                  2. castigate <br/>
                  3. deluge <br/>
                  4. stupefying <br/>
                  5. atrocious <br/>
                  6. audacious <br/>
                  7. nefarious <br/>
                </p>

                <textarea className="textArea" onChange={onChangela8Listener60} value={la8Essay60}/>

                <span className="days">LESSON 61 </span>
                <p> Read <i> Part Two: A Shoulder Shrug: A Girl Made of Darkness and The Joy of Cigarettes. </i><br/>
                  1. Why is Death's statistical record of Liesel's book stealing significant?<br/>
                  2. In a work of literature, there are various methods of arranging the details of the story such as
                  cause and effect. How does Zusak use this method to revel future events in the story?<br/>
                  3. What is special about the 2nd book Liesel steals? What does it signify?<br/>
                  The Joy of Cigarettes<br/>
                  4. Despite her hardship, several things have brought Liesel happiness; what are they?<br/>
                  5. The last line in The Gravedigger's Handbook reads "We wish you every success with your career in
                  the funerary arts and hope this book has helped in some way." How does this relate to Liesel and
                  Papa?<br/>
                  6. Why does Death like Papa?<br/>
                  7. What gifts does Liesel receive for Christmas from the Hubermanns"? What question does the receipt
                  of these gifts inspire Liesel to ask? Infer about Liesel's relationship with the Hubermanns based on
                  her question.<br/>
                </p>
                <textarea className="textArea" onChange={onChangela8Listener61} value={la8Essay61}/>

                <span className="days">LESSON 62 </span>
                <p> Read <i> The Town Walker and Dead Letters </i><br/>
                  1. Why does Mama put Liesel in charge of collecting and delivering the laundry? How does Liesel feel
                  about her new job?<br/>
                  2. Briefly identify each of the following characters: Pfallelhurvers, Helena Schmidt, the
                  Weingartners, and Mayor and Frau Hermann.<br/>
                  3. To whom does Liesel write her letters? Why does she have a foreboding sense with regard to 1 of the
                  letters?<br/>
                  4. What questions/concerns does Liesel now have regarding her mother?<br/>
                  Dead Letters<br/>
                  5. Briefly explain why the title of this section is appropriate.<br/>
                  6. Why does Mama reprimand PaPa on Liesel's birthday?<br/>
                  7. Explain why Liesel receives a severe beating from Mama. <br/>
                  8. What does she come to understand that is more painful than Mama's beatings? <br/>
                  9. Why does Mama apologize to Liesel? <br/>
                  10. Why does Liesel write she has no
                  animosity towards Rosa for the beating, or toward her mother?<br/>
                </p>
                <textarea className="textArea" onChange={onChangela8Listener62} value={la8Essay62}/>

                <span className="days">LESSON 63 </span>
                <p> Read <i> Hitler's Birthday and 100 Percent Pure German Sweat </i><br/>
                  1. How are the Nazi Party members preparing to celebrate Hitler's birthday?<br/>
                  2. What do the Hubermanns search frantically for to display? Why couldn"t they find it and what can
                  you infer about that?<br/>
                  3. Summarize the unrest between Hans and Hans Junior. What does Death foreshadow for Hans Junior?<br/>
                  100 Percent Pure German Sweat<br/>
                  4. Why does Death include Tommy Mueller's inability to hear in this chapter?<br/>
                  5. How does Liesel feel about the book burning? Why do you believe Liesel is compelled to see the fire
                  lit?<br/>
                  6. What realization does Liesel make as she hears the word "Kommunisten" spoken if as an enemy? What
                  is her reaction?<br/>
                  7. Describe the episode with Ludwig Schmeikl. Why is the scene important to the overall novel?<br/>
                </p>
                <textarea className="textArea" onChange={onChangela8Listener63} value={la8Essay63}/>

                <span className="days">LESSON 64 </span>
                <p> Read <i> The Gates of Thievery and Book of Fire </i><br/>
                  1. What statement does Liesel make about Hitler as a result of the new found opinion she has made
                  throughout the evening? How does Papa respond and why? How do you think Liesel feels about Papa"s
                  reaction?<br/>
                  Book of Fire<br/>
                  2. What does Liesel notice as the workmen are cleaning up the fire remnants? How does she describe it?
                  Significance? How does her choice cause her fear?<br/>
                  <b>Vocabulary</b><br/>
                  For each vocabulary word below, write a definition and then write a sentence using the word.<br/>
                  1. flippant <br/>
                  2. culminate <br/>
                  3. prolific<br/>
                </p>
                <textarea className="textArea" onChange={onChangela8Listener64} value={la8Essay64}/>

                <span className="days">LESSON 65 </span>
                <p><b> Part Two: Write a short essay for each question below. </b>b><br/>
                  1. Why doesn't the mayor's wife report Liesel for stealing a book from the bonfire? <br/>
                  2. Why does she continue to allow Liesel to steal books?<br/>
                  3. Does the relationship between Liesel and Max ever progress into love?<br/>
                  4. Does the fact that Liesel grows up without her biological parents affect the way she perceives
                  others?<br/>
                  5. Why does reading help Liesel cope with the difficulties of living in WWII Germany? How does it
                  also<br/>
                  help her neighbors? Do you see reading as a means of coping? Explain.<br/>
                  6. Is Hans right in the way he deals with the Jews, even if it endangers his family?<br/>
                </p>
                <textarea className="textArea" onChange={onChangela8Listener65} value={la8Essay65}/>

                <span className="days">LESSON 66 </span>
                <p> Read <i> Part Three: Mein Kampf<br/>
                  The Way Home and The Mayor's Library</i><br/>
                  1. Why is Liesel afraid when Hans realizes she stole another book? What happens to Papa when he
                  discovers the book she has stolen? What factors are involved?<br/>
                  The Mayors Library" <br/>
                  2. Liesel avoids _________________ on her laundry rounds because ______________. Why can she not avoid
                  it anymore?<br/>
                  3. Infer how Liesel knows the Mayor's wife saw her take the book from the bonfire.<br/>
                  4. Liesel finds the library unusual because _________________.<br/>
                  5. Why does Liesel end up running back to the Mayor's house?<br/>
                </p>
                <textarea className="textArea" onChange={onChangela8Listener66} value={la8Essay66}/>

                <span className="days">LESSON 67 </span>
                <p> Read <i> Enter the Struggler and The Attributes of Summer </i><br/>
                  1. The setting changes to _______________. Why?<br/>
                  2. Briefly identify Max.<br/>
                  3. What items does the visitor bring Max, and what can you infer from these items?<br/>
                  The Attributes of Summer<br/>
                  4. How is Liesel's summer divided? <br/>
                  5. Describe the protagonist, theme, and plot of Liesel's book. Why might the Nazi Party want to burn
                  this book?<br/>
                  6. Why does Liesel want to be separated from Rudy?<br/>
                  7. What does Death foreshadow with regard to Liesel's relationship with Ilsa Hermann?<br/>
                  8. Liesel finds the name ____________________ inside the book. How does he fit into the story?<br/>
                  9. What solidifies Rudy and Liesel's friendship? What is the incentive? <br/>
                  10. What is Fritz Hammer's role in Rudy and Liesel's thievery escapades?<br/>
                  11. Briefly identify Arthur Berg. Why does he let Liesel and Rudy join his group?<br/>
                  12. Are Liesel and Rudy successful fruit thieves? Explain.<br/>
                </p>
                <textarea className="textArea" onChange={onChangela8Listener67} value={la8Essay67}/>

                <span className="days">LESSON 68 </span>
                <p> Read <i> The Aryan Shopkeeper and The Struggler </i><br/>
                  1. What treasure does Rudy and Liesel discover on the laundry rounds? What do they do with it?<br/>
                  2. What does this episode demonstrate about Frau Diller?<br/>
                </p>
                The Struggler, Continued<br/>
                3. What does Death's title and introduction to this section indicate about the division of the
                plot?<br/>
                4. Max Vandenburg is reading ________________________.<br/>
                5. What number is lucky for Max?<br/>
                6. What items are in the bag that Walter Kugler levers? Infer their importance.<br/>
                7. Explain the irony about the book that has saved Max and helped him to freedom.<br/>
                <textarea className="textArea" onChange={onChangela8Listener68} value={la8Essay68}/>

                <span className="days">LESSON 69 </span>
                <p> Read <i> Tricksters and The Struggler, Continued </i><br/>
                  1. Briefly identify Otto Strum.<br/>
                  2. Why is the phrase "the diabolic plan bore its fruit" an apt metaphor for the incident?<br/>
                  3. What do Liesel and Rudy do with the goods that acquire from Otto? How does Rudy justify the
                  stealing?<br/>
                  4. What inference can be made about Arthur Berg in regards to the "small tribute" that Death
                  offers?<br/>
                  5. How is the tone in the final passage of the chapter contradicted by the example of foreshadowing in
                  the last line of the chapter?<br/>
                  The Struggler, Continued<br/>
                  6. Death opens with the metaphor ________________________. Is it appropriate?<br/>
                  7. How does the number 13 come into play again in this chapter?<br/>
                  8. What internal conflict does Max grapples with.<br/>
                  <b>Vocabulary</b><br/>
                  For each vocabulary word below, write a definition and then write a sentence using the word.<br/>
                  1. agitation <br/>
                  2. animosity<br/>
                  3. transgressor <br/>
                  4. benign <br/>
                  5. pensive <br/>
                </p>
                <textarea className="textArea" onChange={onChangela8Listener69} value={la8Essay69}/>

                <span className="days">LESSON 70 </span>
                <p><b>DEEPER THINKING: Write a short essay for each question.</b><br/>
                  1. Discuss how Liesel matures over the course of the story.<br/>
                  2. Why does Rudy give the dying pilot a teddy bear?<br/>
                  3. How do words help the characters in the novel connect with each other?<br/>
                  4. Was Papa slapping Liesel out of character? Why or why not?<br/>
                  5. Do you think that Hans was "too good"? Was he a realistic character? Also choose a 2nd character
                  and<br/>
                  6. discuss whether or not you thinks/he is realistic. What makes them "real" - or not so real?<br/>
                  7. Discuss Max's stories for Liesel: The Word Shaker and The Standover Man. What were these
                  stories<br/>
                  8. about? Why did he write them—what was his message for her?<br/>
                  9. Is Liesel a substitute for Hans's own children who have left him? Explain<br/>
                </p>
                <textarea className="textArea" onChange={onChangela8Listener70} value={la8Essay70}/>

                <span className="days">LESSON 71 </span>
                <p> Read <i> Part Four: The Standover Man<br/>
                  The Accordionist (The Secret Life of Hans Hubermann) and A Good Girl </i><br/>
                  1. Which 2 questions does Max ask Hans? Why does he do this?<br/>
                  2. Death remembers Hans from WWI and states they have never had a scheduled meeting, why?<br/>
                  3. What "small but noteworthy note" does Death offer the reader in this chapter? Could this embody the
                  theme for the novel? Why or why not?<br/>
                  4. Briefly identify Erik Vandenburg. How does Hans get his accordion?<br/>
                  5. Summarize Han's political conflict. Name his major mistake.<br/>
                  A Good Girl<br/>
                  6. The importance of Nov. 1940 is __________________.<br/>
                  7. How does Liesel respond to Max's arrival?<br/>
                  8. What do you believe is the "wild card" to which Death refers?<br/>
                  <b>Vocabulary</b><br/>
                  For each vocabulary word below, write a definition and then write a sentence using the word.<br/>
                  1. malignant <br/>
                  2. ostracism <br/>
                  3. capitulate <br/>
                </p>
                <textarea className="textArea" onChange={onChangela8Listener71} value={la8Essay71}/>

                <span className="days">LESSON 72 </span>
                <p> Read <i>A Short History of the Jewish Fighter and The Wrath of Rosa </i><br/>
                  1. Max's 1st fighting opponent was ____________________. Where did Max train as a child?<br/>
                  2. How does Max personify Death? Deaths reaction?<br/>
                  3. How many fights did Walter and Max engage in over the years? Did they remain friends? Why?<br/>
                  4. How old was Max on the "night of broken glass?" How did he escape capture? What happened to Max"s
                  family?<br/>
                  5. What is written on the piece of paper from his mother? Importance?<br/>
                  6. Max is concerned about Liesel because ___________________.<br/>
                  7. Who speaks first at the end of the chapter?<br/>
                  The Wrath of Rosa<br/>
                  8. What startles Liesel from her sleep?<br/>
                  9. Liesel finds Rosa's reaction to Max unusual because __________________________.<br/>
                  10. Explain the final line in the chapter. <br/>
                  <b>Vocabulary</b><br/>
                  For each vocabulary word below, write a definition and then write a sentence using the word.<br/>
                  1. morose <br/>
                  2. dormant <br/>
                  3. abrasive <br/>
                  4. trepidation <br/>
                  5. blatant <br/>
                </p>
                <textarea className="textArea" onChange={onChangela8Listener72} value={la8Essay72}/>

                <span className="days">LESSON 73 </span>
                <p> Read <i> Liesel's Lecture and The Sleeper</i><br/>
                  1. Analyze the important point Death makes in the beginning of this chapter.<br/>
                  2. How are Rosa's conversation and reaction different on this day?<br/>
                  3. What story does Hans offer to Liesel?<br/>
                  4. Of what promise does Hans remind Liesel, and if she breaks the promise what will happen?<br/>
                  5. How does Rosa uncharacteristically greet Liesel after her talk with Hans?<br/>
                  The Sleeper<br/>
                  6. Why does Max sleep the first 3 days with the Hubermanns? What does he say in his sleep?<br/>
                </p>
                <textarea className="textArea" onChange={onChangela8Listener73} value={la8Essay73}/>

                <span className="days">LESSON 74 </span>
                <p> Read <i> The Swapping of Nightmares and Pages from the Basement </i><br/>
                  1. Why does Max decide he should hide in the basement? Behind what is he hidden?<br/>
                  2. Why does Max want to get up and walk out of the Hubermanns" house? What does he do, and why?<br/>
                  3. Liesel notices ___________________ in the basement. What does she attempt to ask Max?<br/>
                  4. The only thing Mama and Papa argue about since Max's arrival is _____________________.<br/>
                  5. According to Death, Liesel learns _________________________ about Rosa.<br/>
                  6. What helps Liesel keep her sanity?<br/>
                  7. What comparison does Death make to Liesel reading in the Mayor's library to Max living in the
                  basement?<br/>
                  8. How does Hans and Liesel's reading save Max's life?<br/>
                  9. What change do the Hubermanns" make in their routine in order to preserve Max's health and
                  safety?<br/>
                  10. Max characterizes himself as _______________________. Do you agree or disagree, why?<br/>
                  11. What prompts Liesel to tell Papa she does not need him to stay with her when she has a nightmare?
                  Why?<br/>
                  12. What gift does Liesel bring Max daily? <br/>
                  13. What gift does Liesel receive on her 12th birthday? How does she include Max in her special
                  day?<br/>
                  Pages from the Basement<br/>
                  14. Liesel can not go in the basement because _____________________________.<br/>
                  15. Comment on the importance of the book Max gives Liesel. How does he give it her and what is her
                  reaction?<br/>
                </p>
                <textarea className="textArea" onChange={onChangela8Listener74} value={la8Essay74}/>

                <span className="days">LESSON 75 </span>
                <p> Read <i> Part Five: The Whistler<br/>
                  The Floating Book (part I) and The Gamblers </i><br/>
                  1. What does Death announce about Rudy? Why would it be characterized as "small?<br/>
                  2. Explain Death's foreshadowing of Rudy's death, including Death's feelings.<br/>

                  The Gamblers (A Seven Sided Die)<br/>
                  3. Analyze the symbolism of the seven sided die. List the 7 sides.<br/>
                  4. As Death mentions his own interests, how does this explanation support the idea that the POV
                  matters
                  overall power of the novel?<br/>
                  5. Infer what life is like at the Hubermanns based on Rosa not being able to find the scissors.<br/>
                  6. What is Liesel tempted to tell the mayor's wife? Why is she tempted to do this?<br/>
                  7. What bonded Erik and Hans? What bonds Liesel and Max? Explain.<br/>
                  8. What inspires Max to draw the picture of himself and Liesel walking the tightrope to the sun?<br/>
                  9. Why does Max exercise?<br/>
                  10. As Max imagines boxing Hitler, how do the rules the referee states mimic the reality of life in
                  Germany?<br/>
                  11. What does Hitler shout to the audience? What does he ask them in his rhetorical tongue? Audience
                  response? Symbolism?<br/>
                  12. Who is the first person to enter the ring? Symbolism?<br/>
                  13. How does Death relate Max's dream to the well recognized joke "There's a Jew and a German standing
                  in
                  a basement, right?" Do you find the reference powerful? Why?<br/>
                  14. Why is the seven sided die an appropriate symbol for the story?<br/>
                  15. What does the Mayor's wife give Liesel? How does Liesel respond?<br/>
                  16. What form does Liesel's subconscious take when she is verbally attacking the Mayor's wife?<br/>
                  17. How does she feel after?<br/></p>
                <textarea className="textArea" onChange={onChangela8Listener75} value={la8Essay75}/>

                <span className="days">LESSON 76 </span>
                <p> Read <i> Rudy's Youth and The Losers</i><br/>
                  1. Rudy's 3 problems are :<br/>
                  2. The story flashes forward two years, what does Liesel long to do? What has she come to understand
                  about
                  her and Rudy's experience at the Hitler Youth Camp?<br/>
                  The Losers<br/>
                  3. Briefly identify Viktor Chemmel. Compare him to Arthur Berg as a leader. What parallels might you
                  draw
                  between their leadership style and leaders from this historical time period?<br/>
                  4. On what terms to Viktor and Rudy separate?<br/><br/>
                  <b>Vocabulary</b><br/>
                  For each vocabulary word below, write a definition and then write a sentence using the word.<br/>
                  1. preemptively <br/>
                  2. machinations <br/>
                  3. rationed <br/>
                  4. frugal <br/>
                </p>
                <textarea className="textArea" onChange={onChangela8Listener76} value={la8Essay76}/>

                <span className="days">LESSON 77 </span>
                <p> Read <i> Sketches and The Whistler and the Shoes </i><br/>
                  1. Max intends to write Liesel an autobiography but what changes? What inspires him?<br/>
                  2. What happens when Liesel sneaks a peek of Max's sketches?<br/><br/>
                  The Whistler and the Shoes<br/>
                  3. Explain the significance of "I need a win, Liesel. Honestly."?<br/>
                  4. How does Liesel try to improve Rudy's spirits? Outcome?<br/>
                  5. As Liesel and Rudy are running away, what has been left behind? What does Rudy do?<br/>
                  6. Describe Rosa's and Liesel's relationship. Is it different from Hans?<br/>
                  7. Liesel receives the official title _______________________ by ____________________.<br/><br/>
                </p>
                <textarea className="textArea" onChange={onChangela8Listener77} value={la8Essay77}/>

                <span className="days">LESSON 78 </span>
                <p> Read <i> Three Acts of Stupidity by Rudy Steiner and The Floating Book </i><br/>
                  1. Briefly summarize what happens in these two chapters.
                  2. Explain the 3 acts. <br/>
                  3. Why is Rudy behaving so dangerously? <br/>
                  4. What is the result?<br/>
                  The Floating Book (Part II)<br/>
                  3. Explain Rudy's victory.<br/><br/>
                  <b>Vocabulary</b><br/>
                  For each vocabulary word below, write a definition and then write a sentence using the word.<br/>
                  1. envisaged <br/>
                  2. plethora <br/>
                  3. periphery <br/>
                  4. castigated <br/>
                  5. debilitate <br/>
                  6. prudently <br/>
                  7. amiably <br/>
                </p>
                <textarea className="textArea" onChange={onChangela8Listener78} value={la8Essay78}/>

                <span className="days">LESSON 79 </span>
                <p> Read <i> Part Six: The Dream Carrier<br/>
                  Death's Diary: 1942 and The Snowman </i><br/>
                  1. What frustrates Death about his appearance? Why is he overwhelmed? Why does he refer to the years
                  79  and 1346? What is his opinion of war?<br/>
                  2. How does Death find relief from the strain of his job?<br/><br/>
                  The Snowman<br/>
                  3. Explain the importance of what Liesel brings Max on Christmas Eve.<br/>
                  4. What is contradictory about Liesel considering this the best Christmas ever? <br/>
                  5. Explain the situation in February about Max. Who takes charge? Why does Liesel feel guilty?<br/>
                  6. Explain the paradox in the final line of the chapter.<br/><br/>
                </p>

                <textarea className="textArea" onChange={onChangela8Listener79} value={la8Essay79}/>

                <span className="days">LESSON 80 </span>
                <p> Read <i> Thirteen Present and Fresh Air, and Old Nightmare, and What to DO with a Jewish
                  Corpse.</i><br/>
                  1. Why is it significant that Death visits Max? <br/>
                  2. How does Liesel spend her time with Max? List the gifts that Liesel brings Max and comment on her
                  selections.<br/>
                  3. What promise does Rosa make to Liesel? Analyze Rosa's smile.<br/><br/>
                  Fresh Air, and Old Nightmare, and What to DO with a Jewish Corpse<br/>
                  4. What desire does Liesel express to Rudy? How does he respond and what is the outcome of the
                  venture?
                  What does Death suggest about the open window?<br/>
                  5. If Max dies Hans and Rosa are worried _________________________. How does Liesel put an end to that
                  conversation?<br/>
                  6. Interpret the dream Liesel has of Max replacing her brother?<br/>
                  7. Mama comes to Liesel's class because _____________. <br/>
                  8. What fear does Max admit to Liesel? Why might he fear such a thing, and how does Liesel ease his
                  fear?<br/>
                  9. As Max recovers, Liesel's world is returning to normal; how is that contrasting with the outside
                  world?<br/>
                  10. Death states "Yes, the boss was at my shoulder. Get it done. Get it done." Who is the boss?
                  Explain.<br/>
                </p>
                <textarea className="textArea" onChange={onChangela8Listener80} value={la8Essay80}/>

                <span className="days">LESSON 81 </span>
                <p> Read <i> Death's Diary: Cologne and The Visitor</i><br/>
                  1. What event is described in this chapter?<br/>
                  2. The children collect ________________ as Death collects ____________________. What could this
                  symbolize?<br/>
                  The Visitor<br/>
                  3. Who is the "visitor," and what implications could this have for the family?<br/>
                  4. The purpose of Liesel's clever stunt during the soccer game is _______________.<br/>
                  5. Explain the out come of the episode. In what condition do the Hubermanns find Max? What do you
                  believe
                  Max was going to do with the scissors?<br/><br/>
                  <b>Vocabulary</b><br/>
                  For each vocabulary word below, write a definition and then write a sentence using the word.<br/>
                  1. surly <br/>
                  2. paradox <br/>
                  3. irreparable <br/>
                  4. antithesis <br/>
                </p>
                <textarea className="textArea" onChange={onChangela8Listener81} value={la8Essay81}/>

                <span className="days">LESSON 82 </span>
                <p> Read <i> The Schmunzeler and Death's Diary: The Parisians </i><br/>
                  1. Who is the second visitor?<br/>
                  2. How does Liesel classify her condition after the day's events?<br/>
                  Death's Diary: The Parisians<br/>
                  3. Death claims "the sky was the color of Jews." What color do you suppose that would be? Why might
                  Death
                  classify the sky this way?<br/>
                  4. Describe Death's inner conflict and your reaction to it.<br/>
                  <b>Vocabulary</b><br/>
                  For each vocabulary word below, write a definition and then write a sentence using the word.<br/>
                  1. premonition <br/>
                  2. tirade <br/>
                  3. trepidation <br/>
                  4. emphatically <br/>
                  5. disgruntled <br/>
                  6. awry <br/>
                  7. futile <br/>
                  8. desolation<br/>
                </p>
                <textarea className="textArea" onChange={onChangela8Listener82} value={la8Essay82}/>

                <span className="days">LESSON 83 </span>
                <p> Read Part Seven: The Complete Duden Dictionary and Thesaurus - <br/>
                  <i>Champagne and Accordion and The Trilogy </i><br/>
                  1. In 1942, what is the inevitable event the people of Molching are waiting for? How does this benefit
                  Hans?<br/>
                  2. What does Liesel find most interesting about painting? Characterize Hans based on Liesel"s
                  explanation
                  of these experiences. How does she perceive him?<br/>
                  3. Explain what Liesel experiences in one of the customer's home. What is Hans explanation?<br/>
                  4. Liesel writes about her life and vows never to drink champagne again, why?<br/>
                  5. What does Death foreshadow? How do you explain the author's use of the simile "Hard times were
                  coming.
                  Like a parade."?<br/>
                  The Trilogy<br/>
                  6. To what three installments does the chapter title refer?<br/>
                  7. How does Rudy spend his time while Liesel is working with Hans? What is his goal?<br/>
                  8. Summarize Rudy's success at the festival. How does Liesel perform?<br/>
                  9. How does Rudy respond when Liesel asks why he would intentionally disqualify himself from the race?
                  Why
                  do you think he did it?<br/>
                  10. What does Rudy do with his medals?<br/>
                  11. What does Liesel do after she finishes the Dream Carrier?<br/>
                  12. Why does Rudy take Liesel to the mayor's house? Explain why Liesel stops and looks back at the
                  mayor"s
                  house. <br/>
                  13. Rudy finds __________________________ in the book. How does Liesel respond?<br/>
                  14. Liesel consider herself a criminal because ___________________________.<br/>
                </p>
                <textarea className="textArea" onChange={onChangela8Listener83} value={la8Essay83}/>

                <span className="days">LESSON 84 </span>
                <p> Read <i> The Sound of Sirens and The Sky Stealer </i><br/>
                  1. What dilemma confronts the Hubermanns" in regards to air raids? <br/>
                  2. Identify the people who take shelter in the Fielder's basement. Which does Liesel determine to be
                  the
                  most fearful?<br/>
                  3. How does Death feel about the individuals in the shelter? Agree or disagree.<br/>
                  4. Explain "For those people life was still achievable.<br/>
                  5. What does Max admit to the family? How long has it been since Max viewed the outside?<br/><br/>
                  The Sky Stealer<br/>
                  6. How does the first raid compare to the second?<br/>
                  7. What superstition does Hans practice?<br/>
                  8. How does Liesel cope with being in the shelter the 2nd time? What reaction does she receive from
                  the
                  others?<br/>
                  9. Do the families return home right after the raid is over? Explain the effect of the raid on Himmel
                  Street.<br/>
                  10. Explain the impact of Rosa's retelling of Liesel's actions in the shelter on Max.<br/>
                  11. Liesel's central thought about future bombings on Himmel Street are ___________________.<br/>
                </p>
                <textarea className="textArea" onChange={onChangela8Listener84} value={la8Essay84}/>

                <span className="days">LESSON 85 </span>
                <p> Read <i> Frau Holtzapfel's Offer and The Long Walk to Dachau </i><br/>
                  1. The raid damages are _______________<br/>
                  2. Why does Frau Holtzapfel visit the Hubermanns?<br/>
                  3. What are Liesel's feeling about the deal Mama makes with Frau?<br/>
                  4. Interpret the last line of the chapter.<br/>
                  The Long Walk to Dachau<br/>
                  5. What are the wishes Death hears as he exits the truck with the dead Jew?What arrives in
                  Molching?<br/>
                  6. What is Han's reaction when he sees Rudy and Liesel on the street?<br/>
                  7. Explain the significance of Death's statement that many of the Jews would greet death like their
                  last
                  true friend.<br/>
                  8. What impacts Liesel the most about the Jews passing thorough Molching on their way to Dachau?<br/>
                  9. Papa is beaten by the soldier because _______________________.<br/>
                  10. Who stands beside Liesel as the drama is taking place on the street? How does the crowd
                  react?<br/>
                  11. Why is Papa suddenly overwhelmed, and what are the consequences he fears?<br/>
                  <b>Vocabulary</b><br/>
                  For each vocabulary word below, write a definition and then write a sentence using the word.<br/>
                  1. depleted <br/>
                  2. trilogy <br/>
                  3. formidable <br/>
                  4. loathsome <br/>
                </p>
                <textarea className="textArea" onChange={onChangela8Listener85} value={la8Essay85}/>

                <span className="days">LESSON 86 </span>
                <p> Read <i> Peace and The Idiot and the Coat Men </i><br/>
                  1. How does Max react to the events on the day? What is scheduled for four days later?<br/>
                  2. Explain the meaning of the note Hans finds at the river.<br/>
                  3. Why do you think that Death does not equate the word silence with the words peace, quiet, or calm
                  following this event?<br/><br/>
                  The Idiot and the Coat Men<br/>
                  4. Describe Han's feelings about Max's departure.<br/>
                  5. Why might the Hubermanns want the Party to come search their home?<br/>
                  6. Coat men-<br/>
                  <b>Vocabulary</b><br/>
                  For each vocabulary word below, write a definition and then write a sentence using the word.<br/>
                  1. apprehension <br/>
                  2. feign <br/>
                  3. immutable <br/>
                  4. futile <br/>
                </p>
                <textarea className="textArea" onChange={onChangela8Listener86} value={la8Essay86}/>

                <span className="days">LESSON 87 </span>
                <p> Read Part Eight: The Word Shaker <br/>
                  <i> Dominoes and Darkness and The Thought of Rudy Naked </i><br/>
                  1. Why have the men come to the Steiner's home?<br/>
                  2. Why might the author intersperse the conversation in the kitchen with the conversation about
                  dominoes
                  that Rudy and his siblings hold?<br/><br/>
                  The Thought of Rudy Naked<br/>
                  3. How does this chapter connect with the previous chapter?<br/>
                  4. The purpose of the inspection of Rudy and his classmates is __________________.<br/>
                  5. What does Rudy finally explain to Liesel, and how does she react?<br/>
                  <b>Vocabulary</b><br/>
                  For each vocabulary word below, write a definition and then write a sentence using the word.<br/>
                  1. rogue <br/>
                  2. cannier <br/>
                  3. manic <br/>
                </p>
                <textarea className="textArea" onChange={onChangela8Listener87} value={la8Essay87}/>

                <span className="days">LESSON 88 </span>
                <p> Read <i> Punishment and The Promise Keeper's Wife </i><br/>
                  1. Why might Hans be grateful for punishment by the Nazi Party?<br/>
                  2. Why does the paper make Han's suspicious?<br/>
                  3. What is Papa's wish?<br/>
                  The Promise Keeper's Wife<br/>
                  4. How do Alex and Hans spend the evening? What is Rosa's reaction?<br/>
                  5. Discuss the scene of Hans and Liesel at the train station.<br/>
                  6. Where does Rudy tell Liesel they are going? Why? How is this characteristic of Rudy?<br/>
                  7. What does Liesel mean when she states to Rudy, "…and you"ve only lost your father …"?<br/>
                  8. Rudy and Liesel discuss their mothers" appearance on the sidewalk. Do you believe their mothers are
                  more worried, more angry, or a different adjective entirely? Explain?<br/>
                  9. What image does Death provide of Rosa on the night Hans leaves? Does this change your perception of
                  Rosa?<br/>
                  <b>Vocabulary</b><br/>
                  For each vocabulary word below, write a definition and then write a sentence using the word.<br/>
                  1. gargantuan <br/>
                  2. abject <br/>
                  3. renowned <br/>
                </p>
                <textarea className="textArea" onChange={onChangela8Listener88} value={la8Essay88}/>

                <span className="days">LESSON 89 </span>
                <p> Read <i> The Collector and The Bread Eaters </i><br/>
                  1. Where are Hans and Steiner stationed? <br/>
                  2. Who are the LSE? Why have they been selected for this section?<br/>
                  3. Why is Han's seat on the vehicle important?<br/>
                  4. Why does Death explain that Hans would "need to perfect the art of forgetting."?<br/>
                  5. Death presents a short letter that Hans writes home. Death then follows with the details of Han"s
                  task
                  and the reasons for the brevity of his letter. Did the vivid explanation change your initial
                  impression
                  of
                  Papa's short letter? Why or why not?<br/>
                  The Bread Eaters<br/>
                  6. Who are the "three desperate men" that consumes Liesel's thoughts? What has become Liesel's
                  favorite
                  distraction?<br/>
                  7. What does Rudy plan to do with the sack full of bread that he shows Liesel? What argument does he
                  use
                  to convince Liesel to help him?<br/>
                  8. How does the incident strengthen or alter the reader's characterization of Rudy? Explain.<br/>
                  9. Why does Liesel attend the parades of the Jews? Explain her internal conflict.<br/>
                </p>
                <textarea className="textArea" onChange={onChangela8Listener89} value={la8Essay89}/>

                <span className="days">LESSON 90 </span>
                <p> Read <i> The Hidden Sketchbook and The Anarchist's Suit Collection </i><br/>
                  1. What instructions does Liesel recall from Papa?<br/>
                  2. What gift does Rosa give Liesel and why would she choose this particular time to give it to
                  her?<br/>
                  3. Comment on your impression of the Word Shaker. Why do you think Max decided to keep this in the
                  book?
                  What secret does the story impart to Liesel? <br/>
                  The Anarchist's Suit Collection<br/>
                  4. How and where does Liesel obtain Rudy's Christmas gift? <br/>
                  5. What does Death urge Liesel to do when Rudy falls? Does she oblige? Does this foreshadow, or give
                  you
                  a
                  hint about, upcoming events.<br/>
                  <b>Vocabulary</b><br/>
                  For each vocabulary word below, write a definition and then write a sentence using the word. <br/>
                  1. bellows <br/>
                  2. disheveled <br/>
                  3. undeterred <br/>
                </p>
                <textarea className="textArea" onChange={onChangela8Listener90} value={la8Essay90}/>

                <span className="days">LESSON 91 </span>
                <p>Five Paragraph Essay</p>
                <p> Which of the Hubermans is a better parent? Why? In a five paragraph essay, discuss why you believe
                  the
                  parent you chose is better.  &nbsp; &#8226; Write a hook to grab your reader"s
                  attention. &nbsp; &#8226; Your first paragraph should have a clear thesis statement (main idea of your
                  essay). This statement should convey the points or arguments you are going to
                  make.   &nbsp; &#8226; Paragraphs 2-4 should provide examples from the book that support your thesis
                  statement. Each paragraph should discuss a different point and use a different example. Using direct
                  quotes from the novel can be effective in proving your point.   &nbsp; &#8226; Your conclusion should
                  restate your thesis in a different way. End with a thoughtful summary.   &nbsp; &#8226; Each paragraph
                  should be 3-5 sentences.</p>
                <p><a href={require("../resources/FiveParagraphEssayOutline.pdf")} rel="noreferrer" target="_blank">Click
                  here for a 5 Paragraph Essay outline </a>if you need help in getting started. </p>
                <textarea className="textArea" onChange={onChangela8Listener91} value={la8Essay91}/>

                <span className="days">LESSON 92 </span>
                <p> Read <i> Part Nine: The Last Human Stranger</i><br/>
                  <i>The Next Temptation, The Cardplayer and The Snows on Stalingrad</i> <br/>
                  1. What does Liesel find when she and Rudy go to the mayors house? What does Liesel realize about the
                  library?<br/>
                  2. Who enjoys the gift of cookies?<br/>
                  The Cardplayer
                  3. Briefly explain Reinhold Zucker.<br/>
                  4. Explain the last line of the chapter. Literary element?<br/><br/>
                  The Snows on Stalingrad<br/>
                  5. Who answers Frau's door in Jan. 1943?<br/>
                  6. What news does Michael bring Rosa?<br/>
                  7. How does the description of the battlefield and Death's presence there affect your impression of
                  Death?<br/>
                </p>
                <textarea className="textArea" onChange={onChangela8Listener92} value={la8Essay92}/>

                <span className="days">LESSON 93 </span>
                <p> Read <i> The Ageless Brother and The Accident </i><br/>
                  1. What does Liesel take to 8 Grande Strasse? How does she know she has done the right thing?<br/>
                  2. When Liesel thinks of her brother, what fill her with sadness then a smile?<br/>
                  3. After Liesel accepts her brother's death, he no longer invades her dreams but appears to Liesel in
                  another way. Why is this significant?<br/>
                  The Accident<br/>
                  4. What order does Zucker give to Hans? How does Hans respond?<br/>
                  5. Discuss the results of the accident. What does Hans claim after he is safe? What past incident is
                  this
                  parallel to?<br/>
                  6. Based on Schipper's explanation of Han's injuries, what can be inferred about Hans" character?<br/>
                </p>
                <textarea className="textArea" onChange={onChangela8Listener93} value={la8Essay93}/>

                <span className="days">LESSON 94 </span>
                <p> Read <i> The Bitter Taste of Questions and One Toolbox, One Bleeder, One Bear </i><br/>
                  1. Discuss the letter that Rosa and Liesel receive. What is Rudy's response when Liesel tells him
                  about
                  the letter?<br/>
                  One Toolbox, One Bleeder, One Bear<br/>
                  2. Explain Rudy's behavior since his father left and Hans has returned.<br/>
                  3. Infer the significance of Rudy walking down the street with his toolbox. Unusual tool?
                  Purpose?<br/>
                  4. What commentary does Rudy offer about Liesel's thieving? What does Rudy end up stealing?<br/>
                  5. Why does Michael Holtzapfel come to the Hubermanns? How do Rosa and Liesel respond? Are they
                  successful?<br/>
                  6. Identify Michael Holtzapfel internal conflict in the shelter. <br/>
                  7. Describe how Liesel's role changes from thief to provider in the shelter.<br/>
                  8. What causes Rudy and Liesel to run to the Amper River? What do they find there? Explain the
                  importance
                  of the event for Death and Liesel. What is Rudy doing? Based on Rudy's recent feelings of anger, do
                  you
                  consider this strange?<br/>
                  9. Analyze the final paragraph in this chapter.<br/>
                  <b>Vocabulary</b><br/>
                  For each vocabulary word below, write a definition and then write a sentence using the word. <br/>
                  1. protruded <br/>
                  2. propaganda <br/>
                  3. innocuous <br/>
                  4. unfurling <br/>
                </p>
                <textarea className="textArea" onChange={onChangela8Listener94} value={la8Essay94}/>

                <span className="days">LESSON 95 </span>
                <p> Read <i> Homecoming</i><br/>
                  1. How many years have passed from Liesel's arrival at the Hubermanns home and Han's return?<br/>
                  2. What is Death's implication in the last 2 lines of the chapter? How do Death's words affect the
                  tone?<br/>
                  <b>Vocabulary</b><br/>
                  For each vocabulary word below, write a definition and then write a sentence using the word. <br/>
                  1. semblance <br/>
                  2. reprimand <br/>
                  3. consecutive <br/>
                  4. quell <br/>
                </p>
                <textarea className="textArea" onChange={onChangela8Listener95} value={la8Essay95}/>

                <span className="days">LESSON 96 </span>
                <p> Read <b>Part Ten </b><br/>
                  <i>The End of the World (Part I) and The Ninety Eight Day </i><br/>
                  1. How does Death feel about the bombing of Himmel Street?<br/>
                  2. Throughout the novel, Zusak has stressed the power of words. How does this theme ring true in this
                  chapter?<br/>
                  3. When Liesel is rescued, Death states that he could not fully share in their enthusiasm, why?<br/>
                  4. Explain the significance of Liesel's scream as the soldiers pull her from the rubble. <br/>
                  The Ninety Eight Day<br/>
                  5. Why do you think Death describes the first 97 days after he has already told the reader the outcome
                  of
                  the 98th day?<br/>
                  6. Why are the Jews brought to the town during this period?<br/>
                  7. Death presents the image of Michael Holtzapfel on July 24th as a "pendulum, another clock stopped."
                  Identify and explain the figurative language.<br/>
                  8. What does Death learn about Michaels" death from <i> <i> The Book Thief</i></i>? Who gives the news
                  to
                  his mother? <br/>
                </p>
                <textarea className="textArea" onChange={onChangela8Listener96} value={la8Essay96}/>

                <span className="days">LESSON 97 </span>
                <p> Read <i> The War Maker and Way of Words </i><br/>
                  1. What does Death reveal in regards to the war and the situation in Germany?<br/>
                  2. <br/>
                  Way of Words<br/>
                  3. How does Liesel try to identify Max in the parade of Jews?<br/>
                  4. How does Liesel reach out to Max a second time she runs into him in the parade? What is the
                  outcome?<br/>
                  5. Max thinks it's a great day to die because ________________.<br/>
                  6. Analyze Rudy's action in regards to Liesel and his relationship. <br/>
                  <b>Vocabulary</b><br/>
                  For each vocabulary word below, write a definition and then write a sentence using the word. <br/>
                  1. catatonic <br/>
                  2. blaspheme <br/>
                  3. pensive <br/>
                  4. pendulum <br/>
                  5. detonation <br/>
                </p>
                <textarea className="textArea" onChange={onChangela8Listener97} value={la8Essay97}/>

                <span className="days">LESSON 98 </span>
                <p> Read <i> Confessions and Ilsa Hermann's Little Black Book </i><br/>
                  1. Where does Rudy go after seeing Max? In what ways does Liesel demonstrate her supreme trsut in
                  Rudy?<br/>
                  2. Clarify the irony in what Liesel wants from Rudy.<br/>
                  Ilsa Hermann's Little Black Book<br/>
                  3. Where does Liesel go to rejuvenate in mid August? What act of vandalism does she commit?<br/>
                  4. What does Liesel leave for Frau Hermann? How has the power of words changed Liesel?<br/>
                  5. Describe the scene when Frau Hermann comes to visit Liesel at 33 Himmel Street.<br/>
                  <b>Vocabulary</b><br/>
                  For each vocabulary word below, write a definition and then write a sentence using the word. <br/>
                  1. bereaved <br/>
                  2. immaculate <br/>
                  3. consolation <br/>
                </p>
                <textarea className="textArea" onChange={onChangela8Listener98} value={la8Essay98}/>

                <span className="days">LESSON 99 </span>
                <p> Read <i> The Rib Cage Planes and The End of the World (Part II)</i><br/>
                  1. How has the content of the bold sections changed in this chapter?<br/>
                  2. What literary device does Liesel use to describe Papa?<br/>
                  The End of the World (Part II)<br/>
                  3. Why is Death telling the story of <i> The Book Thief</i>?<br/>
                  4. Describe the sequence of event the night of the air raid.<br/>
                  5. Why does Death provide a detailed description of collecting the souls on Himmel Street?<br/>
                  6. Characterize Death by his ironic memories of life.<br/>
                  7. Death stresses the good things Rosa's has done in her life because __________________. What does
                  Liesel
                  say to Rosa?<br/>
                  8. Describe the scene when Liesel sees Rudy's body.<br/>
                  9. What metaphor does Death offer for Han's body? When Liesel is finally able to look at Hans, what
                  does
                  Death see?<br/>
                  10. What vision, which Liesel reveals later to Death, does she have of Papa as she kneels next to his
                  body? Identify the 2 items she leaves at his body and what happens to them.<br/>
                  <b>Vocabulary</b><br/>
                  For each vocabulary word below, write a definition and then write a sentence using the word. <br/>
                  1. feigned <br/>
                  2. obliterated <br/>
                  3. irretrievable <br/>
                </p>
                <textarea className="textArea" onChange={onChangela8Listener99} value={la8Essay99}/>

                <span className="days">LESSON 100 </span>
                <p> Read <i> Epilogue: The Last Color </i><br/>
                  Death and Liesel, Wood in the Afternoon, Max, and The Handover Man<br/>
                  1. Explain Liesel's life. Describe her passing.<br/>
                  2. Whom does Liesel live with after the bombing? Explain the connection with Alex Steiner. <br/>
                  3. Alex Steiner regrets what? Why?<br/>
                  4. When does Liesel see Max again?<br/>
                  5. Retell the discussion Death has with Liesel as he finally takes her.<br/>
                  6. What is the last note that Death offers us as readers?<br/>
                  <b>Vocabulary</b><br/>
                  For each vocabulary word below, write a definition and then write a sentence using the word. <br/>
                  1. exquisite <br/>
                  2. trepidation<br/>
                </p>

                <textarea className="textArea" onChange={onChangela8Listener100} value={la8Essay100}/>

                <span className="days">LESSON 101 </span>
                <p> DEEPER THINKING ABOUT <i> The Book Thief</i><br/>
                  1. What was the author's purpose behind choosing Death as a narrator? Is this a trustworthy narrator?
                  How
                  does Death see things that a human narrator might not?<br/>
                  2. In the opening of the book when Liesel steals her first book, The Gravedigger's Handbook, this
                  event
                  can be thought of as the first of many turning points for her. What are some of the others? Talk about
                  two
                  other major characters and what their turning points are, as well as turning points for the community
                  as
                  a
                  whole.<br/>
                  3. Knowing that Liesel is called a "thief," how does the book complicate our ideas of justice and
                  judgment? Which characters do you view as just/unjust or brave/cowardly, and why? Which events or
                  details
                  most color your perceptions of these characters?<br/>
                  4. What choices do characters make about groups they will belong to? What groups do they belong to
                  without
                  choice? What are the consequences?<br/>
                  5. Discuss Liesel's friendship with Rudy. Does she love him in the way he loves her, or is it a
                  child"s
                  love? Do you think he reminds her of her brother?<br/>
                  6. Zusak's books often portray characters with a tendency to fight—including Max and Liesel. Is a
                  child
                  who fights more forgivable that an adult who fights? Why?<br/>
                  7. From Hans to Liesel to the mayor's wife, discuss how some of the characters in <i> The Book
                    Thief</i> deal with their past. Discuss the pasts of each of these three characters and how they
                  manage
                  guilt and punishment. <br/>
                  8. Is Hans Hubermann a courageous man? How does he show courage, or lack of courage?<br/>
                  9. Name some acts of resistance in the book, from large to small. What does the author intend with his
                  inclusion of these acts?<br/>
                  10. Who has power in this book? How does Liesel gain power, and how does Max? Toward the end of the
                  novel
                  Liesel remarks to herself that words give power. How so?<br/>
                  11. Discuss the meaning of Max painting over Mein Kampf. What is he able to express by doing this and
                  by
                  drawing over it, that he cannot convey in person?<br/>
                </p>
                <textarea className="textArea" onChange={onChangela8Listener101} value={la8Essay101}/>

                <span className="days">LESSON 102 </span>
                <h4>Create a new book cover design for <i> The Book Thief</i>. </h4>
                <p>A book cover/jacket often helps a person decide if they will buy a book. Think about the impression
                  you
                  want the images, colors and text to create for viewers. Create a cover for <i> The Book Thief</i> that
                  gives viewers a glimpse of the content and mood of the book. You can use whatever medium you choose:
                  collage, paper and markers, or <a href="https://www.canva.com/create/book-covers/" rel='noreferrer'
                                                    target="_blank"> Canva"s
                    online book cover creation tool. </a>You choose how you want to design it. Your cover should
                  include:<br/>
                  1. A clear title and the author's name. <br/>
                  2. A graphic design that reflects the book's theme. <br/>
                  3. A summary of the plot without giving away the ending. <br/>
                  4. A review (your opinion) about the book. <br/>
                  <br/></p>
                <textarea className="textArea" onChange={onChangela8Listener102} value={la8Essay102}/>

                <span className="days">LESSON 103 </span>
                <p>Write a Five Paragraph Essay<br/>
                  Death tells readers, "I wanted to tell <i> The Book Thief</i> many things, about beauty and brutality.
                  But
                  what could I tell her about those things that she didn't already know? I wanted to ask her how the
                  same
                  thing could be so ugly and so glorious, and its words and stories so damning and brilliant." In a five
                  paragraph essay, discuss how beauty is revealed in the story, even in the midst of so much brutality.
                  For
                  your three supporting paragraphs (paragraphs 2, 3 and 4), use three different examples of kindnesses
                  shown
                  or beautiful moments shared between characters. <br/>
                  Your conclusion should restate your thesis in a different way. End with a thoughtful
                  summary.   &nbsp; &#8226; Each paragraph should be 3-5 sentences.<br/>
                  <a href={require("../resources/FiveParagraphEssayOutline.pdf")} rel="noreferrer" target="_blank">Click
                    here for a 5 Paragraph Essay outline </a>if you need help in getting started. </p>
                <textarea className="textArea" onChange={onChangela8Listener103} value={la8Essay103}/>

                <span className="days">LESSON 104 </span>
                <p className="margin-para"> Complete all assignments listed below for this unit (readings, videos and
                  practice). <br/> Write a brief summary of what you learned in the textbox below. <br/> <a
                    href="https://www.khanacademy.org/ela/cc-8th-reading-vocab/xe1f784c7c84e84fc:cc-8th-crossing-the-line/xe1f784c7c84e84fc:untitled-58/a/welcome-to-the-crossing-the-line-unit"
                    rel="noreferrer" target="_blank"> </a>
                  <ul className="assnList">
                    <h4>Building knowledge: Crossing the Line</h4>
                    <li>Welcome to the Crossing the Line unit!</li>
                    <li>Crossing the Line: unit vocabulary</li>
                  </ul>
                  <a
                    href="https://www.khanacademy.org/ela/cc-8th-reading-vocab/xe1f784c7c84e84fc:cc-8th-crossing-the-line/xe1f784c7c84e84fc:close-reading-informational-text/v/two-or-more-main-ideas-reading"
                    rel="noreferrer" target="_blank"> Close reading: informational text: Crossing the Line</a>
                  <ul className="assnList">
                    <li>How can a text have two or more main ideas? | Reading</li>
                    <li>Quantitative information in texts | Reading</li>
                    <li>What is an argument? | Reading</li>
                    <li>Practice: Crossing the Line: reading informational text; Performance-Enhancing Drugs in Sports 8
                    </li>
                  </ul>
                </p>
                <textarea className="textArea" onChange={onChangela8Listener104} value={la8Essay104}/>

                <span className="days">LESSON 105 </span>
                <h4>Close reading: fiction: Crossing the Line</h4>
                <p className="margin-para"> Complete all assignments listed below for this unit (readings, videos and
                  practice). <br/> Write a brief summary of what you learned in the textbox below. <br/> <a
                    href="https://www.khanacademy.org/ela/cc-8th-reading-vocab/xe1f784c7c84e84fc:cc-8th-crossing-the-line/xe1f784c7c84e84fc:close-reading-realistic-fiction/v/citing-evidence-in-literary-analysis-reading"
                    rel="noreferrer" target="_blank"> </a>
                  <ul className="assnList">
                    <li>Citing evidence in literary analysis | Reading</li>
                    <li>Making objective summaries of literary texts | Reading</li>
                    <li>Analyzing tone through word choice | Reading</li>
                    <li>Changes in POV and dramatic irony | Reading</li>
                    <li>Practice: Crossing the Line: reading realistic fiction; Whatever It Takes 8</li>
                  </ul>
                </p>
                <textarea className="textArea" onChange={onChangela8Listener105} value={la8Essay105}/>

                <span className="days">LESSON 106 </span>
                <p className="margin-para"> Complete all assignments listed below for this unit (readings, videos and
                  practice). <br/> Write a brief summary of what you learned in the textbox below. <br/> <a
                    href="https://www.khanacademy.org/ela/cc-8th-reading-vocab/xe1f784c7c84e84fc:cc-8th-crossing-the-line/xe1f784c7c84e84fc:applying-vocabulary-knowledge/v/figurative-language-reading"
                    rel="noreferrer" target="_blank"> Applying vocabulary knowledge: Crossing the Line</a>
                  <ul className="assnList">
                    <li>Figurative language | Reading</li>
                    <li>Connotation | Reading</li>
                    <li>Practice: Crossing the Line: vocabulary; Performance-Enhancing Drugs in Sports 8</li>
                  </ul>
                </p>
                <textarea className="textArea" onChange={onChangela8Listener106} value={la8Essay106}/>

                <span className="days">LESSON 107 </span>
                <p className="margin-para"> Complete all assignments listed below for this unit (readings, videos and
                  practice). <br/> Write a brief summary of what you learned in the textbox below. <br/> <a
                    href="https://www.khanacademy.org/ela/cc-8th-reading-vocab/xe1f784c7c84e84fc:cc-8th-crossing-the-line/xe1f784c7c84e84fc:reading-for-understanding-informational-text/v/part-to-whole-relationships-in-text-structure-reading"
                    rel="noreferrer" target="_blank"> Reading for understanding: informational text: Crossing the
                    Line</a>
                  <ul className="assnList">
                    <li>Part-to-whole relationships in text structure | Reading</li>
                    <li>Incorporating opposing viewpoints | Reading</li>
                    <li>Practice: Crossing the Line: reading informational text; The ACTN3 Gene 8</li>
                  </ul>
                </p>
                <textarea className="textArea" onChange={onChangela8Listener107} value={la8Essay107}/>

                <span className="days">LESSON 108 </span>
                <p className="margin-para"> Complete all assignments listed below for this unit (readings, videos
                  and practice). <br/> Write a brief summary of what you learned in the textbox below. <br/> <a
                    href="https://www.khanacademy.org/ela/cc-8th-reading-vocab/xe1f784c7c84e84fc:cc-8th-crossing-the-line/xe1f784c7c84e84fc:reading-for-understanding-fiction/v/developing-themes-reading"
                    rel="noreferrer" target="_blank"> Reading for understanding: fiction</a>
                  <ul className="assnList">
                    <li>Developing themes | Reading</li>
                    <li>Sports, challenges, and punishments in ancient Greek culture</li>
                    <li>Practice: Crossing the Line: reading creative fiction; The Race Official</li>
                  </ul>
                </p>
                <textarea className="textArea" onChange={onChangela8Listener108} value={la8Essay108}/>

                <span className="days">LESSON 109 </span>

                <textarea className="textArea" onChange={onChangela8Listener109} value={la8Essay109}/>

                <span className="days">LESSON 110 </span>

                <textarea className="textArea" onChange={onChangela8Listener110} value={la8Essay110}/>

                <span className="days">LESSON 111 </span>

                <textarea className="textArea" onChange={onChangela8Listener111} value={la8Essay111}/>

                <span className="days">LESSON 112 </span>

                <textarea className="textArea" onChange={onChangela8Listener112} value={la8Essay112}/>

                <span className="days">LESSON 113 </span>

                <textarea className="textArea" onChange={onChangela8Listener113} value={la8Essay113}/>

                <span className="days">LESSON 114 </span>

                <textarea className="textArea" onChange={onChangela8Listener114} value={la8Essay114}/>

                <span className="days">LESSON 115 </span>

                <textarea className="textArea" onChange={onChangela8Listener115} value={la8Essay115}/>

                <span className="days">LESSON 116 </span>

                <textarea className="textArea" onChange={onChangela8Listener116} value={la8Essay116}/>

                <span className="days">LESSON 117 </span>

                <textarea className="textArea" onChange={onChangela8Listener117} value={la8Essay117}/>

                <span className="days">LESSON 118 </span>

                <textarea className="textArea" onChange={onChangela8Listener118} value={la8Essay118}/>

                <span className="days">LESSON 119 </span>

                <textarea className="textArea" onChange={onChangela8Listener119} value={la8Essay119}/>

                <span className="days">LESSON 120 </span>

                <textarea className="textArea" onChange={onChangela8Listener120} value={la8Essay120}/>

                <span className="days">LESSON 121 </span>

                <textarea className="textArea" onChange={onChangela8Listener121} value={la8Essay121}/>

                <span className="days">LESSON 122 </span>

                <textarea className="textArea" onChange={onChangela8Listener122} value={la8Essay122}/>

                <span className="days">LESSON 123 </span>

                <textarea className="textArea" onChange={onChangela8Listener123} value={la8Essay123}/>

                <span className="days">LESSON 124 </span>

                <textarea className="textArea" onChange={onChangela8Listener124} value={la8Essay124}/>

                <span className="days">LESSON 125 </span>

                <textarea className="textArea" onChange={onChangela8Listener125} value={la8Essay125}/>

                <span className="days">LESSON 126 </span>

                <textarea className="textArea" onChange={onChangela8Listener126} value={la8Essay126}/>

                <span className="days">LESSON 127 </span>

                <textarea className="textArea" onChange={onChangela8Listener127} value={la8Essay127}/>

                <span className="days">LESSON 128 </span>

                <textarea className="textArea" onChange={onChangela8Listener128} value={la8Essay128}/>

                <span className="days">LESSON 129 </span>

                <textarea className="textArea" onChange={onChangela8Listener129} value={la8Essay129}/>

                <span className="days">LESSON 130 </span>

                <textarea className="textArea" onChange={onChangela8Listener130} value={la8Essay130}/>

                <span className="days">LESSON 131 </span>

                <textarea className="textArea" onChange={onChangela8Listener131} value={la8Essay131}/>

                <span className="days">LESSON 132 </span>

                <textarea className="textArea" onChange={onChangela8Listener132} value={la8Essay132}/>

                <span className="days">LESSON 133 </span>

                <textarea className="textArea" onChange={onChangela8Listener133} value={la8Essay133}/>

                <span className="days">LESSON 134 </span>

                <textarea className="textArea" onChange={onChangela8Listener134} value={la8Essay134}/>

                <span className="days">LESSON 135 </span>

                <textarea className="textArea" onChange={onChangela8Listener135} value={la8Essay135}/>

                <span className="days">LESSON 136 </span>

                <textarea className="textArea" onChange={onChangela8Listener136} value={la8Essay136}/>

                <span className="days">LESSON 137 </span>

                <textarea className="textArea" onChange={onChangela8Listener137} value={la8Essay137}/>

                <span className="days">LESSON 138 </span>

                <textarea className="textArea" onChange={onChangela8Listener138} value={la8Essay138}/>

                <span className="days">LESSON 139 </span>

                <textarea className="textArea" onChange={onChangela8Listener139} value={la8Essay139}/>

                <span className="days">LESSON 140 </span>

                <textarea className="textArea" onChange={onChangela8Listener140} value={la8Essay140}/>

                <span className="days">LESSON 141 </span>

                <textarea className="textArea" onChange={onChangela8Listener141} value={la8Essay141}/>

                <span className="days">LESSON 142 </span>

                <textarea className="textArea" onChange={onChangela8Listener142} value={la8Essay142}/>

                <span className="days">LESSON 143 </span>

                <textarea className="textArea" onChange={onChangela8Listener143} value={la8Essay143}/>

                <span className="days">LESSON 144 </span>

                <textarea className="textArea" onChange={onChangela8Listener144} value={la8Essay144}/>

                <span className="days">LESSON 145 </span>

                <textarea className="textArea" onChange={onChangela8Listener145} value={la8Essay145}/>

                <span className="days">LESSON 146 </span>

                <textarea className="textArea" onChange={onChangela8Listener146} value={la8Essay146}/>

                <span className="days">LESSON 147 </span>

                <textarea className="textArea" onChange={onChangela8Listener147} value={la8Essay147}/>

                <span className="days">LESSON 148 </span>

                <textarea className="textArea" onChange={onChangela8Listener148} value={la8Essay148}/>

                <span className="days">LESSON 149 </span>

                <textarea className="textArea" onChange={onChangela8Listener149} value={la8Essay149}/>

                <span className="days">LESSON 150 </span>

                <textarea className="textArea" onChange={onChangela8Listener150} value={la8Essay150}/>

                <span className="days">LESSON 151 </span>

                <textarea className="textArea" onChange={onChangela8Listener151} value={la8Essay151}/>

                <span className="days">LESSON 152 </span>

                <textarea className="textArea" onChange={onChangela8Listener152} value={la8Essay152}/>

                <span className="days">LESSON 153 </span>

                <textarea className="textArea" onChange={onChangela8Listener153} value={la8Essay153}/>

                <span className="days">LESSON 154 </span>

                <textarea className="textArea" onChange={onChangela8Listener154} value={la8Essay154}/>

                <span className="days">LESSON 155 </span>

                <textarea className="textArea" onChange={onChangela8Listener155} value={la8Essay155}/>

                <span className="days">LESSON 156 </span>

                <textarea className="textArea" onChange={onChangela8Listener156} value={la8Essay156}/>

                <span className="days">LESSON 157 </span>

                <textarea className="textArea" onChange={onChangela8Listener157} value={la8Essay157}/>

                <span className="days">LESSON 158 </span>

                <textarea className="textArea" onChange={onChangela8Listener158} value={la8Essay158}/>

                <span className="days">LESSON 159 </span>

                <textarea className="textArea" onChange={onChangela8Listener159} value={la8Essay159}/>

                <span className="days">LESSON 160 </span>

                <textarea className="textArea" onChange={onChangela8Listener160} value={la8Essay160}/>

                <span className="days">LESSON 161 </span>

                <textarea className="textArea" onChange={onChangela8Listener161} value={la8Essay161}/>

                <span className="days">LESSON 162 </span>

                <textarea className="textArea" onChange={onChangela8Listener162} value={la8Essay162}/>

                <span className="days">LESSON 163 </span>

                <textarea className="textArea" onChange={onChangela8Listener163} value={la8Essay163}/>

                <span className="days">LESSON 164 </span>

                <textarea className="textArea" onChange={onChangela8Listener164} value={la8Essay164}/>

                <span className="days">LESSON 165 </span>

                <textarea className="textArea" onChange={onChangela8Listener165} value={la8Essay165}/>

                <span className="days">LESSON 166 </span>

                <textarea className="textArea" onChange={onChangela8Listener166} value={la8Essay166}/>

                <span className="days">LESSON 167 </span>

                <textarea className="textArea" onChange={onChangela8Listener167} value={la8Essay167}/>

                <span className="days">LESSON 168 </span>

                <textarea className="textArea" onChange={onChangela8Listener168} value={la8Essay168}/>

                <span className="days">LESSON 169 </span>

                <textarea className="textArea" onChange={onChangela8Listener169} value={la8Essay169}/>

                <span className="days">LESSON 170 </span>

                <textarea className="textArea" onChange={onChangela8Listener170} value={la8Essay170}/>

                <span className="days">LESSON 171 </span>

                <textarea className="textArea" onChange={onChangela8Listener171} value={la8Essay171}/>

                <span className="days">LESSON 172 </span>

                <textarea className="textArea" onChange={onChangela8Listener172} value={la8Essay172}/>

                <span className="days">LESSON 173 </span>

                <textarea className="textArea" onChange={onChangela8Listener173} value={la8Essay173}/>

                <span className="days">LESSON 174 </span>

                <textarea className="textArea" onChange={onChangela8Listener174} value={la8Essay174}/>

                <span className="days">LESSON 175 </span>

                <textarea className="textArea" onChange={onChangela8Listener175} value={la8Essay175}/>

                <span className="days">LESSON 176 </span>

                <textarea className="textArea" onChange={onChangela8Listener176} value={la8Essay176}/>

                <span className="days">LESSON 177 </span>

                <textarea className="textArea" onChange={onChangela8Listener177} value={la8Essay177}/>

                <span className="days">LESSON 178 </span>

                <textarea className="textArea" onChange={onChangela8Listener178} value={la8Essay178}/>

                <span className="days">LESSON 179 </span>

                <textarea className="textArea" onChange={onChangela8Listener179} value={la8Essay179}/>

                <span className="days">LESSON 180 </span>

                <textarea className="textArea" onChange={onChangela8Listener180} value={la8Essay180}/>
            </div>
          </section>
        </form>
      </LazyLoad>
    </Layout>
)
}
export default LanguageArts8

export const query = graphql`
{
  theAlchemist: file(relativePath: {eq: "subjects/bookCovers/theAlchemist.jpg"}) {
  childImageSharp {
  fluid(maxWidth: 900) {
  ...GatsbyImageSharpFluid
}
}
}
  piecingMeTogether: file(relativePath: {eq: "subjects/bookCovers/piecingMeTogether.jpg"}) {
  childImageSharp {
  fluid(maxWidth: 900) {
  ...GatsbyImageSharpFluid
}
}
}
  oldmanandthesea: file(relativePath: {eq: "subjects/bookCovers/oldmanandthesea.jpg"}) {
  childImageSharp {
  fluid(maxWidth: 900) {
  ...GatsbyImageSharpFluid
}
}
}
  oldmanandtheseabookcover: file(relativePath: {eq: "subjects/bookCovers/oldmanandtheseabookcover.jpg"}) {
  childImageSharp {
  fluid(maxWidth: 900) {
  ...GatsbyImageSharpFluid
}
}
}
  bookthief: file(relativePath: {eq: "subjects/bookCovers/bookthief.jpg"}) {
  childImageSharp {
  fluid(maxWidth: 900) {
  ...GatsbyImageSharpFluid
}
}
}
}
`
