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
  getRecordCount: async (): Promise<number> => {
    return ipcRenderer.invoke(channels.getRecordCount);
  },
  getPageCount(): Promise<number> {
    return ipcRenderer.invoke(channels.getPageCount);
  },
  getRecordPage: async (
    page: number,
    pageSize: number,
  ): Promise<SiteOccupancyRecordPage> => {
    return ipcRenderer.invoke(channels.getRecordPage, page, pageSize);
  },
};

contextBridge.exposeInMainWorld("electron", api);
