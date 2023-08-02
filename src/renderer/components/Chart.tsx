import React, { useContext } from "react";
import type { ChartOptions } from "chart.js";
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
import { ChartContext } from "../context/ChartContext";

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

function chartOptions(titleText: string): ChartOptions<"line"> {
  // This might be a bad idea to reuse the same object, but it's fine for now.
  // @ts-ignore for whatever reason, ts says that title is a boolean, but it's not.
  defaultChartOptions.plugins.title.text = titleText;
  return defaultChartOptions;
}

function chartData(labels: string[], wired: number[], wireless: number[]) {
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

export default function Chart() {
  const { recordPage, pageNumber, locationId } = useContext(ChartContext);

  if (!recordPage) {
    return <div>Loading...</div>;
  }

  const data = chartData(
    recordPage.labels,
    recordPage.wiredCounts,
    recordPage.wirelessCounts,
  );
  const title = recordPage.dateRangeLabel;

  return <Line options={chartOptions(title)} data={data} />;
}
