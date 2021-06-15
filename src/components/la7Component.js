import React from "react"
import Video from "./video"
import "../styles/styles.css"

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
  // const [la7Essay10, setla7Essay10] = useLocalStorageState("la7Essay10", "")
  // const [la7Essay11, setla7Essay11] = useLocalStorageState("la7Essay11", "")
  // const [la7Essay12, setla7Essay12] = useLocalStorageState("la7Essay12", "")
  // const [la7Essay13, setla7Essay13] = useLocalStorageState("la7Essay13", "")
  // const [la7Essay14, setla7Essay14] = useLocalStorageState("la7Essay14", "")
  // const [la7Essay15, setla7Essay15] = useLocalStorageState("la7Essay15", "")
  // const [la7Essay16, setla7Essay16] = useLocalStorageState("la7Essay16", "")
  // const [la7Essay17, setla7Essay17] = useLocalStorageState("la7Essay17", "")
  // const [la7Essay18, setla7Essay18] = useLocalStorageState("la7Essay18", "")
  // const [la7Essay19, setla7Essay19] = useLocalStorageState("la7Essay19", "")
  // const [la7Essay20, setla7Essay20] = useLocalStorageState("la7Essay20", "")
  // const [la7Essay21, setla7Essay21] = useLocalStorageState("la7Essay21", "")
  // const [la7Essay22, setla7Essay22] = useLocalStorageState("la7Essay22", "")
  // const [la7Essay23, setla7Essay23] = useLocalStorageState("la7Essay23", "")
  // const [la7Essay24, setla7Essay24] = useLocalStorageState("la7Essay24", "")
  // const [la7Essay25, setla7Essay25] = useLocalStorageState("la7Essay25", "")
  // const [la7Essay26, setla7Essay26] = useLocalStorageState("la7Essay26", "")
  // const [la7Essay27, setla7Essay27] = useLocalStorageState("la7Essay27", "")
  // const [la7Essay28, setla7Essay28] = useLocalStorageState("la7Essay28", "")
  // const [la7Essay29, setla7Essay29] = useLocalStorageState("la7Essay29", "")
  // const [la7Essay30, setla7Essay30] = useLocalStorageState("la7Essay30", "")
  // const [la7Essay31, setla7Essay31] = useLocalStorageState("la7Essay31", "")
  // const [la7Essay32, setla7Essay32] = useLocalStorageState("la7Essay32", "")
  // const [la7Essay33, setla7Essay33] = useLocalStorageState("la7Essay33", "")
  // const [la7Essay34, setla7Essay34] = useLocalStorageState("la7Essay34", "")
  // const [la7Essay35, setla7Essay35] = useLocalStorageState("la7Essay35", "")
  // const [la7Essay36, setla7Essay36] = useLocalStorageState("la7Essay36", "")
  // const [la7Essay37, setla7Essay37] = useLocalStorageState("la7Essay37", "")
  // const [la7Essay38, setla7Essay38] = useLocalStorageState("la7Essay38", "")
  // const [la7Essay39, setla7Essay39] = useLocalStorageState("la7Essay39", "")
  // const [la7Essay40, setla7Essay40] = useLocalStorageState("la7Essay40", "")
  // const [la7Essay41, setla7Essay41] = useLocalStorageState("la7Essay41", "")
  // const [la7Essay42, setla7Essay42] = useLocalStorageState("la7Essay42", "")
  // const [la7Essay43, setla7Essay43] = useLocalStorageState("la7Essay43", "")
  // const [la7Essay44, setla7Essay44] = useLocalStorageState("la7Essay44", "")
  // const [la7Essay45, setla7Essay45] = useLocalStorageState("la7Essay45", "")
  // const [la7Essay46, setla7Essay46] = useLocalStorageState("la7Essay46", "")
  // const [la7Essay47, setla7Essay47] = useLocalStorageState("la7Essay47", "")
  // const [la7Essay48, setla7Essay48] = useLocalStorageState("la7Essay48", "")
  // const [la7Essay49, setla7Essay49] = useLocalStorageState("la7Essay49", "")
  // const [la7Essay50, setla7Essay50] = useLocalStorageState("la7Essay50", "")
  // const [la7Essay51, setla7Essay51] = useLocalStorageState("la7Essay52", "")
  // const [la7Essay52, setla7Essay52] = useLocalStorageState("la7Essay53", "")
  // const [la7Essay53, setla7Essay53] = useLocalStorageState("la7Essay54", "")
  // const [la7Essay54, setla7Essay54] = useLocalStorageState("la7Essay54", "")
  // const [la7Essay55, setla7Essay55] = useLocalStorageState("la7Essay5", "")
  // const [la7Essay56, setla7Essay56] = useLocalStorageState("la7Essay56", "")
  // const [la7Essay57, setla7Essay57] = useLocalStorageState("la7Essay57", "")
  // const [la7Essay58, setla7Essay58] = useLocalStorageState("la7Essay58", "")
  // const [la7Essay59, setla7Essay59] = useLocalStorageState("la7Essay59", "")
  // const [la7Essay60, setla7Essay60] = useLocalStorageState("la7Essay60", "")
  // const [la7Essay61, setla7Essay61] = useLocalStorageState("la7Essay61", "")
  // const [la7Essay62, setla7Essay62] = useLocalStorageState("la7Essay62", "")
  // const [la7Essay63, setla7Essay63] = useLocalStorageState("la7Essay63", "")
  // const [la7Essay64, setla7Essay64] = useLocalStorageState("la7Essay64", "")
  // const [la7Essay65, setla7Essay65] = useLocalStorageState("la7Essay65", "")
  // const [la7Essay66, setla7Essay66] = useLocalStorageState("la7Essay66", "")
  // const [la7Essay67, setla7Essay67] = useLocalStorageState("la7Essay67", "")
  // const [la7Essay68, setla7Essay68] = useLocalStorageState("la7Essay68", "")
  // const [la7Essay69, setla7Essay69] = useLocalStorageState("la7Essay69", "")
  // const [la7Essay70, setla7Essay70] = useLocalStorageState("la7Essay70", "")
  // const [la7Essay71, setla7Essay71] = useLocalStorageState("la7Essay71", "")
  // const [la7Essay72, setla7Essay72] = useLocalStorageState("la7Essay72", "")
  // const [la7Essay73, setla7Essay73] = useLocalStorageState("la7Essay73", "")
  // const [la7Essay74, setla7Essay74] = useLocalStorageState("la7Essay74", "")
  // const [la7Essay75, setla7Essay75] = useLocalStorageState("la7Essay75", "")
  // const [la7Essay76, setla7Essay76] = useLocalStorageState("la7Essay76", "")
  // const [la7Essay77, setla7Essay77] = useLocalStorageState("la7Essay77", "")
  // const [la7Essay78, setla7Essay78] = useLocalStorageState("la7Essay78", "")
  // const [la7Essay79, setla7Essay79] = useLocalStorageState("la7Essay79", "")
  // const [la7Essay80, setla7Essay80] = useLocalStorageState("la7Essay80", "")
  // const [la7Essay81, setla7Essay81] = useLocalStorageState("la7Essay81", "")
  // const [la7Essay82, setla7Essay82] = useLocalStorageState("la7Essay82", "")
  // const [la7Essay83, setla7Essay83] = useLocalStorageState("la7Essay83", "")
  // const [la7Essay84, setla7Essay84] = useLocalStorageState("la7Essay84", "")
  // const [la7Essay85, setla7Essay85] = useLocalStorageState("la7Essay85", "")
  // const [la7Essay86, setla7Essay86] = useLocalStorageState("la7Essay86", "")
  // const [la7Essay87, setla7Essay87] = useLocalStorageState("la7Essay87", "")
  // const [la7Essay88, setla7Essay88] = useLocalStorageState("la7Essay88", "")
  // const [la7Essay89, setla7Essay89] = useLocalStorageState("la7Essay89", "")
  // const [la7Essay90, setla7Essay90] = useLocalStorageState("la7Essay90", "")
  // const [la7Essay91, setla7Essay91] = useLocalStorageState("la7Essay91", "")
  // const [la7Essay92, setla7Essay92] = useLocalStorageState("la7Essay93", "")
  // const [la7Essay93, setla7Essay93] = useLocalStorageState("la7Essay94", "")
  // const [la7Essay94, setla7Essay94] = useLocalStorageState("la7Essay95", "")
  // const [la7Essay95, setla7Essay95] = useLocalStorageState("la7Essay96", "")
  // const [la7Essay96, setla7Essay96] = useLocalStorageState("la7Essay97", "")
  // const [la7Essay97, setla7Essay97] = useLocalStorageState("la7Essay98", "")
  // const [la7Essay98, setla7Essay98] = useLocalStorageState("la7Essay98", "")
  // const [la7Essay99, setla7Essay99] = useLocalStorageState("la7Essay99", "")
  // const [la7Essay100, setla7Essay100] = useLocalStorageState("la7Essay100", "")
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
  // const onChangela7Listener10 = (event) => {
  //   setla7Essay10(event.target.value)
  // }
  // const onChangela7Listener11 = (event) => {
  //   setla7Essay11(event.target.value)
  // }
  // const onChangela7Listener12 = (event) => {
  //   setla7Essay12(event.target.value)
  // }
  // const onChangela7Listener13 = (event) => {
  //   setla7Essay13(event.target.value)
  // }
  // const onChangela7Listener14 = (event) => {
  //   setla7Essay14(event.target.value)
  // }
  // const onChangela7Listener15 = (event) => {
  //   setla7Essay15(event.target.value)
  // }
  // const onChangela7Listener16 = (event) => {
  //   setla7Essay16(event.target.value)
  // }
  // const onChangela7Listener17 = (event) => {
  //   setla7Essay17(event.target.value)
  // }
  // const onChangela7Listener18 = (event) => {
  //   setla7Essay18(event.target.value)
  // }
  // const onChangela7Listener19 = (event) => {
  //   setla7Essay19(event.target.value)
  // }
  // const onChangela7Listener20 = (event) => {
  //   setla7Essay20(event.target.value)
  // }
  // const onChangela7Listener21 = (event) => {
  //   setla7Essay21(event.target.value)
  // }
  // const onChangela7Listener22 = (event) => {
  //   setla7Essay22(event.target.value)
  // }
  // const onChangela7Listener23 = (event) => {
  //   setla7Essay23(event.target.value)
  // }
  // const onChangela7Listener24 = (event) => {
  //   setla7Essay24(event.target.value)
  // }
  // const onChangela7Listener25 = (event) => {
  //   setla7Essay25(event.target.value)
  // }
  // const onChangela7Listener26 = (event) => {
  //   setla7Essay26(event.target.value)
  // }
  // const onChangela7Listener27 = (event) => {
  //   setla7Essay27(event.target.value)
  // }
  // const onChangela7Listener28 = (event) => {
  //   setla7Essay28(event.target.value)
  // }
  // const onChangela7Listener29 = (event) => {
  //   setla7Essay29(event.target.value)
  // }
  // const onChangela7Listener30 = (event) => {
  //   setla7Essay30(event.target.value)
  // }
  // const onChangela7Listener31 = (event) => {
  //   setla7Essay31(event.target.value)
  // }
  // const onChangela7Listener32 = (event) => {
  //   setla7Essay32(event.target.value)
  // }
  // const onChangela7Listener33 = (event) => {
  //   setla7Essay33(event.target.value)
  // }
  // const onChangela7Listener34 = (event) => {
  //   setla7Essay34(event.target.value)
  // }
  // const onChangela7Listener35 = (event) => {
  //   setla7Essay35(event.target.value)
  // }
  // const onChangela7Listener36 = (event) => {
  //   setla7Essay36(event.target.value)
  // }
  // const onChangela7Listener37 = (event) => {
  //   setla7Essay37(event.target.value)
  // }
  // const onChangela7Listener38 = (event) => {
  //   setla7Essay38(event.target.value)
  // }
  // const onChangela7Listener39 = (event) => {
  //   setla7Essay39(event.target.value)
  // }
  // const onChangela7Listener40 = (event) => {
  //   setla7Essay40(event.target.value)
  // }
  // const onChangela7Listener41 = (event) => {
  //   setla7Essay41(event.target.value)
  // }
  // const onChangela7Listener42 = (event) => {
  //   setla7Essay42(event.target.value)
  // }
  // const onChangela7Listener43 = (event) => {
  //   setla7Essay43(event.target.value)
  // }
  // const onChangela7Listener44 = (event) => {
  //   setla7Essay44(event.target.value)
  // }
  // const onChangela7Listener45 = (event) => {
  //   setla7Essay45(event.target.value)
  // }
  // const onChangela7Listener46 = (event) => {
  //   setla7Essay46(event.target.value)
  // }
  // const onChangela7Listener47 = (event) => {
  //   setla7Essay47(event.target.value)
  // }
  // const onChangela7Listener48 = (event) => {
  //   setla7Essay48(event.target.value)
  // }
  // const onChangela7Listener49 = (event) => {
  //   setla7Essay49(event.target.value)
  // }
  // const onChangela7Listener50 = (event) => {
  //   setla7Essay50(event.target.value)
  // }
  // const onChangela7Listener51 = (event) => {
  //   setla7Essay51(event.target.value)
  // }
  // const onChangela7Listener52 = (event) => {
  //   setla7Essay52(event.target.value)
  // }
  // const onChangela7Listener53 = (event) => {
  //   setla7Essay53(event.target.value)
  // }
  // const onChangela7Listener54 = (event) => {
  //   setla7Essay54(event.target.value)
  // }
  // const onChangela7Listener55 = (event) => {
  //   setla7Essay55(event.target.value)
  // }
  // const onChangela7Listener56 = (event) => {
  //   setla7Essay56(event.target.value)
  // }
  // const onChangela7Listener57 = (event) => {
  //   setla7Essay57(event.target.value)
  // }
  // const onChangela7Listener58 = (event) => {
  //   setla7Essay58(event.target.value)
  // }
  // const onChangela7Listener59 = (event) => {
  //   setla7Essay59(event.target.value)
  // }
  // const onChangela7Listener60 = (event) => {
  //   setla7Essay60(event.target.value)
  // }
  // const onChangela7Listener61 = (event) => {
  //   setla7Essay61(event.target.value)
  // }
  // const onChangela7Listener62 = (event) => {
  //   setla7Essay62(event.target.value)
  // }
  // const onChangela7Listener63 = (event) => {
  //   setla7Essay63(event.target.value)
  // }
  // const onChangela7Listener64 = (event) => {
  //   setla7Essay64(event.target.value)
  // }
  // const onChangela7Listener65 = (event) => {
  //   setla7Essay65(event.target.value)
  // }
  // const onChangela7Listener66 = (event) => {
  //   setla7Essay66(event.target.value)
  // }
  // const onChangela7Listener67 = (event) => {
  //   setla7Essay67(event.target.value)
  // }
  // const onChangela7Listener68 = (event) => {
  //   setla7Essay68(event.target.value)
  // }
  // const onChangela7Listener69 = (event) => {
  //   setla7Essay69(event.target.value)
  // }
  // const onChangela7Listener70 = (event) => {
  //   setla7Essay70(event.target.value)
  // }
  // const onChangela7Listener71 = (event) => {
  //   setla7Essay71(event.target.value)
  // }
  // const onChangela7Listener72 = (event) => {
  //   setla7Essay72(event.target.value)
  // }
  // const onChangela7Listener73 = (event) => {
  //   setla7Essay73(event.target.value)
  // }
  // const onChangela7Listener74 = (event) => {
  //   setla7Essay74(event.target.value)
  // }
  // const onChangela7Listener75 = (event) => {
  //   setla7Essay75(event.target.value)
  // }
  // const onChangela7Listener76 = (event) => {
  //   setla7Essay76(event.target.value)
  // }
  // const onChangela7Listener77 = (event) => {
  //   setla7Essay77(event.target.value)
  // }
  // const onChangela7Listener78 = (event) => {
  //   setla7Essay78(event.target.value)
  // }
  // const onChangela7Listener79 = (event) => {
  //   setla7Essay79(event.target.value)
  // }
  // const onChangela7Listener80 = (event) => {
  //   setla7Essay80(event.target.value)
  // }
  // const onChangela7Listener81 = (event) => {
  //   setla7Essay81(event.target.value)
  // }
  // const onChangela7Listener82 = (event) => {
  //   setla7Essay82(event.target.value)
  // }
  // const onChangela7Listener83 = (event) => {
  //   setla7Essay83(event.target.value)
  // }
  // const onChangela7Listener84 = (event) => {
  //   setla7Essay84(event.target.value)
  // }
  // const onChangela7Listener85 = (event) => {
  //   setla7Essay85(event.target.value)
  // }
  // const onChangela7Listener86 = (event) => {
  //   setla7Essay86(event.target.value)
  // }
  // const onChangela7Listener87 = (event) => {
  //   setla7Essay87(event.target.value)
  // }
  // const onChangela7Listener88 = (event) => {
  //   setla7Essay88(event.target.value)
  // }
  // const onChangela7Listener89 = (event) => {
  //   setla7Essay89(event.target.value)
  // }
  // const onChangela7Listener90 = (event) => {
  //   setla7Essay90(event.target.value)
  // }
  // const onChangela7Listener91 = (event) => {
  //   setla7Essay91(event.target.value)
  // }
  // const onChangela7Listener92 = (event) => {
  //   setla7Essay92(event.target.value)
  // }
  // const onChangela7Listener93 = (event) => {
  //   setla7Essay93(event.target.value)
  // }
  // const onChangela7Listener94 = (event) => {
  //   setla7Essay94(event.target.value)
  // }
  // const onChangela7Listener95 = (event) => {
  //   setla7Essay95(event.target.value)
  // }
  // const onChangela7Listener96 = (event) => {
  //   setla7Essay96(event.target.value)
  // }
  // const onChangela7Listener97 = (event) => {
  //   setla7Essay97(event.target.value)
  // }
  // const onChangela7Listener98 = (event) => {
  //   setla7Essay98(event.target.value)
  // }
  // const onChangela7Listener99 = (event) => {
  //   setla7Essay99(event.target.value)
  // }
  // const onChangela7Listener100 = (event) => {
  //   setla7Essay100(event.target.value)
  // }
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
                                                      target="_blank">CHAPTER 1 of <i> The Little Prince. </i> </a> Then answer the questions posted below.
          </p>
          <Video videoUrl="https://www.youtube.com/embed/9gARHWfXE40"/>
          <p><ol className="vocab">
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
              <li>indulgence: <i style={{color: "#4f5979"}}> the act of doing something that you enjoy but that is usually thought of as wrong or
                unhealthy. "Chocolate is my only indulgence."</i>
              </li>
              <li>dedicate</li>
              <li>magnificent</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener1} value={la7Essay1}/>

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


          <textarea className="textArea" onChange={onChangela8Listener10} value={la8Essay10}/>

          <span className="days">LESSON 11 </span>


          <textarea className="textArea" onChange={onChangela8Listener11} value={la8Essay11}/>

          <span className="days">LESSON 12 </span>


          <textarea className="textArea" onChange={onChangela8Listener12} value={la8Essay12}/>

          <span className="days">LESSON 13 </span>


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
          )
          }

        </div>
      </section>
    </form>
  )
}
export default LA7Component