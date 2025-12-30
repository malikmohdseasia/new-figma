import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const BarChart = ({
  data,
  categories,
  height = 150,
  background, // can be gradient string
  type,
  tickInterval,
  max,
  shadow, // optional box-shadow prop
}) => {
  const options = {
    chart: {
      type,
      height,
      backgroundColor: "transparent", // keep chart background transparent
      borderRadius: 16,
    },

    title: { text: null },

    xAxis: {
      categories,
      lineColor: "transparent",
      tickLength: 0,
     
      labels: {
        style: {
          color: "#FFFFFF",
          fontSize: "14px",
          fontWeight: 400,
        },
      },
    },

    yAxis: {
      tickInterval,
      min: 0,
      max,
      gridLineDashStyle: "Dash",
      gridLineColor: "#ffffff66",
      title: { text: null },
      labels: {
        style: {
          color: "#ffffffb3",
        },
      },
    },

    plotOptions: {
      line: {
        lineWidth: 3,
        marker: {
          enabled: true,
          radius: 5,
        },
      },
    },

    legend: { enabled: false },

    series: [
      {
        data,
        color: "#ffffff",
      },
    ],

    credits: { enabled: false },
  };

  return (
    <div
      className="rounded-2xl p-4"
      style={{
        background, // can pass linear-gradient string here
        boxShadow: shadow || "0px 2px 6px 0px #DC22655C",
      }}
    >
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default BarChart;
