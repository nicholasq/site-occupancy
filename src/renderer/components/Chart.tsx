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
import { colors } from "../constants";

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
        color: colors.fontColor,
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
      color: colors.fontColor,
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
        color: colors.fontColor,
        font: {
          weight: "bold",
          family: "Victor Mono",
        },
      },
      grid: {
        color: colors.accent,
      },
    },
    y: {
      grid: {
        color: colors.accent,
      },
      ticks: {
        color: colors.fontColor,
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
