export interface SiteOccupancyApi {
  getRecordCount(): Promise<number>;

  getRecordPage(page: number, pageSize: number): Promise<OccupancyRecord>;

  getLocations(): Promise<LocationDetails[]>;
}

export interface OccupancyRecord {
  dateRangeLabel: string;
  wiredCount: number;
  wirelessCount: number;
  siteId: string;
}

export interface LocationDetails {
  siteName?: string | null;
  siteId?: string | null;
  parentSiteId?: string | null;
  parentSiteName?: string | null;
  siteType?: string | null;
  latitude?: number | null;
  longitude?: number | null;
}

declare global {
  interface Window {
    electron: SiteOccupancyApi;
  }
}

export interface DnacSiteHealth {
  siteName: string;
  siteId: string;
  parentSiteId: string;
  parentSiteName: string;
  siteType: string;
  latitude: number;
  longitude: number;
  healthyNetworkDevicePercentage: unknown;
  healthyClientsPercentage: unknown;
  clientHealthWired: unknown;
  clientHealthWireless: unknown;
  numberOfClients: unknown;
  numberOfNetworkDevice: unknown;
  networkHealthAverage: unknown;
  networkHealthAccess: unknown;
  networkHealthCore: unknown;
  networkHealthDistribution: unknown;
  networkHealthRouter: unknown;
  networkHealthAP: unknown;
  networkHealthWLC: unknown;
  networkHealthSwitch: unknown;
  networkHealthWireless: unknown;
  networkHealthOthers: unknown;
  numberOfWiredClients: unknown;
  numberOfWirelessClients: unknown;
  totalNumberOfConnectedWiredClients: unknown;
  totalNumberOfActiveWirelessClients: unknown;
  wiredGoodClients: unknown;
  wirelessGoodClients: unknown;
  overallGoodDevices: unknown;
  accessGoodCount: unknown;
  accessTotalCount: unknown;
  coreGoodCount: unknown;
  coreTotalCount: unknown;
  distributionGoodCount: unknown;
  distributionTotalCount: unknown;
  routerGoodCount: unknown;
  routerTotalCount: unknown;
  wirelessDeviceGoodCount: unknown;
  wirelessDeviceTotalCount: unknown;
  apDeviceGoodCount: unknown;
  apDeviceTotalCount: unknown;
  wlcDeviceGoodCount: unknown;
  wlcDeviceTotalCount: unknown;
  switchDeviceGoodCount: unknown;
  switchDeviceTotalCount: unknown;
  applicationHealth: unknown;
  applicationGoodCount: unknown;
  applicationTotalCount: unknown;
  applicationBytesTotalCount: unknown;
  dnacInfo: unknown;
  usage: unknown;
  applicationHealthStats: {
    appTotalCount: number;
    businessRelevantAppCount: {
      poor: number;
      fair: number;
      good: number;
    };
    businessIrrelevantAppCount: {
      poor: number;
      fair: number;
      good: number;
    };
    defaultHealthAppCount: {
      poor: number;
      fair: number;
      good: number;
    };
  };
}
