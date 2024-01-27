/* eslint-disable @typescript-eslint/no-explicit-any */
import av1 from "../assets/avatars/av1.png";
import av2 from "../assets/avatars/av2.png";
import av3 from "../assets/avatars/av3.png";
import av4 from "../assets/avatars/av4.png";
import av5 from "../assets/avatars/av5.png";

import areaGraph1 from '../assets/charts/Group1.svg'
import areaGraph2 from '../assets/charts/Group2.svg'
import areaGraph3 from '../assets/charts/Group3.svg'
import areaGraph4 from '../assets/charts/Group4.svg'
import { BoxtickIcon, RotateIcon, ShoppingcartIcon, CoinIcon } from "../subcomponents";

export function wait(waitTime: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, waitTime);
  });
}

export const tableHeadings : Array<{column : string}> = [
  {
    column: "Name",
  },
  {
    column: "Date",
  },
  {
    column: "Amount",
  },
  {
    column: "Status",
  },
  {
    column: "Invoice",
  },
];

export const tableData: Array<{
  img:string,
  name: string;
  date: string;
  amount: string;
  status: string;
}> = [
  {
    img: av5,
    name: "Marcus Bergson",
    date: "Nov 15, 2023",
    amount: "$80,000",
    status: "Paid",
  },
  {
    img: av4,
    name: "Jaydon Vaccaro",
    date: "Nov 15, 2023",
    amount: "$150,000",
    status: "Refund",
  },
  {
    img: av3,
    name: "Corey Schleifer",
    date: "Nov 15, 2023",
    amount: "$87,000",
    status: "Paid",
  },
  {
    img: av2,
    name: "Cooper Press",
    date: "Nov 15, 2023",
    amount: "$100,000",
    status: "Refund",
  },
  {
    img: av1,
    name: "Phillip Lubin",
    date: "Nov 15, 2023",
    amount: "$78,000",
    status: "Paid",
  },
];

export const progressData: Array<{
  pName: string;
  progressValue: number;
  dollarAmt: string;
  percent: number;
  hex: string;
}> = [
  {
    pName: "Book Bazaar",
    progressValue: 50,
    dollarAmt: " $2,500,000",
    percent: 15,
    hex: "#6160DC",
  },
  {
    pName: "Artisan Aisle",
    progressValue: 45,
    dollarAmt: "$1,800,000",
    percent: 10,
    hex: "#54C5EB",
  },
  {
    pName: "Toy Troop",
    progressValue: 30,
    dollarAmt: "$1,200,000",
    percent: 8,
    hex: "#FFB74A",
  },
  {
    pName: "XStore",
    progressValue: 30,
    dollarAmt: "$700,000",
    percent: 5,
    hex: "#FF4A55",
  },
];

export const analyticsInfo: Array<{
  areaGraph: string;
  h: string;
  num: string;
  percent: string;
  icon: any;
}> = [
  {
    areaGraph: areaGraph1,
    h: "Total Order",
    num: "350",
    percent: "23.5",
    icon: <BoxtickIcon />,
  },
  {
    areaGraph: areaGraph2,
    h: "Total Refund",
    num: "270",
    percent: "23.5",
    icon: <RotateIcon />,
  },
  {
    areaGraph: areaGraph4,
    h: "Average Sales",
    num: "1567",
    percent: "23.5",
    icon: <ShoppingcartIcon />,
  },
  {
    areaGraph: areaGraph3,
    h: "Total Income",
    num: "$350.000",
    percent: "23.5",
    icon: <CoinIcon />,
  },
];
