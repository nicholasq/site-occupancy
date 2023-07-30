import { LocationDetails, OccupancyRecord, SiteOccupancyApi } from "../types";
import { locationItems } from "./fakedata";

export const FakeApi: SiteOccupancyApi = {
  getLocations(): Promise<LocationDetails[]> {
    return Promise.resolve(locationItems);
  },
  getRecordCount(): Promise<number> {
    return Promise.resolve(0);
  },
  getRecordPage(page: number, pageSize: number): Promise<OccupancyRecord> {
    return Promise.resolve(null);
  },
};
