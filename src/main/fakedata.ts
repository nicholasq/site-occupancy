import { LocationDetails, SiteOccupancyRecordPage } from "../types";

function formatDate(date: Date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();

  let ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'

  let minutesStr = minutes < 10 ? "0" + minutes : minutes; // leading zero for minutes

  return `${hours}:${minutesStr} ${ampm}`;
}

export const locationItems: LocationDetails[] = [
  {
    siteName: "Short Location Name",
    siteId: "location1",
    parentSiteId: "parent1",
    parentSiteName: "Parent 1",
    siteType: "building",
    latitude: 37.408972,
    longitude: -121.953964,
  },
  {
    siteName: "Location 5 - This is a very long location name",
    siteId: "location2",
    parentSiteId: "parent3",
    parentSiteName: "Parent 3",
    siteType: "building",
    latitude: 37.408972,
    longitude: -121.953964,
  },
  {
    siteName:
      "Location 6 - This is an even longer location name to test the UI",
    siteId: "location3",
    parentSiteId: "parent4",
    parentSiteName: "Parent 4",
    siteType: "building",
    latitude: 37.408972,
    longitude: -121.953964,
  },
];

function generateDates(): Date[] {
  let dateArray: Date[] = [];
  let startDate = new Date();
  startDate.setDate(startDate.getDate() - 30); // 30 days ago
  startDate.setMinutes(0); // Start of the hour
  startDate.setSeconds(0);

  let currentDate = new Date();

  while (startDate <= currentDate) {
    dateArray.push(new Date(startDate));
    startDate.setHours(startDate.getHours() + 1); // Increment to the next hour
  }

  return dateArray;
}

interface CountMap {
  date: Date;
  wiredCount: number;
  wirelessCount: number;
}

const pageSize = 24;

function generateCountsPerSite() {
  const dates = generateDates();
  const dataMap = new Map<string, CountMap[]>();
  dataMap.set("location1", []);
  dataMap.set("location2", []);
  dataMap.set("location3", []);

  for (let i = 0; i < dates.length; i++) {
    const date = dates[i];
    dataMap.get("location1")?.push({
      date,
      wiredCount: Math.floor(Math.random() * 901),
      wirelessCount: Math.floor(Math.random() * 901),
    });
    dataMap.get("location2")?.push({
      date,
      wiredCount: Math.floor(Math.random() * 901),
      wirelessCount: Math.floor(Math.random() * 901),
    });
    // Only generate data for the first half of the dates for location3
    // to simulate a location that has less data than the others.
    if (i < dates.length / 2) {
      dataMap.get("location3")?.push({
        date,
        wiredCount: Math.floor(Math.random() * 901),
        wirelessCount: Math.floor(Math.random() * 901),
      });
    }
  }

  return dataMap;
}

const countsPerSite = generateCountsPerSite();

export function getSiteOccupancyRecordPage(
  page: number,
  siteId: string,
): SiteOccupancyRecordPage {
  const data = countsPerSite.get(siteId);
  const startIndex = page * pageSize;
  const endIndex = startIndex + pageSize;
  const startDate = data[startIndex].date;
  const endDate = data[endIndex].date;
  const dateRangeLabel = `${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}`;
  const labels = data
    .slice(startIndex, endIndex)
    .map((item) => formatDate(item.date));
  const siteName = locationItems.find((item) => item.siteId === siteId)
    ?.siteName;

  return {
    dateRangeLabel,
    labels,
    siteName,
    wiredCounts: data
      .slice(startIndex, endIndex)
      .map((item) => item.wiredCount),
    wirelessCounts: data
      .slice(startIndex, endIndex)
      .map((item) => item.wirelessCount),
  };
}

export function getRecordCount(locationId: string): Promise<number> {
  return Promise.resolve(countsPerSite.get(locationId)?.length || 0);
}

export function getPageCount(locationId: string): Promise<number> {
  const count = countsPerSite.get(locationId)?.length || 0;
  let pages = count / pageSize;
  pages = Math.floor(pages);
  pages += count % pageSize === 0 ? 0 : 1;
  return Promise.resolve(pages);
}

export function getLocations(): Promise<LocationDetails[]> {
  return Promise.resolve(locationItems);
}
