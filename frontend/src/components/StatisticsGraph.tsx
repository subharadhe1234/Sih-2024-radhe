// StatisticsGraph.jsx
import { Line } from 'react-chartjs-2';

const StatisticsGraph = ({ data }: any) => {
  const chartData = {
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datasets: [
      {
        label: 'This Week',
        data: data.thisWeek,
        borderColor: 'blue',
        fill: false,
      },
      {
        label: 'Last Week',
        data: data.lastWeek,
        borderColor: 'green',
        fill: false,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="bg-white shadow-lg p-4 rounded-md">
      <h3 className="text-xl font-semibold mb-4">Working Hours</h3>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default StatisticsGraph;
