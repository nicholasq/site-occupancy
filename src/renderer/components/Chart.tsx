import React from "react";
import type { ChartOptions, ChartData } from "chart.js";
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

export const options: ChartOptions<"line"> = {
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
      text: "Device Count Per Building - 7/27/2023 - 7/27/2023",
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

export default function Chart({ data }: { data: ChartData<"line"> }) {
  return <Line options={options} data={data} />;
}
