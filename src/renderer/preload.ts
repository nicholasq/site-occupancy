// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import { contextBridge, ipcRenderer } from "electron";
import { LocationDetails, OccupancyRecord } from "../types";
import { SiteOccupancyApi } from "../types";

const api: SiteOccupancyApi = {
  getLocations: async (): Promise<LocationDetails[]> => {
    return ipcRenderer.invoke("getLocations");
  },
  getRecordCount: async (): Promise<number> => {
    return ipcRenderer.invoke("getRecordCount");
  },
  getRecordPage: async (
    page: number,
    pageSize: number,
  ): Promise<OccupancyRecord> => {
    return ipcRenderer.invoke("getRecordPage", page, pageSize);
  },
};

contextBridge.exposeInMainWorld("electron", api);
