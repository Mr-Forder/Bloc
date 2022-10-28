import React from "react";
import styled from "styled-components";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";
//api calls
import { useGetCryptosQuery } from "../services/cryptoApi";
import global from "../images/global.svg";
import hours from "../images/24h.svg";
import mcap from "../images/mcap.svg";
import exchanges from "../images/exchanges.svg";
const { Title } = Typography;

const Stats = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;
  if (isFetching) return "Loading";

  //dummy data for stats!
  // const globalStats = {
  //   total: "13116",
  //   total24hVolume: "65658588644",
  //   totalCoins: "13116",
  //   totalExchanges: "170",
  //   totalMarketCap: "2092886163374",
  //   totalMarkets: "25397",
  // };

  return (
    <GlobalStats>
      <SingleStat>
        <div className="img">
          <img src={global} alt="" />
        </div>
        <div className="info">
          <h3>Total Global Cryptocurrencies:</h3>
          <h2>{globalStats.total}</h2>
        </div>
      </SingleStat>
      <SingleStat>
        <div className="img">
          <img src={exchanges} alt="" />
        </div>
        <div className="info">
          <h3>Total Exchanges:</h3>
          <h2>{millify(globalStats.totalExchanges)}</h2>
        </div>
      </SingleStat>

      <SingleStat>
        <div className="img">
          <img src={mcap} alt="" />
        </div>
        <div className="info">
          <h3>Total Market Cap:</h3>
          <h2>{`$${millify(globalStats.totalMarketCap)}`}</h2>
        </div>
      </SingleStat>

      <SingleStat>
        <div className="img">
          <img src={hours} alt="" />
        </div>
        <div className="info">
          <h3>Total 24h Volume:</h3>
          <h2>{`$${millify(globalStats.total24hVolume)}`}</h2>
        </div>
      </SingleStat>
    </GlobalStats>
  );
};

export default Stats;
export const GlobalStats = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  margin: auto;
  margin-bottom: 5rem;

  @media screen and (max-width: 800px) {
    margin: 0 -2rem;

    align-items: center;
  }
`;

export const SingleStat = styled.div`
  width: 150px;
  margin: 1rem 1rem;
  display: flex;
  flex-direction: column;

  .info {
    display: flex;
    flex-direction: column;

    align-items: center;

    margin-top: 0.7rem;
    h2,
    h3 {
      color: white;
    }
    h2 {
      font-size: 1.7rem;
      font-weight: bold;
    }
    h3 {
      font-size: 0.7rem;
      color: #01bf71;
      font-weight: bold;
    }
  }

  .img {
    position: absolute;
    width: 220px;
    height: 100px;
    margin-left: 7rem;
    margin-top: 1rem;
  }
`;
