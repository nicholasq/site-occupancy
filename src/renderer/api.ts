export function fetchLocations() {
  return window.electron.getLocations();
}

export function fetchRecordCount(locationId: string) {
  return window.electron.getRecordCount(locationId);
}

export function fetchPageCount(locationId: string) {
  return window.electron.getPageCount(locationId);
}

export function fetchRecordPage(page: number, siteId: string) {
  return window.electron.getRecordPage(page, siteId);
}
