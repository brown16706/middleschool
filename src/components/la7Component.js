import React from "react"
import Video from "./video"
import "../styles/styles.css"
import Confetti from "./confetti"

function useLocalStorageState(key, defaultValue = "") {
  const [state, setState] = React.useState(
    () => window.localStorage.getItem(key) || defaultValue
  )
  React.useEffect(() => {
    window.localStorage.setItem(key, state)
  }, [state, key])
  return [state, setState]
}

const LA7Component = ({ data }) => {

  const [la7Essay1, setla7Essay1] = useLocalStorageState("la7Essay1", "")
  const [la7Essay2, setla7Essay2] = useLocalStorageState("la7Essay2", "")
  const [la7Essay3, setla7Essay3] = useLocalStorageState("la7Essay3", "")
  const [la7Essay4, setla7Essay4] = useLocalStorageState("la7Essay4", "")
  const [la7Essay5, setla7Essay5] = useLocalStorageState("la7Essay5", "")
  const [la7Essay6, setla7Essay6] = useLocalStorageState("la7Essay6", "")
  const [la7Essay7, setla7Essay7] = useLocalStorageState("la7Essay7", "")
  const [la7Essay8, setla7Essay8] = useLocalStorageState("la7Essay8", "")
  const [la7Essay9, setla7Essay9] = useLocalStorageState("la7Essay9", "")
  const [la7Essay10, setla7Essay10] = useLocalStorageState("la7Essay10", "")
  const [la7Essay11, setla7Essay11] = useLocalStorageState("la7Essay11", "")
  const [la7Essay12, setla7Essay12] = useLocalStorageState("la7Essay12", "")
  const [la7Essay13, setla7Essay13] = useLocalStorageState("la7Essay13", "")
  const [la7Essay14, setla7Essay14] = useLocalStorageState("la7Essay14", "")
  const [la7Essay15, setla7Essay15] = useLocalStorageState("la7Essay15", "")
  const [la7Essay16, setla7Essay16] = useLocalStorageState("la7Essay16", "")
  const [la7Essay17, setla7Essay17] = useLocalStorageState("la7Essay17", "")
  const [la7Essay18, setla7Essay18] = useLocalStorageState("la7Essay18", "")
  const [la7Essay19, setla7Essay19] = useLocalStorageState("la7Essay19", "")
  const [la7Essay20, setla7Essay20] = useLocalStorageState("la7Essay20", "")
  const [la7Essay21, setla7Essay21] = useLocalStorageState("la7Essay21", "")
  const [la7Essay22, setla7Essay22] = useLocalStorageState("la7Essay22", "")
  const [la7Essay23, setla7Essay23] = useLocalStorageState("la7Essay23", "")
  const [la7Essay24, setla7Essay24] = useLocalStorageState("la7Essay24", "")
  const [la7Essay25, setla7Essay25] = useLocalStorageState("la7Essay25", "")
  const [la7Essay26, setla7Essay26] = useLocalStorageState("la7Essay26", "")
  const [la7Essay27, setla7Essay27] = useLocalStorageState("la7Essay27", "")
  const [la7Essay28, setla7Essay28] = useLocalStorageState("la7Essay28", "")
  const [la7Essay29, setla7Essay29] = useLocalStorageState("la7Essay29", "")
  const [la7Essay30, setla7Essay30] = useLocalStorageState("la7Essay30", "")
  const [la7Essay31, setla7Essay31] = useLocalStorageState("la7Essay31", "")
  const [la7Essay32, setla7Essay32] = useLocalStorageState("la7Essay32", "")
  const [la7Essay33, setla7Essay33] = useLocalStorageState("la7Essay33", "")
  const [la7Essay34, setla7Essay34] = useLocalStorageState("la7Essay34", "")
  const [la7Essay35, setla7Essay35] = useLocalStorageState("la7Essay35", "")
  const [la7Essay36, setla7Essay36] = useLocalStorageState("la7Essay36", "")
  const [la7Essay37, setla7Essay37] = useLocalStorageState("la7Essay37", "")
  const [la7Essay38, setla7Essay38] = useLocalStorageState("la7Essay38", "")
  const [la7Essay39, setla7Essay39] = useLocalStorageState("la7Essay39", "")
  const [la7Essay40, setla7Essay40] = useLocalStorageState("la7Essay40", "")
  const [la7Essay41, setla7Essay41] = useLocalStorageState("la7Essay41", "")
  const [la7Essay42, setla7Essay42] = useLocalStorageState("la7Essay42", "")
  const [la7Essay43, setla7Essay43] = useLocalStorageState("la7Essay43", "")
  const [la7Essay44, setla7Essay44] = useLocalStorageState("la7Essay44", "")
  const [la7Essay45, setla7Essay45] = useLocalStorageState("la7Essay45", "")
  const [la7Essay46, setla7Essay46] = useLocalStorageState("la7Essay46", "")
  const [la7Essay47, setla7Essay47] = useLocalStorageState("la7Essay47", "")
  const [la7Essay48, setla7Essay48] = useLocalStorageState("la7Essay48", "")
  const [la7Essay49, setla7Essay49] = useLocalStorageState("la7Essay49", "")
  const [la7Essay50, setla7Essay50] = useLocalStorageState("la7Essay50", "")
  const [la7Essay51, setla7Essay51] = useLocalStorageState("la7Essay52", "")
  const [la7Essay52, setla7Essay52] = useLocalStorageState("la7Essay53", "")
  const [la7Essay53, setla7Essay53] = useLocalStorageState("la7Essay54", "")
  const [la7Essay54, setla7Essay54] = useLocalStorageState("la7Essay54", "")
  const [la7Essay55, setla7Essay55] = useLocalStorageState("la7Essay5", "")
  const [la7Essay56, setla7Essay56] = useLocalStorageState("la7Essay56", "")
  const [la7Essay57, setla7Essay57] = useLocalStorageState("la7Essay57", "")
  const [la7Essay58, setla7Essay58] = useLocalStorageState("la7Essay58", "")
  const [la7Essay59, setla7Essay59] = useLocalStorageState("la7Essay59", "")
  const [la7Essay60, setla7Essay60] = useLocalStorageState("la7Essay60", "")
  const [la7Essay61, setla7Essay61] = useLocalStorageState("la7Essay61", "")
  const [la7Essay62, setla7Essay62] = useLocalStorageState("la7Essay62", "")
  const [la7Essay63, setla7Essay63] = useLocalStorageState("la7Essay63", "")
  const [la7Essay64, setla7Essay64] = useLocalStorageState("la7Essay64", "")
  const [la7Essay65, setla7Essay65] = useLocalStorageState("la7Essay65", "")
  const [la7Essay66, setla7Essay66] = useLocalStorageState("la7Essay66", "")
  const [la7Essay67, setla7Essay67] = useLocalStorageState("la7Essay67", "")
  const [la7Essay68, setla7Essay68] = useLocalStorageState("la7Essay68", "")
  const [la7Essay69, setla7Essay69] = useLocalStorageState("la7Essay69", "")
  const [la7Essay70, setla7Essay70] = useLocalStorageState("la7Essay70", "")
  const [la7Essay71, setla7Essay71] = useLocalStorageState("la7Essay71", "")
  const [la7Essay72, setla7Essay72] = useLocalStorageState("la7Essay72", "")
  const [la7Essay73, setla7Essay73] = useLocalStorageState("la7Essay73", "")
  const [la7Essay74, setla7Essay74] = useLocalStorageState("la7Essay74", "")
  const [la7Essay75, setla7Essay75] = useLocalStorageState("la7Essay75", "")
  const [la7Essay76, setla7Essay76] = useLocalStorageState("la7Essay76", "")
  const [la7Essay77, setla7Essay77] = useLocalStorageState("la7Essay77", "")
  const [la7Essay78, setla7Essay78] = useLocalStorageState("la7Essay78", "")
  const [la7Essay79, setla7Essay79] = useLocalStorageState("la7Essay79", "")
  const [la7Essay80, setla7Essay80] = useLocalStorageState("la7Essay80", "")
  const [la7Essay81, setla7Essay81] = useLocalStorageState("la7Essay81", "")
  const [la7Essay82, setla7Essay82] = useLocalStorageState("la7Essay82", "")
  const [la7Essay83, setla7Essay83] = useLocalStorageState("la7Essay83", "")
  const [la7Essay84, setla7Essay84] = useLocalStorageState("la7Essay84", "")
  const [la7Essay85, setla7Essay85] = useLocalStorageState("la7Essay85", "")
  const [la7Essay86, setla7Essay86] = useLocalStorageState("la7Essay86", "")
  const [la7Essay87, setla7Essay87] = useLocalStorageState("la7Essay87", "")
  const [la7Essay88, setla7Essay88] = useLocalStorageState("la7Essay88", "")
  const [la7Essay89, setla7Essay89] = useLocalStorageState("la7Essay89", "")
  const [la7Essay90, setla7Essay90] = useLocalStorageState("la7Essay90", "")
  const [la7Essay91, setla7Essay91] = useLocalStorageState("la7Essay91", "")
  const [la7Essay92, setla7Essay92] = useLocalStorageState("la7Essay93", "")
  const [la7Essay93, setla7Essay93] = useLocalStorageState("la7Essay94", "")
  const [la7Essay94, setla7Essay94] = useLocalStorageState("la7Essay95", "")
  const [la7Essay95, setla7Essay95] = useLocalStorageState("la7Essay96", "")
  const [la7Essay96, setla7Essay96] = useLocalStorageState("la7Essay97", "")
  const [la7Essay97, setla7Essay97] = useLocalStorageState("la7Essay98", "")
  const [la7Essay98, setla7Essay98] = useLocalStorageState("la7Essay98", "")
  const [la7Essay99, setla7Essay99] = useLocalStorageState("la7Essay99", "")
  const [la7Essay100, setla7Essay100] = useLocalStorageState("la7Essay100", "")
  // const [la7Essay101, setla7Essay101] = useLocalStorageState("la7Essay101", "")
  // const [la7Essay102, setla7Essay102] = useLocalStorageState("la7Essay102", "")
  // const [la7Essay103, setla7Essay103] = useLocalStorageState("la7Essay103", "")
  // const [la7Essay104, setla7Essay104] = useLocalStorageState("la7Essay104", "")
  // const [la7Essay105, setla7Essay105] = useLocalStorageState("la7Essay105", "")
  // const [la7Essay106, setla7Essay106] = useLocalStorageState("la7Essay106", "")
  // const [la7Essay107, setla7Essay107] = useLocalStorageState("la7Essay107", "")
  // const [la7Essay108, setla7Essay108] = useLocalStorageState("la7Essay108", "")
  // const [la7Essay109, setla7Essay109] = useLocalStorageState("la7Essay109", "")
  // const [la7Essay110, setla7Essay110] = useLocalStorageState("la7Essay110", "")
  // const [la7Essay111, setla7Essay111] = useLocalStorageState("la7Essay111", "")
  // const [la7Essay112, setla7Essay112] = useLocalStorageState("la7Essay112", "")
  // const [la7Essay113, setla7Essay113] = useLocalStorageState("la7Essay113", "")
  // const [la7Essay114, setla7Essay114] = useLocalStorageState("la7Essay114", "")
  // const [la7Essay115, setla7Essay115] = useLocalStorageState("la7Essay115", "")
  // const [la7Essay116, setla7Essay116] = useLocalStorageState("la7Essay116", "")
  // const [la7Essay117, setla7Essay117] = useLocalStorageState("la7Essay117", "")
  // const [la7Essay118, setla7Essay118] = useLocalStorageState("la7Essay118", "")
  // const [la7Essay119, setla7Essay119] = useLocalStorageState("la7Essay119", "")
  // const [la7Essay120, setla7Essay120] = useLocalStorageState("la7Essay120", "")
  // const [la7Essay121, setla7Essay121] = useLocalStorageState("la7Essay121", "")
  // const [la7Essay122, setla7Essay122] = useLocalStorageState("la7Essay122", "")
  // const [la7Essay123, setla7Essay123] = useLocalStorageState("la7Essay123", "")
  // const [la7Essay124, setla7Essay124] = useLocalStorageState("la7Essay124", "")
  // const [la7Essay125, setla7Essay125] = useLocalStorageState("la7Essay125", "")
  // const [la7Essay126, setla7Essay126] = useLocalStorageState("la7Essay126", "")
  // const [la7Essay127, setla7Essay127] = useLocalStorageState("la7Essay127", "")
  // const [la7Essay128, setla7Essay128] = useLocalStorageState("la7Essay128", "")
  // const [la7Essay129, setla7Essay129] = useLocalStorageState("la7Essay129", "")
  // const [la7Essay130, setla7Essay130] = useLocalStorageState("la7Essay130", "")
  // const [la7Essay131, setla7Essay131] = useLocalStorageState("la7Essay131", "")
  // const [la7Essay132, setla7Essay132] = useLocalStorageState("la7Essay132", "")
  // const [la7Essay133, setla7Essay133] = useLocalStorageState("la7Essay133", "")
  // const [la7Essay134, setla7Essay134] = useLocalStorageState("la7Essay134", "")
  // const [la7Essay135, setla7Essay135] = useLocalStorageState("la7Essay135", "")
  // const [la7Essay136, setla7Essay136] = useLocalStorageState("la7Essay136", "")
  // const [la7Essay137, setla7Essay137] = useLocalStorageState("la7Essay137", "")
  // const [la7Essay138, setla7Essay138] = useLocalStorageState("la7Essay138", "")
  // const [la7Essay139, setla7Essay139] = useLocalStorageState("la7Essay139", "")
  // const [la7Essay140, setla7Essay140] = useLocalStorageState("la7Essay140", "")
  // const [la7Essay141, setla7Essay141] = useLocalStorageState("la7Essay141", "")
  // const [la7Essay142, setla7Essay142] = useLocalStorageState("la7Essay142", "")
  // const [la7Essay143, setla7Essay143] = useLocalStorageState("la7Essay143", "")
  // const [la7Essay144, setla7Essay144] = useLocalStorageState("la7Essay144", "")
  // const [la7Essay145, setla7Essay145] = useLocalStorageState("la7Essay145", "")
  // const [la7Essay146, setla7Essay146] = useLocalStorageState("la7Essay146", "")
  // const [la7Essay147, setla7Essay147] = useLocalStorageState("la7Essay147", "")
  // const [la7Essay148, setla7Essay148] = useLocalStorageState("la7Essay148", "")
  // const [la7Essay149, setla7Essay149] = useLocalStorageState("la7Essay149", "")
  // const [la7Essay150, setla7Essay150] = useLocalStorageState("la7Essay150", "")
  // const [la7Essay151, setla7Essay151] = useLocalStorageState("la7Essay151", "")
  // const [la7Essay152, setla7Essay152] = useLocalStorageState("la7Essay152", "")
  // const [la7Essay153, setla7Essay153] = useLocalStorageState("la7Essay153", "")
  // const [la7Essay154, setla7Essay154] = useLocalStorageState("la7Essay154", "")
  // const [la7Essay155, setla7Essay155] = useLocalStorageState("la7Essay155", "")
  // const [la7Essay156, setla7Essay156] = useLocalStorageState("la7Essay156", "")
  // const [la7Essay157, setla7Essay157] = useLocalStorageState("la7Essay157", "")
  // const [la7Essay158, setla7Essay158] = useLocalStorageState("la7Essay158", "")
  // const [la7Essay159, setla7Essay159] = useLocalStorageState("la7Essay159", "")
  // const [la7Essay160, setla7Essay160] = useLocalStorageState("la7Essay160", "")
  // const [la7Essay161, setla7Essay161] = useLocalStorageState("la7Essay161", "")
  // const [la7Essay162, setla7Essay162] = useLocalStorageState("la7Essay162", "")
  // const [la7Essay163, setla7Essay163] = useLocalStorageState("la7Essay163", "")
  // const [la7Essay164, setla7Essay164] = useLocalStorageState("la7Essay164", "")
  // const [la7Essay165, setla7Essay165] = useLocalStorageState("la7Essay165", "")
  // const [la7Essay166, setla7Essay166] = useLocalStorageState("la7Essay166", "")
  // const [la7Essay167, setla7Essay167] = useLocalStorageState("la7Essay167", "")
  // const [la7Essay168, setla7Essay168] = useLocalStorageState("la7Essay168", "")
  // const [la7Essay169, setla7Essay169] = useLocalStorageState("la7Essay169", "")
  // const [la7Essay170, setla7Essay170] = useLocalStorageState("la7Essay170", "")
  // const [la7Essay171, setla7Essay171] = useLocalStorageState("la7Essay171", "")
  // const [la7Essay172, setla7Essay172] = useLocalStorageState("la7Essay172", "")
  // const [la7Essay173, setla7Essay173] = useLocalStorageState("la7Essay173", "")
  // const [la7Essay174, setla7Essay174] = useLocalStorageState("la7Essay174", "")
  // // const [la7Essay175, setla7Essay175] = useLocalStorageState("la7Essay175", "")
  // // const [la7Essay176, setla7Essay176] = useLocalStorageState("la7Essay176", "")
  // // const [la7Essay177, setla7Essay177] = useLocalStorageState("la7Essay177", "")
  // // const [la7Essay178, setla7Essay178] = useLocalStorageState("la7Essay178", "")
  // // const [la7Essay179, setla7Essay179] = useLocalStorageState("la7Essay179", "")
  // // const [la7Essay180, setla7Essay180] = useLocalStorageState("la7Essay180", "")
  //
  //
  const onChangela7Listener1 = (event) => {
    setla7Essay1(event.target.value)
  }
  const onChangela7Listener2 = (event) => {
    setla7Essay2(event.target.value)
  }
  const onChangela7Listener3 = (event) => {
    setla7Essay3(event.target.value)
  }
  const onChangela7Listener4 = (event) => {
    setla7Essay4(event.target.value)
  }
  const onChangela7Listener5 = (event) => {
    setla7Essay5(event.target.value)
  }
  const onChangela7Listener6 = (event) => {
    setla7Essay6(event.target.value)
  }
  const onChangela7Listener7 = (event) => {
    setla7Essay7(event.target.value)
  }
  const onChangela7Listener8 = (event) => {
    setla7Essay8(event.target.value)
  }
  const onChangela7Listener9 = (event) => {
    setla7Essay9(event.target.value)
  }
  const onChangela7Listener10 = (event) => {
    setla7Essay10(event.target.value)
  }
  const onChangela7Listener11 = (event) => {
    setla7Essay11(event.target.value)
  }
  const onChangela7Listener12 = (event) => {
    setla7Essay12(event.target.value)
  }
  const onChangela7Listener13 = (event) => {
    setla7Essay13(event.target.value)
  }
  const onChangela7Listener14 = (event) => {
    setla7Essay14(event.target.value)
  }
  const onChangela7Listener15 = (event) => {
    setla7Essay15(event.target.value)
  }
  const onChangela7Listener16 = (event) => {
    setla7Essay16(event.target.value)
  }
  const onChangela7Listener17 = (event) => {
    setla7Essay17(event.target.value)
  }
  const onChangela7Listener18 = (event) => {
    setla7Essay18(event.target.value)
  }
  const onChangela7Listener19 = (event) => {
    setla7Essay19(event.target.value)
  }
  const onChangela7Listener20 = (event) => {
    setla7Essay20(event.target.value)
  }
  const onChangela7Listener21 = (event) => {
    setla7Essay21(event.target.value)
  }
  const onChangela7Listener22 = (event) => {
    setla7Essay22(event.target.value)
  }
  const onChangela7Listener23 = (event) => {
    setla7Essay23(event.target.value)
  }
  const onChangela7Listener24 = (event) => {
    setla7Essay24(event.target.value)
  }
  const onChangela7Listener25 = (event) => {
    setla7Essay25(event.target.value)
  }
  const onChangela7Listener26 = (event) => {
    setla7Essay26(event.target.value)
  }
  const onChangela7Listener27 = (event) => {
    setla7Essay27(event.target.value)
  }
  const onChangela7Listener28 = (event) => {
    setla7Essay28(event.target.value)
  }
  const onChangela7Listener29 = (event) => {
    setla7Essay29(event.target.value)
  }
  const onChangela7Listener30 = (event) => {
    setla7Essay30(event.target.value)
  }
  const onChangela7Listener31 = (event) => {
    setla7Essay31(event.target.value)
  }
  const onChangela7Listener32 = (event) => {
    setla7Essay32(event.target.value)
  }
  const onChangela7Listener33 = (event) => {
    setla7Essay33(event.target.value)
  }
  const onChangela7Listener34 = (event) => {
    setla7Essay34(event.target.value)
  }
  const onChangela7Listener35 = (event) => {
    setla7Essay35(event.target.value)
  }
  const onChangela7Listener36 = (event) => {
    setla7Essay36(event.target.value)
  }
  const onChangela7Listener37 = (event) => {
    setla7Essay37(event.target.value)
  }
  const onChangela7Listener38 = (event) => {
    setla7Essay38(event.target.value)
  }
  const onChangela7Listener39 = (event) => {
    setla7Essay39(event.target.value)
  }
  const onChangela7Listener40 = (event) => {
    setla7Essay40(event.target.value)
  }
  const onChangela7Listener41 = (event) => {
    setla7Essay41(event.target.value)
  }
  const onChangela7Listener42 = (event) => {
    setla7Essay42(event.target.value)
  }
  const onChangela7Listener43 = (event) => {
    setla7Essay43(event.target.value)
  }
  const onChangela7Listener44 = (event) => {
    setla7Essay44(event.target.value)
  }
  const onChangela7Listener45 = (event) => {
    setla7Essay45(event.target.value)
  }
  const onChangela7Listener46 = (event) => {
    setla7Essay46(event.target.value)
  }
  const onChangela7Listener47 = (event) => {
    setla7Essay47(event.target.value)
  }
  const onChangela7Listener48 = (event) => {
    setla7Essay48(event.target.value)
  }
  const onChangela7Listener49 = (event) => {
    setla7Essay49(event.target.value)
  }
  const onChangela7Listener50 = (event) => {
    setla7Essay50(event.target.value)
  }
  const onChangela7Listener51 = (event) => {
    setla7Essay51(event.target.value)
  }
  const onChangela7Listener52 = (event) => {
    setla7Essay52(event.target.value)
  }
  const onChangela7Listener53 = (event) => {
    setla7Essay53(event.target.value)
  }
  const onChangela7Listener54 = (event) => {
    setla7Essay54(event.target.value)
  }
  const onChangela7Listener55 = (event) => {
    setla7Essay55(event.target.value)
  }
  const onChangela7Listener56 = (event) => {
    setla7Essay56(event.target.value)
  }
  const onChangela7Listener57 = (event) => {
    setla7Essay57(event.target.value)
  }
  const onChangela7Listener58 = (event) => {
    setla7Essay58(event.target.value)
  }
  const onChangela7Listener59 = (event) => {
    setla7Essay59(event.target.value)
  }
  const onChangela7Listener60 = (event) => {
    setla7Essay60(event.target.value)
  }
  const onChangela7Listener61 = (event) => {
    setla7Essay61(event.target.value)
  }
  const onChangela7Listener62 = (event) => {
    setla7Essay62(event.target.value)
  }
  const onChangela7Listener63 = (event) => {
    setla7Essay63(event.target.value)
  }
  const onChangela7Listener64 = (event) => {
    setla7Essay64(event.target.value)
  }
  const onChangela7Listener65 = (event) => {
    setla7Essay65(event.target.value)
  }
  const onChangela7Listener66 = (event) => {
    setla7Essay66(event.target.value)
  }
  const onChangela7Listener67 = (event) => {
    setla7Essay67(event.target.value)
  }
  const onChangela7Listener68 = (event) => {
    setla7Essay68(event.target.value)
  }
  const onChangela7Listener69 = (event) => {
    setla7Essay69(event.target.value)
  }
  const onChangela7Listener70 = (event) => {
    setla7Essay70(event.target.value)
  }
  const onChangela7Listener71 = (event) => {
    setla7Essay71(event.target.value)
  }
  const onChangela7Listener72 = (event) => {
    setla7Essay72(event.target.value)
  }
  const onChangela7Listener73 = (event) => {
    setla7Essay73(event.target.value)
  }
  const onChangela7Listener74 = (event) => {
    setla7Essay74(event.target.value)
  }
  const onChangela7Listener75 = (event) => {
    setla7Essay75(event.target.value)
  }
  const onChangela7Listener76 = (event) => {
    setla7Essay76(event.target.value)
  }
  const onChangela7Listener77 = (event) => {
    setla7Essay77(event.target.value)
  }
  const onChangela7Listener78 = (event) => {
    setla7Essay78(event.target.value)
  }
  const onChangela7Listener79 = (event) => {
    setla7Essay79(event.target.value)
  }
  const onChangela7Listener80 = (event) => {
    setla7Essay80(event.target.value)
  }
  const onChangela7Listener81 = (event) => {
    setla7Essay81(event.target.value)
  }
  const onChangela7Listener82 = (event) => {
    setla7Essay82(event.target.value)
  }
  const onChangela7Listener83 = (event) => {
    setla7Essay83(event.target.value)
  }
  const onChangela7Listener84 = (event) => {
    setla7Essay84(event.target.value)
  }
  const onChangela7Listener85 = (event) => {
    setla7Essay85(event.target.value)
  }
  const onChangela7Listener86 = (event) => {
    setla7Essay86(event.target.value)
  }
  const onChangela7Listener87 = (event) => {
    setla7Essay87(event.target.value)
  }
  const onChangela7Listener88 = (event) => {
    setla7Essay88(event.target.value)
  }
  const onChangela7Listener89 = (event) => {
    setla7Essay89(event.target.value)
  }
  const onChangela7Listener90 = (event) => {
    setla7Essay90(event.target.value)
  }
  const onChangela7Listener91 = (event) => {
    setla7Essay91(event.target.value)
  }
  const onChangela7Listener92 = (event) => {
    setla7Essay92(event.target.value)
  }
  const onChangela7Listener93 = (event) => {
    setla7Essay93(event.target.value)
  }
  const onChangela7Listener94 = (event) => {
    setla7Essay94(event.target.value)
  }
  const onChangela7Listener95 = (event) => {
    setla7Essay95(event.target.value)
  }
  const onChangela7Listener96 = (event) => {
    setla7Essay96(event.target.value)
  }
  const onChangela7Listener97 = (event) => {
    setla7Essay97(event.target.value)
  }
  const onChangela7Listener98 = (event) => {
    setla7Essay98(event.target.value)
  }
  const onChangela7Listener99 = (event) => {
    setla7Essay99(event.target.value)
  }
  const onChangela7Listener100 = (event) => {
    setla7Essay100(event.target.value)
  }
  // const onChangela7Listener101 = (event) => {
  //   setla7Essay101(event.target.value)
  // }
  // const onChangela7Listener102 = (event) => {
  //   setla7Essay102(event.target.value)
  // }
  // const onChangela7Listener103 = (event) => {
  //   setla7Essay103(event.target.value)
  // }
  // const onChangela7Listener104 = (event) => {
  //   setla7Essay104(event.target.value)
  // }
  // const onChangela7Listener105 = (event) => {
  //   setla7Essay105(event.target.value)
  // }
  // const onChangela7Listener106 = (event) => {
  //   setla7Essay106(event.target.value)
  // }
  // const onChangela7Listener107 = (event) => {
  //   setla7Essay107(event.target.value)
  // }
  // const onChangela7Listener108 = (event) => {
  //   setla7Essay108(event.target.value)
  // }
  // const onChangela7Listener109 = (event) => {
  //   setla7Essay109(event.target.value)
  // }
  // const onChangela7Listener110 = (event) => {
  //   setla7Essay110(event.target.value)
  // }
  // const onChangela7Listener111 = (event) => {
  //   setla7Essay111(event.target.value)
  // }
  // const onChangela7Listener112 = (event) => {
  //   setla7Essay112(event.target.value)
  // }
  // const onChangela7Listener113 = (event) => {
  //   setla7Essay113(event.target.value)
  // }
  // const onChangela7Listener114 = (event) => {
  //   setla7Essay114(event.target.value)
  // }
  // const onChangela7Listener115 = (event) => {
  //   setla7Essay115(event.target.value)
  // }
  // const onChangela7Listener116 = (event) => {
  //   setla7Essay116(event.target.value)
  // }
  // const onChangela7Listener117 = (event) => {
  //   setla7Essay117(event.target.value)
  // }
  // const onChangela7Listener118 = (event) => {
  //   setla7Essay118(event.target.value)
  // }
  // const onChangela7Listener119 = (event) => {
  //   setla7Essay119(event.target.value)
  // }
  // const onChangela7Listener120 = (event) => {
  //   setla7Essay120(event.target.value)
  // }
  // const onChangela7Listener121 = (event) => {
  //   setla7Essay121(event.target.value)
  // }
  // const onChangela7Listener122 = (event) => {
  //   setla7Essay122(event.target.value)
  // }
  // const onChangela7Listener123 = (event) => {
  //   setla7Essay123(event.target.value)
  // }
  // const onChangela7Listener124 = (event) => {
  //   setla7Essay124(event.target.value)
  // }
  // const onChangela7Listener125 = (event) => {
  //   setla7Essay125(event.target.value)
  // }
  // const onChangela7Listener126 = (event) => {
  //   setla7Essay126(event.target.value)
  // }
  // const onChangela7Listener127 = (event) => {
  //   setla7Essay127(event.target.value)
  // }
  // const onChangela7Listener128 = (event) => {
  //   setla7Essay128(event.target.value)
  // }
  // const onChangela7Listener129 = (event) => {
  //   setla7Essay129(event.target.value)
  // }
  // const onChangela7Listener130 = (event) => {
  //   setla7Essay130(event.target.value)
  // }
  // const onChangela7Listener131 = (event) => {
  //   setla7Essay131(event.target.value)
  // }
  // const onChangela7Listener132 = (event) => {
  //   setla7Essay132(event.target.value)
  // }
  // const onChangela7Listener133 = (event) => {
  //   setla7Essay133(event.target.value)
  // }
  // const onChangela7Listener134 = (event) => {
  //   setla7Essay134(event.target.value)
  // }
  // const onChangela7Listener135 = (event) => {
  //   setla7Essay135(event.target.value)
  // }
  // const onChangela7Listener136 = (event) => {
  //   setla7Essay136(event.target.value)
  // }
  // const onChangela7Listener137 = (event) => {
  //   setla7Essay137(event.target.value)
  // }
  // const onChangela7Listener138 = (event) => {
  //   setla7Essay138(event.target.value)
  // }
  // const onChangela7Listener139 = (event) => {
  //   setla7Essay139(event.target.value)
  // }
  // const onChangela7Listener140 = (event) => {
  //   setla7Essay140(event.target.value)
  // }
  // const onChangela7Listener141 = (event) => {
  //   setla7Essay141(event.target.value)
  // }
  // const onChangela7Listener142 = (event) => {
  //   setla7Essay142(event.target.value)
  // }
  // const onChangela7Listener143 = (event) => {
  //   setla7Essay143(event.target.value)
  // }
  // const onChangela7Listener144 = (event) => {
  //   setla7Essay144(event.target.value)
  // }
  // const onChangela7Listener145 = (event) => {
  //   setla7Essay145(event.target.value)
  // }
  // const onChangela7Listener146 = (event) => {
  //   setla7Essay146(event.target.value)
  // }
  // const onChangela7Listener147 = (event) => {
  //   setla7Essay147(event.target.value)
  // }
  // const onChangela7Listener148 = (event) => {
  //   setla7Essay148(event.target.value)
  // }
  // const onChangela7Listener149 = (event) => {
  //   setla7Essay149(event.target.value)
  // }
  // const onChangela7Listener150 = (event) => {
  //   setla7Essay150(event.target.value)
  // }
  // const onChangela7Listener151 = (event) => {
  //   setla7Essay151(event.target.value)
  // }
  // const onChangela7Listener152 = (event) => {
  //   setla7Essay152(event.target.value)
  // }
  // const onChangela7Listener153 = (event) => {
  //   setla7Essay153(event.target.value)
  // }
  // const onChangela7Listener154 = (event) => {
  //   setla7Essay154(event.target.value)
  // }
  // const onChangela7Listener155 = (event) => {
  //   setla7Essay155(event.target.value)
  // }
  // const onChangela7Listener156 = (event) => {
  //   setla7Essay156(event.target.value)
  // }
  // const onChangela7Listener157 = (event) => {
  //   setla7Essay157(event.target.value)
  // }
  // const onChangela7Listener158 = (event) => {
  //   setla7Essay158(event.target.value)
  // }
  // const onChangela7Listener159 = (event) => {
  //   setla7Essay159(event.target.value)
  // }
  // const onChangela7Listener160 = (event) => {
  //   setla7Essay160(event.target.value)
  // }
  // const onChangela7Listener161 = (event) => {
  //   setla7Essay161(event.target.value)
  // }
  // const onChangela7Listener162 = (event) => {
  //   setla7Essay162(event.target.value)
  // }
  // const onChangela7Listener163 = (event) => {
  //   setla7Essay163(event.target.value)
  // }
  // const onChangela7Listener164 = (event) => {
  //   setla7Essay164(event.target.value)
  // }
  // const onChangela7Listener165 = (event) => {
  //   setla7Essay165(event.target.value)
  // }
  // const onChangela7Listener166 = (event) => {
  //   setla7Essay166(event.target.value)
  // }
  // const onChangela7Listener167 = (event) => {
  //   setla7Essay167(event.target.value)
  // }
  // const onChangela7Listener168 = (event) => {
  //   setla7Essay168(event.target.value)
  // }
  // const onChangela7Listener169 = (event) => {
  //   setla7Essay169(event.target.value)
  // }
  // const onChangela7Listener170 = (event) => {
  //   setla7Essay170(event.target.value)
  // }
  // const onChangela7Listener171 = (event) => {
  //   setla7Essay171(event.target.value)
  // }
  // const onChangela7Listener172 = (event) => {
  //   setla7Essay172(event.target.value)
  // }
  // const onChangela7Listener173 = (event) => {
  //   setla7Essay173(event.target.value)
  // }
  // const onChangela7Listener174 = (event) => {
  //   setla7Essay174(event.target.value)
  // }
  // const onChangela7Listener175 = (event) => {
  //   setla7Essay175(event.target.value)
  // }
  // const onChangela7Listener176 = (event) => {
  //   setla7Essay176(event.target.value)
  // }
  // const onChangela7Listener177 = (event) => {
  //   setla7Essay177(event.target.value)
  // }
  // const onChangela7Listener178 = (event) => {
  //   setla7Essay178(event.target.value)
  // }
  // const onChangela7Listener179 = (event) => {
  //   setla7Essay179(event.target.value)
  // }
  // const onChangela7Listener180 = (event) => {
  //   setla7Essay180(event.target.value)
  // }

  return (
    <form>
      <section className="section raise-top">
        <div className="section-content">
          <h1 className="section-title">Daily Lessons</h1>
          <span className="days">Books</span>
          <p className="margin-para">The books required for this course are: <i>The Little Prince </i> by Antoine de
            Saint Exupéry, <i> Long Walk to Water </i> by Linda Sue Park, <i> Hatchett </i> by Gary
            Paulsen, and <i> Esperanza Rising </i> by Pam Muñoz.
            Until you get a copy, the first chapter of each book is linked as a PDF. The novels are available at
            your local library, local bookstore, or can be purchased online. If the books are out of copyright, they
            are provided below as PDFs. </p>

          <span className="days">LESSON 1 </span>
          <p className="margin-para"> The first book you will read for this course is <a
            href={require("../resources/books/TheLittlePrince.pdf")} rel="noreferrer" target="_blank"> <i>The
            Little Prince.</i> </a> The full book is available <a
            href={require("../resources/books/TheLittlePrince.pdf")}
            rel="noreferrer" target="_blank"> here as a PDF. </a> If you
            prefer a hard copy, it is available at your local library, local bookstore, and can be purchased online.
          </p>
          <p className="topBottom"> The Little Prince is a fable and modern classic by French aviator and writer Antoine
            de Saint-Exupéry, published in 1943. The tale tells the story of a child, the little prince, who travels the
            universe gaining wisdom. </p>

          <img src={require("../../public/images/bookCovers/littlePrince.jpg")} alt="The Alchemist novel"/><br/>
          <p>After you watch the video below, read <a href={require("../resources/books/TheLittlePrince.pdf")}
                                                      rel="noreferrer"
                                                      target="_blank">CHAPTER 1 of <i> The Little Prince. </i> </a> Then
            answer the questions posted below.
          </p>
          <Video videoUrl="https://www.youtube.com/embed/9gARHWfXE40"/>
          <p>
            <ol className="vocab">
              <li>Who is the narrator of The Little Prince and what type of narration is used? Example: 1st person, 2nd
                person, etc.
              </li>
              <li>What year was this novel written?</li>
              <li>What did the narrator once draw?</li>
              <li>What did the adults think the child’s drawing looked like?</li>
              <li>What did the child ask the adults when he showed them the picture?</li>
              <li>How many drawings did the child make?</li>
              <li>What career did the narrator give up in order to become a pilot?</li>
              <li>The pilot tells us that throughout his life, when he met a clear-sighted adult he would always show
                them
                what?
              </li>
              <li>What does the narrator think of adults?</li>
              <li> What should a person who flies planes study, according to the narrator?</li>
              <li>How old was the narrator of this book when he gave up his magnificent painting career?</li>
              <li>The pilot (as a child) drew an animal eating another animal. What was being eaten?</li>
            </ol>
            <h4>Vocabulary</h4> For each vocabulary word below, write a definition and then write a sentence using the
            word. Below is an example.<br/>
            <ol className="vocab">
              <li>indulgence: <i style={{ color: "#4f5979" }}> the act of doing something that you enjoy but that is
                usually thought of as wrong or
                unhealthy. "Chocolate is my only indulgence."</i>
              </li>
              <li>dedicate</li>
              <li>magnificent</li>
            </ol>
          </p>
          <textarea className="textArea"
                    placeholder="Be sure to back up your work and send it to your teacher or parent. Depending on your device you can right click on your work and share via email or click on Print to save as a PDF."
                    onChange={onChangela7Listener1} value={la7Essay1}/>

          <span className="days">LESSON 2 </span>
          <p className="topBottom"> Read <a href={require("../resources/books/TheLittlePrince.pdf")} rel="noreferrer"
                                            target="_blank">Chapter 2 of <i>The Little Prince. </i> </a> Then answer the
            questions below.</p>
          <Video videoUrl="https://www.youtube.com/embed/FGAtsGgyzw4"/>
          <p>
            <ol className="vocab">
              <li>What is the setting or where does the plane crash happen?</li>
              <li>The morning after the plane crash, who does the pilot meet?</li>
              <li>How does the reader know that the little prince is an alien?</li>
              <li>What does the little prince ask the pilot to draw?</li>
              <li>What is the first picture that the narrator actually draws for the little prince?</li>
              <li>The pilot has to make quite a few drawings before the little prince is satisfied. What picture
                Does he like?
              </li>
              <li>Which picture is the little prince most pleased with? A</li>
              <li>After the plane crash, what does the pilot do?</li>
              <li>Why did the pilot get angry with the little prince?</li>
              <li>How far are the pilot and the little prince from civilization?</li>
              <li>When the pilot and the little prince first meet, what time of day is it?</li>
              <li>Describe how you like or don’t like the novel so far.</li>
            </ol>
            <h4>Vocabulary</h4> For each vocabulary word below, write a definition and then write a sentence using the
            word.<br/>
            <ol className="vocab">
              <li>primeval</li>
              <li>ponder</li>
              <li>adventure</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener2} value={la7Essay2}/>

          <span className="days">LESSON 3 </span>
          <p className="topBottom"> Read <a href={require("../resources/books/TheLittlePrince.pdf")} rel="noreferrer"
                                            target="_blank">Chapters 3 and 4 of <i>The Little Prince. </i> </a> Then
            answer the questions below.</p>
          <p>
            <ol className="vocab">
              <li>When the little prince sees the airplane for the first time, what does he say?</li>
              <li>How does the little prince reveal that he might be from another planet?</li>
              <li>What does the pilot give the little prince that the little prince treasures and puts in his pocket for
                safe keeping?
              </li>
              <li>Compare the size of the little prince’s planet to the size of earth.</li>
              <li>Why is it hard to learn where the little prince came from?</li>
              <li>Why does the little prince like the drawing of the box?</li>
              <li>Why does the little prince laugh at the notion of the airplane falling from the sky?</li>
              <li>Why does the pilot decide not to draw his airplane in the book?</li>
              <li>Describe the little prince. How do you like the little prince so far?</li>
              <li>Why does the laughter of the little prince annoy the pilot so much?</li>
              <li>The little prince is proud of his flower. What is the pilot proud of?</li>
              <li>What size is the little prince’s planet? How big is it in comparison to Earth?</li>
              <li>What name does a human scholar give the little prince’s planet?</li>
              <li>What name did a Turkish scholar give to the little prince’s planet?</li>
              <li>The pilot believe grownups are mostly interested in what?</li>
              <li>What does the little prince inspire the pilot to start doing again after they becomes?</li>
            </ol>
            <h4>Vocabulary</h4> For each vocabulary word below, write a definition and then write a sentence using the
            word.<br/>
            <ol className="vocab">
              <li>masterpiece</li>
              <li>disheartened</li>
              <li>distinguish</li>
              <li>encounter</li>
              <li>consequence</li>
              <li>scarcely</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener3} value={la7Essay3}/>

          <span className="days">LESSON 4 </span>
          <p className="topBottom"> Read <a href={require("../resources/books/TheLittlePrince.pdf")} rel="noreferrer"
                                            target="_blank">Chapters 5 and 6 of <i>The Little Prince. </i> </a> Then
            answer the questions below.</p>
          <p>
            <ol className="vocab">
              <li>Describe what a Baobab tree looks like.</li>
              <li>How are these trees putting the little prince’s planet in danger?</li>
              <li>What is the little prince’s plan to safeguard his planet from baobabs?</li>
              <li>There is one drawing that the pilot is very proud of. Which one is it?</li>
              <li>Explain the good and bad seeds on the little prince’s planet. What do you think good and bad seeds
                symbolize?
              </li>
              <li>Why does the little prince weed his planet every morning?</li>
              <li>What is wrong with the soil on the little prince’s planet?</li>
              <li>What does the little prince love to always watch? Why do you think this is?</li>
              <li>How many times in one day does the sun set on the little prince’s planet?</li>
              <li>How did the little prince increase the number of sunsets he saw every day?</li>
              <li>How does the little prince feel most of the time? How does this compare to the pilot?</li>
              <li>The author wrote The Little Prince during WWII when Germany took over France. Because of this, he
                moved from France to New York. What do you think France symbolizes in this chapter?
              </li>
            </ol>
            <h4>Vocabulary</h4> For each vocabulary word below, write a definition and then write a sentence using the
            word.<br/>
            <ol className="vocab">
              <li>thunderstruck</li>
              <li>apparition</li>
              <li>astonishment</li>
              <li>inhabit</li>
              <li>astound</li>
              <li>acquaintance</li>
            </ol>
          </p>

          <textarea className="textArea" onChange={onChangela7Listener4} value={la7Essay4}/>

          <span className="days">LESSON 5 </span>
          <p className="topBottom"> Read <a href={require("../resources/books/TheLittlePrince.pdf")} rel="noreferrer"
                                            target="_blank">Chapters 7 and 8 of <i>The Little Prince. </i> </a> Then
            answer the questions below.</p>
          <p>
            <ol className="vocab">
              <li>In the desert, what is the pilot’s primary worry?</li>
              <li>What is the tone of the story?</li>
              <li>What does the pilot work on so he can get out of the desert?</li>
              <li>Why does the little prince become enraged at the pilot?</li>
              <li>At one point, the little prince is afraid. Why?</li>
              <li>What does the little prince call the red-faced gentleman who is the businessman?</li>
              <li>What is The Land of Tears?</li>
              <li>On the fifth day that the pilot and the little prince are together, the secret of the little
                prince’s
              </li>
              <li>What time of day does the rose first bloom?</li>
              <li>Describe the duties the little prince performs for the rose. Why do you think he does this?</li>
              <li>How many thorns does the prince’s unique flower have?</li>
              <li>How many petals do the ordinary flowers on the prince’s planet have?</li>
              <li>Describe the rose’s personality. Would you describe her as kind? Why or why not?</li>
              <li>What is the rose afraid of?</li>
            </ol>
            <h4>Vocabulary</h4> For each vocabulary word below, write a definition and then write a sentence using the
            word.<br/>
            <ol className=" vocab">
              <li>impenetrable</li>
              <li>abruptly</li>
              <li>reverie</li>
              <li>contemplation</li>
              <li>earnestly</li>
              <li>astronomical</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener5} value={la7Essay5}/>

          <span className="days">LESSON 6 </span>
          <p className="topBottom"> Read <a href={require("../resources/books/TheLittlePrince.pdf")} rel="noreferrer"
                                            target="_blank">Chapters 9 and 10 of <i>The Little Prince. </i> </a> Then
            answer the questions below.</p>
          <p>
            <ol className="vocab">
              <li>How does the little prince cook his breakfast on his planet?</li>
              <li>Why does the little prince want to leave his planet? What does the rose have to do with his
                decision?
              </li>
              <li>When the rose realizes the little prince is leaving, what does she ask for?</li>
              <li>Why did the rose say she did not need the glass globe anymore?</li>
              <li>Why is the flower not afraid of large animals?</li>
              <li>The little prince wants to go on a journey to discover the meaning of life and find some answers about
                the rose. How is he planning on finding these answers?
              </li>
              <li>When the little prince leaves his planet, does he plan to ever return? Why do you think this is?</li>
              <li>What do you think this chapter says about adults?</li>
              <li>How many asteroid planets does the little prince visit in total? Do they have regular names?</li>
              <li>What does the king of the first asteroid planet the prince visits call the prince?</li>
              <li>On the first asteroid planet he visits, why can’t the prince sit down?</li>
              <li>What does the king of the first asteroid planet the prince visits believe he rules over?</li>
              <li>How does the king react when he discovers that the little prince wants to leave?</li>
              <li>What is the little prince’s opinion of the king?</li>
            </ol>
            <h4>Vocabulary</h4> For each vocabulary word below, write a definition and then write a sentence using the
            word.<br/>
            <ol className=" vocab">
              <li>essential</li>
              <li>obliged</li>
              <li>infest</li>
              <li>distinguished</li>
              <li>tedious</li>
              <li>twilight</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener6} value={la7Essay6}/>

          <span className="days">LESSON 7 </span>
          <p className="topBottom"> Read <a href={require("../resources/books/TheLittlePrince.pdf")} rel="noreferrer"
                                            target="_blank">Chapters 11 and 12 of <i>The Little Prince. </i> </a> Then
            answer the questions below.</p>
          <p>
            <ol className="vocab">
              <li>Describe the conceited man. What does he want the little prince to do?</li>
              <li>What does the conceited man want to be admired as?</li>
              <li>How does the little prince feel about the conceited man?</li>
              <li>How long is the little prince willing to applaud the conceited man?</li>
              <li>What does the conceited man use his hat for?</li>
              <li>Why do you suppose the conceited man is so shallow?</li>
              <li>How many people live on the conceited man’s planet?</li>
              <li>How adults are depicted in this chapter?</li>
              <li>Why does the tippler drink? Is this ironic? Why or why not.</li>
              <li>What is the tippler surrounded by?</li>
              <li>What explains why he doesn’t make much sense to the little prince?</li>
              <li>Is the tippler ashamed of something? Explain.</li>
              <li>What is another word that the translator might have used instead of tippler?</li>
              <li>The visit to the planet of the tippler plunged the little prince into what?</li>
              <li>What do you think this chapter is trying to say about adults?</li>
              <li>What is the conflict in the story the prince is trying to work out?</li>
            </ol>
            <h4>Vocabulary</h4> For each vocabulary word below, write a definition and then write a sentence using the
            word.<br/>
            <ol className=" vocab">
              <li>meditation</li>
              <li>spite</li>
              <li>naive</li>
              <li>rage</li>
              <li>blunder</li>
              <li>radiance</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener7} value={la7Essay7}/>

          <span className="days">LESSON 8 </span>
          <p className="topBottom"> Read <a href={require("../resources/books/TheLittlePrince.pdf")} rel="noreferrer"
                                            target="_blank">Chapters 13 and 14 of <i>The Little Prince. </i> </a> Then
            answer the questions below.</p>
          <p>
            <ol className="vocab">
              <li>What is the businessman doing when the prince first comes across him? Why do you suppose he is doing
                this?
              </li>
              <li>What does the little prince point out to the businessman when he first meets him?</li>
              <li>What does the businessman believe he owns? Why do you think he believes this?</li>
              <li>The little prince is not impressed with what the businessman owns. Why is this?</li>
              <li>What does the little prince tell the businessman he owns?</li>
              <li>How many times in 54 years has the businessman been disturbed?</li>
              <li>What does the businessman symbolize and what do you think this chapter says about adults?</li>
              <li>What is unique about the fifth planet, the lamplighter’s planet? How does it compare to the other
                planets?
              </li>
              <li>What is on the lamplighter’s planet?</li>
              <li>The lamplighter says a day on his planet is how long?</li>
              <li>How many strides does it take to circle his planet?</li>
              <li>Of all the people the little prince meets on the asteroids, which one does he think he could be
                friends with?
              </li>
              <li>What does the lamplighter love to do most, which he is never able to do?</li>
              <li>Does the little prince feel differently about the lamplighter than he does for other adults?
                Explain.
              </li>
              <li>What does the lamplighter symbolize?</li>
            </ol>
            <h4>Vocabulary</h4> For each vocabulary word below, write a definition and then write a sentence using the
            word.<br/>
            <ol className=" vocab">
              <li>coquettish</li>
              <li>painstaking</li>
              <li>abashed</li>
              <li>verge</li>
              <li>remorse</li>
              <li>inseparable</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener8} value={la7Essay8}/>

          <span className="days">LESSON 9 </span>
          <p className="topBottom"> Read <a href={require("../resources/books/TheLittlePrince.pdf")} rel="noreferrer"
                                            target="_blank">Chapters 15 and 16 of <i>The Little Prince. </i> </a> Then
            answer the questions below.</p>
          <p>
            <ol className="vocab">
              <li>How would the geographer best be described? What knowledge does he have? The</li>
              <li>What does the little prince think is so odd about the geographer? What is ironic about what the
                geographer knows and does not know? Explain.
              </li>
              <li>Why does the geographer think someone who drinks too much is not a reliable source?</li>
              <li>Why does the geographer refuse to record the little prince’s flower?</li>
              <li>Define ephemeral. How does the geographer define ephemeral?</li>
              <li>Where does the geographer advise the little prince to visit next?</li>
              <li>What does the geographer symbolize? What does he represent about adults?</li>
              <li>What is the tone of chapter 16 (ex. gloomy, upbeat, etc.) ?</li>
              <li>About how many people does the pilot say live on the earth?</li>
              <li>What does the army of lamplighters on earth get compared to?</li>
              <li>Which does the pilot say there are more of on earth, geographers or conceited men?</li>
              <li>How many kings are on earth, according to the pilot?</li>
              <li>There would be two lamplighters who would be able to rest for most of the year. Where do
                they live?
              </li>
            </ol>
            <h4>Vocabulary</h4> For each vocabulary word below, write a definition and then write a sentence using the
            word.<br/>
            <ol className="vocab">
              <li>inconsistent</li>
              <li>migration</li>
              <li>dejection</li>
              <li>clad</li>
              <li>majestic</li>
              <li>consuming</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener9} value={la7Essay9}/>

          <span className="days">LESSON 10 </span>
          <p className="topBottom"> Read <a href={require("../resources/books/TheLittlePrince.pdf")} rel="noreferrer"
                                            target="_blank">Chapters 17 and 18 of <i>The Little Prince. </i> </a> Then
            answer the questions below.</p>
          <p>
            <ol className="vocab">
              <li>If all humanity were to stand upright and crowd together how much space would they take up,
                according to Chapter XVII?
              </li>
              <li>When the little prince arrives on the earth, why doesn’t he see ant people?</li>
              <li>What is the first creature the little prince meets on earth?</li>
              <li>How does the little prince feel when he first arrives on the earth?</li>
              <li>What does the first creature the prince meets on earth say he is more powerful than?</li>
              <li>What does the first creature the prince meets on earth offer the little prince?</li>
              <li>After arriving on the earth and meeting his first earth creature, what does the little prince do?</li>
              <li>Describe the flower which the little prince meets in the desert.</li>
              <li>What does the flower in the desert know of men?</li>
              <li>How many men does the flower think there are on earth?</li>
              <li>Why does the flower in the desert think men are hard to find?</li>
              <li>How many flowers does the little prince meet in the desert?</li>
            </ol>
            <h4>Vocabulary</h4> For each vocabulary word below, write a definition and then write a sentence using the
            word.<br/>
            <ol className="vocab">
              <li>obstruct</li>
              <li>etiquette</li>
              <li>monarch</li>
              <li>vexed</li>
              <li>absolute</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener10} value={la7Essay10}/>

          <span className="days">LESSON 11 </span>
          <p className="topBottom"> Read <a href={require("../resources/books/TheLittlePrince.pdf")} rel="noreferrer"
                                            target="_blank">Chapters 19 and 20 of <i>The Little Prince. </i> </a> Then
            answer the questions below.</p>
          <p>
            <ol className="vocab">
              <li>When the little prince emerges from the desert, where does he go?</li>
              <li>On his own planet, what does the little prince use the extinct volcano for?</li>
              <li>When the little prince is up on the high peak in Chapter XIX, who does he speak with?</li>
              <li>What does the little prince hope to see from the high peak in Chapter XIX?</li>
              <li>From his perch on the mountain, what does the little prince think of the world?</li>
              <li>On the little prince’s planet, who would speak first, himself or his flower?</li>
              <li>The little prince walks through sand, rock and snow and at last comes to a road. Where does the road
                lead them?
              </li>
              <li>The little prince discovers a rose garden. What is it about this rose garden that makes him so sad?
              </li>
              <li>How many roses are in the garden that the little prince discovers?</li>
              <li>In the rose garden, the little prince has to face a difficult fact about himself. What is it?</li>
              <li>What do the flowers in the rose garden remind him of?</li>
              <li>In the rose garden, when the little prince realizes the truth of his life and of the things he loves,
                what does he do?
              </li>
            </ol>
            <h4>Vocabulary</h4> For each vocabulary word below, write a definition and then write a sentence using the
            word.<br/>
            <ol className="vocab">
              <li>timid</li>
              <li>hasten</li>
              <li>simplicity</li>
              <li>universal</li>
              <li>insubordination</li>
              <li>forsake</li>
              <li>obedience</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener11} value={la7Essay11}/>

          <span className="days">LESSON 12 </span>
          <p className="topBottom"> Read <a href={require("../resources/books/TheLittlePrince.pdf")} rel="noreferrer"
                                            target="_blank">Chapters 21 and 22 of <i>The Little Prince. </i> </a> Then
            answer the questions below.</p>
          <p>
            <ol className="vocab">
              <li>Where does the little prince find the fox?</li>
              <li>The little prince wants the fox to play with him. What does the fox say?</li>
              <li>What does the little prince tell the fox he is looking for?</li>
              <li>How does the fox define the word "tame"?</li>
              <li>Why is the fox so interested in the little prince’s planet?</li>
              <li>Why does the fox want to be tamed?</li>
              <li>What do you think the fox symbolizes?</li>
              <li>What is the job of the railway switchman?</li>
              <li>What does the railway switchmen think of children?</li>
              <li>According to the switchman, what are the adults in the trains pursuing?</li>
              <li>When the little prince watches the trains, he remembers something the fox said. What does he
                remember?
              </li>
              <li>What do the children on the trains waste their time over?</li>
              <li>How does the author use light imagery in the chapter about trains?</li>
            </ol>
            <h4>Vocabulary</h4> For each vocabulary word below, write a definition and then write a sentence using the
            word.<br/>
            <ol className="vocab">
              <li>almanac</li>
              <li>ambassador</li>
              <li>acclaim</li>
              <li>monotony</li>
              <li>lugubrious</li>
              <li>balderdash</li>
              <li>giddy</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener12} value={la7Essay12}/>

          <span className="days">LESSON 13 </span>
          <p className="topBottom"> Read <a href={require("../resources/books/TheLittlePrince.pdf")} rel="noreferrer"
                                            target="_blank">Chapters 23 and 24 of <i>The Little Prince. </i> </a> Then
            answer the questions below.</p>
          <p>
            <ol className="vocab">
              <li>How many thirst-quenching pills would one need in order to feel full of liquid?</li>
              <li>What is the selling point which the pill merchant offers the little prince?</li>
              <li>How much time per week can a person save by taking the thirst quenching pills?</li>
              <li>Who does the allegorical character of the pill merchant represent (what does he symbolize)?</li>
              <li>The imagery of water is used in The Little Prince to represent the life-giving force, whether it</li>
              <li>is physical or spiritual. What then does this thirst-quenching pill represent?</li>
              <li>Is the little prince interested in buying the pills?</li>
              <li>How many days have the pilot and little prince been together when the pilot drinks the last of</li>
              <li>his water supply?</li>
              <li>Who is dying of thirst in the desert?</li>
              <li>What does the little prince decide that they should look for to quench their thirst?</li>
              <li>Night falls and the pilot and little prince are walking in the dark. What do they think of the</li>
              <li>desert in the moonlight?</li>
              <li>What does the little prince believe that the desert hides?</li>
              <li>What moves the pilot so much about the little prince whom he carries in his arms across the
                dark desert?
              </li>
            </ol>
            <h4>Vocabulary</h4> After you watch the video, for each vocabulary word below, write a SYNONYM
            for it.<br/>
            <Video videoUrl="https://www.youtube.com/embed/thf0XGOXE6w?list=PLvJNSf-7NfrMYswXp-E4UFPStmLlzy0QH"/>
            <ol className="vocab">
              <li>rheumatism</li>
              <li>retort</li>
              <li>scorn</li>
              <li>voluminous</li>
              <li>intoxicate</li>
              <li>eternal</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener13} value={la7Essay13}/>

          <span className="days">LESSON 14 </span>
          <p className="topBottom"> Read <a href={require("../resources/books/TheLittlePrince.pdf")} rel="noreferrer"
                                            target="_blank">Chapters 25 and 26 of <i>The Little Prince. </i> </a> Then
            answer the questions below.</p>
          <p>
            <ol className="vocab">
              <li>At what time of day does the pilot find the well?</li>
              <li>Why does the pilot think he is dreaming when he finds the well?</li>
              <li>What sound does the well in the desert make?</li>
              <li>Who hoists the bucket up from the bottom of the well to the surface?</li>
              <li>Who drinks from the well first?</li>
              <li>What is the final drawing which the little prince requests from the pilot?</li>
              <li>What structure is near the well?</li>
              <li>Where must the snake bite the little prince?</li>
              <li>What does the little prince ask about the poison which the snake has within it?</li>
              <li>When the pilot sees the snake, what does he do?</li>
              <li>What color is the muffler which the little prince wears around his neck?</li>
              <li>What does the little prince know about the pilot’s engine?</li>
            </ol>
            <h4>Vocabulary</h4> For each vocabulary word below, write a definition and then write a sentence using the
            word.<br/>
            <ol className="vocab">
              <li>veritable</li>
              <li>spectacle</li>
              <li>regulate</li>
              <li>monotonous</li>
              <li>immensity</li>
              <li>trudge</li>
              <li>asunder</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener14} value={la7Essay14}/>

          <span className="days">LESSON 15 </span>
          <p className="topBottom"> Read <a href={require("../resources/books/TheLittlePrince.pdf")} rel="noreferrer"
                                            target="_blank">Chapter 27 <i>The Little Prince. </i> </a> Then answer the
            questions below.</p>
          <p>
            <ol className="vocab">
              <li>What do you believe is the moral of The Little Prince?</li>
              <li>How many years have gone by before the pilot tells his story?</li>
              <li>Is the pilot able to find his way out of the desert?</li>
              <li>What does the pilot regret most about his drawing of the sheep’s muzzle?</li>
              <li>Does the pilot wonder about the little prince and the flower and the sheep? How so?</li>
              <li>If one is ever in the African desert and sees a little man with golden hair, what should one do?</li>
              <p className="topBottom"><b>Deeper Thinking about The Little Prince</b></p>
              <li>Discuss the little prince and his relationship with the flower.</li>
              <li>What can readers learn from the prince?</li>
              <li>What was your reaction to the final statement from the pilot: "Then, if a little man</li>
              <li>appears who laughs, who has golden hair and who refuses to answer questions,</li>
              <li>you will know who he is. If this should happen, please comfort me. Send me</li>
              <li>word that he has come back." Did you think it was a good ending or would have chosen something
                different?
              </li>
              <li>There are many moral lessons in The Little Prince. Which two are most significant to you?</li>
              <li>What is the difference between children and adults in the Little Prince?</li>
            </ol>
            <h4>Vocabulary</h4> For each vocabulary word below, write a definition and then write a sentence using the
            word.<br/>
            <ol className="vocab">
              <li>abyss</li>
              <li>irreparable</li>
              <li>malicious</li>
              <li>resolute</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener15} value={la7Essay15}/>

          <span className="days">LESSON 16 </span>
          <h4> Deeper thinking on Symbolism</h4>
          <p>
            <ol className="vocab">
              <li>What does the sheep in The Little Prince symbolize?</li>
              <li>What does the snake in "The Little Prince" story symbolize?</li>
              <li>What do the planets visited by the little prince symbolize?</li>
              <li>What does the Little Prince symbolize for the pilot?</li>
              <li>Symbolism was used throughout the novel. Which one</li>
              <li>What does it mean to "see with the heart"? Do you think you can see accurately with your heart? Why or
                why not?
              </li>
              <li>Are there times when you should rely on your heart to guide you? Explain.</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener16} value={la7Essay16}/>

          <span className="days">LESSON 17 </span>
          <h4> Create your own book cover design for <i> The Little Prince</i>. </h4>
          <p className="topBottom">A book cover often helps a person decide if they will buy a book. Think about the
            impression you want the images, colors and text to create for viewers. Create a cover for <i> The Little
              Prince</i> that gives viewers a glimpse of the content and mood of the book. Ideas can include how you
            imagined the little prince on one of the planets or an image of how you imagined the main characters. </p>
          <p className="topBottom">You can use any medium you like: collage, paper and markers, or <a
            href="https://www.canva.com/create/book-covers/" rel="noreferrer" target="_blank"> Canva’s online book
            cover
            creation tool. </a>You
            choose how you want to design it. Your cover should include:<br/>
            1. A clear title and the author’s name. <br/>
            2. A graphic design that reflects the books themes. <br/>
            3. A summary of the plot without giving away the ending. For an idea of what's expected, read the summary of
            a book you have, usually found on the inside of the book jacket/cover. <br/>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener17} value={la7Essay17}/>

          <span className="days">LESSON 18 </span>
          <h4> Write a Five Paragraph Essay </h4>
          <p>5 Steps of the Writing Process</p>
          <Video videoUrl="https://www.youtube.com/embed/I9wygIVAxqg?list=PLvJNSf-7NfrMYswXp-E4UFPStmLlzy0QH"/>
          <p className="topBottom"><strong>Do you think <i>The Little Prince </i>was written for children, adults, or
            both?</strong></p>
          <p className="topBottom">In a five paragraph essay, write a response to the question above. Take a few minutes
            to think about the
            question and then create an outline. Your introduction paragraph should grab your reader’s attention. It
            also needs a clear thesis statement that conveys the points or arguments you are going to make. </p>
          <p>For your three supporting paragraphs (paragraphs 2, 3 and 4), use three different examples or support from
            the
            novel. </p>
          <p className="topBottom">Your conclusion should restate your thesis in a different way. End with a thoughtful
            summary. Each
            paragraph should be 3-5 sentences.</p>
          <p className="topBottom"><a href={require("../resources/languagearts/FiveParagraphEssayOutline.pdf")}
                                      rel="noreferrer"
                                      target="_blank">Click
            here for a 5 Paragraph Essay outline </a>if you need help getting started. </p>
          <textarea className="textArea" onChange={onChangela7Listener18} value={la7Essay18}/>

          <span className="days">LESSON 19 </span>
          <p className="topBottom">In many ways <i>The Little Prince</i> is an autobiography. Read the articles below.
            Then write a five paragraph essay explaining how the fable reflects Antoine de Saint-Exupéry’s own life
            and experiences.</p>
          <p className="topBottom">Many of the people, objects and events in <i> The Little Prince</i> represent people
            and events from the
            author’s life. For example, Saint-Exupéry searched for the meaning of life, he was a pilot who crashed in
            the desert and the rose is said to be his wife, Consuelo.</p>
          <p className="topBottom">In your essay, you must explain how the examples you select from the fable symbolize
            things or people in
            Saint-Exupéry’s life. It’s not enough to state that the rose was his wife. You must explain how you know
            this
            by referring to specific passages in the novel and the articles posted below. You can do further research
            online to help support the points
            you make.</p>
          <p className="topBottom"><a href={require("../resources/languagearts/littlePrinceArticle.pdf")}
                                      rel="noreferrer" target="_blank">Love
            letters that inspired 'The Little Prince’ </a></p>
          <p className="topBottom"><a
            href="https://www.nationalww2museum.org/war/articles/the-little-prince-antoine-de-saint-exupery"
            rel="noreferrer" target="_blank"> The Little Prince's Last Flight: The Story of Antoine de
            Saint-Exupéry. </a></p>
          <p className="topBottom"><a href={require("../resources/languagearts/FiveParagraphEssayOutline.pdf")}
                                      rel="noreferrer"
                                      target="_blank">Click here for a 5 Paragraph Essay outline </a>if you need help in
            getting started. </p>
          <textarea className="textArea"
                    placeholder="Be sure to back up your work and send it to your teacher or parent."
                    onChange={onChangela7Listener19} value={la7Essay19}/>

          <span className="days">LESSON 20 </span>
          <h4>12 Types of Fiction </h4>
          <p>After you watch the two videos below, answer the questions that follow.</p>
          <Video videoUrl="https://www.youtube.com/embed/-_DN7l53J_c?list=PLvJNSf-7NfrNSQl8ICXACg0XNUVM1dF2d"/>
          <Video videoUrl="https://www.youtube.com/embed/niZosUpuSyU?list=PLvJNSf-7NfrNSQl8ICXACg0XNUVM1dF2d"/>
          <ol className="vocab">
            <li>List the 12 different genres of fiction.</li>
            <li>Of the 12 types listed, which is your favorite to read? Why?</li>
            <li>Which genre is your least favorite to read? Explain why.</li>
            <li>If you were asked to write a novel, which type (genre) of fiction would you choose?</li>
            <li>If you could be the protagonist or hero in a novel, which type of fiction would you want to star in?
              Explain.
            </li>
            <li>Which type of fiction to do you think sells the most? Why do you think that is?</li>
            <li>If you were a writer, which type of fiction do you think would be the most difficult to write about?
              Explain your answer.
            </li>
            <li>What is your favorite novel and what type of fiction (genre) is it?</li>
          </ol>

          <textarea className="textArea" onChange={onChangela7Listener20} value={la7Essay20}/>

          <span className="days">LESSON 21 </span>
          <p className="margin-para"> Watch the videos below and then complete the assignment from Khan Academy:
            Trailblazing Women: reading informational text. </p>

          <p>
            <Video videoUrl="https://www.youtube.com/embed/gUW2jit3uvo"/>
            <Video videoUrl="https://www.youtube.com/embed/GvWH9ZXy9gY"/>
            <Video videoUrl="https://www.youtube.com/embed/l3yWmXbC36s"/>
            <p>Review the <a
              href="https://www.khanacademy.org/ela/cc-7th-reading-vocab/x4aa9073b12675eb1:cc-7th-trailblazing-women/x4aa9073b12675eb1:building-knowledge/a/trailblazing-women-unit-vocabulary?modal=1"
              rel="noreferrer" target="_blank"> vocabulary </a> for this unit</p>
            <p>Complete the <a
              href="
              https://www.khanacademy.org/ela/cc-7th-reading-vocab/x4aa9073b12675eb1:cc-7th-trailblazing-women/x4aa9073b12675eb1:close-reading/e/trailblazing-women--reading-informational-text--katherine-johnson-7"
              rel="noreferrer" target="_blank">four problems linked here from Khan Academy. </a>Then in the textbox
              below, write a brief summary about Katherine Johnson based on the reading.</p>            <p>If you don't
            already
            have a free account
            set up with Khan Academy, <a
              href="https://support.khanacademy.org/hc/en-us/articles/204451324-How-do-I-create-my-account-"
              rel="noreferrer" target="_blank"> click here </a>to create one.</p>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener21} value={la7Essay21}/>

          <span className="days">LESSON 22 </span>
          <p><a href={require("../resources/books/ALongWalktoWaterChapter1.pdf")} rel="noreferrer" target="_blank"> <i>A
            Long Walk to Water</i></a> is based on the true story of Salva Dut, one of the Lost Boys from Sudan during a
            civil war in 1985. The book also includes a second perspective from a girl named Nya, which begins in 2008.
            The book is available at your local library, at <a href="https://z-lib.  org/">Z-Library </a>or can be
            purchased online. Until you get a copy, you can begin reading it <a
              href={require("../resources/books/ALongWalktoWaterChapter1.pdf")} rel="noreferrer"
              target="_blank"> here. </a></p>
          <p>Read Chapter 1, answer the questions and complete the vocabulary assignment below. <br/>
            1. Why does the author use different styles of print and different time periods in the same Chapter? What
            can be learned from this style of writing?<br/>
            2. Describe Salva as a student, his school and what he learns. Can you make any
            connections? <br/>
            3. Describe Salva’s family and home life. Is it anything like your own?<br/>
            4. What are the issues for which the rebels are fighting the government? What does it
            mean for Sudan to become Muslim?<br/>
            5. Why does the teacher urge them to "run into the bush?<br/>"
            6. What are you wondering about as this Chapter ends?<br/>
            <b>Vocabulary</b><br/>
            For each vocabulary word below, write a definition and then write a sentence using the word.<br/>
            <ol className="vocab">
              <li>droned Example: <i>droned: to talk in a dull, monotonous manner. "The teacher droned on with a lesson
                about the Arabic language." </i></li>
              <li>responsibilities</li>
              <li>thorn</li>
              <li>panic</li>
              <li>bush</li>
              <li>rebels</li>
              <li>independence</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener22} value={la7Essay22}/>

          <span className="days">LESSON 23 </span>
          <p>Read <a href={require("../resources/books/ALongWalktoWaterChapter1.pdf")} rel="noreferrer"
                     target="_blank"><i>Chapter 2,</i></a> answer the questions and complete the vocabulary assignment
            below. <br/>
            <b>2008</b><br/>
            1. How does Nya spend her time?<br/>
            <b>1985</b><br/>
            2. What is happening around Salva as he runs away from the school?<br/>
            3. What three questions occupy Salva’s thoughts?<br/>
            4. When they organize by village, what does Salva discover?<br/>
            5. Describe the rebels. How does their appearance and actions affect the people?<br/>
            6. Does Salva consider himself a man? Do the rebels consider Salva a man?<br/>
            7. Why does the group leave the rebels? Why do they leave Salva in the barn the next
            morning?<br/>
            8. Can you imagine how Salva is feeling at the end of this Chapter? Where is he?<br/>
            <b>Vocabulary</b><br/>
            For each vocabulary word below, write a definition and then write a sentence using the word.<br/>
            <ol className="vocab">
              <li>shrouded</li>
              <li> relief</li>
              <li> model</li>
              <li> terror</li>
              <li> mortars</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener23} value={la7Essay23}/>

          <span className="days">LESSON 24 </span>
          <p>Read Chapter 3, answer the questions and complete the vocabulary assignment below. <br/>
            <b>2008</b><br/>
            1. In each of the Chapters so far, the author tells Nya’s story first. Why do you think
            she does this?<br/>
            2. What has been the purpose of Nya’s journey every day?<br/>
            <b>1985</b><br/>
            3. What is Salva’s situation? Why doesn’t he return to his school?<br/>
            4. How does the woman from the Jur-chol tribe help him? What is the history
            between the Nuers and the Dinka tribe? Why is Salva insulted to be called an
            orphan?<br/>
            5. Why must the old woman move on? Couldn’t she take Salva along?<br/>
            6. How do tribes tell themselves apart from one another?<br/>
            7. Salva’s hopes rise and then fall. Do you think finding other Dinkas will be the
            answer he is looking for?<br/>
            <b>Vocabulary</b><br/>
            For each vocabulary word below, write a definition and then write a sentence using the word.<br/>
            <ol className="vocab">
              <li>gourd</li>
              <li>tribe</li>
              <li>artillery</li>
              <li> sympathy</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener24} value={la7Essay24}/>

          <span className="days">LESSON 25 </span>
          <p>Read Chapter 4, answer the questions and complete the vocabulary assignment below. <br/>
            <b>2008</b><br/>
            1. What additional information did you learn about Nya in this Chapter?<br/>
            <b>1985</b><br/>
            2. Why doesn’t the group want Salva along? Why is he ultimately taken along by the
            man and woman?<br/>
            3. What does it mean they are "walking to nowhere"? How do they survive?<br/>
            4. Why do the boys, Buksa and Salva, fall behind? What have they discovered?<br/>
            5. Can an entire group of people exist on this?<br/>
            6. What questions would you like answered in the next Chapter?<br/>
            <b>Vocabulary</b><br/>
            For each vocabulary word below, write a definition and then write a sentence using the word.<br/>
            <ol className="vocab">
              <li>scanned</li>
              <li>doubt</li>
              <li>daze</li>
              <li>feast</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener25} value={la7Essay25}/>

          <span className="days">LESSON 26 </span>
          <p>Read Chapter 5, answer the questions and complete the vocabulary assignment below. <br/>
            <b>2008</b><br/>
            1. Explain how water dictates Nya’s life.
            <b>1985</b><br/>
            2. How was the honey worth it for Salva and the others in his group? What was the
            cost?<br/>
            3. What do Salva and Marial have in common? What does it mean that Salva "heard
            that sigh all the way to his heart?<br/>"
            4. Why is Salva dismayed that they are walking to Ethiopia, east? How are the boys
            good for each other?<br/>
            5. Describe the Atuot people. Would you fear them?<br/>
            6. Salva is amazed at the end of this Chapter. Predict the cause of his speechlessness.
            <b>Vocabulary</b><br/>
            For each vocabulary word below, write a definition and then write a sentence using the word.<br/>
            <ol className="vocab">
              <li>gingerly</li>
              <li>honeycomb</li>
              <li> accent</li>
              <li>strides</li>
              <li> inhabited</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener26} value={la7Essay26}/>

          <span className="days">LESSON 27 </span>
          <p>Read Chapter 6, answer the questions and complete the vocabulary assignment below. <br/>
            <b>2008</b><br/>
            1. Nya and her mother think differently about the camp. Explain. Would Nya and
            Salva have been friends if they knew each other in the same time?<br/>
            <b>1985</b><br/>
            2. Finally, something good happens for Salva. Explain. How does this make a
            difference for the group?<br/>
            3. Why does everyone in the group become nauseous? Could they have avoided this
            problem?<br/>
            4. List all the elements working against their survival.5. What does it mean: "A cold fist seemed to grip
            Salva’s heart?<br/>" What has happened?<br/>
            6. If you had to choose to be Nya or Salva, explain whose shoes you would rather
            walk in. Why?<br/>
            <b>Vocabulary</b><br/>
            For each vocabulary word below, write a definition and then write a sentence using the word.<br/>
            <ol className="vocab">
              <li>makeshift</li>
              <li> solemn</li>
              <li> rebelled</li>
              <li> nausea</li>
              <li> exhausted</li>
              <li> wailing</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener27} value={la7Essay27}/>

          <span className="days">LESSON 28 </span>
          <p>Read Chapter 7, answer the questions and complete the vocabulary assignment below. <br/>
            <b>2008</b><br/>
            1. What is wrong with Akeer? What are her symptoms? What is the choice facing the
            family? What would you do?<br/>
            <b>1985</b><br/>
            2. How do they know a lion took Marial? How is it possible that no one heard
            anything?<br/>
            3. How does the loss of his friend affect Salva? How does uncle soothe him?<br/>
            4. What changes as the group approaches the Nile? How do they get across?<br/>
            5. What is the secret of making the canoes?<br/>
            6. What would you like to learn in the next Chapter?<br/>
            <b>Vocabulary</b><br/>
            For each vocabulary word below, write a definition and then write a sentence using the word.<br/>
            <ol className="vocab">
              <li>steady</li>
              <li>reeds</li>
              <li>papyrus</li>
              <li>prow</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener28} value={la7Essay28}/>

          <span className="days">LESSON 29 </span>
          <p>Read Chapter 8, answer the questions and complete the vocabulary assignment below. <br/>
            <b>2008</b><br/>
            1. Explain how Akeer’s laugh "was like music." What caused her illness? Is the
            solution within the means of the family?<br/>
            <b>1985</b><br/>
            2. What wonders were found on the island?<br/>
            3. How do the villagers get food without any money?<br/>
            4. Why don’t they become nauseous again with this food?<br/>
            5. Describe Salva’s good memories.
            6. What do the fishermen know about the night that the travelers do not? How are
            they affected?<br/>
            7. Of all the elements Salva has faced, which do you think is the worst? How could
            the Akobo desert that lies ahead be the worst?<br/>
            <b>Vocabulary</b><br/>
            For each vocabulary word below, write a definition and then write a sentence using the word.<br/>
            <ol className="vocab">
              <li>monotonous</li>
              <li> gauge</li>
              <li> mangoes</li>
              <li> ferried</li>
              <li> desperate</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener29} value={la7Essay29}/>

          <span className="days">LESSON 30 </span>
          <p>Read Chapter 9, answer the questions and complete the vocabulary assignment below. <br/>
            <b>2008</b><br/>
            1. How does the village chief welcome strangers? What do you think they want?<br/>
            <b>1985</b><br/>
            2. How is the Akobo the worst element yet for the villagers to survive?<br/>
            3. How does uncle encourage Salva to keep walking? What might have happened to
            Salva without his uncle? How could you apply Uncle’s strategy in your own life?<br/>
            4. What do they find when they reach other people in the desert?<br/>
            5. What is the choice faced here? Would you give water to the men? What is the right
            thing to do?<br/>
            6. Will some have to die for the others to survive?<br/>
            <b>Vocabulary</b><br/>
            For each vocabulary word below, write a definition and then write a sentence using the word.<br/>
            <ol className="vocab">
              <li>relentless</li>
              <li>arid</li>
              <li> parched</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener30} value={la7Essay30}/>

          <span className="days">LESSON 31 </span>
          <p>Read Chapter 10, answer the questions and complete the vocabulary assignment below. <br/>
            <b>2008</b><br/>
            1. What do the two strangers want from Nya’s chief? If they find water, how will it
            change lives?<br/>
            <b>1985</b><br/>
            2. Did Salva give his water to the men? Did anyone? What were the results? Who was
            right?<br/>
            3. What happened to the village of Lou Ariik?<br/>
            4. What will happen when the group reaches Ethiopia? What are uncle’s plans?<br/>
            5. What are the chances that Salva will ever find his family?<br/>
            6. Where did the six men come from? Why did they single out uncle? What does it
            mean, "There was something evil in their laughter."
            7. What does the ending of this Chapter mean for Salva?<br/>
            <b>Vocabulary</b><br/>
            For each vocabulary word below, write a definition and then write a sentence using the word.<br/>
            <ol className="vocab">
              <li>translated</li>
              <li> revived</li>
              <li> vultures</li>
              <li>refugee camp</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener31} value={la7Essay31}/>

          <span className="days">LESSON 32 </span>
          <p>Read Chapter 11, answer the questions and complete the vocabulary assignment below. <br/>
            <b>2008</b><br/>
            1. What will it mean if water is not found in the land between the trees?<br/>
            <b>1985</b><br/>
            2. What happened to uncle? How does this affect Salva? How does the group attitude
            change?<br/>
            3. What are the positive and negative aspects of the refugee camp? Is Salva happy to
            finally quit walking?<br/>
            4. What does the orange scarf mean to Salva?<br/>
            5. How would you like this Chapter to end for Salva?<br/>
            <b>Vocabulary</b><br/>
            For each vocabulary word below, write a definition and then write a sentence using the word.<br/>
            <ol className="vocab">
              <li>scythed</li>
              <li> numbness</li>
              <li> grudgingly</li>
              <li> emaciated</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener32} value={la7Essay32}/>

          <span className="days">LESSON 33 </span>
          <p>Read Chapter 12, answer the questions and complete the vocabulary assignment below. <br/>
            <b>2008</b><br/>
            1. What is the red, iron giraffe? What part do the villagers play in the progress?<br/>
            <b>1985</b><br/>
            2. How does it feel to Salva to be without a family? What has he lost?<br/>
            3. What does Salva decide to do to survive?<br/>
            4. How does school look in the refugee camp? Why does he go?<br/>
            1991
            5. How have things changed in the camp in six years? Why is it closing?<br/>
            6. What is the purpose of any government? What will be the outcome of the
            government’s actions?<br/>
            <b>Vocabulary</b><br/>
            For each vocabulary word below, write a definition and then write a sentence using the word.<br/>
            <ol className="vocab">
              <li>despair</li>
              <li> scavenging</li>
              <li> chaos</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener33} value={la7Essay33}/>

          <span className="days">LESSON 34 </span>
          <p>Read Chapter 13, answer the questions and complete the vocabulary assignment below. <br/>
            <b>2008</b><br/>
            1. What things make this drilling so difficult? What keeps people going in times of
            adversity?<br/>
            <b>1991-1992</b><br/>
            2. What is the government trying to do by driving the people into the water?<br/>
            3. Why are the soldiers shooting? What are all the obstacles to survival for these
            people?<br/>
            4. Does Salva have a duty to the others, especially the boy clinging to him? Why was
            Salva one of the lucky ones and not one of the thousands who died?<br/>
            5. Would you follow Salva? Why did he become a leader? What do the boys hope to
            find in Kenya?<br/>
            6. How do they find the strength to go on? How do they last a year and a half?<br/>
            7. What do you expect their life to be like in Kenya?<br/>
            <b>Vocabulary</b><br/>
            For each vocabulary word below, write a definition and then write a sentence using the word.<br/>
            <ol className="vocab">
              <li>earnestly</li>
              <li> prodding</li>
              <li>welter</li>
              <li> peril</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener34} value={la7Essay34}/>

          <span className="days">LESSON 35 </span>
          <p>Read Chapter 14 and then answer the questions below. <br/>
            <b>2009</b><br/>
            1. Why does the village celebrate? What could it mean that the new water is full of
            mud?<br/>
            1992- <b>1997</b><br/>
            2. Describe the misery at Kakuma. How does the population of Kakuma compare to
            the population in your own community?<br/>
            3. How were conditions different at the camp in Ifo?<br/>
            4. What must it have been like with nothing to do day after day but wait?<br/>
            5. Ideally what does Salva want?<br/>
            6. What are the restrictions to a boy "getting on the list' to go to America?<br/>
            7. What does the author mean "sometimes he felt he was being torn in two by the
            hoping and the not-hoping?<br/>"
            8. What does it mean to Salva that he will go to America?<br/>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener35} value={la7Essay35}/>

          <span className="days">LESSON 36 </span>
          <p>Read Chapter 15, answer the questions and complete the vocabulary assignment below. <br/>
            <b>2009</b><br/>
            1. Why can’t the boys drink the water spraying from the hole? When will Nya lose her
            job?<br/>2. What was involved in the Lost Boys coming to America? Do you think that is a
            good name for them?<br/>
            3. Why would people from America want to help these boys? Can they replace the
            boy’s owns family?<br/>
            4. Explain Salva’s experiences with clothes, Coca-Cola, the plane, winter.
            5. Would this be easier if Salva really was a boy instead of an adult?<br/>
            6. Will it ever be possible for Salva to reconnect with any of his birth family?<br/>
            <b>Vocabulary</b><br/>
            For each vocabulary word below, write a definition and then write a sentence using the word.<br/>
            <ol className="vocab">
              <li>terminal</li>
              <li> frigid</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener36} value={la7Essay36}/>

          <span className="days">LESSON 37 </span>
          <p>Read Chapter 16, answer the questions and complete the vocabulary assignment below. <br/>
            <b>2009</b><br/>
            1. What is your best guess on what the men are going to build?<br/>
            <b>1997-2003</b><br/>
            2. By opening his email, what does this show you about Salva’s development in
            America?<br/>
            3. What are the difficulties involved in Salva reconnecting with his father?<br/>
            4. What are the many risks Salva is taking in order to find his father?<br/>
            5. Write as many "what if’s" as you can at the end of this Chapter. (Example: What if
            Salva’s father has died? What if Salva is not allowed to return to the US?<br/>6. What would you like to see
            happen in the next Chapter?<br/>
            <b>Vocabulary</b><br/>
            For each vocabulary word below, write a definition and then write a sentence using the word.<br/>
            <ol className="vocab">
              <li>aquifer</li>
              <li> vague</li>
              <li> relief</li>
              <li> clinic</li>
              <li> remote</li>
              <li> arrangement</li>
              s
              <li> frantic </li></ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener37} value={la7Essay37}/>

          <span className="days">LESSON 38 </span>
          <p>Read Chapter 17, answer the questions and complete the vocabulary assignment below. <br/>
            <b>2009</b><br/>
            1. How close were your predictions on what building would be put up first? Why does
            Nya ask if the girls can go to school too? How does having water change everything
            for her people?<br/>
            <b>2003-2007</b><br/>
            2. Was the reunion of Salva and his father what you expected? Explain.
            3. How is it possible that so much of his family is still alive? Why didn’t they give up
            hope?<br/>
            4. Should Salva take the risk and return to Lou Ariik? Would you?<br/>
            5. What do you believe his idea is to help his people?<br/>
            6. Why is Salva the best person to speak about his idea? Does his audience care
            about his speaking skills?<br/>
            7. What would make people donate money to Salva?<br/>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener38} value={la7Essay38}/>

          <span className="days">LESSON 39 </span>
          <p>Read Chapter 18, answer the questions and complete the vocabulary assignment below. <br/>
            <b>2009</b><br/>
            1. Describe Nya’s experience of the water. <br/>
            2. What does the well mean to the people of southern Sudan? How did it get its
            name? <br/>
            3. In every Chapter until now, the story structure included two time periods. Why is
            this last Chapter set only in 2009? Why is the Chapter printed only in regular print
            instead of starting with italics?<br/>
            4. Why was the boss of the workers not identified as Dinka earlier?<br/>
            5. "Why would a Dinka bring water to us?" How would you answer Nya’s question?<br/>
            6. Do you expect any changes between the Nuer and Dinka because of this?<br/>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener39} value={la7Essay39}/>

          <span className="days">LESSON 40 </span>
          <h4>Create a new book cover for <i> A Long Walk to Water.</i></h4>
          <p>Make a cover that gives viewers a glimpse of the content and mood of
            the book. Think about the impression you want the images, colors and text to create for viewers. You can use
            whatever medium you choose: collage, paper and markers, or <a
              href="https://www.canva.com/create/book-covers/" rel="noreferrer" target="_blank"> Canva’s online book
              cover creation tool. </a>You choose how you want to design it. Your cover should include: <br/>
            1. A clear title and the author’s name. <br/>
            2. A graphic design that reflects the books themes. <br/>
            3. A summary of the plot without giving away the ending. <br/>
            4. A review (your opinion) about the book. <br/></p>
          <textarea className="textArea" onChange={onChangela7Listener40} value={la7Essay40}/>

          <span className="days">LESSON 41 </span>
          <p>Five Paragraph Essay</p>
          <p> In a five paragraph essay, address one of the questions below. </p>
          <p>
            <ul className="list">
              <li>In <i>The Long Walk to Water </i> Salva faced may challenges. How did these challenges shape the
                person he became?
              </li>
              <li>There were several themes in the book, including hope, family, social strife, war, resilience, helping
                others and survival. What do you think is the most important theme in the book?
              </li>
              <li>Who had more struggles: Nya or Salva?</li>
              <li>Salva experienced culture shock when he moved to the U.S. What do you think are the greatest
                challenges for immigrants when they move to the U.S.?
              </li>
            </ul>
          </p>
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
          <p className="topBottom"><a href={require("../resources/languagearts/FiveParagraphEssayOutline.pdf")}
                                      rel="noreferrer"
                                      target="_blank">Click
            here for a 5 Paragraph Essay outline </a>if you need help getting started.</p>
          <textarea className="textArea" onChange={onChangela7Listener41} value={la7Essay41}/>

          <span className="days">LESSON 42 </span>
          <p className="margin-para"> Watch the videos below and then complete the assignment from Khan Academy:
            Trailblazing Women - Close reading: speech and drama - Sojourner Truth 7. </p>
          <Video videoUrl="https://www.youtube.com/embed/Tq_BoPJsv-4"/>
          <Video videoUrl="https://www.youtube.com/embed/msHjgIsYOkU"/>
          <Video videoUrl="https://www.youtube.com/embed/Q4I9ht7wHsk"/>
          <p>Complete the <a
            href="https://www.khanacademy.org/ela/cc-7th-reading-vocab/x4aa9073b12675eb1:cc-7th-trailblazing-women/x4aa9073b12675eb1:close-reading-speech-and-drama/e/trailblazing-women--speech-and-drama--sojourner-truth-7"
            rel="noreferrer" target="_blank"> questions linked here from Khan Academy. </a>Then in the textbox below,
            write a brief summary about Sojourner Truth’s Speech at the Women’s Rights Convention.</p>
          <textarea className="textArea" onChange={onChangela7Listener42} value={la7Essay42}/>

          <span className="days">LESSON 43 </span>
          <p className="margin-para"> Watch the videos below and then complete the assignment from Khan Academy:
            Trailblazing Women: Applying vocabulary knowledge. </p>
          <Video videoUrl="https://www.youtube.com/embed/CiNggzdWkIo"/>
          <Video videoUrl="https://www.youtube.com/embed/lzKj-bLvrYQ"/>
          <Video videoUrl="https://www.youtube.com/embed/XRt1N0sJJQo"/>
          <p>Complete the <a
            href="https://www.khanacademy.org/ela/cc-7th-reading-vocab/x4aa9073b12675eb1:cc-7th-trailblazing-women/x4aa9073b12675eb1:applying-knowledge/e/trailblazing-women--applying-knowledge--katherine-johnson-7"
            rel="noreferrer" target="_blank"> questions linked here from Khan Academy. </a>Then in the textbox
            below, summarize what you learned in this unit.</p>
          <textarea className="textArea" onChange={onChangela7Listener43} value={la7Essay43}/>

          <span className="days">LESSON 44 </span>
          <p className="margin-para"> Watch the video below and then complete the assignment from Khan Academy:
            Trailblazing Women: Reading informational text and creating objective summaries - Mae Jemison. </p>
          <Video videoUrl="https://www.youtube.com/embed/5Eepm6Px5pc "/>
          <p>Complete the <a
            href="https://www.khanacademy.org/ela/cc-7th-reading-vocab/x4aa9073b12675eb1:cc-7th-trailblazing-women/x4aa9073b12675eb1:reading-for-understanding/e/trailblazing-women--reading-informational-text--mae-jemison-7"
            rel="noreferrer" target="_blank"> questions linked here from Khan Academy. </a>Then in the textbox
            below, write a brief summary about Mae Jemison, Astronaut.</p>
          <textarea className="textArea" onChange={onChangela7Listener44} value={la7Essay44}/>

          <span className="days">LESSON 45 </span>
          <p>The novel <b>Hatchet </b> by Gary Paulsen is a wilderness survival story. Brian Robeson is a thirteen
            year old boy traveling in a small airplane to Canada to spend the summer with his father. When the
            plane crashes in an uninhabited part of the Canadian woods, he must find a way to survive on his own.
          </p>
          <p><b>Hatchet </b> is available at your local library, local bookstore and online for purchase. Until
            your copy arrives, <a href={require("../resources/books/HatchetChapter1.pdf")} rel="noreferrer"
                                  target="_blank"> Chapter 1, is provided here. </a></p>
          <p><a href={require("../resources/books/hatchetChapter1.pdf")} rel="noreferrer"
                target="_blank"><img src={require("../../public/images/bookCovers/hatchett.jpg")}
                                     alt="Hatchet novel"/></a><br/>
            <ol className="vocab">Answer the questions below in complete sentences.<br/>
              <li>Who is narrating the story?</li>
              <li>Why was Brian traveling in a small bush plane by himself?</li>
              <li>Explain why Brian is having a tough time accepting his parents’ divorce.</li>
              <li>What did Brian’s mother give him as a gift before he leaves? How does Brian feel about the
                gift?
              </li>
              <li>Do you believe it says something about his relationship with his mother that he wore the hatchet
                instead of just putting it in a bag?
              </li>
              <li>Why was Brian "stricken with a white-flash of horror."</li>
              <li>What tips about flying a plane did the pilot give to Brian?</li>
              <li>What happens to the pilot while they are flying over the Canadian woods? Describe Brian’s
                reaction when this happens.
              </li>
              <li>By the end of the chapter, describe how Brian is feeling. How do you think you’d be feeling if
                you were in a similar situation?
              </li>
            </ol>
            <h4>Vocabulary</h4>
            For each vocabulary word below, write a definition and then write a sentence using the word.<br/>
            <ol className="vocab">
              <li> audible</li>
              <li> griamcing</li>
              <li> spasm</li>
              <li> tundra</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener45} value={la7Essay45}/>

          <span className="days">LESSON 46 </span>
          <p> Read <i> Chapter 2 of Hatchet </i> and then answer the questions below.</p>
          <p>
            <ol className="vocab">
              <li>How did Brian react after the pilot’s heart attack? If you were in a similar situation, how do
                you think you would have reacted to losing the pilot?
              </li>
              <li>Did Brian know anything about how to fly a plane? Explain.</li>
              <li>Why does he start to panic when he radios for help?</li>
              <li>What do you think about Brian’s decision to wait for the plane to run out of gas? What would you
                have done?
              </li>
              <li>Brian thought his best chance for a safe landing was to land where?</li>
              <li>Describe how Brian is feeling as he is trying to figure out what to do next.</li>
            </ol>
            <h4>Vocabulary</h4>
            For each vocabulary word below, write a definition and then write a sentence using the word.<br/>
            <ol className="vocab">
              <li> turbulence</li>
              <li> lurch</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener46} value={la7Essay46}/>

          <span className="days">LESSON 47 </span>
          <p> Read <i> Chapter 3 of Hatchet</i> and then answer the questions below.</p>
          <p>
            <ol className="vocab">
              <li>Why is Brian hoping to find a lake directly in front of him?</li>
              <li>Do you think it’s realistic that Brian would be able to control the plane as he did? Why or why
                not?
              </li>
              <li>Describe, with as many details as you can, the crash landing.</li>
              <li>What animal does Brian see when he is about to crash land on the lake?</li>
              <li>The author states that Brian hears screaming. Who do you think is screaming?</li>
              <li>What happened to Brian at the end of the chapter?</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener47} value={la7Essay47}/>

          <span className="days">LESSON 48 </span>
          <p> Read <i> Chapter 4 of Hatchet</i> and then answer the questions below.</p>
          <p>
            <ol className="vocab">
              <li>What is the mood of the first chapter?</li>
              <li>What is the setting?</li>
              <li>Imagine you are in Brian’s place. You are stranded in a forest in the north with no one to help
                you. What’s your plan? What steps would you take next?
              </li>
              <li>What secret has Brian keeping to himself? Why is so upsetting to him?</li>
              <li>Give a detailed description of the lake.</li>
              <li>Brian faces a problem with the rising of the sun. How is the problem solved?</li>
              <li>How did Brian get lucky with where he landed? Could it have gone much worse for him? How so?
              </li>
              <li>Describe how the scenery of the lake and woods and the ways it is different from the city he
                lived in.
              </li>
              <li>If you had to give this chapter a name, what would it be?</li>
              <li>What should Brian’s next steps be. If you could step into the book and give him advice, what
                would you say?
              </li>
            </ol>
            <h4>Vocabulary</h4>
            For each vocabulary word below, write a definition and then write a sentence using the word.<br/>
            <ol className="vocab">
              <li> spiraling</li>
              <li> abated</li>
              <li> keening</li>
              <li> hoarse</li>
              <li> hummock</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener48} value={la7Essay48}/>

          <span className="days">LESSON 49 </span>
          <p> Read <i> Chapter 5 of Hatchet </i> and then answer the questions below.</p>
          <p>
            <ol className="vocab">
              <li>When Brian wakes up, what new problem does he face?</li>
              <li>Is Brian afraid to drink the lake water? Why? What happens when he finally drinks it? What would
                have done?
              </li>
              <li>You learn about the lesson his English teacher, Perpich, taught him. What is it? How did he start to
                apply this lesson to his situation?
              </li>
              <li>It dawns on Brian that he might never be found. What had he done that would make it difficult for
                search and rescue crews to find him? He decides it take at least how long for someone to find him?
              </li>
              <li>Did Brian stay in a panicked state? Do you think he is behaving reasonably?</li>
              <li>Can you relate to how he is behaving or do you think you would behave differently? Explain.</li>
              <li>What things does he need the most to survive, but does not have?</li>
              <li>What does Brian have that you think will be useful to him in survival?</li>
              <li>What is the main idea of this chapter?</li>
            </ol>
            <h4>Vocabulary</h4>
            For each vocabulary word below, write a definition and then write a sentence using the word.<br/>
            <ol className="vocab">
              <li> amphibious</li>
              <li> asset</li>
              <li> diminish</li>
              <li> frantic</li>
            </ol>
          </p>

          <textarea className="textArea" onChange={onChangela7Listener49} value={la7Essay49}/>

          <span className="days">LESSON 50 </span>
          <p> Read <i> Chapter 6 of Hatchet</i> and then answer the questions below in complete sentences.</p>
          <p>
            <ol className="vocab">
              <li>Why did Brian chose to make his shelter close to the lake? Would you have done the same thing or moved
                elsewhere?
              </li>
              <li>Describe his shelter.</li>
              <li>Brian decides to get some food. What does he do? Was this a good move? Explain.</li>
              <li>When he thinks about cause and effect, he determines there is someone to blame for the situation he’s
                in. Who does he blame and why? Do you think Brian is correct?
              </li>
              <li>What is the tone or mood of this chapter? (Is it sad, hopeful, scary?).</li>
            </ol>
            <h4>Vocabulary</h4>
            For each vocabulary word below, write a definition and then write a sentence using the word.<br/>
            <ol className="vocab">
              <li> interlaced</li>
              <li> jumbled</li>
              <li> pulverize</li>
              <li> viciously</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener50} value={la7Essay50}/>

          <span className="days">LESSON 51 </span>
          <p> Read <i> Chapter 7 of Hatchet </i> and then answer the questions below.</p>
          <p>
            <ol className="vocab">
              <li>Brian is forced to learn a lot of lessons about survival quickly. There are lessons he should have
                learned
                the first time. List at least one.
              </li>
              <li>How is Brian doing after eating so many berries?</li>
              <li>Brian remembers something that is painful. What is it?</li>
              <li>He sees somethings that makes him "do nothing, think nothing." What does he see? Is he harmed? How do
                you
                think you would have reacted?
              </li>
              <li>Do you agree with Brian when he thinks that a city park at night was more dangerous than the woods he
                was
                in? Explain.
              </li>
              <li>What would be a good title for this chapter?</li>
              <li>How do you like Brian? What characteristics/qualities do you like or dislike about him?</li>
              <li>Overall, how well do you think he is managing the difficulties coming his way?</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener51} value={la7Essay51}/>

          <span className="days">LESSON 52 </span>
          <p>Watch the video <b> Types of Conflict </b> and then complete the assignment below.</p>
          <Video videoUrl="https://www.youtube.com/embed/6IHUuZ8Evag"/>
          <p>Stories generally move forward through conflict. <br/>
            There are several types of conflict in <i> Hatchet.</i><br/>
            List three types and describe what is happening with each (use examples and write in complete
            sentences).<br/>
            <ul className="list">After you state the type of conflict, explain how the conflict is playing out in the
              novel. <br/>
              <li>Person vs. _________</li>
              <li>Person vs. _________</li>
              <li>Person vs. _________</li>
            </ul>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener52} value={la7Essay52}/>

          <span className="days">LESSON 53 </span>
          <p> Read <i> Chapter 8 of Hatchet </i> and then answer the questions below.</p>
          <p>
            <ol className="vocab">
              <li>Does it seem like things keep getting worse for Brian? How so?</li>
              <li>With this in mind, what title would you give to this chapter?</li>
              <li>What caused Brian to cry until he could cry no more? What dawns on him afterward?</li>
              <li>Brian believes one rule of survival is the most important. What is it?</li>
              <li>What came into his shelter at night and what injury did he suffer?</li>
              <li>Who did Brian dream about?</li>
              <li>Was Brian able to quickly figure out how to start a fire? Describe the process Brian goes through
                before he
                successfully starts a fire? What problems did he run into and how did he problem solve? How did his
                dream help
                him figure things out?
              </li>
              <li>Brian makes a mistake when using his hatchet. What does he do and how could this have really cost
                him?
              </li>
              <li>What was the tone or mood of this chapter? What do you think the author is trying to get you to
                feel?
              </li>
            </ol>
            <h4>Vocabulary</h4>
            For each vocabulary word below, write a definition and then write a sentence using the word.<br/>
            <ol className="vocab">
              <li>apparent</li>
              <li>crude</li>
              <li>doze</li>
              <li>fierce</li>
              <li>imbed</li>
              <li> gorge</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener53} value={la7Essay53}/>

          <span className="days">LESSON 54 </span>
          <p> Read <i> Chapter 9 of Hatchet </i> and then answer the questions below in complete sentences.</p>
          <p>
            <ol className="vocab"><br/>
              <li>Why did Brian’s first attempts to start a fire fail?</li>
              <li>Why do you think the author included Brian’s thoughts about whether he had learned anything in his
                science
                classes that could be useful to him now? <i>"Did a teacher ever stand up there and say, 'This is what
                  makes a
                  fire.'" </i> Was there a point for the author to include this? Explain.
              </li>
              <li>How does Brian feel after he starts a fire? Why do you think this is?</li>
              <li>Brian calls the fire something more than just fire. What does he call it and why do you believe he
                chose
                this word?
              </li>
              <li>What title would you give to this chapter and explain why.</li>
              <li>How has Brian changed so far? Do you think these changes are for the better or worse? Explain.</li>
              <li>Brian has considered leaving his shelter close to the lake and moving elsewhere. What are the pros and
                cons
                of staying? What are the pros and cons of moving? After looking at your list, do you think he should
                stay or
                leave?
              </li>
            </ol>
            <h4>Vocabulary</h4>
            For each vocabulary word below, write a definition and then write a sentence using the word.<br/>
            <ol className="vocab">
              <li> blaze</li>
              <li> convulse</li>
              <li> depression</li>
              <li> dormant</li>
              <li> enormous</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener54} value={la7Essay54}/>

          <span className="days">LESSON 55 </span>
          <p> Read <i> Chapter 10 of Hatchet </i> and then answer the questions below.</p>
          <p>
            <ol className="vocab">
              <li>About how long has Brian been in the Canadian wilderness?</li>
              <li>Brian felt "he had never felt so rich somehow." What made him feel this way?</li>
              <li>What were the advantages and disadvantages of having the fire?</li>
              <li>Brian tries to read the tracks in the sand and thinks to himself, (<i>"City boy with your city ways
                sitting in the sand trying to read the tracks and not knowing, not understanding. Why would anything
                wild come up from the water to play in the sand?"</i> What does this mean? Why do think the author
                included this?
              </li>
              <li>Brian didn’t like the eggs, but he ate them anyway. Why?</li>
              <li>Brian had stopped thinking about his rescue. He became very upset with himself for doing this. Why?
              </li>
              <li>What would be a good title for this chapter?</li>
            </ol>
            <h4>Vocabulary</h4>
            For each vocabulary word below, write a definition and then write a sentence using the word.<br/>
            <ol className="vocab">
              <li> exasperation</li>
              <li> focus</li>
              <li> gratified</li>
              <li> ignite</li>
              <li> smoldered</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener55} value={la7Essay55}/>

          <span className="days">LESSON 56 </span>
          <p> Read <i> Chapter 11 of Hatchet </i> and then answer the questions below in complete sentences.</p>
          <p>
            <ol className="vocab">
              <li>Brian has changed since he crash landed; both his body and way of thinking are different. What changes
                may he not notice about himself?
              </li>
              <li>Describe how he feels about his mind and body.</li>
              <li>What do think about his survival skills and ability to hunt and gather?</li>
              <li>Brian has things he tells himself he has to do. Do you think it’s important he always has things to
                keep him ocuupied? Explain.
              </li>
              <li>Describe how Brian plans to make a signal fire.</li>
              <li>What do you think would be the best way for Brian to get a fish?</li>
              <li>What title would you give this chapter? Explain why you chose this title.</li>
            </ol>
            <h4>Vocabulary</h4>
            For each vocabulary word below, write a definition and then write a sentence using the word.<br/>
            <ol className="vocab">
              <li> abrupt</li>
              <li> gnarled</li>
              <li> lunged</li>
              <li> fainter</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener56} value={la7Essay56}/>

          <span className="days">LESSON 57 </span>
          <p> Read <i> Chapter 12 of Hatchet </i> and then answer the questions below.</p>
          <p>
            <ol className="vocab">
              <li>Briefly summarize (describe what happens) in this chapter in 4-5 sentences.</li>
              <li>Brian made his fishing spear, but it didn’t work very well. Explain why.</li>
              <li>As Brian is moving out of the water, he decides he needs to make a bow and arrow. Then he thinks,
                "Maybe it was always that way, discoveries happened because they needed to happen." What does he mean by
                this?
              </li>
              <li>What happens that leaves Brian disappointed? By the end of the chapter, how does Brian feel?</li>
              <li>What is the main conflict in chapter 12? Explain why.</li>
              <li>Think of a few times when you had to deal with disappointment. How did you handle it? Do you prefer to
                get away from others or do you get angry and vent or do you have a different way of dealing with it?
              </li>
              <li>How have you seen the people you’re close to you deal with disappointment?</li>
            </ol>
            <h4>Vocabulary</h4>
            For each vocabulary word below, write a definition and then write a sentence using the word.<br/>
            <ol className="vocab">
              <li> tapered</li>
              <li> staggering</li>
              <li> lunged</li>
              <li> initially</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener57} value={la7Essay57}/>

          <span className="days">LESSON 58 </span>
          <p> Read <i> Chapter 13 of Hatchet </i> and then answer the questions below.</p>
          <p>
            <ol className="vocab">
              <li>What title would you give to this chapter. Why?</li>
              <li>Brian feels like a new person. Explain how and where this happened.</li>
              <li>Brian says to himself that he is full of tough hope. What does that mean?</li>
              <li>Do you think Brian is still changing? Explain why or why not.</li>
              <li>How much time has passed since the plane passed over him in chapter 12 and the end of chapter 13? How
                are you able to guess this?
              </li>
              <li>How does he feel about the fact he missed signaling the plane?</li>
              <li>When Brian sees the wolf, does that tell us anything?</li>
              <li>What is the mood or tone of this chapter?</li>
              <li>Describe what refraction is. How is Brian’s understanding of refraction help hm finally catch a
                fish?
              </li>
              <li>Give an example where Brian shows his cleverness or resourcefulness.</li>
              <li>Give an example that shows he has grit and persistence.</li>
            </ol>
            <h4>Vocabulary</h4>
            For each vocabulary word below, write a definition and then write a sentence using the word.<br/>
            <ol className="vocab">
              <li> verify</li>
              <li> exulted</li>
              <li> vital</li>
              <li> refracted</li>
              <li> corrosive</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener58} value={la7Essay58}/>

          <span className="days">LESSON 59 </span>
          <p> Read <i> Chapter 14 of Hatchet </i> and then answer the questions below.</p>
          <p>
            <ol className="vocab">
              <li>Brian believes that mistakes he makes in the woods are far more serious than mistakes he makes in the
                city.
              </li>
              <li>What does Brian believe is the "great, single driving influence in nature"?</li>
              <li>What lessons did the skunk teach Brian?</li>
              <li>How was Brian able to store fish?</li>
            </ol>
            <h4>Vocabulary</h4>
            For each vocabulary word below, write a definition and then write a sentence using the word.<br/>
            <ol className="vocab">
              <li> carp</li>
              <li> impaired</li>
              <li> rectify</li>
              <li> sear</li>
              <li> sulfurous</li>
              <li> corrosive</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener59} value={la7Essay59}/>

          <span className="days">LESSON 60 </span>
          <p> Read <i> Chapter 15 of Hatchet </i> and then answer the questions below.</p>
          <p>
            <ol className="vocab">
              <li>Has Brian thought a lot about going home in this chapter? Why do you think this is?</li>
              <li>Describe how living in the wild has taught Brian to see, smell, and hear differently than when he
                lived in the city.
              </li>
              <li>When Brian makes a mistake, why do the consequences feel serious?</li>
              <li>List two mistakes he made, the consequences he suffered for the mistakes and what he learned from
                them.
              </li>
              <li>How does Brian keep track of time?</li>
              <li>Why did the foolbirds drive Brian crazy? What was a trick that allowed him to find the foolbirds more
                easily? What let him know they were about to take flight?
              </li>
              <li>Why do you think the author reminds readers of the fact that it is much easier to get chicken from a
                store than to catch wild game?
              </li>
            </ol>
            <h4>Vocabulary</h4>
            For each vocabulary word below, write a definition and then write a sentence using the word.<br/>
            <ol className="vocab">
              <li> flurry</li>
              <li> bellowed</li>
              <li> stabilize</li>
              <li> camouflage</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener60} value={la7Essay60}/>

          <span className="days">LESSON 61 </span>
          <p> Read <i> Chapter 16 of Hatchet </i> and then answer the questions below.</p>
          <p>
            <ol className="vocab">
              <li>Write a 4-5 sentence summary of this chapter. Describe what happens to Brian and what two dangerous
                things happen.
              </li>
              <li>Why did Brian believe that dipping his hands in the water was nearly the last act of his life?</li>
              <li>Brian was able to feel more lighthearted than usual and show some humor. Explain when this happened.
              </li>
              <li>Who do you think Brian is talking to when he says, "Is this the best you can do?"</li>
              <li>When he was assessing how much damage the tornado caused, what did he discover?</li>
            </ol>
            <h4>Vocabulary</h4>
            For each vocabulary word below, write a definition and then write a sentence using the word.<br/>
            <ol className="vocab">
              <li> stabilize</li>
              <li> bounded</li>
              <li> retrieved</li>
              <li> stymied</li>
              <li> sputtered</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener61} value={la7Essay61}/>

          <span className="days">LESSON 62 </span>
          <p> Read <i> Chapter 17 of Hatchet </i> and then answer the questions below.</p>
          <p>
            <ol className="vocab">
              <li>Why does Brian build a raft? What does he call it.</li>
              <li>He’s building the raft to get to something. What is he trying to find? Explain why.</li>
              <li>After the tornado, Brian thinks about home. What does he think he might be doing if he were back home?
                What do you think you’d be feeling if you were him?
              </li>
              <li>Brian used to be out of place living in the wilderness. Do you think he has grown to become more a
                part of the wilderness? Explain why or why not?
              </li>
              <li>How do you think Brian has been dealing with the difficulties that have come his way?</li>
              <li>What did Brian do to get his life back to normal?</li>
              <li>Do you think Brian is learning patience? Give an example to support your answer?</li>
              <li>What did it mean when the author states that Brian slept a "healing sleep"?</li>
            </ol>
            <h4>Vocabulary</h4>
            For each vocabulary word below, write a definition and then write a sentence using the word.<br/>
            <ol className="vocab">
              <li> eddy</li>
              <li> stabilizer</li>
              <li> fuselage</li>
              <li> ruefully</li>
              <li> incessant</li>
              <li>hordes</li>
              <li>naturalist</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener62} value={la7Essay62}/>

          <span className="days">LESSON 63 </span>
          <p> Read <i> Chapter 18 of Hatchet </i> and then answer the questions below.</p>
          <p>
            <ol className="vocab">
              <li>How did Brian discover than he could cut his way through the aluminum skin of the plane?</li>
              <li>He made a mistake when he tried to bend the aluminum back from the braces. Describe what happened and
                how he solved the problem.
              </li>
              <li>Why did he bother to save the aluminum he cut away?</li>
              <li>Describe Brian’s attempts to get down to the plane.</li>
              <li>What was the outcome of his trip to the plane? Was he able to recover anything?</li>
              <li>What did Brian see that made him scream in horror?</li>
              <li>What was your reaction when Brian dropped his hatchet in the water?</li>
              <li>He knew he had to get his hatchet back because it was one of the things that had been keeping him
                alive. Write a list of all the things he used
                the hatchet for in his survival since he crash landed.
              </li>
              <li>You are getting close to the end of the book. There are a few ways things could go for Brian. He could
                be rescued, he could live out the rest of his life in the woods, or he could die. How do you think it
                will go for him? Can you think of an alternate ending not mentioned here?
              </li>
            </ol>
            <h4>Vocabulary</h4>
            For each vocabulary word below, write a definition and then write a sentence using the word.<br/>
            <ol className="vocab">
              <li> frenzied</li>
              <li> propel</li>
              <li> formers</li>
              <li> reconsidered</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener63} value={la7Essay63}/>

          <span className="days">LESSON 64 </span>
          <p> Read <i> Chapter 19 and Epilogue</i> and then answer the questions below.</p>
          <p>
            <ol className="vocab">
              <li>Do you remember the first thing Brian said to the pilot?</li>
              <li>Why did Brian not like having a rifle and lighter?</li>
              <li>What did Brian decide to do with the food that was in the survival bag?</li>
              <li>How did Brian think the items in the survival bag changed him?</li>
              <li>Think about Brian and how he acted when he first crash-landed in the wilderness. Describe how Brian
                changed in a permanent way.
              </li>
              <li>What became of the secret about his mother that he had been keeping?</li>
              <li>What is the main conflict in <i>Hatchet</i> and how is it resolved?</li>
              <li>Was Brian fortunate to be rescued when he was? How so?</li>
              <li>What did Brian think about the hatchet when his mother first gave it to him? How did he feel about it
                by the end of the story?
              </li>
              <li>Was there ever in point in the novel you would have wanted to change places with Brian? Explain why or
                why not.
              </li>
              <li>After Brian is rescued, do you think he will have a difficult time adjusting to being at home again?
              </li>
              <li>Did you feel that Brian’s story was believable and could have happened as the author described it?
                Explain your answer.
              </li>
            </ol>
            <h4>Vocabulary</h4>
            For each vocabulary word below, write a definition and then write a sentence using the word.<br/>
            <ol className="vocab">
              <li> sheath</li>
              <li> antiseptic</li>
              <li> pitch</li>
              <li> surge</li>
              <li> furor</li>
              <li> oblivious</li>
              <li> unwittingly</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener64} value={la7Essay64}/>

          <span className="days">LESSON 65 </span>
          <h4>Five Paragraph Essay</h4>
          <p> Do you think Brian is better or worse off for having experienced surviving alone in the Canadian
            wilderness? Before answering this question for your essay, think about the qualities he develops during
            that time and how these qualities may affect Brian for the rest of his life.</p>
          <p> Essay Requirements</p>
          <ul className="list">
            <li>Your first paragraph should begin with a hook to grab your reader’s attention. This should be followed
              by a clear thesis statement (main idea of your essay). This statement should convey the points or
              arguments you are going to make.
            </li>
            <li>Paragraphs 2 through 4 should provide examples from the book that support your thesis statement. Each
              paragraph should discuss a different point and use a different example. Using direct quotes from the
              novel can be effective in proving your point.
            </li>
            <li>Your conclusion should restate your thesis in a different way. End with a thoughtful summary.</li>
            <li>Each paragraph should be 3-6 sentences.</li>
          </ul>
          <p className="topBottom"><a href={require("../resources/languagearts/FiveParagraphEssayOutline.pdf")}
                                      rel="noreferrer" target="_blank">Click
            here for a 5 Paragraph Essay outline </a>if you need help in getting started. </p>
          <textarea className="textArea" onChange={onChangela7Listener65} value={la7Essay65}/>

          <span className="days">LESSON 66 </span>
          <h4>Survival Kit</h4>
          <p>Shortly before Brian gets rescued, you are given clues that summer is ending and it will be cold soon.
            Winter in the Canadian wilderness presents new problems that Brian would have to deal with. List what you
            think these problems will be. </p>
          <p>If you could prepare a survival kit to successfully get Brian through the winter, what would you include
            in the kit. List at least ten items you would place in the kit. </p>
          <p>Now imagine you are the one who is trying to survive in the Canadian wilderness in the middle of winter.
            Are there any items you would place in the survival kit for yourself that you didn’t include for
            Brian? </p>
          <textarea className="textArea" onChange={onChangela7Listener66} value={la7Essay66}/>

          <span className="days">LESSON 67 </span>
          <p className="topBottom">Watch the videos and complete the assignments posted below from Khan Academy: Close
            reading - Informational text - Mysteries of the Past. </p>
          <p className="topBottom">Read <a
            href="https://www.khanacademy.org/ela/cc-7th-reading-vocab/x4aa9073b12675eb1:cc-7th-mysteries-of-the-past/x4aa9073b12675eb1:untitled-44/a/welcome-to-the-mysteries-of-the-past-unit?modal=1"
            rel="noreferrer" target="_blank"> an
            overview. </a> of what you will cover in this unit.</p>
          <p className="topBottom">Review the <a
            href="https://www.khanacademy.org/ela/cc-7th-reading-vocab/x4aa9073b12675eb1:cc-7th-mysteries-of-the-past/x4aa9073b12675eb1:untitled-44/a/mysteries-of-the-past-unit-vocabulary?modal=1"
            rel="noreferrer" target="_blank"> Vocabulary </a>for this Unit.</p>
            <Video videoUrl="https://www.youtube.com/embed/5Eepm6Px5pc"/>
            <Video videoUrl="https://www.youtube.com/embed/-GY2Cj1w_PY"/>
            <Video videoUrl="https://www.youtube.com/embed/msHjgIsYOkU"/>
            <p className="topBottom">After you read <a
              href="https://www.khanacademy.org/ela/cc-7th-reading-vocab/x4aa9073b12675eb1:cc-7th-mysteries-of-the-past/x4aa9073b12675eb1:untitled-45/e/mysteries-of-the-past--reading-informational-text--the-roanoke-voyages-7?modal=1"
              rel="noreferrer" target="_blank"> The Roanoke Voyages 7,</a>
              answer the practice questions at the bottom of the article linked here from Khan Academy.
              Then in the textbox below, write a brief summary about what you read.</p>
            <textarea className="textArea" onChange={onChangela7Listener67} value={la7Essay67}/>

            <span className="days">LESSON 68 </span>
            <p className="topBottom">Watch the videos and complete the assignments posted below from Khan Academy: Close
              reading: argumentative text. </p>
            <Video videoUrl="https://www.youtube.com/embed/GvWH9ZXy9gY"/>
              <Video videoUrl="https://www.youtube.com/embed/XRt1N0sJJQo"/>
              <Video videoUrl="https://www.youtube.com/embed/NXO3KT8bne4"/>
              <p>After you read <a
                href="https://www.khanacademy.org/ela/cc-7th-reading-vocab/x4aa9073b12675eb1:cc-7th-mysteries-of-the-past/x4aa9073b12675eb1:close-reading-argumentative-text/e/mysteries-of-the-past--reading-informational-text--wanted--more-research-for-roanoke-7?modal=1"
                rel="noreferrer" target="_blank">WANTED: More Research For Roanoke,</a>
                complete the questions that follow. Then in the textbox below, write a brief summary about what you
                read.</p>
              <textarea className="textArea" onChange={onChangela7Listener68} value={la7Essay68}/>

              <span className="days">LESSON 69 </span>
              <p className="topBottom">Watch the videos and complete the assignments posted below from Khan Academy:
                Mysteries of the Past: Applying vocabulary knowledge. </p>
          <Video videoUrl="https://www.youtube.com/embed/CiNggzdWkIo"/>
                <Video videoUrl="https://www.youtube.com/embed/fiaPqgwJFo4"/>
                <Video videoUrl="https://www.youtube.com/embed/l3yWmXbC36s"/>
                <p>After you read <a href=" " rel="noreferrer" target="_blank"> "The Roanoke Voyages," </a>complete the
                  questions that follow the article. Then in the textbox below, write a brief summary about what you
                  read.</p>
                <textarea className="textArea" onChange={onChangela7Listener69} value={la7Essay69}/>

                <span className="days">LESSON 70 </span>
                <p className="topBottom">Watch the videos and complete the assignments posted below from Khan Academy:
                  Reading for understanding: fiction. </p>
                <Video videoUrl="https://www.youtube.com/embed/gUW2jit3uvo"/>
                  <p>After you read <a
                    href="https://www.khanacademy.org/ela/cc-7th-reading-vocab/x4aa9073b12675eb1:cc-7th-mysteries-of-the-past/x4aa9073b12675eb1:untitled-47/e/mysteries-of-the-past--reading-informational-text--the-mystery-child-7?modal=1"
                    rel="noreferrer" target="_blank"> "The Mystery Child," </a>complete
                    the questions that follow the article. Then in the textbox below, write a brief summary about what
                    you read.</p>
                  <textarea className="textArea" onChange={onChangela7Listener70} value={la7Essay70}/>

                  <span className="days">LESSON 71 </span>
                  <p className="topBottom">Watch the videos and complete the assignments posted below from Khan Academy:
                    Close reading - Informational text - Mysteries of the Past. </p>
                  <Video videoUrl="https://www.youtube.com/embed/Zr1xLtSMMLo"/>
                    <Video videoUrl="https://www.youtube.com/embed/ZASEsKwEvqE"/>
                    <p>After you read <a
                      href="https://www.khanacademy.org/ela/cc-7th-reading-vocab/x4aa9073b12675eb1:cc-7th-mysteries-of-the-past/x4aa9073b12675eb1:reading-for-understanding-fiction/e/mysteries-of-the-past--reading-historical-fiction-7?modal=1"
                      rel="noreferrer" target="_blank"> "A View from the Walnut Tree," </a>complete the questions that
                      follow the article. Then in the textbox below, write a brief summary about what you read.</p>
                    <textarea className="textArea" onChange={onChangela7Listener71} value={la7Essay71}/>

                    <span className="days">LESSON 72 </span>


                    <textarea className="textArea" onChange={onChangela7Listener72} value={la7Essay72}/>

                    <span className="days">LESSON 73 </span>


                    <textarea className="textArea" onChange={onChangela7Listener73} value={la7Essay73}/>

                    <span className="days">LESSON 74 </span>


                    <textarea className="textArea" onChange={onChangela7Listener74} value={la7Essay74}/>

                    <span className="days">LESSON 75 </span>


                    <textarea className="textArea" onChange={onChangela7Listener75} value={la7Essay75}/>

                    <span className="days">LESSON 76 </span>


                    <textarea className="textArea" onChange={onChangela7Listener76} value={la7Essay76}/>

                    <span className="days">LESSON 77 </span>


                    <textarea className="textArea" onChange={onChangela7Listener77} value={la7Essay77}/>

                    <span className="days">LESSON 78 </span>


                    <textarea className="textArea" onChange={onChangela7Listener78} value={la7Essay78}/>

                    <span className="days">LESSON 79 </span>


                    <textarea className="textArea" onChange={onChangela7Listener79} value={la7Essay79}/>

                    <span className="days">LESSON 80 </span>


                    <textarea className="textArea" onChange={onChangela7Listener80} value={la7Essay80}/>

                    <span className="days">LESSON 81 </span>


                    <textarea className="textArea" onChange={onChangela7Listener81} value={la7Essay81}/>

                    <span className="days">LESSON 82 </span>


                    <textarea className="textArea" onChange={onChangela7Listener82} value={la7Essay82}/>

                    <span className="days">LESSON 83 </span>


                    <textarea className="textArea" onChange={onChangela7Listener83} value={la7Essay83}/>

                    <span className="days">LESSON 84 </span>


                    <textarea className="textArea" onChange={onChangela7Listener84} value={la7Essay84}/>

                    <span className="days">LESSON 85 </span>


                    <textarea className="textArea" onChange={onChangela7Listener85} value={la7Essay85}/>

                    <span className="days">LESSON 86 </span>


                    <textarea className="textArea" onChange={onChangela7Listener86} value={la7Essay86}/>

                    <span className="days">LESSON 87 </span>


                    <textarea className="textArea" onChange={onChangela7Listener87} value={la7Essay87}/>

                    <span className="days">LESSON 88 </span>


                    <textarea className="textArea" onChange={onChangela7Listener88} value={la7Essay88}/>

                    <span className="days">LESSON 89 </span>


                    <textarea className="textArea" onChange={onChangela7Listener89} value={la7Essay89}/>

                    <span className="days">LESSON 90 </span>


                    <textarea className="textArea" onChange={onChangela7Listener90} value={la7Essay90}/>

                    <span className="days">LESSON 91 </span>


                    <textarea className="textArea" onChange={onChangela7Listener91} value={la7Essay91}/>

                    <span className="days">LESSON 92 </span>


                    <textarea className="textArea" onChange={onChangela7Listener92} value={la7Essay92}/>

                    <span className="days">LESSON 93 </span>


                    <textarea className="textArea" onChange={onChangela7Listener93} value={la7Essay93}/>

                    <span className="days">LESSON 94 </span>


                    <textarea className="textArea" onChange={onChangela7Listener94} value={la7Essay94}/>

                    <span className="days">LESSON 95 </span>


                    <textarea className="textArea" onChange={onChangela7Listener95} value={la7Essay95}/>

                    <span className="days">LESSON 96 </span>


                    <textarea className="textArea" onChange={onChangela7Listener96} value={la7Essay96}/>

                    <span className="days">LESSON 97 </span>


                    <textarea className="textArea" onChange={onChangela7Listener97} value={la7Essay97}/>

                    <span className="days">LESSON 98 </span>


                    <textarea className="textArea" onChange={onChangela7Listener98} value={la7Essay98}/>

                    <span className="days">LESSON 99 </span>


                    <textarea className="textArea" onChange={onChangela7Listener99} value={la7Essay99}/>

                    <span className="days">LESSON 100 </span>


                    <textarea className="textArea" onChange={onChangela7Listener100} value={la7Essay100}/>

                    {/*<span className="days">LESSON 101 </span>*/}


                    {/*<textarea className="textArea" onChange={onChangela7Listener101} value={la7Essay101}/>*/}

                    {/*<span className="days">LESSON 102 </span>*/}


                    {/*<textarea className="textArea" onChange={onChangela7Listener102} value={la7Essay102}/>*/}

                    {/*<span className="days">LESSON 103 </span>*/}


                    {/*<textarea className="textArea" onChange={onChangela7Listener103} value={la7Essay103}/>*/}

                    {/*<span className="days">LESSON 104 </span>*/}


                    {/*<textarea className="textArea" onChange={onChangela7Listener104} value={la7Essay104}/>*/}

                    {/*<span className="days">LESSON 105 </span>*/}


                    {/*<textarea className="textArea" onChange={onChangela7Listener105} value={la7Essay105}/>*/}

                    {/*<span className="days">LESSON 106 </span>*/}


                    {/*<textarea className="textArea" onChange={onChangela7Listener106} value={la7Essay106}/>*/}

                    {/*<span className="days">LESSON 107 </span>*/}


                    {/*<textarea className="textArea" onChange={onChangela7Listener107} value={la7Essay107}/>*/}

                    {/*<span className="days">LESSON 108 </span>*/}


                    {/*<textarea className="textArea" onChange={onChangela7Listener108} value={la7Essay108}/>*/}

                    {/*<span className="days">LESSON 109 </span>*/}


                    {/*<textarea className="textArea" onChange={onChangela7Listener109} value={la7Essay109}/>*/}

                    {/*<span className="days">LESSON 110 </span>*/}


                    {/*<textarea className="textArea" onChange={onChangela7Listener110} value={la7Essay110}/>*/}

                    {/*<span className="days">LESSON 111 </span>*/}


                    {/*<textarea className="textArea" onChange={onChangela7Listener111} value={la7Essay111}/>*/}

                    {/*<span className="days">LESSON 112 </span>*/}


                    {/*<textarea className="textArea" onChange={onChangela7Listener112} value={la7Essay112}/>*/}

                    {/*<span className="days">LESSON 113 </span>*/}


                    {/*<textarea className="textArea" onChange={onChangela7Listener113} value={la7Essay113}/>*/}

                    {/*<span className="days">LESSON 114 </span>*/}


                    {/*<textarea className="textArea" onChange={onChangela7Listener114} value={la7Essay114}/>*/}

                    {/*<span className="days">LESSON 115 </span>*/}


                    {/*<textarea className="textArea" onChange={onChangela7Listener115} value={la7Essay115}/>*/}

                    {/*<span className="days">LESSON 116 </span>*/}


                    {/*<textarea className="textArea" onChange={onChangela7Listener116} value={la7Essay116}/>*/}

                    {/*<span className="days">LESSON 117 </span>*/}


                    {/*<textarea className="textArea" onChange={onChangela7Listener117} value={la7Essay117}/>*/}

                    {/*<span className="days">LESSON 118 </span>*/}


                    {/*<textarea className="textArea" onChange={onChangela7Listener118} value={la7Essay118}/>*/}

                    {/*<span className="days">LESSON 119 </span>*/}


                    {/*<textarea className="textArea" onChange={onChangela7Listener119} value={la7Essay119}/>*/}

                    {/*<span className="days">LESSON 120 </span>*/}


                    {/*<textarea className="textArea" onChange={onChangela7Listener120} value={la7Essay120}/>*/}

                    {/*<span className="days">LESSON 121 </span>*/}


                    {/*<textarea className="textArea" onChange={onChangela7Listener121} value={la7Essay121}/>*/}

                    {/*<span className="days">LESSON 122 </span>*/}


                    {/*<textarea className="textArea" onChange={onChangela7Listener122} value={la7Essay122}/>*/}

                    {/*<span className="days">LESSON 123 </span>*/}


                    {/*<textarea className="textArea" onChange={onChangela7Listener123} value={la7Essay123}/>*/}

                    {/*<span className="days">LESSON 124 </span>*/}


                    {/*<textarea className="textArea" onChange={onChangela7Listener124} value={la7Essay124}/>*/}

                    {/*<span className="days">LESSON 125 </span>*/}


                    {/*<textarea className="textArea" onChange={onChangela7Listener125} value={la7Essay125}/>*/}

                    {/*<span className="days">LESSON 126 </span>*/}


                    {/*<textarea className="textArea" onChange={onChangela7Listener126} value={la7Essay126}/>*/}

                    {/*<span className="days">LESSON 127 </span>*/}


                    {/*<textarea className="textArea" onChange={onChangela7Listener127} value={la7Essay127}/>*/}

                    {/*<span className="days">LESSON 128 </span>*/}


                    {/*<textarea className="textArea" onChange={onChangela7Listener128} value={la7Essay128}/>*/}

                    {/*<span className="days">LESSON 129 </span>*/}


                    {/*<textarea className="textArea" onChange={onChangela7Listener129} value={la7Essay129}/>*/}

                    {/*<span className="days">LESSON 130 </span>*/}


                    {/*<textarea className="textArea" onChange={onChangela7Listener130} value={la7Essay130}/>*/}

                    {/*<span className="days">LESSON 131 </span>*/}


                    {/*<textarea className="textArea" onChange={onChangela7Listener131} value={la7Essay131}/>*/}

                    {/*<span className="days">LESSON 132 </span>*/}


                    {/*<textarea className="textArea" onChange={onChangela7Listener132} value={la7Essay132}/>*/}

                    {/*<span className="days">LESSON 133 </span>*/}


                    {/*<textarea className="textArea" onChange={onChangela7Listener133} value={la7Essay133}/>*/}

                    {/*<span className="days">LESSON 134 </span>*/}


                    {/*<textarea className="textArea" onChange={onChangela7Listener134} value={la7Essay134}/>*/}

                    {/*<span className="days">LESSON 135 </span>*/}


                    {/*<textarea className="textArea" onChange={onChangela7Listener135} value={la7Essay135}/>*/}

                    {/*<span className="days">LESSON 136 </span>*/}


                    {/*<textarea className="textArea" onChange={onChangela7Listener136} value={la7Essay136}/>*/}

                    {/*<span className="days">LESSON 137 </span>*/}


                    {/*<textarea className="textArea" onChange={onChangela7Listener137} value={la7Essay137}/>*/}

                    {/*<span className="days">LESSON 138 </span>*/}


                    {/*<textarea className="textArea" onChange={onChangela7Listener138} value={la7Essay138}/>*/}

                    {/*<span className="days">LESSON 139 </span>*/}


                    {/*<textarea className="textArea" onChange={onChangela7Listener139} value={la7Essay139}/>*/}

                    {/*<span className="days">LESSON 140 </span>*/}


                    {/*<textarea className="textArea" onChange={onChangela7Listener140} value={la7Essay140}/>*/}

                    {/*<span className="days">LESSON 141 </span>*/}


                    {/*<textarea className="textArea" onChange={onChangela7Listener141} value={la7Essay141}/>*/}

                    {/*<span className="days">LESSON 142 </span>*/}


                    {/*<textarea className="textArea" onChange={onChangela7Listener142} value={la7Essay142}/>*/}

                    {/*<span className="days">LESSON 143 </span>*/}


                    {/*<textarea className="textArea" onChange={onChangela7Listener143} value={la7Essay143}/>*/}

                    {/*<span className="days">LESSON 144 </span>*/}


                    {/*<textarea className="textArea" onChange={onChangela7Listener144} value={la7Essay144}/>*/}

                    {/*<span className="days">LESSON 145 </span>*/}


                    {/*<textarea className="textArea" onChange={onChangela7Listener145} value={la7Essay145}/>*/}

                    {/*<span className="days">LESSON 146 </span>*/}


                    {/*<textarea className="textArea" onChange={onChangela7Listener146} value={la7Essay146}/>*/}

                    {/*<span className="days">LESSON 147 </span>*/}


                    {/*<textarea className="textArea" onChange={onChangela7Listener147} value={la7Essay147}/>*/}

                    {/*<span className="days">LESSON 148 </span>*/}


                    {/*<textarea className="textArea" onChange={onChangela7Listener148} value={la7Essay148}/>*/}

                    {/*<span className="days">LESSON 149 </span>*/}


                    {/*<textarea className="textArea" onChange={onChangela7Listener149} value={la7Essay149}/>*/}

                    {/*<span className="days">LESSON 150 </span>*/}


                    {/*<textarea className="textArea" onChange={onChangela7Listener150} value={la7Essay150}/>*/}

                    {/*<span className="days">LESSON 151 </span>*/}


                    {/*<textarea className="textArea" onChange={onChangela7Listener151} value={la7Essay151}/>*/}

                    {/*<span className="days">LESSON 152 </span>*/}


                    {/*<textarea className="textArea" onChange={onChangela7Listener152} value={la7Essay152}/>*/}

                    {/*<span className="days">LESSON 153 </span>*/}


                    {/*<textarea className="textArea" onChange={onChangela7Listener153} value={la7Essay153}/>*/}

                    {/*<span className="days">LESSON 154 </span>*/}


                    {/*<textarea className="textArea" onChange={onChangela7Listener154} value={la7Essay154}/>*/}

                    {/*<span className="days">LESSON 155 </span>*/}


                    {/*<textarea className="textArea" onChange={onChangela7Listener155} value={la7Essay155}/>*/}

                    {/*<span className="days">LESSON 156 </span>*/}


                    {/*<textarea className="textArea" onChange={onChangela7Listener156} value={la7Essay156}/>*/}

                    {/*<span className="days">LESSON 157 </span>*/}


                    {/*<textarea className="textArea" onChange={onChangela7Listener157} value={la7Essay157}/>*/}

                    {/*<span className="days">LESSON 158 </span>*/}


                    {/*<textarea className="textArea" onChange={onChangela7Listener158} value={la7Essay158}/>*/}

                    {/*<span className="days">LESSON 159 </span>*/}


                    {/*<textarea className="textArea" onChange={onChangela7Listener159} value={la7Essay159}/>*/}

                    {/*<span className="days">LESSON 160 </span>*/}


                    {/*<textarea className="textArea" onChange={onChangela7Listener160} value={la7Essay160}/>*/}

                    {/*<span className="days">LESSON 161 </span>*/}


                    {/*<textarea className="textArea" onChange={onChangela7Listener161} value={la7Essay161}/>*/}

                    {/*<span className="days">LESSON 162 </span>*/}


                    {/*<textarea className="textArea" onChange={onChangela7Listener162} value={la7Essay162}/>*/}

                    {/*<span className="days">LESSON 163 </span>*/}


                    {/*<textarea className="textArea" onChange={onChangela7Listener163} value={la7Essay163}/>*/}

                    {/*<span className="days">LESSON 164 </span>*/}


                    {/*<textarea className="textArea" onChange={onChangela7Listener164} value={la7Essay164}/>*/}

                    {/*<span className="days">LESSON 165 </span>*/}


                    {/*<textarea className="textArea" onChange={onChangela7Listener165} value={la7Essay165}/>*/}

                    {/*<span className="days">LESSON 166 </span>*/}


                    {/*<textarea className="textArea" onChange={onChangela7Listener166} value={la7Essay166}/>*/}

                    {/*<span className="days">LESSON 167 </span>*/}


                    {/*<textarea className="textArea" onChange={onChangela7Listener167} value={la7Essay167}/>*/}

                    {/*<span className="days">LESSON 168 </span>*/}


                    {/*<textarea className="textArea" onChange={onChangela7Listener168} value={la7Essay168}/>*/}

                    {/*<span className="days">LESSON 169 </span>*/}


                    {/*<textarea className="textArea" onChange={onChangela7Listener169} value={la7Essay169}/>*/}

                    {/*<span className="days">LESSON 170 </span>*/}


                    {/*<textarea className="textArea" onChange={onChangela7Listener170} value={la7Essay170}/>*/}

                    {/*<span className="days">LESSON 171 </span>*/}


                    {/*<textarea className="textArea" onChange={onChangela7Listener171} value={la7Essay171}/>*/}

                    {/*<span className="days">LESSON 172 </span>*/}


                    {/*<textarea className="textArea" onChange={onChangela7Listener172} value={la7Essay172}/>*/}

                    {/*<span className="days">LESSON 173 </span>*/}


                    {/*<textarea className="textArea" onChange={onChangela7Listener173} value={la7Essay173}/>*/}

                    {/*<span className="days">LESSON 174 </span>*/}


                    {/*<textarea className="textArea" onChange={onChangela7Listener174} value={la7Essay174}/>*/}

                    {/*<span className="days">LESSON 175 </span>*/}


                    {/*<textarea className="textArea" onChange={onChangela7Listener175} value={la7Essay175}/>*/}

                    {/*<span className="days">LESSON 176 </span>*/}


                    {/*<textarea className="textArea" onChange={onChangela7Listener176} value={la7Essay176}/>*/}

                    {/*<span className="days">LESSON 177 </span>*/}


                    {/*<textarea className="textArea" onChange={onChangela7Listener177} value={la7Essay177}/>*/}

                    {/*<span className="days">LESSON 178 </span>*/}


                    {/*<textarea className="textArea" onChange={onChangela7Listener178} value={la7Essay178}/>*/}

                    {/*<span className="days">LESSON 179 </span>*/}


                    {/*<textarea className="textArea" onChange={onChangela7Listener179} value={la7Essay179}/>*/}

                    {/*<span className="days">LESSON 180 </span>*/}


                    {/*<textarea className="textArea" onChange={onChangela7Listener180} value={la7Essay180}/>*/}
        </div>
      </section>
      <Confetti/>
      <h3 style={{ textAlign: "center", height: "100vh" }}>You finished 7th Grade Language Arts ! </h3>
    </form>
)
}
export default LA7Component