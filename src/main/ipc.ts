import { ipcMain } from "electron";
import { FakeApi } from "./siteOccupancyApi";
import { channels } from "../renderer/constants";
import * as Electron from "electron";

export function registerIpcHandlers() {
  ipcMain.handle(channels.getLocations, async () => {
    return FakeApi.getLocations();
  });
  ipcMain.handle(
    channels.getRecordCount,
    async (event: Electron.IpcMainInvokeEvent, locationId: string) => {
      return FakeApi.getRecordCount(locationId);
    },
  );
  ipcMain.handle(
    channels.getRecordPage,
    async (
      event: Electron.IpcMainInvokeEvent,
      page: number,
      siteId: string,
    ) => {
      return FakeApi.getRecordPage(page, siteId);
    },
  );
  ipcMain.handle(
    channels.getPageCount,
    async (event: Electron.IpcMainInvokeEvent, locationId: string) => {
      return FakeApi.getPageCount(locationId);
    },
  );
}
