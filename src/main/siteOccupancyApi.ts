import {
  LocationDetails,
  SiteOccupancyApi,
  SiteOccupancyRecordPage,
} from "../types";
import {
  getLocations,
  getPageCount,
  getRecordCount,
  getSiteOccupancyRecordPage,
} from "./fakedata";

export const FakeApi: SiteOccupancyApi = {
  getLocations(): Promise<LocationDetails[]> {
    return Promise.resolve(getLocations());
  },
  getRecordCount(locationId: string): Promise<number> {
    return Promise.resolve(getRecordCount(locationId));
  },
  getRecordPage(
    page: number,
    siteId: string,
  ): Promise<SiteOccupancyRecordPage> {
    return Promise.resolve(getSiteOccupancyRecordPage(page, siteId));
  },
  getPageCount(locationId: string): Promise<number> {
    return Promise.resolve(getPageCount(locationId));
  },
};
