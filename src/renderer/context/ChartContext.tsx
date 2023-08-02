import React, { createContext, useEffect, useState } from "react";
import { LocationDetails, SiteOccupancyRecordPage } from "../../types";
import { fetchPageCount, fetchRecordCount, fetchRecordPage } from "../api";
import { getLocations } from "../../main/fakedata";

interface ChartContextProps {
  pageNumber: number | null;
  recordPage: SiteOccupancyRecordPage | null;
  nextPage: () => void;
  prevPage: () => void;
  pageSize: number | null;
  setPageSize: React.Dispatch<React.SetStateAction<number | null>>;
  locations: LocationDetails[];
  locationId: string | null;
  setLocationId: React.Dispatch<React.SetStateAction<string | null>>;
  locationName: string | null;
  recordCount: number | null;
  pageCount: number | null;
}

export const ChartContext = createContext<ChartContextProps>({
  pageNumber: null,
  recordPage: null,
  nextPage: () => {},
  prevPage: () => {},
  pageSize: null,
  setPageSize: () => {},
  locations: [],
  locationId: null,
  setLocationId: () => {},
  locationName: null,
  recordCount: null,
  pageCount: null,
});

export function ChartContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [pageNumber, setPageNumber] = useState<number | null>(0);
  const [pageSize, setPageSize] = useState<number | null>(24);
  const [recordPage, setRecordPage] = useState<SiteOccupancyRecordPage | null>(
    null,
  );
  const [locations, setLocations] = useState<LocationDetails[]>([]);
  const [locationId, setLocationId] = useState<string | null>(null);
  const [recordCount, setRecordCount] = useState<number | null>(null);
  const [pageCount, setPageCount] = useState<number | null>(null);

  // Initialize the context with the first page of the first location
  useEffect(() => {
    (async () => {
      const newLocations = await getLocations();
      const newLocationId =
        newLocations.length > 0 ? newLocations[0].siteId : null;
      if (newLocationId) {
        const newRecordCount = await fetchRecordCount(newLocationId);
        const newPageCount = await fetchPageCount(newLocationId);
        const newRecordPage = await fetchRecordPage(0, newLocationId); // grab the first page of the first location
        setLocations(newLocations);
        setLocationId(newLocationId);
        setRecordPage(newRecordPage);
        setRecordCount(newRecordCount);
        setPageCount(newPageCount);
      }
    })();
  }, []);

  function handlePageChange(op: number) {
    if (pageNumber === 0 && op === -1) {
      return;
    }
    if (pageNumber === pageCount - 1 && op === 1) {
      return;
    }
    (async () => {
      const newPageNumber = pageNumber + op;
      const newRecordPage = await fetchRecordPage(newPageNumber, locationId);
      setRecordPage(newRecordPage);
      setPageNumber(newPageNumber);
    })();
  }

  function handleLocationIdChange(newLocationId: string) {
    (async () => {
      if (newLocationId !== locationId) {
        const newRecordCount = await fetchRecordCount(newLocationId);
        const newPageCount = await fetchPageCount(newLocationId);
        let newPageNumber = pageNumber;
        if (newPageCount < pageCount) {
          newPageNumber = 0;
        }
        const newRecordPage = await fetchRecordPage(
          newPageNumber,
          newLocationId,
        );
        setPageNumber(newPageNumber);
        setRecordPage(newRecordPage);
        setLocationId(newLocationId);
        setRecordCount(newRecordCount);
        setPageCount(newPageCount);
      }
    })();
  }

  const locationName =
    locations.find((l) => l.siteId === locationId)?.siteName ?? null;

  const chartContext: ChartContextProps = {
    recordPage,
    pageNumber,
    nextPage: () => handlePageChange(1),
    prevPage: () => handlePageChange(-1),
    pageSize,
    setPageSize,
    locations,
    locationId,
    setLocationId: handleLocationIdChange,
    locationName,
    recordCount,
    pageCount,
  };

  return (
    <ChartContext.Provider value={chartContext}>
      {children}
    </ChartContext.Provider>
  );
}
