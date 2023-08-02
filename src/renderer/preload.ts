// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import { contextBridge, ipcRenderer } from "electron";
import {
  LocationDetails,
  SiteOccupancyRecordPage,
  SiteOccupancyApi,
} from "../types";
import { channels } from "./constants";

const api: SiteOccupancyApi = {
  getLocations: async (): Promise<LocationDetails[]> => {
    return ipcRenderer.invoke(channels.getLocations);
  },
  getRecordCount: async (locationId: string): Promise<number> => {
    return ipcRenderer.invoke(channels.getRecordCount, locationId);
  },
  getPageCount: async (locationId: string): Promise<number> => {
    return ipcRenderer.invoke(channels.getPageCount, locationId);
  },
  getRecordPage: async (
    page: number,
    siteId: string,
  ): Promise<SiteOccupancyRecordPage> => {
    return ipcRenderer.invoke(channels.getRecordPage, page, siteId);
  },
};

contextBridge.exposeInMainWorld("electron", api);
