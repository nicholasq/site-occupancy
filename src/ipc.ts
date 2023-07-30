import { ipcMain } from "electron";
import { FakeApi } from "./main/siteOccupancyApi";

export function registerIpcHandlers() {
  ipcMain.handle("getLocations", async () => {
    return FakeApi.getLocations();
  });
  ipcMain.handle("getRecordCount", async () => {
    return FakeApi.getRecordCount();
  });
  ipcMain.handle(
    "getRecordPage",
    async (event, page: number, pageSize: number) => {
      return FakeApi.getRecordPage(page, pageSize);
    },
  );
}
