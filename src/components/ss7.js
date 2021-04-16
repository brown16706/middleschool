import React from "react"
import Video from "./video"


function useLocalStorageState(key, defaultValue = "") {
  const [state, setState] = React.useState(
    () => window.localStorage.getItem(key) || defaultValue
  )
  React.useEffect(() => {
    window.localStorage.setItem(key, state)
  }, [state, key])
  return [state, setState]
}

export default function SS7() {
  const [SS7Essay, setSS7Essay] = useLocalStorageState("SS7Essay", "")
  const [SS7Essay2, setSS7Essay2] = useLocalStorageState("SS7Essay2", "")
  const [SS7Essay3, setSS7Essay3] = useLocalStorageState("SS7Essay3", "")
  const [SS7Essay4, setSS7Essay4] = useLocalStorageState("SS7Essay4", "")
  const [SS7Essay5, setSS7Essay5] = useLocalStorageState("SS7Essay5", "")
  const [SS7Essay6, setSS7Essay6] = useLocalStorageState("SS7Essay6", "")
  const [SS7Essay7, setSS7Essay7] = useLocalStorageState("SS7Essay7", "")
  const [SS7Essay8, setSS7Essay8] = useLocalStorageState("SS7Essay8", "")
  const [SS7Essay9, setSS7Essay9] = useLocalStorageState("SS7Essay9", "")
  const [SS7Essay10, setSS7Essay10] = useLocalStorageState("SS7Essay10", "")
  const [SS7Essay11, setSS7Essay11] = useLocalStorageState("SS7Essay11", "")
  const [SS7Essay12, setSS7Essay12] = useLocalStorageState("SS7Essay12", "")
  const [SS7Essay13, setSS7Essay13] = useLocalStorageState("SS7Essay13", "")
  const [SS7Essay14, setSS7Essay14] = useLocalStorageState("SS7Essay14", "")
  const [SS7Essay15, setSS7Essay15] = useLocalStorageState("SS7Essay15", "")
  const [SS7Essay16, setSS7Essay16] = useLocalStorageState("SS7Essay16", "")
  const [SS7Essay17, setSS7Essay17] = useLocalStorageState("SS7Essay17", "")
  const [SS7Essay18, setSS7Essay18] = useLocalStorageState("SS7Essay18", "")
  const [SS7Essay19, setSS7Essay19] = useLocalStorageState("SS7Essay19", "")
  const [SS7Essay20, setSS7Essay20] = useLocalStorageState("SS7Essay20", "")
  const [SS7Essay21, setSS7Essay21] = useLocalStorageState("SS7Essay21", "")
  const [SS7Essay22, setSS7Essay22] = useLocalStorageState("SS7Essay22", "")
  const [SS7Essay23, setSS7Essay23] = useLocalStorageState("SS7Essay23", "")
  const [SS7Essay24, setSS7Essay24] = useLocalStorageState("SS7Essay24", "")
  const [SS7Essay25, setSS7Essay25] = useLocalStorageState("SS7Essay25", "")
  const [SS7Essay26, setSS7Essay26] = useLocalStorageState("SS7Essay26", "")
  const [SS7Essay27, setSS7Essay27] = useLocalStorageState("SS7Essay27", "")
  const [SS7Essay28, setSS7Essay28] = useLocalStorageState("SS7Essay28", "")
  const [SS7Essay29, setSS7Essay29] = useLocalStorageState("SS7Essay29", "")
  const [SS7Essay30, setSS7Essay30] = useLocalStorageState("SS7Essay30", "")
  const [SS7Essay31, setSS7Essay31] = useLocalStorageState("SS7Essay31", "")
  const [SS7Essay32, setSS7Essay32] = useLocalStorageState("SS7Essay32", "")
  const [SS7Essay33, setSS7Essay33] = useLocalStorageState("SS7Essay33", "")
  const [SS7Essay34, setSS7Essay34] = useLocalStorageState("SS7Essay34", "")
  const [SS7Essay35, setSS7Essay35] = useLocalStorageState("SS7Essay35", "")
  const [SS7Essay36, setSS7Essay36] = useLocalStorageState("SS7Essay36", "")
  const [SS7Essay37, setSS7Essay37] = useLocalStorageState("SS7Essay37", "")
  const [SS7Essay38, setSS7Essay38] = useLocalStorageState("SS7Essay38", "")
  const [SS7Essay39, setSS7Essay39] = useLocalStorageState("SS7Essay39", "")
  const [SS7Essay40, setSS7Essay40] = useLocalStorageState("SS7Essay40", "")
  const [SS7Essay41, setSS7Essay41] = useLocalStorageState("SS7Essay41", "")
  const [SS7Essay42, setSS7Essay42] = useLocalStorageState("SS7Essay42", "")
  const [SS7Essay43, setSS7Essay43] = useLocalStorageState("SS7Essay43", "")
  const [SS7Essay44, setSS7Essay44] = useLocalStorageState("SS7Essay44", "")
  const [SS7Essay45, setSS7Essay45] = useLocalStorageState("SS7Essay45", "")
  const [SS7Essay46, setSS7Essay46] = useLocalStorageState("SS7Essay46", "")
  const [SS7Essay47, setSS7Essay47] = useLocalStorageState("SS7Essay47", "")
  const [SS7Essay48, setSS7Essay48] = useLocalStorageState("SS7Essay48", "")
  const [SS7Essay49, setSS7Essay49] = useLocalStorageState("SS7Essay49", "")
  const [SS7Essay50, setSS7Essay50] = useLocalStorageState("SS7Essay50", "")
  const [SS7Essay51, setSS7Essay51] = useLocalStorageState("SS7Essay52", "")
  const [SS7Essay52, setSS7Essay52] = useLocalStorageState("SS7Essay53", "")
  const [SS7Essay53, setSS7Essay53] = useLocalStorageState("SS7Essay54", "")
  const [SS7Essay54, setSS7Essay54] = useLocalStorageState("SS7Essay54", "")
  const [SS7Essay55, setSS7Essay55] = useLocalStorageState("SS7Essay5", "")
  const [SS7Essay56, setSS7Essay56] = useLocalStorageState("SS7Essay56", "")
  const [SS7Essay57, setSS7Essay57] = useLocalStorageState("SS7Essay57", "")
  const [SS7Essay58, setSS7Essay58] = useLocalStorageState("SS7Essay58", "")
  const [SS7Essay59, setSS7Essay59] = useLocalStorageState("SS7Essay59", "")
  const [SS7Essay60, setSS7Essay60] = useLocalStorageState("SS7Essay60", "")
  const [SS7Essay61, setSS7Essay61] = useLocalStorageState("SS7Essay61", "")
  const [SS7Essay62, setSS7Essay62] = useLocalStorageState("SS7Essay62", "")
  const [SS7Essay63, setSS7Essay63] = useLocalStorageState("SS7Essay63", "")
  const [SS7Essay64, setSS7Essay64] = useLocalStorageState("SS7Essay64", "")
  const [SS7Essay65, setSS7Essay65] = useLocalStorageState("SS7Essay65", "")
  const [SS7Essay66, setSS7Essay66] = useLocalStorageState("SS7Essay66", "")
  const [SS7Essay67, setSS7Essay67] = useLocalStorageState("SS7Essay67", "")
  const [SS7Essay68, setSS7Essay68] = useLocalStorageState("SS7Essay68", "")
  const [SS7Essay69, setSS7Essay69] = useLocalStorageState("SS7Essay69", "")
  const [SS7Essay70, setSS7Essay70] = useLocalStorageState("SS7Essay70", "")
  const [SS7Essay71, setSS7Essay71] = useLocalStorageState("SS7Essay71", "")
  const [SS7Essay72, setSS7Essay72] = useLocalStorageState("SS7Essay72", "")
  const [SS7Essay73, setSS7Essay73] = useLocalStorageState("SS7Essay73", "")
  const [SS7Essay74, setSS7Essay74] = useLocalStorageState("SS7Essay74", "")
  const [SS7Essay75, setSS7Essay75] = useLocalStorageState("SS7Essay75", "")
  const [SS7Essay76, setSS7Essay76] = useLocalStorageState("SS7Essay76", "")
  const [SS7Essay77, setSS7Essay77] = useLocalStorageState("SS7Essay77", "")
  const [SS7Essay78, setSS7Essay78] = useLocalStorageState("SS7Essay78", "")
  const [SS7Essay79, setSS7Essay79] = useLocalStorageState("SS7Essay79", "")
  const [SS7Essay80, setSS7Essay80] = useLocalStorageState("SS7Essay80", "")
  const [SS7Essay81, setSS7Essay81] = useLocalStorageState("SS7Essay81", "")
  const [SS7Essay82, setSS7Essay82] = useLocalStorageState("SS7Essay82", "")
  const [SS7Essay83, setSS7Essay83] = useLocalStorageState("SS7Essay83", "")
  const [SS7Essay84, setSS7Essay84] = useLocalStorageState("SS7Essay84", "")
  const [SS7Essay85, setSS7Essay85] = useLocalStorageState("SS7Essay85", "")
  const [SS7Essay86, setSS7Essay86] = useLocalStorageState("SS7Essay86", "")
  const [SS7Essay87, setSS7Essay87] = useLocalStorageState("SS7Essay87", "")
  const [SS7Essay88, setSS7Essay88] = useLocalStorageState("SS7Essay88", "")
  const [SS7Essay89, setSS7Essay89] = useLocalStorageState("SS7Essay89", "")
  const [SS7Essay90, setSS7Essay90] = useLocalStorageState("SS7Essay90", "")
  const [SS7Essay91, setSS7Essay91] = useLocalStorageState("SS7Essay91", "")
  const [SS7Essay92, setSS7Essay92] = useLocalStorageState("SS7Essay93", "")
  const [SS7Essay93, setSS7Essay93] = useLocalStorageState("SS7Essay94", "")
  const [SS7Essay94, setSS7Essay94] = useLocalStorageState("SS7Essay95", "")
  const [SS7Essay95, setSS7Essay95] = useLocalStorageState("SS7Essay96", "")
  const [SS7Essay96, setSS7Essay96] = useLocalStorageState("SS7Essay97", "")
  const [SS7Essay97, setSS7Essay97] = useLocalStorageState("SS7Essay98", "")
  const [SS7Essay98, setSS7Essay98] = useLocalStorageState("SS7Essay98", "")
  const [SS7Essay99, setSS7Essay99] = useLocalStorageState("SS7Essay99", "")
  const [SS7Essay100, setSS7Essay100] = useLocalStorageState("SS7Essay100", "")
  const [SS7Essay101, setSS7Essay101] = useLocalStorageState("SS7Essay101", "")
  const [SS7Essay102, setSS7Essay102] = useLocalStorageState("SS7Essay102", "")
  const [SS7Essay103, setSS7Essay103] = useLocalStorageState("SS7Essay103", "")
  const [SS7Essay104, setSS7Essay104] = useLocalStorageState("SS7Essay104", "")
  const [SS7Essay105, setSS7Essay105] = useLocalStorageState("SS7Essay105", "")
  const [SS7Essay106, setSS7Essay106] = useLocalStorageState("SS7Essay106", "")
  const [SS7Essay107, setSS7Essay107] = useLocalStorageState("SS7Essay107", "")
  const [SS7Essay108, setSS7Essay108] = useLocalStorageState("SS7Essay108", "")
  const [SS7Essay109, setSS7Essay109] = useLocalStorageState("SS7Essay109", "")
  const [SS7Essay110, setSS7Essay110] = useLocalStorageState("SS7Essay110", "")
  const [SS7Essay111, setSS7Essay111] = useLocalStorageState("SS7Essay111", "")
  const [SS7Essay112, setSS7Essay112] = useLocalStorageState("SS7Essay112", "")
  const [SS7Essay113, setSS7Essay113] = useLocalStorageState("SS7Essay113", "")
  const [SS7Essay114, setSS7Essay114] = useLocalStorageState("SS7Essay114", "")
  const [SS7Essay115, setSS7Essay115] = useLocalStorageState("SS7Essay115", "")
  const [SS7Essay116, setSS7Essay116] = useLocalStorageState("SS7Essay116", "")
  const [SS7Essay117, setSS7Essay117] = useLocalStorageState("SS7Essay117", "")
  const [SS7Essay118, setSS7Essay118] = useLocalStorageState("SS7Essay118", "")
  const [SS7Essay119, setSS7Essay119] = useLocalStorageState("SS7Essay119", "")
  const [SS7Essay120, setSS7Essay120] = useLocalStorageState("SS7Essay120", "")
  const [SS7Essay121, setSS7Essay121] = useLocalStorageState("SS7Essay121", "")
  const [SS7Essay122, setSS7Essay122] = useLocalStorageState("SS7Essay122", "")
  const [SS7Essay123, setSS7Essay123] = useLocalStorageState("SS7Essay123", "")
  const [SS7Essay124, setSS7Essay124] = useLocalStorageState("SS7Essay124", "")
  const [SS7Essay125, setSS7Essay125] = useLocalStorageState("SS7Essay125", "")
  const [SS7Essay126, setSS7Essay126] = useLocalStorageState("SS7Essay126", "")
  const [SS7Essay127, setSS7Essay127] = useLocalStorageState("SS7Essay127", "")
  const [SS7Essay128, setSS7Essay128] = useLocalStorageState("SS7Essay128", "")
  const [SS7Essay129, setSS7Essay129] = useLocalStorageState("SS7Essay129", "")
  const [SS7Essay130, setSS7Essay130] = useLocalStorageState("SS7Essay130", "")
  const [SS7Essay131, setSS7Essay131] = useLocalStorageState("SS7Essay131", "")
  const [SS7Essay132, setSS7Essay132] = useLocalStorageState("SS7Essay132", "")
  const [SS7Essay133, setSS7Essay133] = useLocalStorageState("SS7Essay133", "")
  const [SS7Essay134, setSS7Essay134] = useLocalStorageState("SS7Essay134", "")
  const [SS7Essay135, setSS7Essay135] = useLocalStorageState("SS7Essay135", "")
  const [SS7Essay136, setSS7Essay136] = useLocalStorageState("SS7Essay136", "")
  const [SS7Essay137, setSS7Essay137] = useLocalStorageState("SS7Essay137", "")
  const [SS7Essay138, setSS7Essay138] = useLocalStorageState("SS7Essay138", "")
  const [SS7Essay139, setSS7Essay139] = useLocalStorageState("SS7Essay139", "")
  const [SS7Essay140, setSS7Essay140] = useLocalStorageState("SS7Essay140", "")
  const [SS7Essay141, setSS7Essay141] = useLocalStorageState("SS7Essay141", "")
  const [SS7Essay142, setSS7Essay142] = useLocalStorageState("SS7Essay142", "")
  const [SS7Essay143, setSS7Essay143] = useLocalStorageState("SS7Essay143", "")
  const [SS7Essay144, setSS7Essay144] = useLocalStorageState("SS7Essay144", "")
  const [SS7Essay145, setSS7Essay145] = useLocalStorageState("SS7Essay145", "")
  const [SS7Essay146, setSS7Essay146] = useLocalStorageState("SS7Essay146", "")
  const [SS7Essay147, setSS7Essay147] = useLocalStorageState("SS7Essay147", "")
  const [SS7Essay148, setSS7Essay148] = useLocalStorageState("SS7Essay148", "")
  const [SS7Essay149, setSS7Essay149] = useLocalStorageState("SS7Essay149", "")
  const [SS7Essay150, setSS7Essay150] = useLocalStorageState("SS7Essay150", "")
  const [SS7Essay151, setSS7Essay151] = useLocalStorageState("SS7Essay151", "")
  const [SS7Essay152, setSS7Essay152] = useLocalStorageState("SS7Essay152", "")
  const [SS7Essay153, setSS7Essay153] = useLocalStorageState("SS7Essay153", "")
  const [SS7Essay154, setSS7Essay154] = useLocalStorageState("SS7Essay154", "")
  const [SS7Essay155, setSS7Essay155] = useLocalStorageState("SS7Essay155", "")
  const [SS7Essay156, setSS7Essay156] = useLocalStorageState("SS7Essay156", "")
  const [SS7Essay157, setSS7Essay157] = useLocalStorageState("SS7Essay157", "")
  const [SS7Essay158, setSS7Essay158] = useLocalStorageState("SS7Essay158", "")
  const [SS7Essay159, setSS7Essay159] = useLocalStorageState("SS7Essay159", "")
  const [SS7Essay160, setSS7Essay160] = useLocalStorageState("SS7Essay160", "")
  const [SS7Essay161, setSS7Essay161] = useLocalStorageState("SS7Essay161", "")
  const [SS7Essay162, setSS7Essay162] = useLocalStorageState("SS7Essay162", "")
  const [SS7Essay163, setSS7Essay163] = useLocalStorageState("SS7Essay163", "")
  const [SS7Essay164, setSS7Essay164] = useLocalStorageState("SS7Essay164", "")
  const [SS7Essay165, setSS7Essay165] = useLocalStorageState("SS7Essay165", "")
  const [SS7Essay166, setSS7Essay166] = useLocalStorageState("SS7Essay166", "")
  const [SS7Essay167, setSS7Essay167] = useLocalStorageState("SS7Essay167", "")
  const [SS7Essay168, setSS7Essay168] = useLocalStorageState("SS7Essay168", "")
  const [SS7Essay169, setSS7Essay169] = useLocalStorageState("SS7Essay169", "")
  const [SS7Essay170, setSS7Essay170] = useLocalStorageState("SS7Essay170", "")
  const [SS7Essay171, setSS7Essay171] = useLocalStorageState("SS7Essay171", "")
  const [SS7Essay172, setSS7Essay172] = useLocalStorageState("SS7Essay172", "")
  const [SS7Essay173, setSS7Essay173] = useLocalStorageState("SS7Essay173", "")
  const [SS7Essay174, setSS7Essay174] = useLocalStorageState("SS7Essay174", "")
  const [SS7Essay175, setSS7Essay175] = useLocalStorageState("SS7Essay175", "")
  const [SS7Essay176, setSS7Essay176] = useLocalStorageState("SS7Essay176", "")
  const [SS7Essay177, setSS7Essay177] = useLocalStorageState("SS7Essay177", "")
  // const [SS7Essay178, setSS7Essay178] = useLocalStorageState("SS7Essay178", "")
  // const [SS7Essay179, setSS7Essay179] = useLocalStorageState("SS7Essay179", "")
  // const [SS7Essay180, setSS7Essay180] = useLocalStorageState("SS7Essay180", "")

  const onChangeSS7Listener = (event) => {
    setSS7Essay(event.target.value)
  }
  const onChangeSS7Listener2 = (event) => {
    setSS7Essay2(event.target.value)
  }
  const onChangeSS7Listener3 = (event) => {
    setSS7Essay3(event.target.value)
  }
  const onChangeSS7Listener4 = (event) => {
    setSS7Essay4(event.target.value)
  }
  const onChangeSS7Listener5 = (event) => {
    setSS7Essay5(event.target.value)
  }
  const onChangeSS7Listener6 = (event) => {
    setSS7Essay6(event.target.value)
  }
  const onChangeSS7Listener7 = (event) => {
    setSS7Essay7(event.target.value)
  }
  const onChangeSS7Listener8 = (event) => {
    setSS7Essay8(event.target.value)
  }
  const onChangeSS7Listener9 = (event) => {
    setSS7Essay9(event.target.value)
  }
  const onChangeSS7Listener10 = (event) => {
    setSS7Essay10(event.target.value)
  }
  const onChangeSS7Listener11 = (event) => {
    setSS7Essay11(event.target.value)
  }
  const onChangeSS7Listener12 = (event) => {
    setSS7Essay12(event.target.value)
  }
  const onChangeSS7Listener13 = (event) => {
    setSS7Essay13(event.target.value)
  }
  const onChangeSS7Listener14 = (event) => {
    setSS7Essay14(event.target.value)
  }
  const onChangeSS7Listener15 = (event) => {
    setSS7Essay15(event.target.value)
  }
  const onChangeSS7Listener16 = (event) => {
    setSS7Essay16(event.target.value)
  }
  const onChangeSS7Listener17 = (event) => {
    setSS7Essay17(event.target.value)
  }
  const onChangeSS7Listener18 = (event) => {
    setSS7Essay18(event.target.value)
  }
  const onChangeSS7Listener19 = (event) => {
    setSS7Essay19(event.target.value)
  }
  const onChangeSS7Listener20 = (event) => {
    setSS7Essay20(event.target.value)
  }
  const onChangeSS7Listener21 = (event) => {
    setSS7Essay21(event.target.value)
  }
  const onChangeSS7Listener22 = (event) => {
    setSS7Essay22(event.target.value)
  }
  const onChangeSS7Listener23 = (event) => {
    setSS7Essay23(event.target.value)
  }
  const onChangeSS7Listener24 = (event) => {
    setSS7Essay24(event.target.value)
  }
  const onChangeSS7Listener25 = (event) => {
    setSS7Essay25(event.target.value)
  }
  const onChangeSS7Listener26 = (event) => {
    setSS7Essay26(event.target.value)
  }
  const onChangeSS7Listener27 = (event) => {
    setSS7Essay27(event.target.value)
  }
  const onChangeSS7Listener28 = (event) => {
    setSS7Essay28(event.target.value)
  }
  const onChangeSS7Listener29 = (event) => {
    setSS7Essay29(event.target.value)
  }
  const onChangeSS7Listener30 = (event) => {
    setSS7Essay30(event.target.value)
  }
  const onChangeSS7Listener31 = (event) => {
    setSS7Essay31(event.target.value)
  }
  const onChangeSS7Listener32 = (event) => {
    setSS7Essay32(event.target.value)
  }
  const onChangeSS7Listener33 = (event) => {
    setSS7Essay33(event.target.value)
  }
  const onChangeSS7Listener34 = (event) => {
    setSS7Essay34(event.target.value)
  }
  const onChangeSS7Listener35 = (event) => {
    setSS7Essay35(event.target.value)
  }
  const onChangeSS7Listener36 = (event) => {
    setSS7Essay36(event.target.value)
  }
  const onChangeSS7Listener37 = (event) => {
    setSS7Essay37(event.target.value)
  }
  const onChangeSS7Listener38 = (event) => {
    setSS7Essay38(event.target.value)
  }
  const onChangeSS7Listener39 = (event) => {
    setSS7Essay39(event.target.value)
  }
  const onChangeSS7Listener40 = (event) => {
    setSS7Essay40(event.target.value)
  }
  const onChangeSS7Listener41 = (event) => {
    setSS7Essay41(event.target.value)
  }
  const onChangeSS7Listener42 = (event) => {
    setSS7Essay42(event.target.value)
  }
  const onChangeSS7Listener43 = (event) => {
    setSS7Essay43(event.target.value)
  }
  const onChangeSS7Listener44 = (event) => {
    setSS7Essay44(event.target.value)
  }
  const onChangeSS7Listener45 = (event) => {
    setSS7Essay45(event.target.value)
  }
  const onChangeSS7Listener46 = (event) => {
    setSS7Essay46(event.target.value)
  }
  const onChangeSS7Listener47 = (event) => {
    setSS7Essay47(event.target.value)
  }
  const onChangeSS7Listener48 = (event) => {
    setSS7Essay48(event.target.value)
  }
  const onChangeSS7Listener49 = (event) => {
    setSS7Essay49(event.target.value)
  }
  const onChangeSS7Listener50 = (event) => {
    setSS7Essay50(event.target.value)
  }
  const onChangeSS7Listener51 = (event) => {
    setSS7Essay51(event.target.value)
  }
  const onChangeSS7Listener52 = (event) => {
    setSS7Essay52(event.target.value)
  }
  const onChangeSS7Listener53 = (event) => {
    setSS7Essay53(event.target.value)
  }
  const onChangeSS7Listener54 = (event) => {
    setSS7Essay54(event.target.value)
  }
  const onChangeSS7Listener55 = (event) => {
    setSS7Essay55(event.target.value)
  }
  const onChangeSS7Listener56 = (event) => {
    setSS7Essay56(event.target.value)
  }
  const onChangeSS7Listener57 = (event) => {
    setSS7Essay57(event.target.value)
  }
  const onChangeSS7Listener58 = (event) => {
    setSS7Essay58(event.target.value)
  }
  const onChangeSS7Listener59 = (event) => {
    setSS7Essay59(event.target.value)
  }
  const onChangeSS7Listener60 = (event) => {
    setSS7Essay60(event.target.value)
  }
  const onChangeSS7Listener61 = (event) => {
    setSS7Essay61(event.target.value)
  }
  const onChangeSS7Listener62 = (event) => {
    setSS7Essay62(event.target.value)
  }
  const onChangeSS7Listener63 = (event) => {
    setSS7Essay63(event.target.value)
  }
  const onChangeSS7Listener64 = (event) => {
    setSS7Essay64(event.target.value)
  }
  const onChangeSS7Listener65 = (event) => {
    setSS7Essay65(event.target.value)
  }
  const onChangeSS7Listener66 = (event) => {
    setSS7Essay66(event.target.value)
  }
  const onChangeSS7Listener67 = (event) => {
    setSS7Essay67(event.target.value)
  }
  const onChangeSS7Listener68 = (event) => {
    setSS7Essay68(event.target.value)
  }
  const onChangeSS7Listener69 = (event) => {
    setSS7Essay69(event.target.value)
  }
  const onChangeSS7Listener70 = (event) => {
    setSS7Essay70(event.target.value)
  }
  const onChangeSS7Listener71 = (event) => {
    setSS7Essay71(event.target.value)
  }
  const onChangeSS7Listener72 = (event) => {
    setSS7Essay72(event.target.value)
  }
  const onChangeSS7Listener73 = (event) => {
    setSS7Essay73(event.target.value)
  }
  const onChangeSS7Listener74 = (event) => {
    setSS7Essay74(event.target.value)
  }
  const onChangeSS7Listener75 = (event) => {
    setSS7Essay75(event.target.value)
  }
  const onChangeSS7Listener76 = (event) => {
    setSS7Essay76(event.target.value)
  }
  const onChangeSS7Listener77 = (event) => {
    setSS7Essay77(event.target.value)
  }
  const onChangeSS7Listener78 = (event) => {
    setSS7Essay78(event.target.value)
  }
  const onChangeSS7Listener79 = (event) => {
    setSS7Essay79(event.target.value)
  }
  const onChangeSS7Listener80 = (event) => {
    setSS7Essay80(event.target.value)
  }
  const onChangeSS7Listener81 = (event) => {
    setSS7Essay81(event.target.value)
  }
  const onChangeSS7Listener82 = (event) => {
    setSS7Essay82(event.target.value)
  }
  const onChangeSS7Listener83 = (event) => {
    setSS7Essay83(event.target.value)
  }
  const onChangeSS7Listener84 = (event) => {
    setSS7Essay84(event.target.value)
  }
  const onChangeSS7Listener85 = (event) => {
    setSS7Essay85(event.target.value)
  }
  const onChangeSS7Listener86 = (event) => {
    setSS7Essay86(event.target.value)
  }
  const onChangeSS7Listener87 = (event) => {
    setSS7Essay87(event.target.value)
  }
  const onChangeSS7Listener88 = (event) => {
    setSS7Essay88(event.target.value)
  }
  const onChangeSS7Listener89 = (event) => {
    setSS7Essay89(event.target.value)
  }
  const onChangeSS7Listener90 = (event) => {
    setSS7Essay90(event.target.value)
  }
  const onChangeSS7Listener91 = (event) => {
    setSS7Essay91(event.target.value)
  }
  const onChangeSS7Listener92 = (event) => {
    setSS7Essay92(event.target.value)
  }
  const onChangeSS7Listener93 = (event) => {
    setSS7Essay93(event.target.value)
  }
  const onChangeSS7Listener94 = (event) => {
    setSS7Essay94(event.target.value)
  }
  const onChangeSS7Listener95 = (event) => {
    setSS7Essay95(event.target.value)
  }
  const onChangeSS7Listener96 = (event) => {
    setSS7Essay96(event.target.value)
  }
  const onChangeSS7Listener97 = (event) => {
    setSS7Essay97(event.target.value)
  }
  const onChangeSS7Listener98 = (event) => {
    setSS7Essay98(event.target.value)
  }
  const onChangeSS7Listener99 = (event) => {
    setSS7Essay99(event.target.value)
  }
  const onChangeSS7Listener100 = (event) => {
    setSS7Essay100(event.target.value)
  }
  const onChangeSS7Listener101 = (event) => {
    setSS7Essay101(event.target.value)
  }
  const onChangeSS7Listener102 = (event) => {
    setSS7Essay102(event.target.value)
  }
  const onChangeSS7Listener103 = (event) => {
    setSS7Essay103(event.target.value)
  }
  const onChangeSS7Listener104 = (event) => {
    setSS7Essay104(event.target.value)
  }
  const onChangeSS7Listener105 = (event) => {
    setSS7Essay105(event.target.value)
  }
  const onChangeSS7Listener106 = (event) => {
    setSS7Essay106(event.target.value)
  }
  const onChangeSS7Listener107 = (event) => {
    setSS7Essay107(event.target.value)
  }
  const onChangeSS7Listener108 = (event) => {
    setSS7Essay108(event.target.value)
  }
  const onChangeSS7Listener109 = (event) => {
    setSS7Essay109(event.target.value)
  }
  const onChangeSS7Listener110 = (event) => {
    setSS7Essay110(event.target.value)
  }
  const onChangeSS7Listener111 = (event) => {
    setSS7Essay111(event.target.value)
  }
  const onChangeSS7Listener112 = (event) => {
    setSS7Essay112(event.target.value)
  }
  const onChangeSS7Listener113 = (event) => {
    setSS7Essay113(event.target.value)
  }
  const onChangeSS7Listener114 = (event) => {
    setSS7Essay114(event.target.value)
  }
  const onChangeSS7Listener115 = (event) => {
    setSS7Essay115(event.target.value)
  }
  const onChangeSS7Listener116 = (event) => {
    setSS7Essay116(event.target.value)
  }
  const onChangeSS7Listener117 = (event) => {
    setSS7Essay117(event.target.value)
  }
  const onChangeSS7Listener118 = (event) => {
    setSS7Essay118(event.target.value)
  }
  const onChangeSS7Listener119 = (event) => {
    setSS7Essay119(event.target.value)
  }
  const onChangeSS7Listener120 = (event) => {
    setSS7Essay120(event.target.value)
  }
  const onChangeSS7Listener121 = (event) => {
    setSS7Essay121(event.target.value)
  }
  const onChangeSS7Listener122 = (event) => {
    setSS7Essay122(event.target.value)
  }
  const onChangeSS7Listener123 = (event) => {
    setSS7Essay123(event.target.value)
  }
  const onChangeSS7Listener124 = (event) => {
    setSS7Essay124(event.target.value)
  }
  const onChangeSS7Listener125 = (event) => {
    setSS7Essay125(event.target.value)
  }
  const onChangeSS7Listener126 = (event) => {
    setSS7Essay126(event.target.value)
  }
  const onChangeSS7Listener127 = (event) => {
    setSS7Essay127(event.target.value)
  }
  const onChangeSS7Listener128 = (event) => {
    setSS7Essay128(event.target.value)
  }
  const onChangeSS7Listener129 = (event) => {
    setSS7Essay129(event.target.value)
  }
  const onChangeSS7Listener130 = (event) => {
    setSS7Essay130(event.target.value)
  }
  const onChangeSS7Listener131 = (event) => {
    setSS7Essay131(event.target.value)
  }
  const onChangeSS7Listener132 = (event) => {
    setSS7Essay132(event.target.value)
  }
  const onChangeSS7Listener133 = (event) => {
    setSS7Essay133(event.target.value)
  }
  const onChangeSS7Listener134 = (event) => {
    setSS7Essay134(event.target.value)
  }
  const onChangeSS7Listener135 = (event) => {
    setSS7Essay135(event.target.value)
  }
  const onChangeSS7Listener136 = (event) => {
    setSS7Essay136(event.target.value)
  }
  const onChangeSS7Listener137 = (event) => {
    setSS7Essay137(event.target.value)
  }
  const onChangeSS7Listener138 = (event) => {
    setSS7Essay138(event.target.value)
  }
  const onChangeSS7Listener139 = (event) => {
    setSS7Essay139(event.target.value)
  }
  const onChangeSS7Listener140 = (event) => {
    setSS7Essay140(event.target.value)
  }
  const onChangeSS7Listener141 = (event) => {
    setSS7Essay141(event.target.value)
  }
  const onChangeSS7Listener142 = (event) => {
    setSS7Essay142(event.target.value)
  }
  const onChangeSS7Listener143 = (event) => {
    setSS7Essay143(event.target.value)
  }
  const onChangeSS7Listener144 = (event) => {
    setSS7Essay144(event.target.value)
  }
  const onChangeSS7Listener145 = (event) => {
    setSS7Essay145(event.target.value)
  }
  const onChangeSS7Listener146 = (event) => {
    setSS7Essay146(event.target.value)
  }
  const onChangeSS7Listener147 = (event) => {
    setSS7Essay147(event.target.value)
  }
  const onChangeSS7Listener148 = (event) => {
    setSS7Essay148(event.target.value)
  }
  const onChangeSS7Listener149 = (event) => {
    setSS7Essay149(event.target.value)
  }
  const onChangeSS7Listener150 = (event) => {
    setSS7Essay150(event.target.value)
  }
  const onChangeSS7Listener151 = (event) => {
    setSS7Essay151(event.target.value)
  }
  const onChangeSS7Listener152 = (event) => {
    setSS7Essay152(event.target.value)
  }
  const onChangeSS7Listener153 = (event) => {
    setSS7Essay153(event.target.value)
  }
  const onChangeSS7Listener154 = (event) => {
    setSS7Essay154(event.target.value)
  }
  const onChangeSS7Listener155 = (event) => {
    setSS7Essay155(event.target.value)
  }
  const onChangeSS7Listener156 = (event) => {
    setSS7Essay156(event.target.value)
  }
  const onChangeSS7Listener157 = (event) => {
    setSS7Essay157(event.target.value)
  }
  const onChangeSS7Listener158 = (event) => {
    setSS7Essay158(event.target.value)
  }
  const onChangeSS7Listener159 = (event) => {
    setSS7Essay159(event.target.value)
  }
  const onChangeSS7Listener160 = (event) => {
    setSS7Essay160(event.target.value)
  }
  const onChangeSS7Listener161 = (event) => {
    setSS7Essay161(event.target.value)
  }
  const onChangeSS7Listener162 = (event) => {
    setSS7Essay162(event.target.value)
  }
  const onChangeSS7Listener163 = (event) => {
    setSS7Essay163(event.target.value)
  }
  const onChangeSS7Listener164 = (event) => {
    setSS7Essay164(event.target.value)
  }
  const onChangeSS7Listener165 = (event) => {
    setSS7Essay165(event.target.value)
  }
  const onChangeSS7Listener166 = (event) => {
    setSS7Essay166(event.target.value)
  }
  const onChangeSS7Listener167 = (event) => {
    setSS7Essay167(event.target.value)
  }
  const onChangeSS7Listener168 = (event) => {
    setSS7Essay168(event.target.value)
  }
  const onChangeSS7Listener169 = (event) => {
    setSS7Essay169(event.target.value)
  }
  const onChangeSS7Listener170 = (event) => {
    setSS7Essay170(event.target.value)
  }
  const onChangeSS7Listener171 = (event) => {
    setSS7Essay171(event.target.value)
  }
  const onChangeSS7Listener172 = (event) => {
    setSS7Essay172(event.target.value)
  }
  const onChangeSS7Listener173 = (event) => {
    setSS7Essay173(event.target.value)
  }
  const onChangeSS7Listener174 = (event) => {
    setSS7Essay174(event.target.value)
  }
  const onChangeSS7Listener175 = (event) => {
    setSS7Essay175(event.target.value)
  }
  const onChangeSS7Listener176 = (event) => {
    setSS7Essay176(event.target.value)
  }
  const onChangeSS7Listener177 = (event) => {
    setSS7Essay177(event.target.value)
  }
  // const onChangeSS7Listener178 = (event) => {
  //   setSS7Essay178(event.target.value)
  // }
  // const onChangeSS7Listener179 = (event) => {
  //   setSS7Essay179(event.target.value)
  // }
  // const onChangeSS7Listener180 = (event) => {
  //   setSS7Essay180(event.target.value)
  // }
  
  return (
    <form>
      <div className="dot1"/>
      <section className="section raise-top">
        <div className="section-content">
          <h1 className="section-title">Daily Lessons</h1>
          <span className="days">LESSON 1</span>
          
          <textarea className="textArea"
                    placeholder="Write your answers here. Back up your work in another document or email it to your parent/teacher."
                    onChange={onChangeSS7Listener} value={SS7Essay}/>

          <span className="days">LESSON 2</span>
          
          <textarea className="textArea"
                    placeholder="Write your answers here. Back up your work or email it to your parent/teacher."
                    onChange={onChangeSS7Listener2} value={SS7Essay2}/>

          <span className="days">LESSON 3</span>
          
          <textarea className="textArea" placeholder="Back up your work." onChange={onChangeSS7Listener3}
                    value={SS7Essay3}/>

          <span className="days">LESSON 4</span>
          
          <textarea className="textArea" onChange={onChangeSS7Listener4} value={SS7Essay4}/>

          <span className="days">LESSON 5</span>

          <textarea className="textArea" onChange={onChangeSS7Listener5} value={SS7Essay5}/>

          <span className="days">LESSON 6</span>
          
          <textarea className="textArea" onChange={onChangeSS7Listener6} value={SS7Essay6}/>

          <span className="days">LESSON 7</span>
          
          <textarea className="textArea" onChange={onChangeSS7Listener7} value={SS7Essay7}/>

          <span className="days">LESSON 8</span>
          
          <textarea className="textArea" onChange={onChangeSS7Listener8} value={SS7Essay8}/>

          <span className="days">LESSON 9</span>
          
          <textarea className="textArea" onChange={onChangeSS7Listener9} value={SS7Essay9}/>

          <span className="days">LESSON 10</span>
          
          <textarea className="textArea" onChange={onChangeSS7Listener10} value={SS7Essay10}/>

          <span className="days">LESSON 11</span>

          <textarea className="textArea" onChange={onChangeSS7Listener11} value={SS7Essay11}/>

          <span className="days">LESSON 12</span>
          
          <textarea className="textArea" onChange={onChangeSS7Listener12} value={SS7Essay12}/>

          <span className="days">LESSON 13</span>
          
          <textarea className="textArea" onChange={onChangeSS7Listener13} value={SS7Essay13}/>

          <span className="days">LESSON 14</span>
          
          <textarea className="textArea" onChange={onChangeSS7Listener14} value={SS7Essay14}/>

          <span className="days">LESSON 15</span>
          
          <textarea className="textArea" onChange={onChangeSS7Listener15} value={SS7Essay15}/>

          <span className="days">LESSON 16</span>
          
          <textarea className="textArea" onChange={onChangeSS7Listener16} value={SS7Essay16}/>

          <span className="days">LESSON 17</span>
          
          <textarea className="textArea" onChange={onChangeSS7Listener17} value={SS7Essay17}/>

          <span className="days">LESSON 18</span>
          
          <textarea className="textArea" onChange={onChangeSS7Listener18} value={SS7Essay18}/>

          <span className="days">LESSON 19</span>
          <p>Imagine that you have a private jet at your disposal and can travel anywhere in the world. If you
            could travel to any destination, where would you go?<br/>
            Paris to see the Eiffel Tower? <br/>Machu Pichu in Peru? <br/>Angel Falls in Venezuela? <br/>Kangaroo
            Island off the coast of Australia? <br/>Avatar mountains (Zhangjiajie) in China? <br/>Big Sur in
            California?
          </p>
          If you have no idea where to you'd like to go, get inspired by <a href="https://www.lifehack.org/articles/lifestyle/17-stunning-places-visit-with-google-maps.html"
          target="_blank"> this site about stunning places</a> or this video showing some of the most
          beautiful places in the world.<br/>
          <Video videoUrl="https://www.youtube.com/embed/vwZBiG1_IWs"/>
          <p> Next, answer the following questions:<br/>
            1. What place would you visit?<br/>
            2. Locate this place virtually on <a href="https://earth.google.com/web/">Google Earth</a> or <a href="https://www.google.com/maps">Google Maps</a> using satellite view.<br/>
            3. Why did you choose this place?<br/>
            4. Discuss the cultural, historical or environmental significance this place has. (In what ways do
            you think is it important?)<br/>
            5. After your jet lands, how will you get to this place? (Ex. I will take a cab. It’s 30 minutes
            from the airport.” OR “I will need to get a GPS and trek 3 days into the jungle to find it.” OR “A
            mountain bike is the best mode of transportation.”<br/>
            6. How long will you stay there and where will you stay? (Ex. I will stay in a hut on the beach OR
            …in a treehouse in the jungle OR …in a rented camper so I can tour the area.<br/>
            7. What language do they speak?<br/>
            8. What things/activities will you do when you get there?<br/>
            <br/></p>
          <textarea className="textArea" onChange={onChangeSS7Listener19} value={SS7Essay19}/>

          <span className="days">LESSON 20</span>
          
          <textarea className="textArea" onChange={onChangeSS7Listener20} value={SS7Essay20}/>

          <span className="days">LESSON 21</span>
          
          <textarea className="textArea" onChange={onChangeSS7Listener21} value={SS7Essay21}/>

          <span className="days">LESSON 22</span>
          
          <textarea className="textArea" onChange={onChangeSS7Listener22} value={SS7Essay22}/>

          <span className="days">LESSON 23</span>
          
          <textarea className="textArea" onChange={onChangeSS7Listener23} value={SS7Essay23}/>

          <span className="days">LESSON 24</span>
          
          <textarea className="textArea" onChange={onChangeSS7Listener24} value={SS7Essay24}/>

          <span className="days">LESSON 25</span>
          
          <textarea className="textArea" onChange={onChangeSS7Listener25} value={SS7Essay25}/>

          <span className="days">LESSON 26</span>
          
          <textarea className="textArea" onChange={onChangeSS7Listener26} value={SS7Essay26}/>

          <span className="days">LESSON 27</span>
          
          <textarea className="textArea" onChange={onChangeSS7Listener27} value={SS7Essay27}/>

          <span className="days">LESSON 28</span>
          
          <textarea className="textArea" onChange={onChangeSS7Listener28} value={SS7Essay28}/>

          <span className="days">LESSON 29</span>
          
          <textarea className="textArea" onChange={onChangeSS7Listener29} value={SS7Essay29}/>

          <span className="days">LESSON 30</span>
          
          <textarea className="textArea" onChange={onChangeSS7Listener30} value={SS7Essay30}/>

          <span className="days">LESSON 31</span>
          
          <textarea className="textArea" onChange={onChangeSS7Listener31} value={SS7Essay31}/>

          <span className="days">LESSON 32</span>
          
          <textarea className="textArea" onChange={onChangeSS7Listener32} value={SS7Essay32}/>

          <span className="days">LESSON 33</span>
          
          <textarea className="textArea" onChange={onChangeSS7Listener33} value={SS7Essay33}/>

          <span className="days">LESSON 34</span>

          <textarea className="textArea" onChange={onChangeSS7Listener34} value={SS7Essay34}/>

          <span className="days">LESSON 35</span>

          <textarea className="textArea" onChange={onChangeSS7Listener35} value={SS7Essay35}/>

            <span className="days">LESSON 36</span>
            
          <textarea className="textArea" onChange={onChangeSS7Listener36} value={SS7Essay36}/>

            <span className="days">LESSON 37</span>
            
          <textarea className="textArea" onChange={onChangeSS7Listener37} value={SS7Essay37}/>

            <span className="days">LESSON 38</span>
            
          <textarea className="textArea" onChange={onChangeSS7Listener38} value={SS7Essay38}/>

            <span className="days">LESSON 39</span>

          <textarea className="textArea" onChange={onChangeSS7Listener39} value={SS7Essay39}/>

          <span className="days">LESSON 40</span>
          <p>It's time to travel to another destination somewhere in the world. Where would you go this
            time?<br/>
            Paris to see the Eiffel Tower? <br/>Machu Pichu in Peru? <br/>Angel Falls in Venezuela? <br/>Kangaroo
            Island off the coast of Australia? <br/>Avatar mountains (Zhangjiajie) in China? <br/>Big Sur in
            California?
          </p>
          If you have no idea where to you'd like to go, get inspired by <a href="https://www.lifehack.org/articles/lifestyle/17-stunning-places-visit-with-google-maps.html"
          target="_blank"> this site about stunning places</a> or this video showing some of the most
          beautiful places in the world.<br/>
          <Video videoUrl="https://www.youtube.com/embed/vwZBiG1_IWs"/>
          <p> Next, answer the following questions:<br/>
            1. What place would you visit?<br/>
            2. Locate this place virtually on <a href="https://earth.google.com/web/">Google Earth</a> or <a href="https://www.google.com/maps">Google Maps</a> using satellite view.<br/>
            3. Why did you choose this place?<br/>
            4. Discuss the cultural, historical or environmental significance this place has. (In what ways do
            you think is it important?)<br/>
            5. After your jet lands, how will you get to this place? (Ex. I will take a cab. It’s 30 minutes
            from the airport.” OR “I will need to get a GPS and trek 3 days into the jungle to find it.” OR “A
            mountain bike is the best mode of transportation.”<br/>
            6. How long will you stay there and where will you stay? (Ex. I will stay in a hut on the beach OR
            …in a treehouse in the jungle OR …in a rented camper so I can tour the area.<br/>
            7. What language do they speak?<br/>
            8. What things/activities will you do when you get there?<br/>
            <br/></p>
          <textarea className="textArea" onChange={onChangeSS7Listener40} value={SS7Essay40}/>

          <span className="days">LESSON 41</span>
          
          <textarea className="textArea" onChange={onChangeSS7Listener41} value={SS7Essay41}/>

          <span className="days">LESSON 42</span>
          
          <textarea className="textArea" onChange={onChangeSS7Listener42} value={SS7Essay42}/>

          <span className="days">LESSON 43</span>
          
          <textarea className="textArea" onChange={onChangeSS7Listener43} value={SS7Essay43}/>

          <span className="days">LESSON 44</span>
          
          <textarea className="textArea" onChange={onChangeSS7Listener44} value={SS7Essay44}/>

          <span className="days">LESSON 45</span>
          
          <textarea className="textArea" onChange={onChangeSS7Listener45} value={SS7Essay45}/>

          <span className="days">LESSON 46</span>
          
          <textarea className="textArea" onChange={onChangeSS7Listener46} value={SS7Essay46}/>

          <span className="days">LESSON 47</span>
          
          <textarea className="textArea" onChange={onChangeSS7Listener47} value={SS7Essay47}/>

          <span className="days">LESSON 48</span>
          
          <textarea className="textArea" onChange={onChangeSS7Listener48} value={SS7Essay48}/>

          <span className="days">LESSON 49</span>
          
          <textarea className="textArea" onChange={onChangeSS7Listener49} value={SS7Essay49}/>

          <span className="days">LESSON 50</span>
          
          <textarea className="textArea" onChange={onChangeSS7Listener50} value={SS7Essay50}/>

          <span className="days">LESSON 51</span>
          
          <textarea className="textArea" onChange={onChangeSS7Listener51} value={SS7Essay51}/>

          <span className="days">LESSON 52</span>

          <textarea className="textArea" onChange={onChangeSS7Listener52} value={SS7Essay52}/>

          <span className="days">LESSON 53</span>
          
          <textarea className="textArea" onChange={onChangeSS7Listener53} value={SS7Essay53}/>

          <span className="days">LESSON 54</span>
          
          <textarea className="textArea" onChange={onChangeSS7Listener54} value={SS7Essay54}/>

          <span className="days">LESSON 55</span>
          
          <textarea className="textArea" onChange={onChangeSS7Listener55} value={SS7Essay55}/>

          <span className="days">LESSON 56</span>
          
          <textarea className="textArea" onChange={onChangeSS7Listener56} value={SS7Essay56}/>

          <span className="days">LESSON 57</span>
          
          <textarea className="textArea" onChange={onChangeSS7Listener57} value={SS7Essay57}/>

          <span className="days">LESSON 58</span>
          
          <textarea className="textArea" onChange={onChangeSS7Listener58} value={SS7Essay58}/>

          <span className="days">LESSON 59</span>
          
          <textarea className="textArea" onChange={onChangeSS7Listener59} value={SS7Essay59}/>

          <span className="days">LESSON 60</span>
          
          <textarea className="textArea" onChange={onChangeSS7Listener60} value={SS7Essay60}/>

          <span className="days">LESSON 61</span>

          <textarea className="textArea" onChange={onChangeSS7Listener61} value={SS7Essay61}/>
          
          <span className="days">LESSON 62</span>
          <p>It's time to travel to another destination somewhere in the world. Where would you go this
            time?<br/>
            Paris to see the Eiffel Tower? <br/>Machu Pichu in Peru? <br/>Angel Falls in Venezuela? <br/>Kangaroo
            Island off the coast of Australia? <br/>Avatar mountains (Zhangjiajie) in China? <br/>Big Sur in
            California?
          </p>
          If you have no idea where to you'd like to go, get inspired by <a href="https://www.lifehack.org/articles/lifestyle/17-stunning-places-visit-with-google-maps.html"
          target="_blank"> this site about stunning places</a> or this video showing some of the most
          beautiful places in the world.<br/>
          <Video videoUrl="https://www.youtube.com/embed/vwZBiG1_IWs"/>
          <p> Next, answer the following questions:<br/>
            1. What place would you visit?<br/>
            2. Locate this place virtually on <a href="https://earth.google.com/web/">Google Earth</a> or <a href="https://www.google.com/maps">Google Maps</a> using satellite view.<br/>
            3. Why did you choose this place?<br/>
            4. Discuss the cultural, historical or environmental significance this place has. (In what ways do
            you think is it important?)<br/>
            5. After your jet lands, how will you get to this place? (Ex. I will take a cab. It’s 30 minutes
            from the airport.” OR “I will need to get a GPS and trek 3 days into the jungle to find it.” OR “A
            mountain bike is the best mode of transportation.”<br/>
            6. How long will you stay there and where will you stay? (Ex. I will stay in a hut on the beach OR
            …in a treehouse in the jungle OR …in a rented camper so I can tour the area.<br/>
            7. What language do they speak?<br/>
            8. What things/activities will you do when you get there?<br/>
            <br/></p>
          <textarea className="textArea" onChange={onChangeSS7Listener62} value={SS7Essay62}/>
          1
          <span className="days">LESSON 63</span>
          
          <textarea className="textArea" onChange={onChangeSS7Listener63} value={SS7Essay63}/>

          <span className="days">LESSON 64</span>
          
          <textarea className="textArea" onChange={onChangeSS7Listener64} value={SS7Essay64}/>

          <span className="days">LESSON 65</span>
          
          <textarea className="textArea" onChange={onChangeSS7Listener65} value={SS7Essay65}/>

          <span className="days">LESSON 66</span>
          
          <textarea className="textArea" onChange={onChangeSS7Listener66} value={SS7Essay66}/>

          <span className="days">LESSON 67</span>
          <p>
            <a href="https://earth.google.com/web/@17.90693717,-12.41937117,-34606.55899502a,57359668.97d,35y,0.00004064h,18.19296234t,0r/data=CjwSOhIgZjJhMmExN2E0MDZlMTFlOTk5MGE5OWYyYWQ2OTYwMTgiFnNwbC14LXgteC1zcGxhc2hzY3JlZW4"
              target="_blank">
              Click to play the Google Maps game Carmen Santiago: The keys to the Kremlin Caper
              <img src="../../content/images/subjects/carmen-sandiego.png"/></a>
          </p><br/>
          <textarea className="textArea" onChange={onChangeSS7Listener67} value={SS7Essay67}/>

          <span className="days">LESSON 68</span>
          <textarea className="textArea" onChange={onChangeSS7Listener101} value={SS7Essay101}/>

          <span className="days">LESSON 69</span>
          <textarea className="textArea" onChange={onChangeSS7Listener131} value={SS7Essay131}/>

          <span className="days">LESSON 70</span>
          
          <textarea className="textArea" onChange={onChangeSS7Listener68} value={SS7Essay68}/>

          <span className="days">LESSON 71</span>
          
          <textarea className="textArea" onChange={onChangeSS7Listener69} value={SS7Essay69}/>

          <span className="days">LESSON 72</span>
          
          <textarea className="textArea" onChange={onChangeSS7Listener70} value={SS7Essay70}/>

          <span className="days">LESSON 73</span>
          
          <textarea className="textArea" onChange={onChangeSS7Listener71} value={SS7Essay71}/>

          <span className="days">LESSON 74</span>
          
          <textarea className="textArea" onChange={onChangeSS7Listener72} value={SS7Essay72}/>

          <span className="days">LESSON 75</span>
          
          <textarea className="textArea" onChange={onChangeSS7Listener73} value={SS7Essay73}/>

          <span className="days">LESSON 76</span>
          
          <textarea className="textArea" onChange={onChangeSS7Listener74} value={SS7Essay74}/>

          <span className="days">LESSON 77</span>
          
          <textarea className="textArea" onChange={onChangeSS7Listener75} value={SS7Essay75}/>

          <span className="days">LESSON 78</span>
          
          <textarea className="textArea" onChange={onChangeSS7Listener76} value={SS7Essay76}/>

          <span className="days">LESSON 79</span>
          
          <textarea className="textArea" onChange={onChangeSS7Listener77} value={SS7Essay77}/>

          <span className="days">LESSON 80</span>
          
          <textarea className="textArea" onChange={onChangeSS7Listener78} value={SS7Essay78}/>

          <span className="days">LESSON 81</span>
          
          <textarea className="textArea" onChange={onChangeSS7Listener79} value={SS7Essay79}/>

          <span className="days">LESSON 82</span>
          
          <textarea className="textArea" onChange={onChangeSS7Listener80} value={SS7Essay80}/>

          <span className="days">LESSON 83</span>
          
          <textarea className="textArea" onChange={onChangeSS7Listener81} value={SS7Essay81}/>

          <span className="days">LESSON 84</span>
          
          <textarea className="textArea" onChange={onChangeSS7Listener82} value={SS7Essay82}/>

          <span className="days">LESSON 85</span>
          
          <textarea className="textArea" onChange={onChangeSS7Listener83} value={SS7Essay83}/>

          <span className="days">LESSON 86</span>
          
          <textarea className="textArea" onChange={onChangeSS7Listener84} value={SS7Essay84}/>

          <span className="days">LESSON 87</span>
          
          <textarea className="textArea" onChange={onChangeSS7Listener85} value={SS7Essay85}/>

          <span className="days">LESSON 88</span>
          
          <textarea className="textArea" onChange={onChangeSS7Listener86} value={SS7Essay86}/>

          <span className="days">LESSON 89</span>
          
          <textarea className="textArea" onChange={onChangeSS7Listener87} value={SS7Essay87}/>

          <span className="days">LESSON 90</span>
          
          <textarea className="textArea" onChange={onChangeSS7Listener88} value={SS7Essay88}/>

          <span className="days">LESSON 91</span>
          
          <textarea className="textArea" onChange={onChangeSS7Listener89} value={SS7Essay89}/>

          <span className="days">LESSON 92</span>
          
          <textarea className="textArea" onChange={onChangeSS7Listener90} value={SS7Essay90}/>

          <span className="days">LESSON 93</span>
          
          <textarea className="textArea" onChange={onChangeSS7Listener91} value={SS7Essay91}/>

          <span className="days">LESSON 94</span>
          
          <textarea className="textArea" onChange={onChangeSS7Listener92} value={SS7Essay92}/>

          <span className="days">LESSON 95</span>
          
          <textarea className="textArea" onChange={onChangeSS7Listener93} value={SS7Essay93}/>

          <span className="days">LESSON 96</span>
          
          <textarea className="textArea" onChange={onChangeSS7Listener94} value={SS7Essay94}/>

          <span className="days">LESSON 97</span>
          
          <textarea className="textArea" onChange={onChangeSS7Listener95} value={SS7Essay95}/>

          <span className="days" style={{ color: "#3a4563" }}><b>GEOGRAPHY</b></span> <br/>
          <p> This next segment will focus on learning about the geography of --REPLACE--.
            After watching a short video about a country, you will be asked to answer several questions based
            on what you learned. Read the questions ahead of time as it will help you take notes while watching the videos. You will then
            practice locating countries on a map.</p>
          <br/><span className="days">LESSON 98</span>
          <p>Watch the video below about<b> Albania. </b>Then answer the questions that follow:</p>
          <Video videoUrl="https://www.youtube.com/embed/9WZ06pTuqV0?list=PLR7XO54Pktt-h8T-dtr4MXy0_MpbWukHW"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is
            the meaning behind the colors and/or the design? If the flag is not discussed in the video, research it
            online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Post your score from <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap
              Map </a>(instructions below).
          </p><br/>
          <p>After you finish questions 1-7 above, go to <a href="https://tapmap.simpledzn.com" rel="noreferrer"
                                                            target="_blank">Tap
            Map to practice --REPLACE-- geography for 20 minutes.</a><br/>
            <span className='smallerFont'> a) Click <a href="timer20" rel="noreferrer" target="_blank">here to start a 20 MINUTE
                TIMER. </a>Play Tap Map until the timer goes off. <br/>
              b) Memorize each country's location under the Practice setting and then take the quiz. Each time you
              retake the quiz, your score should improve.
              In a couple of weeks, you should be able to locate every country in --REPLACE--!<br/>
               c) Record your final score below.</span></p>
          <ul>
              <span className='smallerFont'><li><a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map Instructions</a></li>
              <li>a) Click on <span className="taphighlt">PRACTICE </span>in Tap Map's side menu and select
                <span className="taphighlt">--REPLACE--</span> from the dropdown menu. <br/></li>
              <li>b) Click on each country on the map in --REPLACE-- and try to memorize where each one is located
                (5- 10 minutes).
              </li>
              <li>c) Then select a quiz to take. <span className="taphighlt">"Click on a Country"</span>
                lists a country and you have to find it on the map. <span
                  className="taphighlt">"Type the Country Name"</span> will
                highlight a country in --REPLACE-- and you have to write in the name.
              </li>

              <li>d) You will receive a score and a list of countries you answered
                incorrectly. Review these. Then click CANCEL to go back to the practice map. Try to
                memorize where these countries are.
              </li>     </span>
          </ul>
          <textarea className="textArea" placeholder="Answer the questions and post your score from Tap Map."
                    onChange={onChangeSS7Listener96} value={SS7Essay96}/>

          <span className="days">LESSON 99</span>
          <p>Watch the video below about<b> Andorra.</b> Then answer the questions that follow:</p>
          <Video videoUrl="https://www.youtube.com/embed/POOvmkhlUD4?list=PLR7XO54Pktt-h8T-dtr4MXy0_MpbWukHW"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the
            meaning
            behind the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map</a> score for today.
          </p>
          <p><span className='smallerFont'>After you finish the questions above, go to <a href="https://tapmap.simpledzn.com">Tap
            Map</a> to learn where countries are located.<br/>
            Practice for about 5-10 minutes, then spend another 10 -15 minutes taking the quiz. Go back to
            the practice setting after each quiz to memorize the countries you get incorrect.<br/>
            Set a <a href="timer20" rel="noreferrer" target="_blank">20 minute timer. </a><br/>
            Record your final score below. </span><br/></p>
          <textarea className="textArea" onChange={onChangeSS7Listener97} value={SS7Essay97}/>

          <span className="days">LESSON 100</span>
          <p>Watch the video below about<b> Austria.</b> Then answer the questions that follow:</p>
          <Video videoUrl="https://www.youtube.com/embed/hKsGmyhsKFA?list=PLR7XO54Pktt-h8T-dtr4MXy0_MpbWukHW"/>

          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the
            meaning
            behind the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>

          <p>After you finish the questions above, go to <a href="https://tapmap.simpledzn.com" rel="noreferrer"
                                                            target="_blank">Tap
            Map</a> to learn where countries are located.<br/>
            <span className='smallerFont'>Practice for about 5 minutes, then spend another 10 -15 minutes taking the quiz. Go back to
              the practice after each quiz to memorize the countries you get incorrect.<br/>
              Click here to <a href="timer20" rel="noreferrer" target="_blank">set a 20 minute timer. </a>
              Record your final score below.</span></p>
          <br/>
          <textarea className="textArea" onChange={onChangeSS7Listener98} value={SS7Essay98}/>

          <span className="days">LESSON 101</span>
          <p>Watch the video below about<b> Armenia. </b> Then answer the questions that follow:</p>
          <Video videoUrl="https://www.youtube.com/embed/sL4JK_bDo0A?list=PLR7XO54Pktt-h8T-dtr4MXy0_MpbWukHW"/>

          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the
            meaning
            behind the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising. <br/>
            8. <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">TAP MAP</a> quiz score for today.
          </p>
          <p> <span className='smallerFont'> After you finish the questions above, set a <a href="timer20"
                                                                                            rel="noreferrer"
                                                                                            target="_blank">20 minute timer </a>
              and then go to <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a> to memorize and quiz yourself on
              country location. Do this until the timer goes off.</span></p><br/>
          <textarea className="textArea" onChange={onChangeSS7Listener99} value={SS7Essay99}/>

          <span className="days">LESSON 102</span>
          <p>Watch the video below about<b> Azerbaijan. </b></p>
          <Video videoUrl="https://www.youtube.com/embed/DqVPVRmRIU8?list=PLR7XO54Pktt-h8T-dtr4MXy0_MpbWukHW"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the
            meaning
            behind the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>
          <p> <span className='smallerFont'> After you finish the questions above, set a <a href="timer20"
                                                                                            rel="noreferrer"
                                                                                            target="_blank">20 minute timer </a>
              and then go to <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country
              location. Do this until the timer goes off.</span></p><br/>

          <textarea className="textArea" onChange={onChangeSS7Listener100} value={SS7Essay100}/>

          <span className="days">LESSON 103</span>
          <p>Watch the video below about<b> Bulgaria. </b></p>
          <Video videoUrl="https://www.youtube.com/embed/SlVmp7zBbKU?list=PLR7XO54Pktt-h8T-dtr4MXy0_MpbWukHW"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the
            meaning
            behind the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>
          <p> <span className='smallerFont'> After you finish the questions above, set a <a href="timer20"
                                                                                            rel="noreferrer"
                                                                                            target="_blank">20 minute timer </a>
              and then go to <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country
              location. Do this until the timer goes off.</span></p><br/>


          <textarea className="textArea" onChange={onChangeSS7Listener102} value={SS7Essay102}/>

          <span className="days">LESSON 104</span>
          <p>Watch the video below about<b> Bosnia and Herzegovina. </b></p>
          <Video videoUrl="https://www.youtube.com/embed/KO0rEwwyB0g?list=PLR7XO54Pktt-h8T-dtr4MXy0_MpbWukHW"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the
            meaning
            behind the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>
          <p><span className='smallerFont'>  After you finish the questions above, set a <a href="timer20"
                                                                                            rel="noreferrer"
                                                                                            target="_blank">20 minute timer </a> and then go to <a href="https://tapmap.simpledzn.com">Tap Map </a>to memorize and quiz yourself on country location. </span>
          </p><br/>
          <textarea className="textArea" onChange={onChangeSS7Listener103} value={SS7Essay103}/>

          <span className="days">LESSON 105</span>
          <p>Watch the video below about<b> Belarus. </b></p>
          <Video videoUrl="https://www.youtube.com/embed/nASqSOtXkhk?list=PLR7XO54Pktt-h8T-dtr4MXy0_MpbWukHW"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the
            meaning
            behind the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a href="timer20"
                                                                                           rel="noreferrer"
                                                                                           target="_blank">20 minute timer </a>and then go to <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>
          <textarea className="textArea" onChange={onChangeSS7Listener104} value={SS7Essay104}/>

          <span className="days">LESSON 106</span>
          <p>Watch the video below about<b> Belgium. </b></p>
          <Video videoUrl="https://www.youtube.com/embed/0TuMvWCbM-g?list=PLR7XO54Pktt-h8T-dtr4MXy0_MpbWukHW"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the
            meaning
            behind the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a href="timer20"
                                                                                           rel="noreferrer"
                                                                                           target="_blank">20 minute timer </a>   and then go to <a href="https://tapmap.simpledzn.com">Tap Map </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>
          <textarea className="textArea" onChange={onChangeSS7Listener105} value={SS7Essay105}/>

          <span className="days">LESSON 107</span>
          <p>Watch the video below about<b> Croatia. </b></p>
          <Video videoUrl="https://www.youtube.com/embed/Ok5LmqoromI?list=PLR7XO54Pktt-h8T-dtr4MXy0_MpbWukHW"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the
            meaning
            behind the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a href="timer20"
                                                                                           rel="noreferrer"
                                                                                           target="_blank">20 minute timer </a>   and then go to <a href="https://tapmap.simpledzn.com">Tap Map </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>

          <textarea className="textArea" onChange={onChangeSS7Listener106} value={SS7Essay106}/>

          <span className="days">LESSON 108</span>
          <p>Watch the videos below about<b> Cyprus. </b></p>
          <Video videoUrl="https://www.youtube.com/embed/"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the
            meaning
            behind the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a href="timer20"
                                                                                           rel="noreferrer"
                                                                                           target="_blank">20 minute timer </a>   and then go to <a href="https://tapmap.simpledzn.com">Tap Map </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>
          <textarea className="textArea" onChange={onChangeSS7Listener107} value={SS7Essay107}/>

          <span className="days">LESSON 109</span>
          <p>Watch the videos below about the<b> Czech Republic. </b></p>
          <Video videoUrl="https://www.youtube.com/embed/"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the
            meaning
            behind the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a href="/timer20"
                                                                                           rel="noreferrer"
                                                                                           target="_blank">20 minute timer </a>   and then go to <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>
          <textarea className="textArea" onChange={onChangeSS7Listener108} value={SS7Essay108}/>

          <span className="days">LESSON 110</span>
          <p>Watch the videos below about<b> Denmark. </b></p>
          <Video videoUrl="https://www.youtube.com/embed/"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the
            meaning
            behind the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a href="timer20"
                                                                                           rel="noreferrer"
                                                                                           target="_blank">20 minute timer </a>   and then go to <a href="https://tapmap.simpledzn.com">Tap Map </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>
          <textarea className="textArea" onChange={onChangeSS7Listener109} value={SS7Essay109}/>

          <span className="days">LESSON 111</span>
          <p>Watch the videos below about<b> Estonia. </b></p>
          <Video videoUrl="https://www.youtube.com/embed/"/>
          <p>TAP MAP</p>

          <textarea className="textArea" onChange={onChangeSS7Listener110} value={SS7Essay110}/>

          <span className="days">LESSON 112</span>
          <p>Watch the video below about<b> Rep. of North
            Macedonia</b> by Geography Now. Then answer the questions that follow. </p>
          <Video videoUrl="https://www.youtube.com/embed/"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the
            meaning
            behind the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>

          <p> After you finish the questions above, go to <a href="https://tapmap.simpledzn.com" rel="noreferrer"
                                                             target="_blank">Tap
            Map</a> to practice and quiz yourself for 20 minutes.<br/>
            b) Set a <a href="timer20" rel="noreferrer" target="_blank">timer.</a><br/>
            c) Record your final score below.</p><br/>
          <textarea className="textArea" onChange={onChangeSS7Listener111} value={SS7Essay111}/>

          <span className="days">LESSON 113</span>
          <p>Watch the videos below about<b>France. </b></p>
          <Video videoUrl="https://www.youtube.com/embed/"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the
            meaning
            behind the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>

          <p> After you finish the questions above, go to <a href="https://tapmap.simpledzn.com" rel="noreferrer"
                                                             target="_blank">Tap
            Map</a> to practice and quiz yourself for 20 minutes.<br/>
            b) Set a <a href="timer20" rel="noreferrer" target="_blank">timer.</a><br/>
            c) Record your final score below.</p><br/>
          <textarea className="textArea" onChange={onChangeSS7Listener112} value={SS7Essay112}/>

          <span className="days">LESSON 114</span>
          <p>Watch the videos below about<b> Finland</b> by Geography Now. Then answer the questions that follow.</p>
          <Video videoUrl="https://www.youtube.com/embed/"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the
            meaning
            behind the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>

          <p> After you finish the questions above, go to <a href="https://tapmap.simpledzn.com" rel="noreferrer"
                                                             target="_blank">Tap
            Map</a> to practice and quiz yourself for 20 minutes.<br/>
            b) Set a <a href="timer20" rel="noreferrer" target="_blank">timer.</a><br/>
            c) Record your final score below.</p><br/>
          <textarea className="textArea" onChange={onChangeSS7Listener113} value={SS7Essay113}/>

          <span className="days">LESSON 115</span>
          <p>Watch the videos below about<b> Georgia</b> by Geography Now. Then answer the questions that follow. </p>
          <Video videoUrl="https://www.youtube.com/embed/"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the
            meaning
            behind the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>

          <p> After you finish the questions above, go to <a href="https://tapmap.simpledzn.com" rel="noreferrer"
                                                             target="_blank">Tap
            Map</a> to practice and quiz yourself for 20 minutes.<br/>
            b) Set a <a href="timer20" rel="noreferrer" target="_blank">timer.</a><br/>
            c) Record your final score below.</p><br/>
          <textarea className="textArea" onChange={onChangeSS7Listener114} value={SS7Essay114}/>

          <span className="days">LESSON 116</span>
          <p>Watch the videos below about<b> Germany</b> by Geography Now. Then answer the questions that follow.</p>
          <Video videoUrl="https://www.youtube.com/embed/"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the
            meaning
            behind the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>

          <p> After you finish the questions above, go to <a href="https://tapmap.simpledzn.com" rel="noreferrer"
                                                             target="_blank">Tap
            Map</a> to practice and quiz yourself for 20 minutes.<br/>
            b) Set a <a href="timer20" rel="noreferrer" target="_blank">timer.</a><br/>
            c) Record your final score below.</p><br/>
          <textarea className="textArea" onChange={onChangeSS7Listener115} value={SS7Essay115}/>

          <span className="days">LESSON 117</span>
          <p>Watch the videos below about<b> Greece</b> by Geography Now.
          </p>
          <Video videoUrl="https://www.youtube.com/embed/"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the
            meaning
            behind the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>

          <p> After you finish the questions above, go to <a href="https://tapmap.simpledzn.com" rel="noreferrer"
                                                             target="_blank">Tap
            Map</a> to practice and quiz yourself for 20 minutes.<br/>
            b) Set a <a href="timer20" rel="noreferrer" target="_blank">timer.</a><br/>
            c) Record your final score below.</p><br/>
          <textarea className="textArea" onChange={onChangeSS7Listener116} value={SS7Essay116}/>

          <span className="days">LESSON 118</span>
          <p>Watch the videos below about<b> Hungary</b> by Geography Now.
          </p>
          <Video videoUrl="https://www.youtube.com/embed/"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the
            meaning
            behind the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>

          <p><span className='smallerFont'> After you finish the questions above, set a <a href="timer20"
                                                                                           rel="noreferrer"
                                                                                           target="_blank">20 minute timer </a>and then go to <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>

          <textarea className="textArea" onChange={onChangeSS7Listener117} value={SS7Essay117}/>

          <span className="days">LESSON 119</span>
          <p>Watch the video below about<b> </b> by Geography Now. </p>
          <Video videoUrl="https://www.youtube.com/embed/"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the
            meaning
            behind the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>

          <p> After you finish the questions above, go to <a href="https://tapmap.simpledzn.com" rel="noreferrer"
                                                             target="_blank">Tap
            Map</a> to practice and quiz yourself for 20 minutes.<br/>
            b) Set a <a href="timer20" rel="noreferrer" target="_blank">timer.</a><br/>
            c) Record your final score below.</p><br/>
          <textarea className="textArea" onChange={onChangeSS7Listener118} value={SS7Essay118}/>

          <span className="days">LESSON 120</span>
          <p>Watch the video below about<b> </b> by Geography Now. </p>
          <Video videoUrl="https://www.youtube.com/embed/"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is
            the meaning
            behind the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>

          <p><span className='smallerFont'> After you finish the questions above, set a <a href="timer20"
                                                                                           rel="noreferrer"
                                                                                           target="_blank">20 minute timer </a>and then go to <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>

          <textarea className="textArea" onChange={onChangeSS7Listener119} value={SS7Essay119}/>

          <span className="days">LESSON 121</span>
          <p>Watch the video below about<b> </b> by Geography Now. </p>
          <Video videoUrl="https://www.youtube.com/embed/"/>

          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is
            the meaning
            behind the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>

          <p><span className='smallerFont'> After you finish the questions above, set a <a href="timer20"
                                                                                           rel="noreferrer"
                                                                                           target="_blank">20 minute timer </a>and then go to <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>

          <textarea className="textArea" onChange={onChangeSS7Listener120} value={SS7Essay120}/>

          <span className="days">LESSON 122</span>
          <p>Watch the video below about<b> Lithuania. </b></p>
          <Video videoUrl="https://www.youtube.com/embed/"/>

          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What
            is the meaning
            behind the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so,
            explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>

          <p><span className='smallerFont'> After you finish the questions above, set a <a href="timer20"
                                                                                           rel="noreferrer"
                                                                                           target="_blank">20 minute timer </a>and then go to <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>

          <textarea className="textArea" onChange={onChangeSS7Listener121} value={SS7Essay121}/>

          <span className="days">LESSON 123</span>
          <p>Watch the video below about<b> </b> by Geography Now. Then answer the questions that follow.
          </p>
          <Video videoUrl="https://www.youtube.com/embed/"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What
            is the meaning
            behind the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so,
            explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>

          <p><span className='smallerFont'> After you finish the questions above, set a <a href="timer20"
                                                                                           rel="noreferrer"
                                                                                           target="_blank">20 minute timer </a>and then go to <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>

          <textarea className="textArea" onChange={onChangeSS7Listener122} value={SS7Essay122}/>

          <span className="days">LESSON 124</span>
          <p>Watch the video below about<b> </b> by Geography Now. Then answer the questions that follow.
          </p>
          <Video videoUrl="https://www.youtube.com/embed/"/>

          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What
            is the meaning behind the colors and/or the design? If the flag is not research it
            online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so,
            explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>

          <p><span className='smallerFont'> After you finish the questions above, set a <a href="timer20"
                                                                                           rel="noreferrer"
                                                                                           target="_blank">20 minute timer </a>and then go to <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>
          <textarea className="textArea" onChange={onChangeSS7Listener123} value={SS7Essay123}/>

          <span className="days">LESSON 125</span>
          <p>Watch the video below about<b> </b> by Geography Now. Then answer the questions that follow. </p>
          <Video videoUrl="https://www.youtube.com/embed/"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What
            is the meaning
            behind the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so,
            explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>

          <p><span className='smallerFont'> After you finish the questions above, set a <a href="timer20"
                                                                                           rel="noreferrer"
                                                                                           target="_blank">20 minute timer </a>and then go to <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>

          <textarea className="textArea" onChange={onChangeSS7Listener124} value={SS7Essay124}/>

          <span className="days">LESSON 126</span>
          <p>Watch the video below about<b> </b> by Geography Now. Then answer the questions that follow. </p>
          <Video videoUrl="https://www.youtube.com/embed/"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What
            is the meaning
            behind the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so,
            explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>

          <p><span className='smallerFont'> After you finish the questions above, set a <a href="timer20"
                                                                                           rel="noreferrer"
                                                                                           target="_blank">20 minute timer </a>and then go to <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>

          <textarea className="textArea" onChange={onChangeSS7Listener125} value={SS7Essay125}/>

          <span className="days">LESSON 127</span>
          <p>Watch the video below about<b> </b> by Geography Now. Then answer the questions that follow. </p>
          <Video videoUrl="https://www.youtube.com/embed/"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What
            is the meaning
            behind the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so,
            explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>

          <p><span className='smallerFont'> After you finish the questions above, set a <a href="timer20"
                                                                                           rel="noreferrer"
                                                                                           target="_blank">20 minute timer </a>and then go to <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>

          <textarea className="textArea" onChange={onChangeSS7Listener126} value={SS7Essay126}/>

          <span className="days">LESSON 128</span>
          <p>Watch the video below about<b> </b> by Geography Now. Then answer the questions that follow.
          </p>
          <Video videoUrl="https://www.youtube.com/embed/"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What
            is the meaning behind the colors and/or the design? If the flag is not discussed in the video, research it
            online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so,
            explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>

          <p><span className='smallerFont'> After you finish the questions above, set a <a href="timer20"
                                                                                           rel="noreferrer"
                                                                                           target="_blank">20 minute timer </a>and then go to <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>

          <textarea className="textArea" onChange={onChangeSS7Listener127} value={SS7Essay127}/>

          <span className="days">LESSON 129</span>
          <p>Watch the video below about<b> </b> by Geography Now. Then answer the questions that follow.
          </p>
          <Video videoUrl="https://www.youtube.com/embed/"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What
            is the meaning
            behind the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so,
            explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>

          <p><span className='smallerFont'> After you finish the questions above, set a <a href="timer20"
                                                                                           rel="noreferrer"
                                                                                           target="_blank">20 minute timer </a>and then go to <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>

          <textarea className="textArea" onChange={onChangeSS7Listener128} value={SS7Essay128}/>

          <span className="days">LESSON 130</span>
          <p>Watch the video below about<b> </b> by Geography Now. Then answer the questions that follow. </p>
          <Video videoUrl="https://www.youtube.com/embed/bAGhXcYc0o4?list=PLR7XO54Pktt-h8T-dtr4MXy0_MpbWukHW"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What
            is the meaning
            behind the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so,
            explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>

          <p><span className='smallerFont'> After you finish the questions above, set a <a href="timer20"
                                                                                           rel="noreferrer"
                                                                                           target="_blank">20 minute timer </a>and then go to <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>

          <textarea className="textArea" onChange={onChangeSS7Listener129} value={SS7Essay129}/>

          <span className="days">LESSON 131</span>
          <p>Watch the video below about<b> </b> by Geography Now.
          </p>
          <Video videoUrl="https://www.youtube.com/embed/Hn8XXPl1vjU?list=PLR7XO54Pktt-h8T-dtr4MXy0_MpbWukHW"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What
            is the meaning
            behind the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so,
            explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>

          <p><span className='smallerFont'> After you finish the questions above, set a <a href="timer20"
                                                                                           rel="noreferrer"
                                                                                           target="_blank">20 minute timer </a>and then go to <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>

          <textarea className="textArea" onChange={onChangeSS7Listener130} value={SS7Essay130}/>

          <span className="days">LESSON 132</span>
          <p>Watch the video below about<b> </b> by Geography Now. </p>
          <Video videoUrl="https://www.youtube.com/embed/mq6L8CnNJXc?list=PLR7XO54Pktt-h8T-dtr4MXy0_MpbWukHW"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What
            is the meaning
            behind the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so,
            explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>

          <p><span className='smallerFont'> After you finish the questions above, set a <a href="timer20"
                                                                                           rel="noreferrer"
                                                                                           target="_blank">20 minute timer </a>and then go to <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>

          <textarea className="textArea" onChange={onChangeSS7Listener132} value={SS7Essay132}/>

          <span className="days">LESSON 133</span>
          <p>Watch the video below about<b> </b> by Geography Now. </p>
          <Video videoUrl="https://www.youtube.com/embed/ZRMbh0wSly0?list=PLR7XO54Pktt-h8T-dtr4MXy0_MpbWukHW"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What
            is the meaning
            behind the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so,
            explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>

          <p><span className='smallerFont'> After you finish the questions above, set a <a href="timer20"
                                                                                           rel="noreferrer"
                                                                                           target="_blank">20 minute timer </a>and then go to <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>

          <textarea className="textArea" onChange={onChangeSS7Listener133} value={SS7Essay133}/>

          <span className="days">LESSON 134</span>
          <p>Watch the video below about<b> </b> by Geography Now. </p>
          <Video videoUrl="https://www.youtube.com/embed/K8zAbdYx9SU?list=PLR7XO54Pktt-h8T-dtr4MXy0_MpbWukHW"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What
            is the meaning
            behind the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so,
            explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>

          <p><span className='smallerFont'> After you finish the questions above, set a <a href="timer20"
                                                                                           rel="noreferrer"
                                                                                           target="_blank">20 minute timer </a>and then go to <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>

          <textarea className="textArea" onChange={onChangeSS7Listener134} value={SS7Essay134}/>

          <span className="days">LESSON 135</span>
          <p>Watch the video below about<b> </b> by Geography Now. Then answer the questions that follow.
          </p>

          <Video videoUrl="https://www.youtube.com/embed/SU4W_tIFbTc?list=PLR7XO54Pktt-h8T-dtr4MXy0_MpbWukHW"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What
            is the meaning
            behind the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so,
            explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>

          <p><span className='smallerFont'> After you finish the questions above, set a <a href="timer20"
                                                                                           rel="noreferrer"
                                                                                           target="_blank">20 minute timer </a>and then go to <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>

          <textarea className="textArea" onChange={onChangeSS7Listener135} value={SS7Essay135}/>

          <span className="days">LESSON 136</span>
          <p>Watch the video below about<b> </b> by Geography Now. Then answer the questions that follow. </p>

          <Video videoUrl="https://www.youtube.com/embed/1pxrIj9Xyps?list=PLR7XO54Pktt-h8T-dtr4MXy0_MpbWukHW"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it?
            What is the meaning
            behind the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so,
            explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or
            surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>

          <p><span className='smallerFont'> After you finish the questions above, set a <a href="timer20" rel="noreferrer" target="_blank">20 minute timer </a>and then go to <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span></p><br/>

          <textarea className="textArea" onChange={onChangeSS7Listener136} value={SS7Essay136}/>

          <p className="regions">Middle Eastern Countries</p>

          <span className="days">LESSON 137</span>
          <p>Watch the video below about<b> </b> by Geography Now. Then answer the questions that follow.</p>

          <Video videoUrl="https://www.youtube.com/embed/P2gHUcwZbYk?list=PLMRyiKpIukC-FPqtWyOee_dFYMeVie49H"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it?
            What is the meaning
            behind the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so,
            explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or
            surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>

          <p>- After you finish the questions above, go to <a href="https://tapmap.simpledzn.com">Tap Map</a> to
            continue quizzing yourself on Middle Eastern Countries.<br/>
            - Practice for 20 minutes. <a href="timer20" rel="noreferrer" target="_blank">Set a 20 minute
              timer. </a><br/>
            - Record your final score below.</p><br/>
          <textarea className="textArea" onChange={onChangeSS7Listener137} value={SS7Essay137}/>

          <span className="days">LESSON 138</span>
          <p>Watch the video below about<b> </b> by Geography Now. Then answer the questions that follow. </p>

          <Video videoUrl="https://www.youtube.com/embed/jdNw0g7SOMc?list=PLMRyiKpIukC-FPqtWyOee_dFYMeVie49H"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like
            it? What is the meaning
            behind the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so,
            explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or
            surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>

          <p><span className='smallerFont'> After you finish the questions above, set a <a href="timer20" rel="noreferrer" target="_blank">20 minute timer </a>and then go to <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span></p><br/>

          <textarea className="textArea" onChange={onChangeSS7Listener138} value={SS7Essay138}/>

          <span className="days">LESSON 139</span>
          <p>Watch the video below about<b> </b> by Geography Now. Then answer the questions that follow.</p>

          <Video videoUrl="https://www.youtube.com/embed/2xQM4Zy5zIk?list=PLMRyiKpIukC-FPqtWyOee_dFYMeVie49H"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning  behind the colors and/or the design? If the flag is not research it
            online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so,  explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a href="timer20" rel="noreferrer" target="_blank">20 minute timer </a>and then go to <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span></p><br/>

          <textarea className="textArea" onChange={onChangeSS7Listener139} value={SS7Essay139}/>

          <span className="days">LESSON 140</span>
          <p>Watch the video below about<b> </b> by Geography Now. Then answer the questions that follow. </p>

          <Video videoUrl="https://www.youtube.com/embed/YHQqsx9wsnc?list=PLMRyiKpIukC-FPqtWyOee_dFYMeVie49H"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you
            like it? What is the meaning
            behind the colors and/or the design? If the flag is not research it
            online.<br/>
            2. What language do they speak? If they speak more than one, list them
            all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so,
            explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or
            surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>

          <p><span className='smallerFont'> After you finish the questions above, set a <a href="timer20" rel="noreferrer" target="_blank">20 minute timer </a>and then go to <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span></p><br/>

          <textarea className="textArea" onChange={onChangeSS7Listener140} value={SS7Essay140}/>

          <span className="days">LESSON 141</span>
          <p>Watch the video below about<b> </b> by Geography Now. Then answer the questions that follow. </p>

          <Video videoUrl="https://www.youtube.com/embed/AWKmazrRIwA?list=PLMRyiKpIukC-FPqtWyOee_dFYMeVie49H"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you
            like it? What is the meaning
            behind the colors and/or the design? If the flag is not research it
            online.<br/>
            2. What language do they speak? If they speak more than one, list them
            all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If
            so, explain.<br/>
            5. List a few ways that this country is different than where you
            live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or
            surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>

          <p><span className='smallerFont'> After you finish the questions above, set a <a href="timer20" rel="noreferrer" target="_blank">20 minute timer </a>and then go to <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span></p><br/>

          <textarea className="textArea" onChange={onChangeSS7Listener141} value={SS7Essay141}/>
          <span className="days">LESSON 142</span>
          <p>Watch the video below about<b> </b> by Geography Now. Then answer the questions that follow. </p>

          <Video videoUrl="https://www.youtube.com/embed/aWfu0BKOZ5g?list=PLMRyiKpIukC-FPqtWyOee_dFYMeVie49H"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning  behind the colors and/or the design? If the flag is not research it
            online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so,  explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a href="timer20" rel="noreferrer" target="_blank">20 minute timer </a>and then go to <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span></p><br/>
          <textarea className="textArea" onChange={onChangeSS7Listener142} value={SS7Essay142}/>

          <span className="days">LESSON 143</span>
          <p>Watch the video below about<b> </b> by Geography Now. Then answer the questions that follow. </p>
          <Video videoUrl="https://www.youtube.com/embed/S_pUIeE4Eko?list=PLMRyiKpIukC-FPqtWyOee_dFYMeVie49H"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning  behind the colors and/or the design? If the flag is not research it
            online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so,  explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a href="timer20" rel="noreferrer" target="_blank">20 minute timer </a>and then go to <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span></p><br/>
          <textarea className="textArea" onChange={onChangeSS7Listener143} value={SS7Essay143}/>

          <span className="days">LESSON 144</span>
          <p>Watch the video below about<b> </b> by Geography
            Now. Then answer the questions that follow.</p>
          <Video videoUrl="https://www.youtube.com/embed/vvgLLqpRT6s?list=PLMRyiKpIukC-FPqtWyOee_dFYMeVie49H"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning  behind the colors and/or the design? If the flag is not research it
            online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so,  explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a href="timer20" rel="noreferrer" target="_blank">20 minute timer </a>and then go to <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span></p><br/>
          <textarea className="textArea" onChange={onChangeSS7Listener144} value={SS7Essay144}/>

          <span className="days">LESSON 145</span>
          <p>Watch the video below about<b> </b> by Geography Now. Then answer the questions that follow.</p>
          <Video videoUrl="https://www.youtube.com/embed/mw-gmjzN4Fw?list=PLMRyiKpIukC-FPqtWyOee_dFYMeVie49H"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning  behind the colors and/or the design? If the flag is not research it
            online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so,  explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a href="timer20" rel="noreferrer" target="_blank">20 minute timer </a>and then go to <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span></p><br/>
          <textarea className="textArea" onChange={onChangeSS7Listener145} value={SS7Essay145}/>

          <span className="days">LESSON 146</span>
          <p>Watch the video below about<b> </b> by Geography Now. Then answer the questions that follow.</p>
          <Video videoUrl="https://www.youtube.com/embed/oqfW7xn215o?list=PLMRyiKpIukC-FPqtWyOee_dFYMeVie49H"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning  behind the colors and/or the design? If the flag is not research it
            online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so,  explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a href="timer20" rel="noreferrer" target="_blank">20 minute timer </a>and then go to <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span></p><br/>
          <textarea className="textArea" onChange={onChangeSS7Listener146} value={SS7Essay146}/>

          <span className="days">LESSON 147</span>
          <p>Watch the video below about<b> Saudi
            Arabia</b> by Geography Now. Then answer the questions that follow.</p>
          <Video videoUrl="https://www.youtube.com/embed/tP68QwVvAZk?list=PLMRyiKpIukC-FPqtWyOee_dFYMeVie49H"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning  behind the colors and/or the design? If the flag is not research it
            online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so,  explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a href="timer20" rel="noreferrer" target="_blank">20 minute timer </a>and then go to <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span></p><br/>
          <textarea className="textArea" onChange={onChangeSS7Listener147} value={SS7Essay147}/>

          <span className="days">LESSON 148</span>
          <p>Watch the video:<b> The difference between Arab Countries</b> by Geography Now. Then answer the questions
            that follow.</p>

          <Video videoUrl="https://www.youtube.com/embed/j7MiI9pZaxk"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning  behind the colors and/or the design? If the flag is not research it
            online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so,  explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a href="timer20" rel="noreferrer" target="_blank">20 minute timer </a>and then go to <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span></p><br/>
          <textarea className="textArea" onChange={onChangeSS7Listener148} value={SS7Essay148}/><br/>
          <p className="regions">North &amp; Central America</p>

          <span className="days">LESSON 149</span>
          <p>Watch the video below about<b> </b> by Geography Now. Then answer the questions that follow.</p>

          <Video videoUrl="https://www.youtube.com/embed/SxhUsPBFPkU?list=PLR7XO54Pktt8Ui5oXABHerdCzzHg9noTw"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning  behind the colors and/or the design? If the flag is not research it
            online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so,  explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a href="timer20" rel="noreferrer" target="_blank">20 minute timer </a>and then go to <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span></p><br/>
          <textarea className="textArea" onChange={onChangeSS7Listener149} value={SS7Essay149}/>

          <span className="days">LESSON 150</span>
          <p>Watch the videos below about<b> Mexico</b> by Geography Now. Then answer the questions that follow.</p>
          <Video videoUrl="https://www.youtube.com/embed/"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning  behind the colors and/or the design? If the flag is not research it
            online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so,  explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a href="timer20" rel="noreferrer" target="_blank">20 minute timer </a>and then go to <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span></p><br/>
          <textarea className="textArea" onChange={onChangeSS7Listener150} value={SS7Essay150}/>

          <span className="days">LESSON 151</span>
          <p>Watch the videos below about<b> Guatemala</b> by Geography Now. Then answer the questions that follow.
          </p>
          <Video videoUrl="https://www.youtube.com/embed/"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning  behind the colors and/or the design? If the flag is not research it
            online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so,  explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a href="timer20" rel="noreferrer" target="_blank">20 minute timer </a>and then go to <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span></p><br/>
          <textarea className="textArea" onChange={onChangeSS7Listener151} value={SS7Essay151}/>

          <span className="days">LESSON 152</span>
          <p>Watch the video below about<b> </b> by Geography Now. Then answer the questions that follow.</p>
          <Video videoUrl="https://www.youtube.com/embed/ND8PduJlN6A?list=PLR7XO54Pktt8Ui5oXABHerdCzzHg9noTw"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning  behind the colors and/or the design? If the flag is not research it
            online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so,  explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a href="timer20" rel="noreferrer" target="_blank">20 minute timer </a>and then go to <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span></p><br/>
          <textarea className="textArea" onChange={onChangeSS7Listener152} value={SS7Essay152}/>

          <span className="days">LESSON 153</span>
          <p>Watch the videos below about<b> Nicaragua</b> by Geography Now. Then answer the questions that follow.</p>
          <Video videoUrl="https://www.youtube.com/embed/"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning  behind the colors and/or the design? If the flag is not research it
            online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so,  explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a href="timer20" rel="noreferrer" target="_blank">20 minute timer </a>and then go to <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span></p><br/>
          <textarea className="textArea" onChange={onChangeSS7Listener153} value={SS7Essay153}/>

          <span className="days">LESSON 154</span>
          <p>Watch the videos below about<b> El Salvador</b> by Geography Now. Then answer the questions that follow.
          </p>
          <Video videoUrl="https://www.youtube.com/embed/"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning  behind the colors and/or the design? If the flag is not research it
            online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so,  explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a href="timer20" rel="noreferrer" target="_blank">20 minute timer </a>and then go to <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span></p><br/>
          <textarea className="textArea" onChange={onChangeSS7Listener154} value={SS7Essay154}/>

          <span className="days">LESSON 155</span>
          <p>Watch the video below about<b> </b> by Geography Now. Then answer the questions that follow.</p>
          <Video videoUrl="https://www.youtube.com/embed/"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning  behind the colors and/or the design? If the flag is not research it
            online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so,  explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a href="timer20" rel="noreferrer" target="_blank">20 minute timer </a>and then go to <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span></p><br/>
          <textarea className="textArea" onChange={onChangeSS7Listener155} value={SS7Essay155}/>

          <span className="days">LESSON 156</span>
          <p>Watch the video below about<b> </b> by Geography Now. Then answer the questions that follow.</p>
          <Video videoUrl="https://www.youtube.com/embed/3MrYk3kCUGk?list=PLR7XO54Pktt8Ui5oXABHerdCzzHg9noTw"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning  behind the colors and/or the design? If the flag is not research it
            online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so,  explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a href="timer20" rel="noreferrer" target="_blank">20 minute timer </a>and then go to <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span></p><br/>
          <textarea className="textArea" onChange={onChangeSS7Listener156} value={SS7Essay156}/>

          <span className="days">LESSON 157</span>
          <p>Watch the video below about<b> </b> by Geography Now. Then answer the questions that follow.
          </p>
          <Video videoUrl="https://www.youtube.com/embed/DaBEGru_IEc?list=PLR7XO54Pktt8Ui5oXABHerdCzzHg9noTw"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning  behind the colors and/or the design? If the flag is not research it
            online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so,  explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a href="timer20" rel="noreferrer" target="_blank">20 minute timer </a>and then go to <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span></p><br/>
          <textarea className="textArea" onChange={onChangeSS7Listener157} value={SS7Essay157}/>

          <span className="days">LESSON 158</span>
          <p>Watch the video below about<b> </b> by Geography Now. Then answer the questions that follow.</p>
          <Video videoUrl="https://www.youtube.com/embed/uvA3DUJCxpY?list=PLR7XO54Pktt8Ui5oXABHerdCzzHg9noTw"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning  behind the colors and/or the design? If the flag is not research it
            online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so,  explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a href="timer20" rel="noreferrer" target="_blank">20 minute timer </a>and then go to <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span></p><br/>
          <textarea className="textArea" onChange={onChangeSS7Listener158} value={SS7Essay158}/>

          <span className="days">LESSON 159</span>
          <p>Watch the video below about<b> </b> by Geography Now. Then answer the questions that follow.
          </p>
          <Video videoUrl="https://www.youtube.com/embed/J9aV4Zn8JJE?list=PLR7XO54Pktt8Ui5oXABHerdCzzHg9noTw"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning  behind the colors and/or the design? If the flag is not research it
            online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so,  explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a href="timer20" rel="noreferrer" target="_blank">20 minute timer </a>and then go to <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span></p><br/>
          <textarea className="textArea" onChange={onChangeSS7Listener159} value={SS7Essay159}/>

          <span className="days">LESSON 160</span>
          <p>Watch the video below about<b> </b> by Geography Now. Then answer the questions that
            follow.</p>
          <Video videoUrl="https://www.youtube.com/embed/5OpiUD3qtY8?list=PLR7XO54Pktt8Ui5oXABHerdCzzHg9noTw"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning  behind the colors and/or the design? If the flag is not research it
            online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so,  explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a href="timer20" rel="noreferrer" target="_blank">20 minute timer </a>and then go to <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span></p><br/>
          <textarea className="textArea" onChange={onChangeSS7Listener160} value={SS7Essay160}/>

          <span className="days">LESSON 161</span>
          <p>Watch the videos below about<b> Cuba</b> by Geography Now. Then answer the questions that follow.</p>
          <Video videoUrl="https://www.youtube.com/embed/"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning  behind the colors and/or the design? If the flag is not research it
            online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so,  explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a href="timer20" rel="noreferrer" target="_blank">20 minute timer </a>and then go to <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span></p><br/>
          <textarea className="textArea" onChange={onChangeSS7Listener161} value={SS7Essay161}/>

          <span className="days">LESSON 162</span>
          <p>Watch the videos below about<b> Dominica</b> by Geography Now. Then answer the questions that follow.</p>
          <Video videoUrl="https://www.youtube.com/embed/"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning  behind the colors and/or the design? If the flag is not research it
            online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so,  explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a href="timer20" rel="noreferrer" target="_blank">20 minute timer </a>and then go to <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span></p><br/>
          <textarea className="textArea" onChange={onChangeSS7Listener162} value={SS7Essay162}/>

          <span className="days">LESSON 163</span>
          <p>Watch the videos below about<b> Dominican Republic</b> by Geography Now. Then answer the questions that
            follow.</p>
          <Video videoUrl="https://www.youtube.com/embed/dQv3t5VCc3U?list=PLR7XO54Pktt8Ui5oXABHerdCzzHg9noTw"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning  behind the colors and/or the design? If the flag is not research it
            online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so,  explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a href="timer20" rel="noreferrer" target="_blank">20 minute timer </a>and then go to <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span></p><br/>
          <textarea className="textArea" onChange={onChangeSS7Listener163} value={SS7Essay163}/>

          <span className="days">LESSON 164</span>
          <p>Watch the video below about<b> </b> by Geography Now. Then answer the questions that follow.</p>
          <Video videoUrl="https://www.youtube.com/embed/"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning  behind the colors and/or the design? If the flag is not research it
            online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so,  explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a href="timer20" rel="noreferrer" target="_blank">20 minute timer </a>and then go to <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span></p><br/>
          <textarea className="textArea" onChange={onChangeSS7Listener164} value={SS7Essay164}/>

          <span className="days">LESSON 165</span>
          <p>Watch the video below about<b> </b> by Geography Now. Then answer the questions that follow.</p>
          <Video videoUrl="https://www.youtube.com/embed/O0G9a2Kn6-Q?list=PLR7XO54Pktt8Ui5oXABHerdCzzHg9noTw"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning  behind the colors and/or the design? If the flag is not research it
            online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so,  explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a href="timer20" rel="noreferrer" target="_blank">20 minute timer </a>and then go to <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span></p><br/>
          <textarea className="textArea" onChange={onChangeSS7Listener165} value={SS7Essay165}/>

          <span className="days">LESSON 166</span>
          <p>Watch the video below about<b> </b> by Geography Now. Then answer the questions that follow.</p>
          <Video videoUrl="https://www.youtube.com/embed/LaLumU4pSf8?list=PLR7XO54Pktt8Ui5oXABHerdCzzHg9noTw"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning  behind the colors and/or the design? If the flag is not research it
            online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so,  explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a href="timer20" rel="noreferrer" target="_blank">20 minute timer </a>and then go to <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span></p><br/>
          <textarea className="textArea" onChange={onChangeSS7Listener166} value={SS7Essay166}/>

          <span className="days">LESSON 167</span>
          <p>Watch the video below about<b> </b> by Geography Now. Then answer the questions that
            follow.</p>
          <Video videoUrl="https://www.youtube.com/embed/y5FPRLgQ41Q?list=PLR7XO54Pktt8Ui5oXABHerdCzzHg9noTw"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning  behind the colors and/or the design? If the flag is not research it
            online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so,  explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a href="timer20" rel="noreferrer" target="_blank">20 minute timer </a>and then go to <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span></p><br/>
          <textarea className="textArea" onChange={onChangeSS7Listener167} value={SS7Essay167}/>

          <span className="days">LESSON 168</span>
          <p>Watch the video below about<b> </b> by Geography Now. Then answer the
            questions that follow.</p>
          <Video videoUrl="https://www.youtube.com/embed/E5DV8mD9_eQ?list=PLR7XO54Pktt8Ui5oXABHerdCzzHg9noTw"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning  behind the colors and/or the design? If the flag is not research it
            online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so,  explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a href="timer20" rel="noreferrer" target="_blank">20 minute timer </a>and then go to <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span></p><br/>
          <textarea className="textArea" onChange={onChangeSS7Listener168} value={SS7Essay168}/>

          <span className="days">LESSON 169</span>
          <p>Watch the video below about<b> </b> by Geography Now. Then answer the questions that follow.</p>
          <Video videoUrl="https://www.youtube.com/embed/AJx1RcIO61I?list=PLR7XO54Pktt-DmLWCKF7Kc908nqX2HBjh"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning  behind the colors and/or the design? If the flag is not research it
            online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so,  explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a href="timer20" rel="noreferrer" target="_blank">20 minute timer </a>and then go to <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span></p><br/>
          <textarea className="textArea" onChange={onChangeSS7Listener169} value={SS7Essay169}/>

          <span className="days">LESSON 170</span>
          <p>Watch the video below about<b> </b> by Geography Now. Then answer the questions that follow.</p>
          <Video videoUrl="https://www.youtube.com/embed/1U0N4SGL46A?list=PLR7XO54Pktt-DmLWCKF7Kc908nqX2HBjh"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning  behind the colors and/or the design? If the flag is not research it
            online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so,  explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a href="timer20" rel="noreferrer" target="_blank">20 minute timer </a>and then go to <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span></p><br/>
          <textarea className="textArea" onChange={onChangeSS7Listener170} value={SS7Essay170}/>

          <span className="days">LESSON 171</span>
          <p>Watch the video below about<b> </b> by Geography Now. Then answer the questions that follow.</p>
          <Video videoUrl="https://www.youtube.com/embed/JFfcD-SkqIc?list=PLR7XO54Pktt-DmLWCKF7Kc908nqX2HBjh"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning  behind the colors and/or the design? If the flag is not research it
            online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so,  explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a href="timer20" rel="noreferrer" target="_blank">20 minute timer </a>and then go to <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span></p><br/>
          <textarea className="textArea" onChange={onChangeSS7Listener171} value={SS7Essay171}/>

          <span className="days">LESSON 172</span>
          <p>Watch the video below about<b> </b> by Geography Now. Then answer the questions that follow.</p>
          <Video videoUrl="https://www.youtube.com/embed/8P4Hi99hUJc?list=PLR7XO54Pktt-DmLWCKF7Kc908nqX2HBjh"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning  behind the colors and/or the design? If the flag is not research it
            online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so,  explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a href="timer20" rel="noreferrer" target="_blank">20 minute timer </a>and then go to <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span></p><br/>
          <textarea className="textArea" onChange={onChangeSS7Listener172} value={SS7Essay172}/>

          <span className="days">LESSON 173</span>
          <p>Watch the video below about<b> </b> by Geography Now. Then answer the questions that follow.</p>
          <Video videoUrl="https://www.youtube.com/embed/rTsPaAIJdnw?list=PLR7XO54Pktt-DmLWCKF7Kc908nqX2HBjh"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning  behind the colors and/or the design? If the flag is not research it
            online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so,  explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a href="timer20" rel="noreferrer" target="_blank">20 minute timer </a>and then go to <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span></p><br/>
          <textarea className="textArea" onChange={onChangeSS7Listener173} value={SS7Essay173}/>

          <span className="days">LESSON 174</span>
          <p>Watch the videos below about<b> Ecuador</b> by Geography Now. Then answer the questions that follow.</p>
          <Video videoUrl="https://www.youtube.com/embed/"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning  behind the colors and/or the design? If the flag is not research it
            online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so,  explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a href="timer20" rel="noreferrer" target="_blank">20 minute timer </a>and then go to <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span></p><br/>
          <textarea className="textArea" onChange={onChangeSS7Listener174} value={SS7Essay174}/>

          <span className="days">LESSON 175</span>
          <p>Watch the video below about<b> </b> by Geography Now. Then answer the questions that follow.</p>
          <Video videoUrl="https://www.youtube.com/embed/tr5xeKcHGqw?list=PLR7XO54Pktt-DmLWCKF7Kc908nqX2HBjh"/>
          <textarea className="textArea" onChange={onChangeSS7Listener175} value={SS7Essay175}/>          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning  behind the colors and/or the design? If the flag is not research it
          online.<br/>
          2. What language do they speak? If they speak more than one, list them all.<br/>
          3. Would you ever want to live there? Why or why not.<br/>
          4. Did you learn anything about their history, economy or government? If so,  explain.<br/>
          5. List a few ways that this country is different than where you live.<br/>
          6. Describe what you learned about the land and physical geography. <br/>
          7. List three things about the country you found to be very interesting or surprising.<br/>
          8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
          today.</p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a href="timer20" rel="noreferrer" target="_blank">20 minute timer </a>and then go to <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span></p><br/>


          <span className="days">LESSON 176</span>
          <p>Watch the video below about<b> </b> by Geography Now. Then answer the questions that follow.</p>
          <Video videoUrl="https://www.youtube.com/embed/8wbNEJjBa0k?list=PLR7XO54Pktt-DmLWCKF7Kc908nqX2HBjh"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning  behind the colors and/or the design? If the flag is not research it
            online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so,  explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a href="timer20" rel="noreferrer" target="_blank">20 minute timer </a>and then go to <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span></p><br/>
          <textarea className="textArea" onChange={onChangeSS7Listener176} value={SS7Essay176}/>

          <span className="days">LESSON 177</span>
          <p>Watch the videos below about<b> Peru</b> by Geography Now. Then answer the questions that follow.</p>
          <Video videoUrl="https://www.youtube.com/embed/"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning  behind the colors and/or the design? If the flag is not research it
            online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so,  explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a href="timer20" rel="noreferrer" target="_blank">20 minute timer </a>and then go to <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span></p><br/>
          <textarea className="textArea" onChange={onChangeSS7Listener177} value={SS7Essay177}/>

          {/*<span className="days">LESSON 178</span>*/}
          {/*<p>Watch the video below about<b> </b> by Geography Now. Then answer the questions that follow.</p>*/}
          {/*<Video videoUrl="https://www.youtube.com/embed/"/>*/}
          {/*<textarea className="textArea" onChange={onChangeSS7Listener178} value={SS7Essay178}/>*/}

          {/*<span className="days">LESSON 179</span>*/}
          {/*<p>Watch the video below about<b> </b> by Geography Now. Then answer the questions that follow.</p>*/}
          {/*<Video videoUrl="https://www.youtube.com/embed/"/>*/}
          {/*<textarea className="textArea" onChange={onChangeSS7Listener179} value={SS7Essay179}/>*/}

          {/*<span className="days">LESSON 180</span>*/}
          {/*<p>Watch the video below about<b> </b> by Geography Now. Then answer the questions that follow.</p>*/}
          {/*<Video videoUrl="https://www.youtube.com/embed/"/>*/}
          {/*<textarea className="textArea" onChange={onChangeSS7Listener180} value={SS7Essay180}/>*/}
        </div>
      </section>
    </form>
  )
}
