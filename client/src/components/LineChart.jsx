import React from "react";
import styled from "styled-components";
import { Line } from "react-chartjs-2";

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  const coinPrice = [];
  const coinTimestamp = [];

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinPrice.push(coinHistory?.data?.history[i].price);
  }

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinTimestamp.push(
      // new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString()
      ""
    );
  }
  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: "Price In USD",
        data: coinPrice,
        fill: true,
        backgroundColor: "#01BF71",
        borderColor: "#01BF71",
        borderWidth: 1,
        pointRadius: 0,
        stepped: true,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <>
      <ChartHeader>
        <h2>7 day performance at a glance for {coinName}</h2>
        <div className="price-container">
          <div className="info">
            <h3 className="white">Change: {coinHistory?.data?.change}</h3>
          </div>
          <div className="info">
            <h3 className="white">
              Current {coinName} Price: $ {currentPrice}
            </h3>
          </div>
        </div>
      </ChartHeader>
      <Line data={data} options={options} />
    </>
  );
};

export default LineChart;
export const ChartHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem;

  h2 {
    color: #01bf71;
    font-weight: bold;
    padding-left: 5px;
    font-size: 1.2rem;
    @media screen and (max-width: 900px) {
      font-size: 1rem;
      text-align: center;
    }
  }

  h3 {
    color: #01bf71;
    font-weight: bold;
    padding-left: 5px;
    font-size: 1rem;
    @media screen and (max-width: 900px) {
      font-size: 0.8rem;
    }
  }

  .white {
    color: white;
  }
  .info {
    font-size: 1rem;
  }

  .price-container {
    padding-top: 0.5rem;
  }
`;
