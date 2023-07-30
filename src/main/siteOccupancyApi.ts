import {
  LocationDetails,
  SiteOccupancyRecordPage,
  SiteOccupancyApi,
} from "../types";
import {
  locationItems,
  getSiteOccupancyRecordPage,
  getPageCount,
  getRecordCount,
} from "./fakedata";

export const FakeApi: SiteOccupancyApi = {
  getLocations(): Promise<LocationDetails[]> {
    return Promise.resolve(locationItems);
  },
  getRecordCount(): Promise<number> {
    return Promise.resolve(getRecordCount());
  },
  getRecordPage(
    page: number,
    pageSize: number,
  ): Promise<SiteOccupancyRecordPage> {
    return Promise.resolve(getSiteOccupancyRecordPage(page, pageSize));
  },
  getPageCount(): Promise<number> {
    return Promise.resolve(getPageCount());
  },
};
