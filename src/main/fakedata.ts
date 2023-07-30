import { chartData } from "../renderer/data-formatter";
import { LocationDetails } from "../types";

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

export const locationItems: LocationDetails[] = [
  {
    siteName: "Location 1",
    siteId: "location1",
    parentSiteId: "parent1",
    parentSiteName: "Parent 1",
    siteType: "building",
    latitude: 37.408972,
    longitude: -121.953964,
  },
  {
    siteName: "Location 2",
    siteId: "location2",
    parentSiteId: "parent2",
    parentSiteName: "Parent 2",
    siteType: "building",
    latitude: 37.408972,
    longitude: -121.953964,
  },
  {
    siteName: "Location 5 - This is a very long location name",
    siteId: "location5",
    parentSiteId: "parent3",
    parentSiteName: "Parent 3",
    siteType: "building",
    latitude: 37.408972,
    longitude: -121.953964,
  },
  {
    siteName:
      "Location 6 - This is an even longer location name to test the UI",
    siteId: "location6",
    parentSiteId: "parent4",
    parentSiteName: "Parent 4",
    siteType: "building",
    latitude: 37.408972,
    longitude: -121.953964,
  },
];
