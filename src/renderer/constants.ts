const yellow = "rgb(252,238,10)";
const red = "rgb(219,13,21)";
const blue = "rgb(0,240,255)";
const transYellow = "rgba(252,238,10, .5)";
const transRed = "rgba(219,13,21, .5)";
const transBlue = "rgb(0,240,255, .5)";
const fontColor = "white";
const darkGray = "rgb(85,85,85)";
const accent = "rgb(229,12,105)";

const colors = {
  yellow,
  red,
  blue,
  transYellow,
  transRed,
  transBlue,
  darkGray,
  fontColor,
  accent,
};

export const theme = {
  colors,
  font: {
    size: "1.2rem",
  },
};

export const channels = {
  getLocations: "getLocations",
  getRecordCount: "getRecordCount",
  getRecordPage: "getRecordPage",
  getPageCount: "getPageCount",
};
