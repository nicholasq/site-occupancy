import React, { useEffect, useState } from "react";
import type { ChartData, ChartOptions } from "chart.js";
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { theme } from "../constants";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const defaultChartOptions: ChartOptions<"line"> = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
      labels: {
        color: theme.colors.fontColor,
        font: {
          weight: "bold",
          family: "Victor Mono",
          size: 16,
        },
      },
    },
    title: {
      display: true,
      text: "",
      color: theme.colors.fontColor,
      font: {
        weight: "bold",
        family: "Victor Mono",
        size: 20,
      },
    },
  },
  scales: {
    x: {
      ticks: {
        color: theme.colors.fontColor,
        font: {
          weight: "bold",
          family: "Victor Mono",
        },
      },
      grid: {
        color: theme.colors.accent,
      },
    },
    y: {
      grid: {
        color: theme.colors.accent,
      },
      ticks: {
        color: theme.colors.fontColor,
        font: {
          weight: "bold",
          family: "Victor Mono",
        },
      },
    },
  },
};

export function chartOptions(titleText: string): ChartOptions<"line"> {
  // This might be a bad idea to reuse the same object, but it's fine for now.
  defaultChartOptions.plugins.title.text = titleText;
  return defaultChartOptions;
}

export function chartData(
  labels: string[],
  wired: number[],
  wireless: number[],
) {
  return {
    labels,
    datasets: [
      {
        label: "Wired",
        data: wired,
        borderColor: theme.colors.yellow,
        backgroundColor: theme.colors.transYellow,
      },
      {
        label: "Wireless",
        data: wireless,
        borderColor: theme.colors.blue,
        backgroundColor: theme.colors.transBlue,
      },
    ],
  };
}

export default function Chart({ page }: { page: number }) {
  const [title, setTitle] = useState("");
  const [data, setData] = useState<ChartData<"line">>(null);

  useEffect(() => {
    window.electron.getRecordPage(page, 12).then((record) => {
      setTitle(record.dateRangeLabel);
      setData(
        chartData(record.labels, record.wiredCounts, record.wirelessCounts),
      );
    });
  }, [page]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return <Line options={chartOptions(title)} data={data} />;
}
