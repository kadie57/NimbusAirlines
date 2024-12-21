import { memo, useEffect } from "react";
import Chart from "chart.js/auto";
import "./style.css";
const Dashboard = () => {
  useEffect(() => {
    const fetchAndCreateChart = async (
      endpoint,
      chartId,
      chartType = "line"
    ) => {
      try {
        const response = await fetch(`http://54.200.166.229/${endpoint}`);
        const data = await response.json();

        let labels, totals;

        if (endpoint === "total_seats") {
          const seatCounts = {};
          data.forEach((seat) => {
            const key = `${seat.departure} to ${seat.destination}`;
            seatCounts[key] = (seatCounts[key] || 0) + seat.totalBookedSeats;
          });
          labels = Object.keys(seatCounts);
          totals = Object.values(seatCounts);
        } else {
          labels = data.map((item) => {
            switch (endpoint) {
              case "month_stats":
                return item.month_year;
              case "week_stats":
                return item.week_start;
              case "daily_stats":
                return item.booking_date;
              default:
                return "";
            }
          });
          totals = data.map((item) => item.total_tickets);
        }

        const ctx = document.getElementById(chartId).getContext("2d");

        const chartConfig = {
          type: chartType,
          data: {
            labels: labels,
            datasets: [
              {
                label:
                  chartType === "pie" ? "Total Booked Seats" : "Total Tickets",
                data: totals,
                ...(chartType === "line"
                  ? {
                      borderColor: "rgba(75, 192, 192, 1)",
                      borderWidth: 2,
                      fill: false,
                    }
                  : {
                      backgroundColor: [
                        "rgba(255, 99, 132, 0.2)",
                        "rgba(54, 162, 235, 0.2)",
                        "rgba(255, 206, 86, 0.2)",
                        "rgba(75, 192, 192, 0.2)",
                        "rgba(153, 102, 255, 0.2)",
                        "rgba(255, 159, 64, 0.2)",
                      ],
                      borderColor: [
                        "rgba(255, 99, 132, 1)",
                        "rgba(54, 162, 235, 1)",
                        "rgba(255, 206, 86, 1)",
                        "rgba(75, 192, 192, 1)",
                        "rgba(153, 102, 255, 1)",
                        "rgba(255, 159, 64, 1)",
                      ],
                      borderWidth: 1,
                    }),
              },
            ],
          },
          options: {
            responsive: true,
            ...(chartType === "line"
              ? {
                  scales: {
                    y: {
                      beginAtZero: true,
                    },
                  },
                }
              : {
                  plugins: {
                    legend: {
                      position: "top",
                    },
                    title: {
                      display: true,
                      text: "Most Booked Flights (Departure to Destination)",
                    },
                  },
                }),
          },
        };

        new Chart(ctx, chartConfig);
      } catch (error) {
        console.error(`Error fetching ${endpoint} data:`, error);
      }
    };

    // Create all charts
    fetchAndCreateChart("month_stats", "monthChart");
    fetchAndCreateChart("week_stats", "weekChart");
    fetchAndCreateChart("daily_stats", "dayChart");

    // Cleanup function to destroy charts on component unmount
    return () => {
      Object.values(Chart.instances).forEach((instance) => {
        instance.destroy();
      });
    };
  }, []);

  return (
    <div className="ticket-stats-container">
      <div className="chart-container">
        <div className="chart">
          <h2>Thống kê số vé đặt theo tháng</h2>
          <canvas id="monthChart" width="300" height="200" />
        </div>
        <div className="chart">
          <h2>Thống kê số vé đặt theo tuần</h2>
          <canvas id="weekChart" width="300" height="200" />
        </div>
        <div className="chart">
          <h2>Thống kê số vé đặt trong ngày</h2>
          <canvas id="dayChart" width="300" height="200" />
        </div>
      </div>
    </div>
  );
};

export default memo(Dashboard);
