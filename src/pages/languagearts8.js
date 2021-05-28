import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ScrollToTop from "react-scroll-to-top"
import LazyLoad from "react-lazyload"
import Video from "../components/video"
// import ToggleSwitch from "../components/checkbox"


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
                Hemingway, <i> The Book Thief</i> by Markus Zusak, and <i>The Giver </i> by Lois Lowry. The Alchemist
                and The Old Man and the Sea are out of copyright and the entire book is linked. The other novels are all
                available at your local library, local bookstore, or can be purchased online. Until you get a copy, the
                first chapter for each book is linked as a PDF. </p>

              <span className="days">LESSON 1 </span>
              <p className="margin-para"> The next book you will read is <a href={require("../resources/books/The_Alchemist.pdf")} rel="noreferrer" target="_blank"> <i>The Alchemist.</i>   </a> It is available <a href={require("../resources/books/The_Alchemist.pdf")} rel="noreferrer" target="_blank"> here as a PDF. </a>  If you prefer a hard copy, it is available at your local library, local bookstore, and can be purchased online.  </p>
            <p className="margin-para"> The Alchemist is a fable about following your dreams and paying attention to signs the universe sends you.  Like most fables, The Alchemist has a theme or moral that describes a universal truth about life.  The author does not make his point directly.  The  Alchemist is an allegory, or a story that reveals a deeper, hidden meaning.   As you read, look for hidden meanings that are found throughout the fable.
            </p>
            <p>After you read the Prologue through page 11, answer the following questions:<br/>
              1.	Who is Santiago? How is he introduced at the beginning of the story?<br/>
              2.	What is strange or unusual about Santiago’s dream?<br/>
              3.	Recall a dream you have had. What makes this dream especially memorable? Do you think dreams have a deeper "meanings"?<br/>
              4.	What is the geographical setting at the beginning of the novel?<br/>
              5.	What do Santiago’s parents plan for him, and how does he change that plan?<br/>
              6.	What does Santiago plan to do in Tarifa?<br/>
            </p>
              <textarea className="textArea" onChange={onChangela8Listener1} value={la8Essay1}/>

              <span className="days">LESSON 2 </span>
            <p> Read pp. 12 - 34 in <a href={require("../resources/books/The_Alchemist.pdf")} rel="noreferrer" target="_blank"> <i>The Alchemist.</i></a>  Then answer the following questions:<br/>
            1.	Santiago stops in Tarifa to consult with an old woman about his recurring dream. What price does she charge him?<br/>
            2.	Santiago meets an old man in the village. What is his name and why do you think that the author
            3.	would have included this name in the novel?<br/>
            4.	What does the old man ask for in payment for helping Santiago?<br/>
            5.	How does the old man convince Santiago of his power?<br/>
            6.	How does the old man explain the concept of Personal Legends to Santiago?  Why does the old man believe that few people ever really attain their Personal Legends?<br/>
            7.	Why does the old man tell Santiago to follow "omens?<br/>" Do you believe that omens exist?  Why or why not?<br/>
            8.	What does the old man take from the breastplate as a gift to Santiago?<br/>
            9.	The old man tells Santiago a story that concludes with the secret of happiness. According to the old man, what is the secret of happiness?<br/></p>
              <textarea className="textArea" onChange={onChangela8Listener2} value={la8Essay2}/>

              <span className="days">LESSON 3 </span>
          <p>Read pp.  34 - 49 in <a href={require("../resources/books/The_Alchemist.pdf")} rel="noreferrer" target="_blank"> <i>The Alchemist.</i></a>  Then answer the following questions:<br/>
          1.	When Santiago decides to leave his home country of Spain in order to follow his personal legend, where does he go?<br/>
          2.	How are the two locations different in regards to food/drink, religion, customs, etc.?<br/>
          3.	What happens when Santiago follows his new friend into the marketplace?<br/>
          4.	Although Santiago does not speak Arabic, he has a conversation with the candy seller. Why is this important?<br/>
          5.	What comfort do the black and white stones provide to Santiago?<br/>
          6.	 Describe the first interaction between Santiago and the crystal merchant.
        </p>
              <textarea className="textArea" onChange={onChangela8Listener3} value={la8Essay3}/>

              <span className="days">LESSON 4 </span>
        <p>PART TWO</p>
        <p>Read pp.  53 – 82 (to the asterisks)   in <a href={require("../resources/books/The_Alchemist.pdf")} rel="noreferrer" target="_blank"> <i>The Alchemist.</i></a>  Then answer the following questions:<br/>
        1.	What lessons does Santiago teach the crystal merchant?<br/>
        2.	Who is the Englishman and what do we learn about him?<br/>
        3.	What motivates the Englishman to befriend Santiago?<br/>
        4.	On page 71, the leader of the caravan provides us with a metaphor about the desert. What comparison
        5.	is being made here?<br/>
        6.	According to the Englishman, what is the Soul of the World?<br/>
        7.	What is an alchemist?<br/>
      </p>
              <textarea className="textArea" onChange={onChangela8Listener4} value={la8Essay4}/>

              <span className="days">LESSON 5 </span>

            <p>Watch the the video below about <b>Figurative Language</b> and then answer the questions that follow.</p>
            <Video videoUrl="https://www.youtube.com/embed/rW4DtZGxjq0"/>
            <p>Figurative language refers to any use of language that goes beyond the literal meaning of the words themselves.</p>

            <p>We most often associate figurative language with poetry, but figurative language widely is found in everything from fiction and folk music to drama and our daily speech.   It's a sophisticated, creative use of language to convey meaning and mood. It's an important tool in the writer’s toolbox. </p>

            <p><b>Hyperbole</b> uses extreme exaggeration and is not meant to be taken literally. Examples: I'm so hungry I could eat a horse.  I could have died of embarrassment.</p>

            <p><b>Idioms</b> are figures of speech that cannot be understood from a literal understanding of the words alone. Examples: The cat is out of the bag.  Stop beating around the bush. <br/>Someone visiting from another country would not understand these phrases without someone explaining the meaning.</p>

            <p><b>Similes </b>make comparisons between two unrelated elements by using ‘like’ or ‘as’ to highlight a common quality both things share.  Examples:  Her eyes shone like diamonds.  He was as strong as a horse.</p>

            <p>A <b>metaphor</b> makes a comparison between two unrelated things by stating one thing is the other thing.  Example: Life is a rollercoaster.</p>

            <p><b>Oxymorons </b>combine two opposing elements into a single phrase to be thought provoking or funny. Example: Deafening silence.  A known secret.</p>

            <p><b>Personification</b> is a metaphor where human actions, feelings or traits are given to a non-human. Examples: Books were her constant companions.   That car’s a beauty. An angry sky.</p>

            <p><b>Alliteration </b>is the repetition of the same letter sound across the start of several words in a line of text. The word comes from the Latin "littera," meaning "letter of the alphabet".  Example: The slithering snake slid sideways silently.  </p>

            <p><b>Assonance </b>is the repetition of vowel <i>sounds</i> within a group of words.  Example: Fleet feet sweep by sleeping geese.  Dr. Suess often used alliteration and assonance in his books:  Through three cheese trees three free fleas flew. While these fleas flew, freezy breeze blew. </p>

            <p>Allusion is an <i>implied </i>reference to a person, event, or thing based on the assumption that you know what the person is talking about.  The author assumes the reader will understand the reference. Example: <i> You're acting like such a Scrooge! </i>This assumes the reader is familiar with the Scrooge character from Dickens's A Christmas Carol.  This means that the person is being selfish, like the character from the story.</p>

            <p>State which type of figurative language is used in each example below:<br/>
              1. "Her face is like a sunbeam." <br/>
              2. "The tropical storm slept for two days." <br/>
              3. "I had so much homework, I needed a pickup truck to carry all my books home!"   <br/>
              4. What is a literary technique in which two contradictory words come together for a special effect? For example, <i>original copy</i> or <i>jumbo shrimp</i>?<br/>
              5. "Let us go forth and lead the land we love" contains an example of what type of figurative language?<br/>
              6. "We real cool. We Left school. We Lurk late. We Strike straight. We Sing sin. We Thin gin. We Jazz June. We Die soon."  In this poem by Gwendolyn Brooks, what poetic device is used?</p>
            <p>
              <ol className="vocab">Give an example for each of the following.  <br/>
                <li>Hyperbole</li>
                <li>Idiom</li>
                <li>Simile</li>
                <li>Metaphor  </li>
                <li>Oxymorons</li>
                <li>Personification</li>
                <li>Alliteration</li>
                <li>Assonance </li>
                <li>Allusion </li></ol></p>

              <textarea className="textArea" onChange={onChangela8Listener5} value={la8Essay5}/>

              <span className="days">LESSON 6 </span>
            <p>Read pp. 82 - 106 in <a href={require("../resources/books/The_Alchemist.pdf")} rel="noreferrer" target="_blank"> <i>The Alchemist.</i></a>  Then answer the following questions:<br/>
              1.	Explain the Elixir of Life, the Master Work, and the Philosopher’s Stone.
              2.	Why was the alchemist watching people as they entered the oasis from the caravan?<br/>
              3.	Describe the Oasis.
              4.	What does it mean when a woman in the Oasis is dressed in black?  (Keep in mind: this is a Muslim society.)<br/>
              5.	What is the language of the world and how does Santiago learn it?<br/>
              6.	What agreement do Fatima and Santiago come to?<br/>
            </p>
              <textarea className="textArea" onChange={onChangela8Listener6} value={la8Essay6}/>

              <span className="days">LESSON 7 </span>
            <p>Read pp. 108 - 126 in <a href={require("../resources/books/The_Alchemist.pdf")} rel="noreferrer" target="_blank"> <i>The Alchemist.</i></a>  Then answer the following questions:<br/>
              1.	Santiago sees two hawks as an omen. What do they signify?<br/>
              2.	What happens when Santiago visits the tribal chieftains to tell them about his vision?<br/>
              3.	What is the one moment or image that sticks in your mind thus far?<br/>
              4.	What test do the chieftains outline for Santiago?<br/>
              5.	Describe Santiago’s first interaction with the Alchemist.<br/>
              6.	Describe the battle at the oasis.<br/>
              7.	What was Santiago’s reward for saving the oasis?<br/>
              8.	Describe the "goodbyes" that are said between Fatima and Santiago as he is leaving.<br/>
            </p>
              <textarea className="textArea" onChange={onChangela8Listener7} value={la8Essay7}/>

              <span className="days">LESSON 8 </span>
            <p>Read pp. 126 – 148 (to the asterisk)  in <a href={require("../resources/books/The_Alchemist.pdf")} rel="noreferrer" target="_blank"> <i>The Alchemist.</i></a>  Then answer the following questions:<br/>
              1.	What advice does the alchemist give about listening to one’s heart? Do you agree or disagree?<br/>
              2.	The author includes many examples of foreshadowing here. How do we know that Santiago awaits
              3.	more trouble on his quest?<br/>
              4.	What did the Arabs find when they searched the alchemist? Why did they allow the alchemist to keep the treasure?<br/>
              5.	What happens when the alchemist and the boy are both taken into the military camp?<br/>
              6.	Why would the alchemist set up such a "test" for Santiago?<br/>
              7.	Who is at risk of death here? Why?<br/>
            </p>
              <textarea className="textArea" onChange={onChangela8Listener8} value={la8Essay8}/>

              <span className="days">LESSON 9 </span>
            <p>Watch the video <b> What is Personification?    </b>Then complete the assignment below. </p>
            <Video videoUrl="https://www.youtube.com/embed/1Mb6NxixRk8"/>
            <p>Read pp. 148-173 in <a href={require("../resources/books/The_Alchemist.pdf")} rel="noreferrer" target="_blank"> <i>The Alchemist.</i></a>  Then answer the following questions:<br/>
              1.	As Santiago is attempting to turn himself into the wind, who does he hold conversations with?<br/>
              2.	Critics apply the term pathetic fallacy to instances in which human characteristics (such as reason and the ability to speak) are given to parts of the natural world. Based upon this definition, what three aspects of the natural world are personified in this way during Santiago’s efforts to turn himself into the wind?<br/>
              3.	Two people were smiling after Santiago turned himself into the wind. Who were they and why was each smiling?<br/>
              4.	What did the alchemist do at the Coptic monastery?<br/>
              5.	How did the alchemist distribute the gold? Why did he think Santiago might need the gold later?<br/>
              6.	What is the point of the alchemist’s story about the sons of Roman emperor Tiberius?<br/>
              7.	What advice did the boy’s heart give him as he approached the Pyramids? What did he do when he saw the Pyramids?<br/>
              8.	Who approaches Santiago as he digs in the sand, and what did they do?<br/>
              9.	What story does one attacker tell Santiago?<br/>
              10.	After the attackers leave, Santiago gets up from the sand and begins to laugh. Why?<br/>
              11.	The Alchemist presents us with a lot of important lessons learned by Santiago throughout his journey.   <br/>
              12.	Was there one lesson more important than the other that he learned?  Explain your answer. <br/>
            </p>
              <textarea className="textArea" onChange={onChangela8Listener9} value={la8Essay9}/>

              <span className="days">LESSON 10 </span>
            <p>After you watch the video below<b> The Alchemist, a Summary & Analysis, </b> answer the following questions:  </p>
            <Video videoUrl="https://www.youtube.com/embed/6Xi06683LPo"/>
            <p>1. At the start of his journey, when Santiago asks a gypsy woman to interpret his dream about a treasure in the Egyptian pyramids, she asks for one tenth of the treasure in return. When Santiago asks the old man to show him the path to the treasure, the old man requests one tenth of his flock as "payment." Both payments represent a different price we have to pay to fulfill a dream; however, only one will yield a true result. Which payment represents false hope? Can you think of examples from your own life when you had to give up something to meet a goal and found the price too high?   <br/>

              2. Paulo Coelho once said that alchemy is all about pursuing our spiritual quest in the physical world as it was given to us. It is the art of transmuting the reality into something sacred, of mixing the sacred and the profane. With this in mind, can you define your Personal Legend? At what time in your life were you first able to act on it? What was your "beginner's luck"? Did anything prevent you from following it to conclusion? Having read The Alchemist, do you know what inner resources you need to continue the journey? <br/>

              3. One of the first major diversions from Santiago's journey was the theft of his money in Tangiers, which forced him into taking a menial job with the crystal merchant. There, Santiago learned many lessons on everything from the art of business to the art of patience. Of all these, which lessons were the most crucial to the pursuit of his Personal Legend? <br/>

              4. When he talked about the pilgrimage to Mecca, the crystal merchant argued that having a dream is more important than fulfilling it, which is what Santiago was trying to do. Do you agree with Santiago's rationale or crystal merchant's? <br/>

              5. The Englishman, whom Santiago meets when he joins the caravan to the Egyptian pyramids, is searching for "a universal language, understood by everybody." What is that language? According to the Englishman, what are the parallels between reading and alchemy? How does the Englishman's search for the alchemist compares to Santiago's search for a treasure? How did the Englishman and Santiago feel about each other? <br/>

              6. The alchemist tells Santiago "you don't have to understand the desert: all you have to do is contemplate a simple grain of sand, and you will see in it all the marvels of creation." With this in mind, why do you think the alchemist chose to befriend Santiago, though he knew that the Englishman was the one looking for him? What is the meaning of two dead hawks and the falcon in the oasis? At one point the alchemist explains to Santiago the secret of successfully turning metal into gold. How does this process compare to finding a Personal Legend? <br/>
              7.   At the very end of the journey, why did the alchemist leave Santiago alone to complete it? <br/>
              8. Earlier in the story, the alchemist told Santiago "when you possess great treasures within you, and try to tell others of them, seldom are you believed." At the end of the story, how did this simple lesson save Santiago's life? How did it lead him back to the treasure he was looking for? <br/></p>

              <textarea className="textArea" onChange={onChangela8Listener10} value={la8Essay10}/>

              <span className="days">LESSON 11 </span>
            <p>After you watch the video below <b> Top Quotes And Lessons,</b> answer the questions below to best of your ability.  Be sure to number your responses. <br/>
              <Video videoUrl="https://www.youtube.com/embed/ rnQ5OJgGM6g"/>
              1.	List four lessons that The Alchemist tries to teach. <br/>
              2.	Which quote was the most meaningful to you? Explain.<br/>
              3.	Do you believe every person has a personal legend they must pursue?  If so, what is yours?  If not, Why do you believe this?<br/>
              4.	Coelho states that "simple things are the most valuable and only wise people appreciate them." Produce a written or artistic response which depicts something that is "simple" yet valuable to you and explain why it is so important. <br/>
              5.	The alchemist (in the form of Melchizedek) says to Santiago, "When you really want something to happen, the whole universe conspires so that your wish comes true." Write or create a response which captures a time in your own life when you had a wish, and you felt that the whole universe conspired for OR against you. What happened to make you feel that way? Did your wish come true? <br/>
              6.	The old man states that the "world’s greatest lie….is that at a certain point in our lives, we lose control of what’s happening to us, and our lives become controlled by fate." Do you, like the old man, believe this is a lie, and that we are always in control of our destinies? Why/ why not? Why do you think people believe the "World’s greatest lie"? Or…..Write about/explore artistically a time in your life when you felt as though you had "lost control," and your fate was being determined by other forces. Why did you feel that way? Did you regain control? <br/>
              7.	Santiago is told that "people are afraid to pursue their most important dreams because they feel they don’t deserve them, or that they’ll be unable to achieve them." Create a written or artistic response to the following: Do you have a goal or dream which intimidates you? Why do you feel unworthy or fearful of it? What practical steps might you take to make the goal more accessible or easier to accomplish? On the other hand, are there some dreams which we are correct to fear? Do you believe some dreams should simply remain as dreams? Why/why not? <br/>
            </p>
              <textarea className="textArea" onChange={onChangela8Listener11} value={la8Essay11}/>

              <span className="days">LESSON 12 </span>
            <p>Complete ONE of the projects listed below based on the Alchemist. <br/>
              1. Map out Santiago’s journey. Include obstacles he encounters and lessons he learns in their geographically correct locations. Provide a key which suggests ideas, progress, symbolism, etc. <br/>
              2. Create a painting, sketch, collage, photo-essay, or sculpture which captures an idea, relationship or moment from the story. Provide a written explanation of your work. <br/>
              3. Scrapbook (with explanatory notes) of Santiago’s travels—feature pictures and items which Santiago accumulates as he learns about life. <br/>
            </p>
              <textarea className="textArea" onChange={onChangela8Listener12} value={la8Essay12}/>

              <span className="days">LESSON 13 </span>
            <p>Produce a creative writing piece which captures some of the central ideas of the book. You can come up with your own or choose from one of the ideas below. <br/></p>
            <ul className='assnList'>
              <li> Journal: A Day in the Life of a Shepherd</li>
              <li> Rewrite a portion of the story from a different perspective: Fatima, the Alchemist, the Fortune
                Teller, the crystal merchant the sheep! </li>
              <li> Write Santiago’s "How-To Find Your Treasure" Handbook, or "Personal Legends for Dummies" </li>
              <li> Write a letter from Santiago to Fatima and a second one Fatima to Santiago. </li>
            </ul>

              <textarea className="textArea" onChange={onChangela8Listener13} value={la8Essay13}/>

              <span className="days">LESSON 14 </span>

              <textarea className="textArea" onChange={onChangela8Listener14} value={la8Essay14}/>

              <span className="days">LESSON 15 </span>

              <textarea className="textArea" onChange={onChangela8Listener15} value={la8Essay15}/>

              <span className="days">LESSON 16 </span>

              <textarea className="textArea" onChange={onChangela8Listener16} value={la8Essay16}/>

              <span className="days">LESSON 17 </span>

              <textarea className="textArea" onChange={onChangela8Listener17} value={la8Essay17}/>

              <span className="days">LESSON 18 </span>

              <textarea className="textArea" onChange={onChangela8Listener18} value={la8Essay18}/>

              <span className="days">LESSON 19 </span>

              <textarea className="textArea" onChange={onChangela8Listener19} value={la8Essay19}/>

              <span className="days">LESSON 20 </span>

              <textarea className="textArea" onChange={onChangela8Listener20} value={la8Essay20}/>

              <span className="days">LESSON 21 </span>

              <textarea className="textArea" onChange={onChangela8Listener21} value={la8Essay21}/>

              <span className="days">LESSON 22 </span>

              <textarea className="textArea" onChange={onChangela8Listener22} value={la8Essay22}/>

              <span className="days">LESSON 23 </span>

              <textarea className="textArea" onChange={onChangela8Listener23} value={la8Essay23}/>

              <span className="days">LESSON 24 </span>

              <textarea className="textArea" onChange={onChangela8Listener24} value={la8Essay24}/>

              <span className="days">LESSON 25 </span>

              <textarea className="textArea" onChange={onChangela8Listener25} value={la8Essay25}/>

              <span className="days">LESSON 26 </span>

              <textarea className="textArea" onChange={onChangela8Listener26} value={la8Essay26}/>

              <span className="days">LESSON 27 </span>

              <textarea className="textArea" onChange={onChangela8Listener27} value={la8Essay27}/>

              <span className="days">LESSON 28 </span>

              <textarea className="textArea" onChange={onChangela8Listener28} value={la8Essay28}/>

              <span className="days">LESSON 29 </span>

              <textarea className="textArea" onChange={onChangela8Listener29} value={la8Essay29}/>

              <span className="days">LESSON 30 </span>

              <textarea className="textArea" onChange={onChangela8Listener30} value={la8Essay30}/>

              <span className="days">LESSON 31 </span>

              <textarea className="textArea" onChange={onChangela8Listener31} value={la8Essay31}/>

              <span className="days">LESSON 32 </span>

              <textarea className="textArea" onChange={onChangela8Listener32} value={la8Essay32}/>

              <span className="days">LESSON 33 </span>

              <textarea className="textArea" onChange={onChangela8Listener33} value={la8Essay33}/>

              <span className="days">LESSON 34 </span>

              <textarea className="textArea" onChange={onChangela8Listener34} value={la8Essay34}/>

              <span className="days">LESSON 35 </span>

              <textarea className="textArea" onChange={onChangela8Listener35} value={la8Essay35}/>

              <span className="days">LESSON 36 </span>

              <textarea className="textArea" onChange={onChangela8Listener36} value={la8Essay36}/>

              <span className="days">LESSON 37 </span>

              <textarea className="textArea" onChange={onChangela8Listener37} value={la8Essay37}/>

              <span className="days">LESSON 38 </span>

              <textarea className="textArea" onChange={onChangela8Listener38} value={la8Essay38}/>

              <span className="days">LESSON 39 </span>

              <textarea className="textArea" onChange={onChangela8Listener39} value={la8Essay39}/>

              <span className="days">LESSON 40 </span>

              <textarea className="textArea" onChange={onChangela8Listener40} value={la8Essay40}/>

              <span className="days">LESSON 41 </span>

              <textarea className="textArea" onChange={onChangela8Listener41} value={la8Essay41}/>

              <span className="days">LESSON 42 </span>

              <textarea className="textArea" onChange={onChangela8Listener42} value={la8Essay42}/>

              <span className="days">LESSON 43 </span>

              <textarea className="textArea" onChange={onChangela8Listener43} value={la8Essay43}/>

              <span className="days">LESSON 44 </span>

              <textarea className="textArea" onChange={onChangela8Listener44} value={la8Essay44}/>

              <span className="days">LESSON 45 </span>

              <textarea className="textArea" onChange={onChangela8Listener45} value={la8Essay45}/>

              <span className="days">LESSON 46 </span>

              <textarea className="textArea" onChange={onChangela8Listener46} value={la8Essay46}/>

              <span className="days">LESSON 47 </span>

              <textarea className="textArea" onChange={onChangela8Listener47} value={la8Essay47}/>

              <span className="days">LESSON 48 </span>

              <textarea className="textArea" onChange={onChangela8Listener48} value={la8Essay48}/>

              <span className="days">LESSON 49 </span>

              <textarea className="textArea" onChange={onChangela8Listener49} value={la8Essay49}/>

              <span className="days">LESSON 50 </span>

              <textarea className="textArea" onChange={onChangela8Listener50} value={la8Essay50}/>

              <span className="days">LESSON 51 </span>

              <textarea className="textArea" onChange={onChangela8Listener51} value={la8Essay51}/>

              <span className="days">LESSON 52 </span>

              <textarea className="textArea" onChange={onChangela8Listener52} value={la8Essay52}/>

              <span className="days">LESSON 53 </span>

              <textarea className="textArea" onChange={onChangela8Listener53} value={la8Essay53}/>

              <span className="days">LESSON 54 </span>

              <textarea className="textArea" onChange={onChangela8Listener54} value={la8Essay54}/>

              <span className="days">LESSON 55 </span>

              <textarea className="textArea" onChange={onChangela8Listener55} value={la8Essay55}/>

              <span className="days">LESSON 56 </span>

              <textarea className="textArea" onChange={onChangela8Listener56} value={la8Essay56}/>

              <span className="days">LESSON 57 </span>

              <textarea className="textArea" onChange={onChangela8Listener57} value={la8Essay57}/>

              <span className="days">LESSON 58 </span>

              <textarea className="textArea" onChange={onChangela8Listener58} value={la8Essay58}/>

              <span className="days">LESSON 59 </span>

              <textarea className="textArea" onChange={onChangela8Listener59} value={la8Essay59}/>

              <span className="days">LESSON 60 </span>

              <textarea className="textArea" onChange={onChangela8Listener60} value={la8Essay60}/>

              <span className="days">LESSON 61 </span>

              <textarea className="textArea" onChange={onChangela8Listener61} value={la8Essay61}/>

              <span className="days">LESSON 62 </span>

              <textarea className="textArea" onChange={onChangela8Listener62} value={la8Essay62}/>

              <span className="days">LESSON 63 </span>

              <textarea className="textArea" onChange={onChangela8Listener63} value={la8Essay63}/>

              <span className="days">LESSON 64 </span>

              <textarea className="textArea" onChange={onChangela8Listener64} value={la8Essay64}/>

              <span className="days">LESSON 65 </span>

              <textarea className="textArea" onChange={onChangela8Listener65} value={la8Essay65}/>

              <span className="days">LESSON 66 </span>

              <textarea className="textArea" onChange={onChangela8Listener66} value={la8Essay66}/>

              <span className="days">LESSON 67 </span>

              <textarea className="textArea" onChange={onChangela8Listener67} value={la8Essay67}/>

              <span className="days">LESSON 68 </span>

              <textarea className="textArea" onChange={onChangela8Listener68} value={la8Essay68}/>

              <span className="days">LESSON 69 </span>

              <textarea className="textArea" onChange={onChangela8Listener69} value={la8Essay69}/>

              <span className="days">LESSON 70 </span>

              <textarea className="textArea" onChange={onChangela8Listener70} value={la8Essay70}/>

              <span className="days">LESSON 71 </span>

              <textarea className="textArea" onChange={onChangela8Listener71} value={la8Essay71}/>

              <span className="days">LESSON 72 </span>

              <textarea className="textArea" onChange={onChangela8Listener72} value={la8Essay72}/>

              <span className="days">LESSON 73 </span>

              <textarea className="textArea" onChange={onChangela8Listener73} value={la8Essay73}/>

              <span className="days">LESSON 74 </span>

              <textarea className="textArea" onChange={onChangela8Listener74} value={la8Essay74}/>

              <span className="days">LESSON 75 </span>

              <textarea className="textArea" onChange={onChangela8Listener75} value={la8Essay75}/>

              <span className="days">LESSON 76 </span>

              <textarea className="textArea" onChange={onChangela8Listener76} value={la8Essay76}/>

              <span className="days">LESSON 77 </span>

              <textarea className="textArea" onChange={onChangela8Listener77} value={la8Essay77}/>

              <span className="days">LESSON 78 </span>

              <textarea className="textArea" onChange={onChangela8Listener78} value={la8Essay78}/>

              <span className="days">LESSON 79 </span>

              <textarea className="textArea" onChange={onChangela8Listener79} value={la8Essay79}/>

              <span className="days">LESSON 80 </span>

              <textarea className="textArea" onChange={onChangela8Listener80} value={la8Essay80}/>

              <span className="days">LESSON 81 </span>

              <textarea className="textArea" onChange={onChangela8Listener81} value={la8Essay81}/>

              <span className="days">LESSON 82 </span>

              <textarea className="textArea" onChange={onChangela8Listener82} value={la8Essay82}/>

              <span className="days">LESSON 83 </span>

              <textarea className="textArea" onChange={onChangela8Listener83} value={la8Essay83}/>

              <span className="days">LESSON 84 </span>

              <textarea className="textArea" onChange={onChangela8Listener84} value={la8Essay84}/>

              <span className="days">LESSON 85 </span>

              <textarea className="textArea" onChange={onChangela8Listener85} value={la8Essay85}/>

              <span className="days">LESSON 86 </span>

              <textarea className="textArea" onChange={onChangela8Listener86} value={la8Essay86}/>

              <span className="days">LESSON 87 </span>

              <textarea className="textArea" onChange={onChangela8Listener87} value={la8Essay87}/>

              <span className="days">LESSON 88 </span>

              <textarea className="textArea" onChange={onChangela8Listener88} value={la8Essay88}/>

              <span className="days">LESSON 89 </span>

              <textarea className="textArea" onChange={onChangela8Listener89} value={la8Essay89}/>

              <span className="days">LESSON 90 </span>

              <textarea className="textArea" onChange={onChangela8Listener90} value={la8Essay90}/>

              <span className="days">LESSON 91 </span>

              <textarea className="textArea" onChange={onChangela8Listener91} value={la8Essay91}/>

              <span className="days">LESSON 92 </span>

              <textarea className="textArea" onChange={onChangela8Listener92} value={la8Essay92}/>

              <span className="days">LESSON 93 </span>

              <textarea className="textArea" onChange={onChangela8Listener93} value={la8Essay93}/>

              <span className="days">LESSON 94 </span>

              <textarea className="textArea" onChange={onChangela8Listener94} value={la8Essay94}/>

              <span className="days">LESSON 95 </span>

              <textarea className="textArea" onChange={onChangela8Listener95} value={la8Essay95}/>

              <span className="days">LESSON 96 </span>

              <textarea className="textArea" onChange={onChangela8Listener96} value={la8Essay96}/>

              <span className="days">LESSON 97 </span>

              <textarea className="textArea" onChange={onChangela8Listener97} value={la8Essay97}/>

              <span className="days">LESSON 98 </span>

              <textarea className="textArea" onChange={onChangela8Listener98} value={la8Essay98}/>

              <span className="days">LESSON 99 </span>

              <textarea className="textArea" onChange={onChangela8Listener99} value={la8Essay99}/>

              <span className="days">LESSON 100 </span>

              <textarea className="textArea" onChange={onChangela8Listener100} value={la8Essay100}/>

              <span className="days">LESSON 101 </span>

              <textarea className="textArea" onChange={onChangela8Listener101} value={la8Essay101}/>

              <span className="days">LESSON 102 </span>

              <textarea className="textArea" onChange={onChangela8Listener102} value={la8Essay102}/>

              <span className="days">LESSON 103 </span>

              <textarea className="textArea" onChange={onChangela8Listener103} value={la8Essay103}/>

              <span className="days">LESSON 104 </span>

              <textarea className="textArea" onChange={onChangela8Listener104} value={la8Essay104}/>

              <span className="days">LESSON 105 </span>

              <textarea className="textArea" onChange={onChangela8Listener105} value={la8Essay105}/>

              <span className="days">LESSON 106 </span>

              <textarea className="textArea" onChange={onChangela8Listener106} value={la8Essay106}/>

              <span className="days">LESSON 107 </span>

              <textarea className="textArea" onChange={onChangela8Listener107} value={la8Essay107}/>

              <span className="days">LESSON 108 </span>

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