import { ipcMain } from "electron";
import { FakeApi } from "./siteOccupancyApi";
import { channels } from "../renderer/constants";

export function registerIpcHandlers() {
  ipcMain.handle(channels.getLocations, async () => {
    return FakeApi.getLocations();
  });
  ipcMain.handle(channels.getRecordCount, async () => {
    return FakeApi.getRecordCount();
  });
  ipcMain.handle(
    channels.getRecordPage,
    async (event, page: number, pageSize: number) => {
      return FakeApi.getRecordPage(page, pageSize);
    },
  );
  ipcMain.handle(channels.getPageCount, async () => {
    return FakeApi.getPageCount();
  });
}
