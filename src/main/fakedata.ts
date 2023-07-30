import { LocationDetails, SiteOccupancyRecordPage } from "../types";

function formatDate(date: Date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();

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

export function getSiteOccupancyRecordPage(
  page: number,
  pageSize: number,
): SiteOccupancyRecordPage {
  return {
    dateRangeLabel: "Device Count Per Building - 7/27/2023 - 7/27/2023",
    labels,
    siteName: "Some cool location",
    wiredCounts: Array.from({ length: pageSize }, () =>
      Math.floor(Math.random() * 901),
    ),
    wirelessCounts: Array.from({ length: pageSize }, () =>
      Math.floor(Math.random() * 901),
    ),
  };
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

export function getRecordCount(): Promise<number> {
  return Promise.resolve(100);
}

export function getPageCount(): Promise<number> {
  return Promise.resolve(10);
}
