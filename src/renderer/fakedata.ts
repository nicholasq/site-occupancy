import { chartData } from "./data-formatter";

function formatDate(date: Date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let month = date.getMonth() + 1; // JavaScript months are 0-based, hence the "+ 1"

  let ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'

  let minutesStr = minutes < 10 ? "0" + minutes : minutes; // leading zero for minutes

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

export function data() {
  return chartData(
    labels,
    Array.from({ length: 12 }, () => Math.floor(Math.random() * 901)),
    Array.from({ length: 12 }, () => Math.floor(Math.random() * 901)),
  );
}

export const locationItems = [
  { label: "Location 1", value: "location1" },
  {
    label: "Location 2",
    value: "location2",
  },
  {
    label: "Location 3",
    value: "location3",
  },
  {
    label: "Location 4",
    value: "location4",
  },
  {
    label: "Location 5 - This is a very long location name",
    value: "location5",
  },
  {
    label: "Location 6",
    value: "location6",
  },
  {
    label: "Location 7",
    value: "location7",
  },
  {
    label: "Location 8 - This is an even longer location name to test the UI",
    value: "location8",
  },
  {
    label: "Location 9",
    value: "location9",
  },
  {
    label: "Location 10",
    value: "location10",
  },
  {
    label: "Location 11",
    value: "location11",
  },
  {
    label: "Location 12",
    value: "location12",
  },
  {
    label: "Location 13",
    value: "location13",
  },
  {
    label: "Location 14",
    value: "location14",
  },
];
