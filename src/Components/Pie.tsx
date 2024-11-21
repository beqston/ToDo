import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale } from 'chart.js';
import useChartjs from '../hooks/useChartjs';

ChartJS.register(ArcElement, Title, Tooltip, Legend, CategoryScale, LinearScale);

const PieChart = () => {
  const {alltodoLengtth, inProgress, done, stuck} = useChartjs();

  const data = {
    labels: ['Your Activities', 'Processing Tasks', 'Cancelled Tasks', 'Done Tasks', 'Waiting to do'],
    datasets: [
      {
        label: 'My Pie Chart',
        data: [alltodoLengtth, inProgress, done, stuck],  
        backgroundColor: [
          '#00A9D7',
          '#FFA400',
          '#3A8DDE',
          '#80BC00',
          '#6E7C7C',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: '',
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem: any) {
            return tooltipItem.label + ': ' + tooltipItem.raw + '%';
          },
        },
      },
    },
  };

  return <Pie data={data} options={options} />;
};
export default PieChart;