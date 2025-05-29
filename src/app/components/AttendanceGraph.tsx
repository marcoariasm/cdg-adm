import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  TimeScale,
  CategoryScale,
  Tooltip,
} from "chart.js";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  TimeScale,
  CategoryScale,
  Tooltip
);

export default function AttendanceGraph({
  datos,
}: {
  datos: { fecha: string; asistentes: number }[];
}) {
  if (!datos || datos.length === 0) return;
  console.log("Datos para graficar:", datos);
  const labels = datos.map((d) => d.fecha);
  const values = datos.map((d) => d.asistentes);

  const data = {
    labels,
    datasets: [
      {
        data: values,
        borderColor: "#3b82f6",
        tension: 0.4, // suaviza la curva
        pointRadius: 3,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: false },
      tooltip: { enabled: true },
    },
    scales: {
      x: {
        display: true,
        ticks: {
          maxTicksLimit: 7,
          font: { size: 10 },
        },
      },
      y: {
        display: true,
        ticks: {
          precision: 0,
          font: { size: 10 },
        },
      },
    },
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow w-full max-w-3xl">
      <Line data={data} options={options} />
    </div>
  );
}
