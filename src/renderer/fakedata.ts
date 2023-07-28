import { colors } from "./constants";

function formatDate(date: Date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let month = date.getMonth() + 1; // JavaScript months are 0-based, hence the "+ 1"
  let day = date.getDate();

  let ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'

  let minutesStr = minutes < 10 ? "0" + minutes : minutes; // leading zero for minutes
  let monthStr = month < 10 ? "0" + month : month; // leading zero for month

  let formattedDate = `${hours}:${minutesStr} ${ampm}`;

  return formattedDate;
}

const labels = Array.from({ length: 12 }, () => {
  let date = new Date();
  date.setHours(
    Math.floor(Math.random() * (20 - 8 + 1)) + 8,
    Math.floor(Math.random() * 60),
    0,
  );
  return formatDate(date);
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
