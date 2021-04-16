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

export default function SS8() {
  const [SS8Essay1, setSS8Essay1] = useLocalStorageState("SS8Essay1", "")
  const [SS8Essay2, setSS8Essay2] = useLocalStorageState("SS8Essay2", "")
  const [SS8Essay3, setSS8Essay3] = useLocalStorageState("SS8Essay3", "")
  const [SS8Essay4, setSS8Essay4] = useLocalStorageState("SS8Essay4", "")
  const [SS8Essay5, setSS8Essay5] = useLocalStorageState("SS8Essay5", "")
  const [SS8Essay6, setSS8Essay6] = useLocalStorageState("SS8Essay6", "")
  const [SS8Essay7, setSS8Essay7] = useLocalStorageState("SS8Essay7", "")
  const [SS8Essay8, setSS8Essay8] = useLocalStorageState("SS8Essay8", "")
  const [SS8Essay9, setSS8Essay9] = useLocalStorageState("SS8Essay9", "")
  const [SS8Essay10, setSS8Essay10] = useLocalStorageState("SS8Essay10", "")
  const [SS8Essay11, setSS8Essay11] = useLocalStorageState("SS8Essay11", "")
  const [SS8Essay12, setSS8Essay12] = useLocalStorageState("SS8Essay12", "")
  const [SS8Essay13, setSS8Essay13] = useLocalStorageState("SS8Essay13", "")
  const [SS8Essay14, setSS8Essay14] = useLocalStorageState("SS8Essay14", "")
  const [SS8Essay15, setSS8Essay15] = useLocalStorageState("SS8Essay15", "")
  const [SS8Essay16, setSS8Essay16] = useLocalStorageState("SS8Essay16", "")
  const [SS8Essay17, setSS8Essay17] = useLocalStorageState("SS8Essay17", "")
  const [SS8Essay18, setSS8Essay18] = useLocalStorageState("SS8Essay18", "")
  const [SS8Essay19, setSS8Essay19] = useLocalStorageState("SS8Essay19", "")
  const [SS8Essay20, setSS8Essay20] = useLocalStorageState("SS8Essay20", "")
  const [SS8Essay21, setSS8Essay21] = useLocalStorageState("SS8Essay21", "")
  const [SS8Essay22, setSS8Essay22] = useLocalStorageState("SS8Essay22", "")
  const [SS8Essay23, setSS8Essay23] = useLocalStorageState("SS8Essay23", "")
  const [SS8Essay24, setSS8Essay24] = useLocalStorageState("SS8Essay24", "")
  const [SS8Essay25, setSS8Essay25] = useLocalStorageState("SS8Essay25", "")
  const [SS8Essay26, setSS8Essay26] = useLocalStorageState("SS8Essay26", "")
  const [SS8Essay27, setSS8Essay27] = useLocalStorageState("SS8Essay27", "")
  const [SS8Essay28, setSS8Essay28] = useLocalStorageState("SS8Essay28", "")
  const [SS8Essay29, setSS8Essay29] = useLocalStorageState("SS8Essay29", "")
  const [SS8Essay30, setSS8Essay30] = useLocalStorageState("SS8Essay30", "")
  const [SS8Essay31, setSS8Essay31] = useLocalStorageState("SS8Essay31", "")
  const [SS8Essay32, setSS8Essay32] = useLocalStorageState("SS8Essay32", "")
  const [SS8Essay33, setSS8Essay33] = useLocalStorageState("SS8Essay33", "")
  const [SS8Essay34, setSS8Essay34] = useLocalStorageState("SS8Essay34", "")
  const [SS8Essay35, setSS8Essay35] = useLocalStorageState("SS8Essay35", "")
  const [SS8Essay36, setSS8Essay36] = useLocalStorageState("SS8Essay36", "")
  const [SS8Essay37, setSS8Essay37] = useLocalStorageState("SS8Essay37", "")
  const [SS8Essay38, setSS8Essay38] = useLocalStorageState("SS8Essay38", "")
  const [SS8Essay39, setSS8Essay39] = useLocalStorageState("SS8Essay39", "")
  const [SS8Essay40, setSS8Essay40] = useLocalStorageState("SS8Essay40", "")
  const [SS8Essay41, setSS8Essay41] = useLocalStorageState("SS8Essay41", "")
  const [SS8Essay42, setSS8Essay42] = useLocalStorageState("SS8Essay42", "")
  const [SS8Essay43, setSS8Essay43] = useLocalStorageState("SS8Essay43", "")
  const [SS8Essay44, setSS8Essay44] = useLocalStorageState("SS8Essay44", "")
  const [SS8Essay45, setSS8Essay45] = useLocalStorageState("SS8Essay45", "")
  const [SS8Essay46, setSS8Essay46] = useLocalStorageState("SS8Essay46", "")
  const [SS8Essay47, setSS8Essay47] = useLocalStorageState("SS8Essay47", "")
  const [SS8Essay48, setSS8Essay48] = useLocalStorageState("SS8Essay48", "")
  const [SS8Essay49, setSS8Essay49] = useLocalStorageState("SS8Essay49", "")
  const [SS8Essay50, setSS8Essay50] = useLocalStorageState("SS8Essay50", "")
  const [SS8Essay51, setSS8Essay51] = useLocalStorageState("SS8Essay52", "")
  const [SS8Essay52, setSS8Essay52] = useLocalStorageState("SS8Essay53", "")
  const [SS8Essay53, setSS8Essay53] = useLocalStorageState("SS8Essay54", "")
  const [SS8Essay54, setSS8Essay54] = useLocalStorageState("SS8Essay54", "")
  const [SS8Essay55, setSS8Essay55] = useLocalStorageState("SS8Essay5", "")
  const [SS8Essay56, setSS8Essay56] = useLocalStorageState("SS8Essay56", "")
  const [SS8Essay57, setSS8Essay57] = useLocalStorageState("SS8Essay57", "")
  const [SS8Essay58, setSS8Essay58] = useLocalStorageState("SS8Essay58", "")
  const [SS8Essay59, setSS8Essay59] = useLocalStorageState("SS8Essay59", "")
  const [SS8Essay60, setSS8Essay60] = useLocalStorageState("SS8Essay60", "")
  const [SS8Essay61, setSS8Essay61] = useLocalStorageState("SS8Essay61", "")
  const [SS8Essay62, setSS8Essay62] = useLocalStorageState("SS8Essay62", "")
  const [SS8Essay63, setSS8Essay63] = useLocalStorageState("SS8Essay63", "")
  const [SS8Essay64, setSS8Essay64] = useLocalStorageState("SS8Essay64", "")
  const [SS8Essay65, setSS8Essay65] = useLocalStorageState("SS8Essay65", "")
  const [SS8Essay66, setSS8Essay66] = useLocalStorageState("SS8Essay66", "")
  const [SS8Essay67, setSS8Essay67] = useLocalStorageState("SS8Essay67", "")
  const [SS8Essay68, setSS8Essay68] = useLocalStorageState("SS8Essay68", "")
  const [SS8Essay69, setSS8Essay69] = useLocalStorageState("SS8Essay69", "")
  const [SS8Essay70, setSS8Essay70] = useLocalStorageState("SS8Essay70", "")
  const [SS8Essay71, setSS8Essay71] = useLocalStorageState("SS8Essay71", "")
  const [SS8Essay72, setSS8Essay72] = useLocalStorageState("SS8Essay72", "")
  const [SS8Essay73, setSS8Essay73] = useLocalStorageState("SS8Essay73", "")
  const [SS8Essay74, setSS8Essay74] = useLocalStorageState("SS8Essay74", "")
  const [SS8Essay75, setSS8Essay75] = useLocalStorageState("SS8Essay75", "")
  const [SS8Essay76, setSS8Essay76] = useLocalStorageState("SS8Essay76", "")
  const [SS8Essay77, setSS8Essay77] = useLocalStorageState("SS8Essay77", "")
  const [SS8Essay78, setSS8Essay78] = useLocalStorageState("SS8Essay78", "")
  const [SS8Essay79, setSS8Essay79] = useLocalStorageState("SS8Essay79", "")
  const [SS8Essay80, setSS8Essay80] = useLocalStorageState("SS8Essay80", "")
  const [SS8Essay81, setSS8Essay81] = useLocalStorageState("SS8Essay81", "")
  const [SS8Essay82, setSS8Essay82] = useLocalStorageState("SS8Essay82", "")
  const [SS8Essay83, setSS8Essay83] = useLocalStorageState("SS8Essay83", "")
  const [SS8Essay84, setSS8Essay84] = useLocalStorageState("SS8Essay84", "")
  const [SS8Essay85, setSS8Essay85] = useLocalStorageState("SS8Essay85", "")
  const [SS8Essay86, setSS8Essay86] = useLocalStorageState("SS8Essay86", "")
  const [SS8Essay87, setSS8Essay87] = useLocalStorageState("SS8Essay87", "")
  const [SS8Essay88, setSS8Essay88] = useLocalStorageState("SS8Essay88", "")
  const [SS8Essay89, setSS8Essay89] = useLocalStorageState("SS8Essay89", "")
  const [SS8Essay90, setSS8Essay90] = useLocalStorageState("SS8Essay90", "")
  const [SS8Essay91, setSS8Essay91] = useLocalStorageState("SS8Essay91", "")
  const [SS8Essay92, setSS8Essay92] = useLocalStorageState("SS8Essay93", "")
  const [SS8Essay93, setSS8Essay93] = useLocalStorageState("SS8Essay94", "")
  const [SS8Essay94, setSS8Essay94] = useLocalStorageState("SS8Essay95", "")
  const [SS8Essay95, setSS8Essay95] = useLocalStorageState("SS8Essay96", "")
  const [SS8Essay96, setSS8Essay96] = useLocalStorageState("SS8Essay97", "")
  const [SS8Essay97, setSS8Essay97] = useLocalStorageState("SS8Essay98", "")
  const [SS8Essay98, setSS8Essay98] = useLocalStorageState("SS8Essay98", "")
  const [SS8Essay99, setSS8Essay99] = useLocalStorageState("SS8Essay99", "")
  const [SS8Essay100, setSS8Essay100] = useLocalStorageState("SS8Essay100", "")
  const [SS8Essay101, setSS8Essay101] = useLocalStorageState("SS8Essay101", "")
  const [SS8Essay102, setSS8Essay102] = useLocalStorageState("SS8Essay102", "")
  const [SS8Essay103, setSS8Essay103] = useLocalStorageState("SS8Essay103", "")
  const [SS8Essay104, setSS8Essay104] = useLocalStorageState("SS8Essay104", "")
  const [SS8Essay105, setSS8Essay105] = useLocalStorageState("SS8Essay105", "")
  const [SS8Essay106, setSS8Essay106] = useLocalStorageState("SS8Essay106", "")
  const [SS8Essay107, setSS8Essay107] = useLocalStorageState("SS8Essay107", "")
  const [SS8Essay108, setSS8Essay108] = useLocalStorageState("SS8Essay108", "")
  const [SS8Essay109, setSS8Essay109] = useLocalStorageState("SS8Essay109", "")
  const [SS8Essay110, setSS8Essay110] = useLocalStorageState("SS8Essay110", "")
  const [SS8Essay111, setSS8Essay111] = useLocalStorageState("SS8Essay111", "")
  const [SS8Essay112, setSS8Essay112] = useLocalStorageState("SS8Essay112", "")
  const [SS8Essay113, setSS8Essay113] = useLocalStorageState("SS8Essay113", "")
  const [SS8Essay114, setSS8Essay114] = useLocalStorageState("SS8Essay114", "")
  const [SS8Essay115, setSS8Essay115] = useLocalStorageState("SS8Essay115", "")
  const [SS8Essay116, setSS8Essay116] = useLocalStorageState("SS8Essay116", "")
  const [SS8Essay117, setSS8Essay117] = useLocalStorageState("SS8Essay117", "")
  const [SS8Essay118, setSS8Essay118] = useLocalStorageState("SS8Essay118", "")
  const [SS8Essay119, setSS8Essay119] = useLocalStorageState("SS8Essay119", "")
  const [SS8Essay120, setSS8Essay120] = useLocalStorageState("SS8Essay120", "")
  const [SS8Essay121, setSS8Essay121] = useLocalStorageState("SS8Essay121", "")
  const [SS8Essay122, setSS8Essay122] = useLocalStorageState("SS8Essay122", "")
  const [SS8Essay123, setSS8Essay123] = useLocalStorageState("SS8Essay123", "")
  const [SS8Essay124, setSS8Essay124] = useLocalStorageState("SS8Essay124", "")
  const [SS8Essay125, setSS8Essay125] = useLocalStorageState("SS8Essay125", "")
  const [SS8Essay126, setSS8Essay126] = useLocalStorageState("SS8Essay126", "")
  const [SS8Essay127, setSS8Essay127] = useLocalStorageState("SS8Essay127", "")
  const [SS8Essay128, setSS8Essay128] = useLocalStorageState("SS8Essay128", "")
  const [SS8Essay129, setSS8Essay129] = useLocalStorageState("SS8Essay129", "")
  const [SS8Essay130, setSS8Essay130] = useLocalStorageState("SS8Essay130", "")
  const [SS8Essay131, setSS8Essay131] = useLocalStorageState("SS8Essay131", "")
  const [SS8Essay132, setSS8Essay132] = useLocalStorageState("SS8Essay132", "")
  const [SS8Essay133, setSS8Essay133] = useLocalStorageState("SS8Essay133", "")
  const [SS8Essay134, setSS8Essay134] = useLocalStorageState("SS8Essay134", "")
  const [SS8Essay135, setSS8Essay135] = useLocalStorageState("SS8Essay135", "")
  const [SS8Essay136, setSS8Essay136] = useLocalStorageState("SS8Essay136", "")
  const [SS8Essay137, setSS8Essay137] = useLocalStorageState("SS8Essay137", "")
  const [SS8Essay138, setSS8Essay138] = useLocalStorageState("SS8Essay138", "")
  const [SS8Essay139, setSS8Essay139] = useLocalStorageState("SS8Essay139", "")
  const [SS8Essay140, setSS8Essay140] = useLocalStorageState("SS8Essay140", "")
  const [SS8Essay141, setSS8Essay141] = useLocalStorageState("SS8Essay141", "")
  const [SS8Essay142, setSS8Essay142] = useLocalStorageState("SS8Essay142", "")
  const [SS8Essay143, setSS8Essay143] = useLocalStorageState("SS8Essay143", "")
  const [SS8Essay144, setSS8Essay144] = useLocalStorageState("SS8Essay144", "")
  const [SS8Essay145, setSS8Essay145] = useLocalStorageState("SS8Essay145", "")
  const [SS8Essay146, setSS8Essay146] = useLocalStorageState("SS8Essay146", "")
  const [SS8Essay147, setSS8Essay147] = useLocalStorageState("SS8Essay147", "")
  const [SS8Essay148, setSS8Essay148] = useLocalStorageState("SS8Essay148", "")
  const [SS8Essay149, setSS8Essay149] = useLocalStorageState("SS8Essay149", "")
  const [SS8Essay150, setSS8Essay150] = useLocalStorageState("SS8Essay150", "")
  const [SS8Essay151, setSS8Essay151] = useLocalStorageState("SS8Essay151", "")
  const [SS8Essay152, setSS8Essay152] = useLocalStorageState("SS8Essay152", "")
  const [SS8Essay153, setSS8Essay153] = useLocalStorageState("SS8Essay153", "")
  const [SS8Essay154, setSS8Essay154] = useLocalStorageState("SS8Essay154", "")
  const [SS8Essay155, setSS8Essay155] = useLocalStorageState("SS8Essay155", "")
  const [SS8Essay156, setSS8Essay156] = useLocalStorageState("SS8Essay156", "")
  const [SS8Essay157, setSS8Essay157] = useLocalStorageState("SS8Essay157", "")
  const [SS8Essay158, setSS8Essay158] = useLocalStorageState("SS8Essay158", "")
  const [SS8Essay159, setSS8Essay159] = useLocalStorageState("SS8Essay159", "")
  const [SS8Essay160, setSS8Essay160] = useLocalStorageState("SS8Essay160", "")
  const [SS8Essay161, setSS8Essay161] = useLocalStorageState("SS8Essay161", "")
  const [SS8Essay162, setSS8Essay162] = useLocalStorageState("SS8Essay162", "")
  const [SS8Essay163, setSS8Essay163] = useLocalStorageState("SS8Essay163", "")
  const [SS8Essay164, setSS8Essay164] = useLocalStorageState("SS8Essay164", "")
  const [SS8Essay165, setSS8Essay165] = useLocalStorageState("SS8Essay165", "")
  const [SS8Essay166, setSS8Essay166] = useLocalStorageState("SS8Essay166", "")
  const [SS8Essay167, setSS8Essay167] = useLocalStorageState("SS8Essay167", "")
  const [SS8Essay168, setSS8Essay168] = useLocalStorageState("SS8Essay168", "")
  const [SS8Essay169, setSS8Essay169] = useLocalStorageState("SS8Essay169", "")
  const [SS8Essay170, setSS8Essay170] = useLocalStorageState("SS8Essay170", "")
  const [SS8Essay171, setSS8Essay171] = useLocalStorageState("SS8Essay171", "")
  const [SS8Essay172, setSS8Essay172] = useLocalStorageState("SS8Essay172", "")
  const [SS8Essay173, setSS8Essay173] = useLocalStorageState("SS8Essay173", "")
  const [SS8Essay174, setSS8Essay174] = useLocalStorageState("SS8Essay174", "")
  const [SS8Essay175, setSS8Essay175] = useLocalStorageState("SS8Essay175", "")
  const [SS8Essay176, setSS8Essay176] = useLocalStorageState("SS8Essay176", "")
  const [SS8Essay177, setSS8Essay177] = useLocalStorageState("SS8Essay177", "")
// const [SS8Essay178, setSS8Essay178] = useLocalStorageState("SS8Essay178", "")
// const [SS8Essay179, setSS8Essay179] = useLocalStorageState("SS8Essay179", "")
// const [SS8Essay180, setSS8Essay180] = useLocalStorageState("SS8Essay180", "")

  const onChangeSS8Listener1 = (event) => {
    setSS8Essay1(event.target.value)
  }
  const onChangeSS8Listener2 = (event) => {
    setSS8Essay2(event.target.value)
  }
  const onChangeSS8Listener3 = (event) => {
    setSS8Essay3(event.target.value)
  }
  const onChangeSS8Listener4 = (event) => {
    setSS8Essay4(event.target.value)
  }
  const onChangeSS8Listener5 = (event) => {
    setSS8Essay5(event.target.value)
  }
  const onChangeSS8Listener6 = (event) => {
    setSS8Essay6(event.target.value)
  }
  const onChangeSS8Listener7 = (event) => {
    setSS8Essay7(event.target.value)
  }
  const onChangeSS8Listener8 = (event) => {
    setSS8Essay8(event.target.value)
  }
  const onChangeSS8Listener9 = (event) => {
    setSS8Essay9(event.target.value)
  }
  const onChangeSS8Listener10 = (event) => {
    setSS8Essay10(event.target.value)
  }
  const onChangeSS8Listener11 = (event) => {
    setSS8Essay11(event.target.value)
  }
  const onChangeSS8Listener12 = (event) => {
    setSS8Essay12(event.target.value)
  }
  const onChangeSS8Listener13 = (event) => {
    setSS8Essay13(event.target.value)
  }
  const onChangeSS8Listener14 = (event) => {
    setSS8Essay14(event.target.value)
  }
  const onChangeSS8Listener15 = (event) => {
    setSS8Essay15(event.target.value)
  }
  const onChangeSS8Listener16 = (event) => {
    setSS8Essay16(event.target.value)
  }
  const onChangeSS8Listener17 = (event) => {
    setSS8Essay17(event.target.value)
  }
  const onChangeSS8Listener18 = (event) => {
    setSS8Essay18(event.target.value)
  }
  const onChangeSS8Listener19 = (event) => {
    setSS8Essay19(event.target.value)
  }
  const onChangeSS8Listener20 = (event) => {
    setSS8Essay20(event.target.value)
  }
  const onChangeSS8Listener21 = (event) => {
    setSS8Essay21(event.target.value)
  }
  const onChangeSS8Listener22 = (event) => {
    setSS8Essay22(event.target.value)
  }
  const onChangeSS8Listener23 = (event) => {
    setSS8Essay23(event.target.value)
  }
  const onChangeSS8Listener24 = (event) => {
    setSS8Essay24(event.target.value)
  }
  const onChangeSS8Listener25 = (event) => {
    setSS8Essay25(event.target.value)
  }
  const onChangeSS8Listener26 = (event) => {
    setSS8Essay26(event.target.value)
  }
  const onChangeSS8Listener27 = (event) => {
    setSS8Essay27(event.target.value)
  }
  const onChangeSS8Listener28 = (event) => {
    setSS8Essay28(event.target.value)
  }
  const onChangeSS8Listener29 = (event) => {
    setSS8Essay29(event.target.value)
  }
  const onChangeSS8Listener30 = (event) => {
    setSS8Essay30(event.target.value)
  }
  const onChangeSS8Listener31 = (event) => {
    setSS8Essay31(event.target.value)
  }
  const onChangeSS8Listener32 = (event) => {
    setSS8Essay32(event.target.value)
  }
  const onChangeSS8Listener33 = (event) => {
    setSS8Essay33(event.target.value)
  }
  const onChangeSS8Listener34 = (event) => {
    setSS8Essay34(event.target.value)
  }
  const onChangeSS8Listener35 = (event) => {
    setSS8Essay35(event.target.value)
  }
  const onChangeSS8Listener36 = (event) => {
    setSS8Essay36(event.target.value)
  }
  const onChangeSS8Listener37 = (event) => {
    setSS8Essay37(event.target.value)
  }
  const onChangeSS8Listener38 = (event) => {
    setSS8Essay38(event.target.value)
  }
  const onChangeSS8Listener39 = (event) => {
    setSS8Essay39(event.target.value)
  }
  const onChangeSS8Listener40 = (event) => {
    setSS8Essay40(event.target.value)
  }
  const onChangeSS8Listener41 = (event) => {
    setSS8Essay41(event.target.value)
  }
  const onChangeSS8Listener42 = (event) => {
    setSS8Essay42(event.target.value)
  }
  const onChangeSS8Listener43 = (event) => {
    setSS8Essay43(event.target.value)
  }
  const onChangeSS8Listener44 = (event) => {
    setSS8Essay44(event.target.value)
  }
  const onChangeSS8Listener45 = (event) => {
    setSS8Essay45(event.target.value)
  }
  const onChangeSS8Listener46 = (event) => {
    setSS8Essay46(event.target.value)
  }
  const onChangeSS8Listener47 = (event) => {
    setSS8Essay47(event.target.value)
  }
  const onChangeSS8Listener48 = (event) => {
    setSS8Essay48(event.target.value)
  }
  const onChangeSS8Listener49 = (event) => {
    setSS8Essay49(event.target.value)
  }
  const onChangeSS8Listener50 = (event) => {
    setSS8Essay50(event.target.value)
  }
  const onChangeSS8Listener51 = (event) => {
    setSS8Essay51(event.target.value)
  }
  const onChangeSS8Listener52 = (event) => {
    setSS8Essay52(event.target.value)
  }
  const onChangeSS8Listener53 = (event) => {
    setSS8Essay53(event.target.value)
  }
  const onChangeSS8Listener54 = (event) => {
    setSS8Essay54(event.target.value)
  }
  const onChangeSS8Listener55 = (event) => {
    setSS8Essay55(event.target.value)
  }
  const onChangeSS8Listener56 = (event) => {
    setSS8Essay56(event.target.value)
  }
  const onChangeSS8Listener57 = (event) => {
    setSS8Essay57(event.target.value)
  }
  const onChangeSS8Listener58 = (event) => {
    setSS8Essay58(event.target.value)
  }
  const onChangeSS8Listener59 = (event) => {
    setSS8Essay59(event.target.value)
  }
  const onChangeSS8Listener60 = (event) => {
    setSS8Essay60(event.target.value)
  }
  const onChangeSS8Listener61 = (event) => {
    setSS8Essay61(event.target.value)
  }
  const onChangeSS8Listener62 = (event) => {
    setSS8Essay62(event.target.value)
  }
  const onChangeSS8Listener63 = (event) => {
    setSS8Essay63(event.target.value)
  }
  const onChangeSS8Listener64 = (event) => {
    setSS8Essay64(event.target.value)
  }
  const onChangeSS8Listener65 = (event) => {
    setSS8Essay65(event.target.value)
  }
  const onChangeSS8Listener66 = (event) => {
    setSS8Essay66(event.target.value)
  }
  const onChangeSS8Listener67 = (event) => {
    setSS8Essay67(event.target.value)
  }
  const onChangeSS8Listener68 = (event) => {
    setSS8Essay68(event.target.value)
  }
  const onChangeSS8Listener69 = (event) => {
    setSS8Essay69(event.target.value)
  }
  const onChangeSS8Listener70 = (event) => {
    setSS8Essay70(event.target.value)
  }
  const onChangeSS8Listener71 = (event) => {
    setSS8Essay71(event.target.value)
  }
  const onChangeSS8Listener72 = (event) => {
    setSS8Essay72(event.target.value)
  }
  const onChangeSS8Listener73 = (event) => {
    setSS8Essay73(event.target.value)
  }
  const onChangeSS8Listener74 = (event) => {
    setSS8Essay74(event.target.value)
  }
  const onChangeSS8Listener75 = (event) => {
    setSS8Essay75(event.target.value)
  }
  const onChangeSS8Listener76 = (event) => {
    setSS8Essay76(event.target.value)
  }
  const onChangeSS8Listener77 = (event) => {
    setSS8Essay77(event.target.value)
  }
  const onChangeSS8Listener78 = (event) => {
    setSS8Essay78(event.target.value)
  }
  const onChangeSS8Listener79 = (event) => {
    setSS8Essay79(event.target.value)
  }
  const onChangeSS8Listener80 = (event) => {
    setSS8Essay80(event.target.value)
  }
  const onChangeSS8Listener81 = (event) => {
    setSS8Essay81(event.target.value)
  }
  const onChangeSS8Listener82 = (event) => {
    setSS8Essay82(event.target.value)
  }
  const onChangeSS8Listener83 = (event) => {
    setSS8Essay83(event.target.value)
  }
  const onChangeSS8Listener84 = (event) => {
    setSS8Essay84(event.target.value)
  }
  const onChangeSS8Listener85 = (event) => {
    setSS8Essay85(event.target.value)
  }
  const onChangeSS8Listener86 = (event) => {
    setSS8Essay86(event.target.value)
  }
  const onChangeSS8Listener87 = (event) => {
    setSS8Essay87(event.target.value)
  }
  const onChangeSS8Listener88 = (event) => {
    setSS8Essay88(event.target.value)
  }
  const onChangeSS8Listener89 = (event) => {
    setSS8Essay89(event.target.value)
  }
  const onChangeSS8Listener90 = (event) => {
    setSS8Essay90(event.target.value)
  }
  const onChangeSS8Listener91 = (event) => {
    setSS8Essay91(event.target.value)
  }
  const onChangeSS8Listener92 = (event) => {
    setSS8Essay92(event.target.value)
  }
  const onChangeSS8Listener93 = (event) => {
    setSS8Essay93(event.target.value)
  }
  const onChangeSS8Listener94 = (event) => {
    setSS8Essay94(event.target.value)
  }
  const onChangeSS8Listener95 = (event) => {
    setSS8Essay95(event.target.value)
  }
  const onChangeSS8Listener96 = (event) => {
    setSS8Essay96(event.target.value)
  }
  const onChangeSS8Listener97 = (event) => {
    setSS8Essay97(event.target.value)
  }
  const onChangeSS8Listener98 = (event) => {
    setSS8Essay98(event.target.value)
  }
  const onChangeSS8Listener99 = (event) => {
    setSS8Essay99(event.target.value)
  }
  const onChangeSS8Listener100 = (event) => {
    setSS8Essay100(event.target.value)
  }
  const onChangeSS8Listener101 = (event) => {
    setSS8Essay101(event.target.value)
  }
  const onChangeSS8Listener102 = (event) => {
    setSS8Essay102(event.target.value)
  }
  const onChangeSS8Listener103 = (event) => {
    setSS8Essay103(event.target.value)
  }
  const onChangeSS8Listener104 = (event) => {
    setSS8Essay104(event.target.value)
  }
  const onChangeSS8Listener105 = (event) => {
    setSS8Essay105(event.target.value)
  }
  const onChangeSS8Listener106 = (event) => {
    setSS8Essay106(event.target.value)
  }
  const onChangeSS8Listener107 = (event) => {
    setSS8Essay107(event.target.value)
  }
  const onChangeSS8Listener108 = (event) => {
    setSS8Essay108(event.target.value)
  }
  const onChangeSS8Listener109 = (event) => {
    setSS8Essay109(event.target.value)
  }
  const onChangeSS8Listener110 = (event) => {
    setSS8Essay110(event.target.value)
  }
  const onChangeSS8Listener111 = (event) => {
    setSS8Essay111(event.target.value)
  }
  const onChangeSS8Listener112 = (event) => {
    setSS8Essay112(event.target.value)
  }
  const onChangeSS8Listener113 = (event) => {
    setSS8Essay113(event.target.value)
  }
  const onChangeSS8Listener114 = (event) => {
    setSS8Essay114(event.target.value)
  }
  const onChangeSS8Listener115 = (event) => {
    setSS8Essay115(event.target.value)
  }
  const onChangeSS8Listener116 = (event) => {
    setSS8Essay116(event.target.value)
  }
  const onChangeSS8Listener117 = (event) => {
    setSS8Essay117(event.target.value)
  }
  const onChangeSS8Listener118 = (event) => {
    setSS8Essay118(event.target.value)
  }
  const onChangeSS8Listener119 = (event) => {
    setSS8Essay119(event.target.value)
  }
  const onChangeSS8Listener120 = (event) => {
    setSS8Essay120(event.target.value)
  }
  const onChangeSS8Listener121 = (event) => {
    setSS8Essay121(event.target.value)
  }
  const onChangeSS8Listener122 = (event) => {
    setSS8Essay122(event.target.value)
  }
  const onChangeSS8Listener123 = (event) => {
    setSS8Essay123(event.target.value)
  }
  const onChangeSS8Listener124 = (event) => {
    setSS8Essay124(event.target.value)
  }
  const onChangeSS8Listener125 = (event) => {
    setSS8Essay125(event.target.value)
  }
  const onChangeSS8Listener126 = (event) => {
    setSS8Essay126(event.target.value)
  }
  const onChangeSS8Listener127 = (event) => {
    setSS8Essay127(event.target.value)
  }
  const onChangeSS8Listener128 = (event) => {
    setSS8Essay128(event.target.value)
  }
  const onChangeSS8Listener129 = (event) => {
    setSS8Essay129(event.target.value)
  }
  const onChangeSS8Listener130 = (event) => {
    setSS8Essay130(event.target.value)
  }
  const onChangeSS8Listener131 = (event) => {
    setSS8Essay131(event.target.value)
  }
  const onChangeSS8Listener132 = (event) => {
    setSS8Essay132(event.target.value)
  }
  const onChangeSS8Listener133 = (event) => {
    setSS8Essay133(event.target.value)
  }
  const onChangeSS8Listener134 = (event) => {
    setSS8Essay134(event.target.value)
  }
  const onChangeSS8Listener135 = (event) => {
    setSS8Essay135(event.target.value)
  }
  const onChangeSS8Listener136 = (event) => {
    setSS8Essay136(event.target.value)
  }
  const onChangeSS8Listener137 = (event) => {
    setSS8Essay137(event.target.value)
  }
  const onChangeSS8Listener138 = (event) => {
    setSS8Essay138(event.target.value)
  }
  const onChangeSS8Listener139 = (event) => {
    setSS8Essay139(event.target.value)
  }
  const onChangeSS8Listener140 = (event) => {
    setSS8Essay140(event.target.value)
  }
  const onChangeSS8Listener141 = (event) => {
    setSS8Essay141(event.target.value)
  }
  const onChangeSS8Listener142 = (event) => {
    setSS8Essay142(event.target.value)
  }
  const onChangeSS8Listener143 = (event) => {
    setSS8Essay143(event.target.value)
  }
  const onChangeSS8Listener144 = (event) => {
    setSS8Essay144(event.target.value)
  }
  const onChangeSS8Listener145 = (event) => {
    setSS8Essay145(event.target.value)
  }
  const onChangeSS8Listener146 = (event) => {
    setSS8Essay146(event.target.value)
  }
  const onChangeSS8Listener147 = (event) => {
    setSS8Essay147(event.target.value)
  }
  const onChangeSS8Listener148 = (event) => {
    setSS8Essay148(event.target.value)
  }
  const onChangeSS8Listener149 = (event) => {
    setSS8Essay149(event.target.value)
  }
  const onChangeSS8Listener150 = (event) => {
    setSS8Essay150(event.target.value)
  }
  const onChangeSS8Listener151 = (event) => {
    setSS8Essay151(event.target.value)
  }
  const onChangeSS8Listener152 = (event) => {
    setSS8Essay152(event.target.value)
  }
  const onChangeSS8Listener153 = (event) => {
    setSS8Essay153(event.target.value)
  }
  const onChangeSS8Listener154 = (event) => {
    setSS8Essay154(event.target.value)
  }
  const onChangeSS8Listener155 = (event) => {
    setSS8Essay155(event.target.value)
  }
  const onChangeSS8Listener156 = (event) => {
    setSS8Essay156(event.target.value)
  }
  const onChangeSS8Listener157 = (event) => {
    setSS8Essay157(event.target.value)
  }
  const onChangeSS8Listener158 = (event) => {
    setSS8Essay158(event.target.value)
  }
  const onChangeSS8Listener159 = (event) => {
    setSS8Essay159(event.target.value)
  }
  const onChangeSS8Listener160 = (event) => {
    setSS8Essay160(event.target.value)
  }
  const onChangeSS8Listener161 = (event) => {
    setSS8Essay161(event.target.value)
  }
  const onChangeSS8Listener162 = (event) => {
    setSS8Essay162(event.target.value)
  }
  const onChangeSS8Listener163 = (event) => {
    setSS8Essay163(event.target.value)
  }
  const onChangeSS8Listener164 = (event) => {
    setSS8Essay164(event.target.value)
  }
  const onChangeSS8Listener165 = (event) => {
    setSS8Essay165(event.target.value)
  }
  const onChangeSS8Listener166 = (event) => {
    setSS8Essay166(event.target.value)
  }
  const onChangeSS8Listener167 = (event) => {
    setSS8Essay167(event.target.value)
  }
  const onChangeSS8Listener168 = (event) => {
    setSS8Essay168(event.target.value)
  }
  const onChangeSS8Listener169 = (event) => {
    setSS8Essay169(event.target.value)
  }
  const onChangeSS8Listener170 = (event) => {
    setSS8Essay170(event.target.value)
  }
  const onChangeSS8Listener171 = (event) => {
    setSS8Essay171(event.target.value)
  }
  const onChangeSS8Listener172 = (event) => {
    setSS8Essay172(event.target.value)
  }
  const onChangeSS8Listener173 = (event) => {
    setSS8Essay173(event.target.value)
  }
  const onChangeSS8Listener174 = (event) => {
    setSS8Essay174(event.target.value)
  }
  const onChangeSS8Listener175 = (event) => {
    setSS8Essay175(event.target.value)
  }
  const onChangeSS8Listener176 = (event) => {
    setSS8Essay176(event.target.value)
  }
  const onChangeSS8Listener177 = (event) => {
    setSS8Essay177(event.target.value)
  }
// const onChangeSS8Listener178 = (event) => {
//   setSS8Essay178(event.target.value)
// }
// const onChangeSS8Listener179 = (event) => {
//   setSS8Essay179(event.target.value)
// }
// const onChangeSS8Listener180 = (event) => {
//   setSS8Essay180(event.target.value)
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
                    onChange={onChangeSS8Listener1} value={SS8Essay1}/>

          <span className="days">LESSON 2</span>

          <textarea className="textArea"
                    placeholder="Write your answers here. Back up your work or email it to your parent/teacher."
                    onChange={onChangeSS8Listener2} value={SS8Essay2}/>

          <span className="days">LESSON 3</span>

          <textarea className="textArea" placeholder="Back up your work." onChange={onChangeSS8Listener3}
                    value={SS8Essay3}/>

          <span className="days">LESSON 4</span>

          <textarea className="textArea" onChange={onChangeSS8Listener4} value={SS8Essay4}/>

          <span className="days">LESSON 5</span>

          <textarea className="textArea" onChange={onChangeSS8Listener5} value={SS8Essay5}/>

          <span className="days">LESSON 6</span>

          <textarea className="textArea" onChange={onChangeSS8Listener6} value={SS8Essay6}/>

          <span className="days">LESSON 7</span>

          <textarea className="textArea" onChange={onChangeSS8Listener7} value={SS8Essay7}/>

          <span className="days">LESSON 8</span>

          <textarea className="textArea" onChange={onChangeSS8Listener8} value={SS8Essay8}/>

          <span className="days">LESSON 9</span>

          <textarea className="textArea" onChange={onChangeSS8Listener9} value={SS8Essay9}/>

          <span className="days">LESSON 10</span>

          <textarea className="textArea" onChange={onChangeSS8Listener10} value={SS8Essay10}/>

          <span className="days">LESSON 11</span>

          <textarea className="textArea" onChange={onChangeSS8Listener11} value={SS8Essay11}/>

          <span className="days">LESSON 12</span>

          <textarea className="textArea" onChange={onChangeSS8Listener12} value={SS8Essay12}/>

          <span className="days">LESSON 13</span>

          <textarea className="textArea" onChange={onChangeSS8Listener13} value={SS8Essay13}/>

          <span className="days">LESSON 14</span>

          <textarea className="textArea" onChange={onChangeSS8Listener14} value={SS8Essay14}/>

          <span className="days">LESSON 15</span>

          <textarea className="textArea" onChange={onChangeSS8Listener15} value={SS8Essay15}/>

          <span className="days">LESSON 16</span>

          <textarea className="textArea" onChange={onChangeSS8Listener16} value={SS8Essay16}/>

          <span className="days">LESSON 17</span>

          <textarea className="textArea" onChange={onChangeSS8Listener17} value={SS8Essay17}/>

          <span className="days">LESSON 18</span>

          <textarea className="textArea" onChange={onChangeSS8Listener18} value={SS8Essay18}/>

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
          <textarea className="textArea" onChange={onChangeSS8Listener19} value={SS8Essay19}/>

          <span className="days">LESSON 20</span>

          <textarea className="textArea" onChange={onChangeSS8Listener20} value={SS8Essay20}/>

          <span className="days">LESSON 21</span>

          <textarea className="textArea" onChange={onChangeSS8Listener21} value={SS8Essay21}/>

          <span className="days">LESSON 22</span>

          <textarea className="textArea" onChange={onChangeSS8Listener22} value={SS8Essay22}/>

          <span className="days">LESSON 23</span>

          <textarea className="textArea" onChange={onChangeSS8Listener23} value={SS8Essay23}/>

          <span className="days">LESSON 24</span>

          <textarea className="textArea" onChange={onChangeSS8Listener24} value={SS8Essay24}/>

          <span className="days">LESSON 25</span>

          <textarea className="textArea" onChange={onChangeSS8Listener25} value={SS8Essay25}/>

          <span className="days">LESSON 26</span>

          <textarea className="textArea" onChange={onChangeSS8Listener26} value={SS8Essay26}/>

          <span className="days">LESSON 27</span>

          <textarea className="textArea" onChange={onChangeSS8Listener27} value={SS8Essay27}/>

          <span className="days">LESSON 28</span>

          <textarea className="textArea" onChange={onChangeSS8Listener28} value={SS8Essay28}/>

          <span className="days">LESSON 29</span>

          <textarea className="textArea" onChange={onChangeSS8Listener29} value={SS8Essay29}/>

          <span className="days">LESSON 30</span>

          <textarea className="textArea" onChange={onChangeSS8Listener30} value={SS8Essay30}/>

          <span className="days">LESSON 31</span>

          <textarea className="textArea" onChange={onChangeSS8Listener31} value={SS8Essay31}/>

          <span className="days">LESSON 32</span>

          <textarea className="textArea" onChange={onChangeSS8Listener32} value={SS8Essay32}/>

          <span className="days">LESSON 33</span>

          <textarea className="textArea" onChange={onChangeSS8Listener33} value={SS8Essay33}/>

          <span className="days">LESSON 34</span>

          <textarea className="textArea" onChange={onChangeSS8Listener34} value={SS8Essay34}/>

          <span className="days">LESSON 35</span>

          <textarea className="textArea" onChange={onChangeSS8Listener35} value={SS8Essay35}/>

          <span className="days">LESSON 36</span>

          <textarea className="textArea" onChange={onChangeSS8Listener36} value={SS8Essay36}/>

          <span className="days">LESSON 37</span>

          <textarea className="textArea" onChange={onChangeSS8Listener37} value={SS8Essay37}/>

          <span className="days">LESSON 38</span>

          <textarea className="textArea" onChange={onChangeSS8Listener38} value={SS8Essay38}/>

          <span className="days">LESSON 39</span>

          <textarea className="textArea" onChange={onChangeSS8Listener39} value={SS8Essay39}/>

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
          <textarea className="textArea" onChange={onChangeSS8Listener40} value={SS8Essay40}/>

          <span className="days">LESSON 41</span>

          <textarea className="textArea" onChange={onChangeSS8Listener41} value={SS8Essay41}/>

          <span className="days">LESSON 42</span>

          <textarea className="textArea" onChange={onChangeSS8Listener42} value={SS8Essay42}/>

          <span className="days">LESSON 43</span>

          <textarea className="textArea" onChange={onChangeSS8Listener43} value={SS8Essay43}/>

          <span className="days">LESSON 44</span>

          <textarea className="textArea" onChange={onChangeSS8Listener44} value={SS8Essay44}/>

          <span className="days">LESSON 45</span>

          <textarea className="textArea" onChange={onChangeSS8Listener45} value={SS8Essay45}/>

          <span className="days">LESSON 46</span>

          <textarea className="textArea" onChange={onChangeSS8Listener46} value={SS8Essay46}/>

          <span className="days">LESSON 47</span>

          <textarea className="textArea" onChange={onChangeSS8Listener47} value={SS8Essay47}/>

          <span className="days">LESSON 48</span>

          <textarea className="textArea" onChange={onChangeSS8Listener48} value={SS8Essay48}/>

          <span className="days">LESSON 49</span>

          <textarea className="textArea" onChange={onChangeSS8Listener49} value={SS8Essay49}/>

          <span className="days">LESSON 50</span>

          <textarea className="textArea" onChange={onChangeSS8Listener50} value={SS8Essay50}/>

          <span className="days">LESSON 51</span>

          <textarea className="textArea" onChange={onChangeSS8Listener51} value={SS8Essay51}/>

          <span className="days">LESSON 52</span>

          <textarea className="textArea" onChange={onChangeSS8Listener52} value={SS8Essay52}/>

          <span className="days">LESSON 53</span>

          <textarea className="textArea" onChange={onChangeSS8Listener53} value={SS8Essay53}/>

          <span className="days">LESSON 54</span>

          <textarea className="textArea" onChange={onChangeSS8Listener54} value={SS8Essay54}/>

          <span className="days">LESSON 55</span>

          <textarea className="textArea" onChange={onChangeSS8Listener55} value={SS8Essay55}/>

          <span className="days">LESSON 56</span>

          <textarea className="textArea" onChange={onChangeSS8Listener56} value={SS8Essay56}/>

          <span className="days">LESSON 57</span>

          <textarea className="textArea" onChange={onChangeSS8Listener57} value={SS8Essay57}/>

          <span className="days">LESSON 58</span>

          <textarea className="textArea" onChange={onChangeSS8Listener58} value={SS8Essay58}/>

          <span className="days">LESSON 59</span>

          <textarea className="textArea" onChange={onChangeSS8Listener59} value={SS8Essay59}/>

          <span className="days">LESSON 60</span>

          <textarea className="textArea" onChange={onChangeSS8Listener60} value={SS8Essay60}/>

          <span className="days">LESSON 61</span>

          <textarea className="textArea" onChange={onChangeSS8Listener61} value={SS8Essay61}/>

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
          <textarea className="textArea" onChange={onChangeSS8Listener62} value={SS8Essay62}/>
          1
          <span className="days">LESSON 63</span>

          <textarea className="textArea" onChange={onChangeSS8Listener63} value={SS8Essay63}/>

          <span className="days">LESSON 64</span>

          <textarea className="textArea" onChange={onChangeSS8Listener64} value={SS8Essay64}/>

          <span className="days">LESSON 65</span>

          <textarea className="textArea" onChange={onChangeSS8Listener65} value={SS8Essay65}/>

          <span className="days">LESSON 66</span>

          <textarea className="textArea" onChange={onChangeSS8Listener66} value={SS8Essay66}/>

          <span className="days">LESSON 67</span>
          <p>
            <a href="https://earth.google.com/web/@17.90693717,-12.41937117,-34606.55899502a,57359668.97d,35y,0.00004064h,18.19296234t,0r/data=CjwSOhIgZjJhMmExN2E0MDZlMTFlOTk5MGE5OWYyYWQ2OTYwMTgiFnNwbC14LXgteC1zcGxhc2hzY3JlZW4"
              target="_blank">
              Click to play the Google Maps game Carmen Santiago: The keys to the Kremlin Caper
              <img src="../../content/images/subjects/carmen-sandiego.png"/></a>
          </p><br/>
          <textarea className="textArea" onChange={onChangeSS8Listener67} value={SS8Essay67}/>

          <span className="days">LESSON 68</span>
          <textarea className="textArea" onChange={onChangeSS8Listener101} value={SS8Essay101}/>

          <span className="days">LESSON 69</span>
          <textarea className="textArea" onChange={onChangeSS8Listener131} value={SS8Essay131}/>

          <span className="days">LESSON 70</span>

          <textarea className="textArea" onChange={onChangeSS8Listener68} value={SS8Essay68}/>

          <span className="days">LESSON 71</span>

          <textarea className="textArea" onChange={onChangeSS8Listener69} value={SS8Essay69}/>

          <span className="days">LESSON 72</span>

          <textarea className="textArea" onChange={onChangeSS8Listener70} value={SS8Essay70}/>

          <span className="days">LESSON 73</span>

          <textarea className="textArea" onChange={onChangeSS8Listener71} value={SS8Essay71}/>

          <span className="days">LESSON 74</span>

          <textarea className="textArea" onChange={onChangeSS8Listener72} value={SS8Essay72}/>

          <span className="days">LESSON 75</span>

          <textarea className="textArea" onChange={onChangeSS8Listener73} value={SS8Essay73}/>

          <span className="days">LESSON 76</span>

          <textarea className="textArea" onChange={onChangeSS8Listener74} value={SS8Essay74}/>

          <span className="days">LESSON 77</span>

          <textarea className="textArea" onChange={onChangeSS8Listener75} value={SS8Essay75}/>

          <span className="days">LESSON 78</span>

          <textarea className="textArea" onChange={onChangeSS8Listener76} value={SS8Essay76}/>

          <span className="days">LESSON 79</span>

          <textarea className="textArea" onChange={onChangeSS8Listener77} value={SS8Essay77}/>

          <span className="days">LESSON 80</span>

          <textarea className="textArea" onChange={onChangeSS8Listener78} value={SS8Essay78}/>

          <span className="days">LESSON 81</span>

          <textarea className="textArea" onChange={onChangeSS8Listener79} value={SS8Essay79}/>

          <span className="days">LESSON 82</span>

          <textarea className="textArea" onChange={onChangeSS8Listener80} value={SS8Essay80}/>

          <span className="days">LESSON 83</span>

          <textarea className="textArea" onChange={onChangeSS8Listener81} value={SS8Essay81}/>

          <span className="days">LESSON 84</span>

          <textarea className="textArea" onChange={onChangeSS8Listener82} value={SS8Essay82}/>

          <span className="days">LESSON 85</span>

          <textarea className="textArea" onChange={onChangeSS8Listener83} value={SS8Essay83}/>

          <span className="days">LESSON 86</span>

          <textarea className="textArea" onChange={onChangeSS8Listener84} value={SS8Essay84}/>

          <span className="days">LESSON 87</span>

          <textarea className="textArea" onChange={onChangeSS8Listener85} value={SS8Essay85}/>

          <span className="days">LESSON 88</span>

          <textarea className="textArea" onChange={onChangeSS8Listener86} value={SS8Essay86}/>

          <span className="days">LESSON 89</span>

          <textarea className="textArea" onChange={onChangeSS8Listener87} value={SS8Essay87}/>

          <span className="days">LESSON 90</span>

          <textarea className="textArea" onChange={onChangeSS8Listener88} value={SS8Essay88}/>

          <span className="days">LESSON 91</span>

          <textarea className="textArea" onChange={onChangeSS8Listener89} value={SS8Essay89}/>

          <span className="days">LESSON 92</span>

          <textarea className="textArea" onChange={onChangeSS8Listener90} value={SS8Essay90}/>

          <span className="days">LESSON 93</span>

          <textarea className="textArea" onChange={onChangeSS8Listener91} value={SS8Essay91}/>

          <span className="days">LESSON 94</span>

          <textarea className="textArea" onChange={onChangeSS8Listener92} value={SS8Essay92}/>

          <span className="days">LESSON 95</span>

          <textarea className="textArea" onChange={onChangeSS8Listener93} value={SS8Essay93}/>

          <span className="days">LESSON 96</span>

          <textarea className="textArea" onChange={onChangeSS8Listener94} value={SS8Essay94}/>

          <span className="days">LESSON 97</span>

          <textarea className="textArea" onChange={onChangeSS8Listener95} value={SS8Essay95}/>

          <span className="days" style={{ color: "#3a4563" }}><b>GEOGRAPHY</b></span> <br/>
          <p> This next segment will focus on learning about the geography of --REPLACE--.
            After watching a short video about a country, you will be asked to answer several questions based
            on what you learned. Read the questions ahead of time as it will help you take notes while watching the
            videos. You will then
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
                    onChange={onChangeSS8Listener96} value={SS8Essay96}/>

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
          <textarea className="textArea" onChange={onChangeSS8Listener97} value={SS8Essay97}/>

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
          <textarea className="textArea" onChange={onChangeSS8Listener98} value={SS8Essay98}/>

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
          <textarea className="textArea" onChange={onChangeSS8Listener99} value={SS8Essay99}/>

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

          <textarea className="textArea" onChange={onChangeSS8Listener100} value={SS8Essay100}/>

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


          <textarea className="textArea" onChange={onChangeSS8Listener102} value={SS8Essay102}/>

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
          <textarea className="textArea" onChange={onChangeSS8Listener103} value={SS8Essay103}/>

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
          <textarea className="textArea" onChange={onChangeSS8Listener104} value={SS8Essay104}/>

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
          <textarea className="textArea" onChange={onChangeSS8Listener105} value={SS8Essay105}/>

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

          <textarea className="textArea" onChange={onChangeSS8Listener106} value={SS8Essay106}/>

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
          <textarea className="textArea" onChange={onChangeSS8Listener107} value={SS8Essay107}/>

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
          <textarea className="textArea" onChange={onChangeSS8Listener108} value={SS8Essay108}/>

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
          <textarea className="textArea" onChange={onChangeSS8Listener109} value={SS8Essay109}/>

          <span className="days">LESSON 111</span>
          <p>Watch the videos below about<b> Estonia. </b></p>
          <Video videoUrl="https://www.youtube.com/embed/"/>
          <p>TAP MAP</p>

          <textarea className="textArea" onChange={onChangeSS8Listener110} value={SS8Essay110}/>

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
          <textarea className="textArea" onChange={onChangeSS8Listener111} value={SS8Essay111}/>

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
          <textarea className="textArea" onChange={onChangeSS8Listener112} value={SS8Essay112}/>

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
          <textarea className="textArea" onChange={onChangeSS8Listener113} value={SS8Essay113}/>

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
          <textarea className="textArea" onChange={onChangeSS8Listener114} value={SS8Essay114}/>

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
          <textarea className="textArea" onChange={onChangeSS8Listener115} value={SS8Essay115}/>

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
          <textarea className="textArea" onChange={onChangeSS8Listener116} value={SS8Essay116}/>

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

          <textarea className="textArea" onChange={onChangeSS8Listener117} value={SS8Essay117}/>

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
          <textarea className="textArea" onChange={onChangeSS8Listener118} value={SS8Essay118}/>

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

          <textarea className="textArea" onChange={onChangeSS8Listener119} value={SS8Essay119}/>

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

          <textarea className="textArea" onChange={onChangeSS8Listener120} value={SS8Essay120}/>

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

          <textarea className="textArea" onChange={onChangeSS8Listener121} value={SS8Essay121}/>

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

          <textarea className="textArea" onChange={onChangeSS8Listener122} value={SS8Essay122}/>

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
          <textarea className="textArea" onChange={onChangeSS8Listener123} value={SS8Essay123}/>

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

          <textarea className="textArea" onChange={onChangeSS8Listener124} value={SS8Essay124}/>

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

          <textarea className="textArea" onChange={onChangeSS8Listener125} value={SS8Essay125}/>

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

          <textarea className="textArea" onChange={onChangeSS8Listener126} value={SS8Essay126}/>

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

          <textarea className="textArea" onChange={onChangeSS8Listener127} value={SS8Essay127}/>

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

          <textarea className="textArea" onChange={onChangeSS8Listener128} value={SS8Essay128}/>

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

          <textarea className="textArea" onChange={onChangeSS8Listener129} value={SS8Essay129}/>

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

          <textarea className="textArea" onChange={onChangeSS8Listener130} value={SS8Essay130}/>

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

          <textarea className="textArea" onChange={onChangeSS8Listener132} value={SS8Essay132}/>

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

          <textarea className="textArea" onChange={onChangeSS8Listener133} value={SS8Essay133}/>

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

          <textarea className="textArea" onChange={onChangeSS8Listener134} value={SS8Essay134}/>

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

          <textarea className="textArea" onChange={onChangeSS8Listener135} value={SS8Essay135}/>

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

          <p><span className='smallerFont'> After you finish the questions above, set a <a href="timer20"
                                                                                           rel="noreferrer"
                                                                                           target="_blank">20 minute timer </a>and then go to <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>

          <textarea className="textArea" onChange={onChangeSS8Listener136} value={SS8Essay136}/>

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
          <textarea className="textArea" onChange={onChangeSS8Listener137} value={SS8Essay137}/>

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

          <p><span className='smallerFont'> After you finish the questions above, set a <a href="timer20"
                                                                                           rel="noreferrer"
                                                                                           target="_blank">20 minute timer </a>and then go to <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>

          <textarea className="textArea" onChange={onChangeSS8Listener138} value={SS8Essay138}/>

          <span className="days">LESSON 139</span>
          <p>Watch the video below about<b> </b> by Geography Now. Then answer the questions that follow.</p>

          <Video videoUrl="https://www.youtube.com/embed/2xQM4Zy5zIk?list=PLMRyiKpIukC-FPqtWyOee_dFYMeVie49H"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning behind
            the colors and/or the design? If the flag is not research it
            online.<br/>
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

          <textarea className="textArea" onChange={onChangeSS8Listener139} value={SS8Essay139}/>

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

          <p><span className='smallerFont'> After you finish the questions above, set a <a href="timer20"
                                                                                           rel="noreferrer"
                                                                                           target="_blank">20 minute timer </a>and then go to <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>

          <textarea className="textArea" onChange={onChangeSS8Listener140} value={SS8Essay140}/>

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

          <p><span className='smallerFont'> After you finish the questions above, set a <a href="timer20"
                                                                                           rel="noreferrer"
                                                                                           target="_blank">20 minute timer </a>and then go to <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>

          <textarea className="textArea" onChange={onChangeSS8Listener141} value={SS8Essay141}/>
          <span className="days">LESSON 142</span>
          <p>Watch the video below about<b> </b> by Geography Now. Then answer the questions that follow. </p>

          <Video videoUrl="https://www.youtube.com/embed/aWfu0BKOZ5g?list=PLMRyiKpIukC-FPqtWyOee_dFYMeVie49H"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning behind
            the colors and/or the design? If the flag is not research it
            online.<br/>
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
          <textarea className="textArea" onChange={onChangeSS8Listener142} value={SS8Essay142}/>

          <span className="days">LESSON 143</span>
          <p>Watch the video below about<b> </b> by Geography Now. Then answer the questions that follow. </p>
          <Video videoUrl="https://www.youtube.com/embed/S_pUIeE4Eko?list=PLMRyiKpIukC-FPqtWyOee_dFYMeVie49H"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning behind
            the colors and/or the design? If the flag is not research it
            online.<br/>
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
          <textarea className="textArea" onChange={onChangeSS8Listener143} value={SS8Essay143}/>

          <span className="days">LESSON 144</span>
          <p>Watch the video below about<b> </b> by Geography
            Now. Then answer the questions that follow.</p>
          <Video videoUrl="https://www.youtube.com/embed/vvgLLqpRT6s?list=PLMRyiKpIukC-FPqtWyOee_dFYMeVie49H"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning behind
            the colors and/or the design? If the flag is not research it
            online.<br/>
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
          <textarea className="textArea" onChange={onChangeSS8Listener144} value={SS8Essay144}/>

          <span className="days">LESSON 145</span>
          <p>Watch the video below about<b> </b> by Geography Now. Then answer the questions that follow.</p>
          <Video videoUrl="https://www.youtube.com/embed/mw-gmjzN4Fw?list=PLMRyiKpIukC-FPqtWyOee_dFYMeVie49H"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning behind
            the colors and/or the design? If the flag is not research it
            online.<br/>
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
          <textarea className="textArea" onChange={onChangeSS8Listener145} value={SS8Essay145}/>

          <span className="days">LESSON 146</span>
          <p>Watch the video below about<b> </b> by Geography Now. Then answer the questions that follow.</p>
          <Video videoUrl="https://www.youtube.com/embed/oqfW7xn215o?list=PLMRyiKpIukC-FPqtWyOee_dFYMeVie49H"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning behind
            the colors and/or the design? If the flag is not research it
            online.<br/>
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
          <textarea className="textArea" onChange={onChangeSS8Listener146} value={SS8Essay146}/>

          <span className="days">LESSON 147</span>
          <p>Watch the video below about<b> Saudi
            Arabia</b> by Geography Now. Then answer the questions that follow.</p>
          <Video videoUrl="https://www.youtube.com/embed/tP68QwVvAZk?list=PLMRyiKpIukC-FPqtWyOee_dFYMeVie49H"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning behind
            the colors and/or the design? If the flag is not research it
            online.<br/>
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
          <textarea className="textArea" onChange={onChangeSS8Listener147} value={SS8Essay147}/>

          <span className="days">LESSON 148</span>
          <p>Watch the video:<b> The difference between Arab Countries</b> by Geography Now. Then answer the questions
            that follow.</p>

          <Video videoUrl="https://www.youtube.com/embed/j7MiI9pZaxk"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning behind
            the colors and/or the design? If the flag is not research it
            online.<br/>
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
          <textarea className="textArea" onChange={onChangeSS8Listener148} value={SS8Essay148}/><br/>
          <p className="regions">North &amp; Central America</p>

          <span className="days">LESSON 149</span>
          <p>Watch the video below about<b> </b> by Geography Now. Then answer the questions that follow.</p>

          <Video videoUrl="https://www.youtube.com/embed/SxhUsPBFPkU?list=PLR7XO54Pktt8Ui5oXABHerdCzzHg9noTw"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning behind
            the colors and/or the design? If the flag is not research it
            online.<br/>
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
          <textarea className="textArea" onChange={onChangeSS8Listener149} value={SS8Essay149}/>

          <span className="days">LESSON 150</span>
          <p>Watch the videos below about<b> Mexico</b> by Geography Now. Then answer the questions that follow.</p>
          <Video videoUrl="https://www.youtube.com/embed/"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning behind
            the colors and/or the design? If the flag is not research it
            online.<br/>
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
          <textarea className="textArea" onChange={onChangeSS8Listener150} value={SS8Essay150}/>

          <span className="days">LESSON 151</span>
          <p>Watch the videos below about<b> Guatemala</b> by Geography Now. Then answer the questions that follow.
          </p>
          <Video videoUrl="https://www.youtube.com/embed/"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning behind
            the colors and/or the design? If the flag is not research it
            online.<br/>
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
          <textarea className="textArea" onChange={onChangeSS8Listener151} value={SS8Essay151}/>

          <span className="days">LESSON 152</span>
          <p>Watch the video below about<b> </b> by Geography Now. Then answer the questions that follow.</p>
          <Video videoUrl="https://www.youtube.com/embed/ND8PduJlN6A?list=PLR7XO54Pktt8Ui5oXABHerdCzzHg9noTw"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning behind
            the colors and/or the design? If the flag is not research it
            online.<br/>
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
          <textarea className="textArea" onChange={onChangeSS8Listener152} value={SS8Essay152}/>

          <span className="days">LESSON 153</span>
          <p>Watch the videos below about<b> Nicaragua</b> by Geography Now. Then answer the questions that follow.</p>
          <Video videoUrl="https://www.youtube.com/embed/"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning behind
            the colors and/or the design? If the flag is not research it
            online.<br/>
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
          <textarea className="textArea" onChange={onChangeSS8Listener153} value={SS8Essay153}/>

          <span className="days">LESSON 154</span>
          <p>Watch the videos below about<b> El Salvador</b> by Geography Now. Then answer the questions that follow.
          </p>
          <Video videoUrl="https://www.youtube.com/embed/"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning behind
            the colors and/or the design? If the flag is not research it
            online.<br/>
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
          <textarea className="textArea" onChange={onChangeSS8Listener154} value={SS8Essay154}/>

          <span className="days">LESSON 155</span>
          <p>Watch the video below about<b> </b> by Geography Now. Then answer the questions that follow.</p>
          <Video videoUrl="https://www.youtube.com/embed/"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning behind
            the colors and/or the design? If the flag is not research it
            online.<br/>
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
          <textarea className="textArea" onChange={onChangeSS8Listener155} value={SS8Essay155}/>

          <span className="days">LESSON 156</span>
          <p>Watch the video below about<b> </b> by Geography Now. Then answer the questions that follow.</p>
          <Video videoUrl="https://www.youtube.com/embed/3MrYk3kCUGk?list=PLR7XO54Pktt8Ui5oXABHerdCzzHg9noTw"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning behind
            the colors and/or the design? If the flag is not research it
            online.<br/>
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
          <textarea className="textArea" onChange={onChangeSS8Listener156} value={SS8Essay156}/>

          <span className="days">LESSON 157</span>
          <p>Watch the video below about<b> </b> by Geography Now. Then answer the questions that follow.
          </p>
          <Video videoUrl="https://www.youtube.com/embed/DaBEGru_IEc?list=PLR7XO54Pktt8Ui5oXABHerdCzzHg9noTw"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning behind
            the colors and/or the design? If the flag is not research it
            online.<br/>
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
          <textarea className="textArea" onChange={onChangeSS8Listener157} value={SS8Essay157}/>

          <span className="days">LESSON 158</span>
          <p>Watch the video below about<b> </b> by Geography Now. Then answer the questions that follow.</p>
          <Video videoUrl="https://www.youtube.com/embed/uvA3DUJCxpY?list=PLR7XO54Pktt8Ui5oXABHerdCzzHg9noTw"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning behind
            the colors and/or the design? If the flag is not research it
            online.<br/>
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
          <textarea className="textArea" onChange={onChangeSS8Listener158} value={SS8Essay158}/>

          <span className="days">LESSON 159</span>
          <p>Watch the video below about<b> </b> by Geography Now. Then answer the questions that follow.
          </p>
          <Video videoUrl="https://www.youtube.com/embed/J9aV4Zn8JJE?list=PLR7XO54Pktt8Ui5oXABHerdCzzHg9noTw"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning behind
            the colors and/or the design? If the flag is not research it
            online.<br/>
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
          <textarea className="textArea" onChange={onChangeSS8Listener159} value={SS8Essay159}/>

          <span className="days">LESSON 160</span>
          <p>Watch the video below about<b> </b> by Geography Now. Then answer the questions that
            follow.</p>
          <Video videoUrl="https://www.youtube.com/embed/5OpiUD3qtY8?list=PLR7XO54Pktt8Ui5oXABHerdCzzHg9noTw"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning behind
            the colors and/or the design? If the flag is not research it
            online.<br/>
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
          <textarea className="textArea" onChange={onChangeSS8Listener160} value={SS8Essay160}/>

          <span className="days">LESSON 161</span>
          <p>Watch the videos below about<b> Cuba</b> by Geography Now. Then answer the questions that follow.</p>
          <Video videoUrl="https://www.youtube.com/embed/"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning behind
            the colors and/or the design? If the flag is not research it
            online.<br/>
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
          <textarea className="textArea" onChange={onChangeSS8Listener161} value={SS8Essay161}/>

          <span className="days">LESSON 162</span>
          <p>Watch the videos below about<b> Dominica</b> by Geography Now. Then answer the questions that follow.</p>
          <Video videoUrl="https://www.youtube.com/embed/"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning behind
            the colors and/or the design? If the flag is not research it
            online.<br/>
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
          <textarea className="textArea" onChange={onChangeSS8Listener162} value={SS8Essay162}/>

          <span className="days">LESSON 163</span>
          <p>Watch the videos below about<b> Dominican Republic</b> by Geography Now. Then answer the questions that
            follow.</p>
          <Video videoUrl="https://www.youtube.com/embed/dQv3t5VCc3U?list=PLR7XO54Pktt8Ui5oXABHerdCzzHg9noTw"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning behind
            the colors and/or the design? If the flag is not research it
            online.<br/>
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
          <textarea className="textArea" onChange={onChangeSS8Listener163} value={SS8Essay163}/>

          <span className="days">LESSON 164</span>
          <p>Watch the video below about<b> </b> by Geography Now. Then answer the questions that follow.</p>
          <Video videoUrl="https://www.youtube.com/embed/"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning behind
            the colors and/or the design? If the flag is not research it
            online.<br/>
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
          <textarea className="textArea" onChange={onChangeSS8Listener164} value={SS8Essay164}/>

          <span className="days">LESSON 165</span>
          <p>Watch the video below about<b> </b> by Geography Now. Then answer the questions that follow.</p>
          <Video videoUrl="https://www.youtube.com/embed/O0G9a2Kn6-Q?list=PLR7XO54Pktt8Ui5oXABHerdCzzHg9noTw"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning behind
            the colors and/or the design? If the flag is not research it
            online.<br/>
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
          <textarea className="textArea" onChange={onChangeSS8Listener165} value={SS8Essay165}/>

          <span className="days">LESSON 166</span>
          <p>Watch the video below about<b> </b> by Geography Now. Then answer the questions that follow.</p>
          <Video videoUrl="https://www.youtube.com/embed/LaLumU4pSf8?list=PLR7XO54Pktt8Ui5oXABHerdCzzHg9noTw"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning behind
            the colors and/or the design? If the flag is not research it
            online.<br/>
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
          <textarea className="textArea" onChange={onChangeSS8Listener166} value={SS8Essay166}/>

          <span className="days">LESSON 167</span>
          <p>Watch the video below about<b> </b> by Geography Now. Then answer the questions that
            follow.</p>
          <Video videoUrl="https://www.youtube.com/embed/y5FPRLgQ41Q?list=PLR7XO54Pktt8Ui5oXABHerdCzzHg9noTw"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning behind
            the colors and/or the design? If the flag is not research it
            online.<br/>
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
          <textarea className="textArea" onChange={onChangeSS8Listener167} value={SS8Essay167}/>

          <span className="days">LESSON 168</span>
          <p>Watch the video below about<b> </b> by Geography Now. Then answer the
            questions that follow.</p>
          <Video videoUrl="https://www.youtube.com/embed/E5DV8mD9_eQ?list=PLR7XO54Pktt8Ui5oXABHerdCzzHg9noTw"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning behind
            the colors and/or the design? If the flag is not research it
            online.<br/>
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
          <textarea className="textArea" onChange={onChangeSS8Listener168} value={SS8Essay168}/>

          <span className="days">LESSON 169</span>
          <p>Watch the video below about<b> </b> by Geography Now. Then answer the questions that follow.</p>
          <Video videoUrl="https://www.youtube.com/embed/AJx1RcIO61I?list=PLR7XO54Pktt-DmLWCKF7Kc908nqX2HBjh"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning behind
            the colors and/or the design? If the flag is not research it
            online.<br/>
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
          <textarea className="textArea" onChange={onChangeSS8Listener169} value={SS8Essay169}/>

          <span className="days">LESSON 170</span>
          <p>Watch the video below about<b> </b> by Geography Now. Then answer the questions that follow.</p>
          <Video videoUrl="https://www.youtube.com/embed/1U0N4SGL46A?list=PLR7XO54Pktt-DmLWCKF7Kc908nqX2HBjh"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning behind
            the colors and/or the design? If the flag is not research it
            online.<br/>
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
          <textarea className="textArea" onChange={onChangeSS8Listener170} value={SS8Essay170}/>

          <span className="days">LESSON 171</span>
          <p>Watch the video below about<b> </b> by Geography Now. Then answer the questions that follow.</p>
          <Video videoUrl="https://www.youtube.com/embed/JFfcD-SkqIc?list=PLR7XO54Pktt-DmLWCKF7Kc908nqX2HBjh"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning behind
            the colors and/or the design? If the flag is not research it
            online.<br/>
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
          <textarea className="textArea" onChange={onChangeSS8Listener171} value={SS8Essay171}/>

          <span className="days">LESSON 172</span>
          <p>Watch the video below about<b> </b> by Geography Now. Then answer the questions that follow.</p>
          <Video videoUrl="https://www.youtube.com/embed/8P4Hi99hUJc?list=PLR7XO54Pktt-DmLWCKF7Kc908nqX2HBjh"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning behind
            the colors and/or the design? If the flag is not research it
            online.<br/>
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
          <textarea className="textArea" onChange={onChangeSS8Listener172} value={SS8Essay172}/>

          <span className="days">LESSON 173</span>
          <p>Watch the video below about<b> </b> by Geography Now. Then answer the questions that follow.</p>
          <Video videoUrl="https://www.youtube.com/embed/rTsPaAIJdnw?list=PLR7XO54Pktt-DmLWCKF7Kc908nqX2HBjh"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning behind
            the colors and/or the design? If the flag is not research it
            online.<br/>
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
          <textarea className="textArea" onChange={onChangeSS8Listener173} value={SS8Essay173}/>

          <span className="days">LESSON 174</span>
          <p>Watch the videos below about<b> Ecuador</b> by Geography Now. Then answer the questions that follow.</p>
          <Video videoUrl="https://www.youtube.com/embed/"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning behind
            the colors and/or the design? If the flag is not research it
            online.<br/>
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
          <textarea className="textArea" onChange={onChangeSS8Listener174} value={SS8Essay174}/>

          <span className="days">LESSON 175</span>
          <p>Watch the video below about<b> </b> by Geography Now. Then answer the questions that follow.</p>
          <Video videoUrl="https://www.youtube.com/embed/tr5xeKcHGqw?list=PLR7XO54Pktt-DmLWCKF7Kc908nqX2HBjh"/>
          <textarea className="textArea" onChange={onChangeSS8Listener175} value={SS8Essay175}/>          <p> 1.
          Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning behind the
          colors and/or the design? If the flag is not research it
          online.<br/>
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


          <span className="days">LESSON 176</span>
          <p>Watch the video below about<b> </b> by Geography Now. Then answer the questions that follow.</p>
          <Video videoUrl="https://www.youtube.com/embed/8wbNEJjBa0k?list=PLR7XO54Pktt-DmLWCKF7Kc908nqX2HBjh"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning behind
            the colors and/or the design? If the flag is not research it
            online.<br/>
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
          <textarea className="textArea" onChange={onChangeSS8Listener176} value={SS8Essay176}/>

          <span className="days">LESSON 177</span>
          <p>Watch the videos below about<b> Peru</b> by Geography Now. Then answer the questions that follow.</p>
          <Video videoUrl="https://www.youtube.com/embed/"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning behind
            the colors and/or the design? If the flag is not research it
            online.<br/>
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
          <textarea className="textArea" onChange={onChangeSS8Listener177} value={SS8Essay177}/>

          {/*<span className="days">LESSON 178</span>*/}
          {/*<p>Watch the video below about<b> </b> by Geography Now. Then answer the questions that follow.</p>*/}
          {/*<Video videoUrl="https://www.youtube.com/embed/"/>*/}
          {/*<textarea className="textArea" onChange={onChangeSS8Listener178} value={SS8Essay178}/>*/}

          {/*<span className="days">LESSON 179</span>*/}
          {/*<p>Watch the video below about<b> </b> by Geography Now. Then answer the questions that follow.</p>*/}
          {/*<Video videoUrl="https://www.youtube.com/embed/"/>*/}
          {/*<textarea className="textArea" onChange={onChangeSS8Listener179} value={SS8Essay179}/>*/}

          {/*<span className="days">LESSON 180</span>*/}
          {/*<p>Watch the video below about<b> </b> by Geography Now. Then answer the questions that follow.</p>*/}
          {/*<Video videoUrl="https://www.youtube.com/embed/"/>*/}
          {/*<textarea className="textArea" onChange={onChangeSS8Listener180} value={SS8Essay180}/>*/}
        </div>
      </section>
    </form>
  )
}
