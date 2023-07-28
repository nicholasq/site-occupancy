import { colors } from "./constants";

const labels = Array.from({ length: 12 }, () => {
  let date = new Date();
  date.setHours(
    Math.floor(Math.random() * (20 - 8 + 1)) + 8,
    Math.floor(Math.random() * 60),
    0,
  );
  return date.toLocaleString();
});

export const data = {
  labels,
  datasets: [
    {
      label: "Wired",
      data: Array.from({ length: 12 }, () => Math.floor(Math.random() * 901)),
      borderColor: colors.yellow,
      backgroundColor: colors.transYellow,
    },
    {
      label: "Wireless",
      data: Array.from({ length: 12 }, () => Math.floor(Math.random() * 901)),
      borderColor: colors.blue,
      backgroundColor: colors.transBlue,
    },
  ],
};
