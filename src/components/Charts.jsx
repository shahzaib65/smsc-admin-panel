import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top'
    },
    title: {
      display: true,
      text: 'Overall Turnover',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Delivered',
      data: [1000,3000, 5000, 7000, 9000, 6000, 4000],
      backgroundColor: 'green',
    },
    {
      label: 'Undelivered',
      data: [3000, 4000, 5000, 1000, 3000, 6000, 9000],
      backgroundColor: 'red',
    },
  ],
};


const OurChart = () => {
  return (
    <Bar options={options} data={data} />
  )
}

export default OurChart