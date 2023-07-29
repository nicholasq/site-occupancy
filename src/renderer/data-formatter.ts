import { theme } from "./constants";

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
        data: Array.from({ length: 12 }, () => Math.floor(Math.random() * 901)),
        borderColor: theme.colors.yellow,
        backgroundColor: theme.colors.transYellow,
      },
      {
        label: "Wireless",
        data: Array.from({ length: 12 }, () => Math.floor(Math.random() * 901)),
        borderColor: theme.colors.blue,
        backgroundColor: theme.colors.transBlue,
      },
    ],
  };
}
