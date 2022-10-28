import React, { useState } from "react";
import HTMLReactParser from "html-react-parser";
import { useParams } from "react-router-dom";
import millify from "millify";
import { animateScroll as scroll } from "react-scroll";
import { Col, Row, Typography, Select } from "antd";
import {
  MoneyCollectOutlined,
  DollarCircleOutlined,
  FundOutlined,
  ExclamationCircleOutlined,
  StopOutlined,
  TrophyOutlined,
  CheckOutlined,
  NumberOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";

import {
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
} from "../services/cryptoApi";
import Loader from "./Loader";
import LineChart from "./LineChart";
import styled from "styled-components";
import dummyDetail from "../components/dummyDetail";
import dummyHistory from "../components/dummyHistory";
import { useEffect } from "react";
import Lottie from "lottie-react";
import SendAnim from "../images/anims/send.json";
const { Title, Text } = Typography;
const { Option } = Select;

const CryptoDetails = () => {
  const { coinId } = useParams();
  const [timeperiod, setTimeperiod] = useState("7d");
  const { data, isFetching } = useGetCryptoDetailsQuery(coinId);
  const { data: coinHistory } = useGetCryptoHistoryQuery({
    coinId,
    timeperiod,
  });
  const cryptoDetails = data?.data?.coin;

  if (isFetching)
    return (
      <div className="loading">
        <Lottie animationData={SendAnim} loop={true} />
      </div>
    );

  const time = ["3h", "24h", "7d", "30d", "1y", "3m", "3y", "5y"];

  const stats = [
    {
      title: "Price to USD",
      value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`,
      icon: <DollarCircleOutlined />,
    },
    { title: "Rank", value: cryptoDetails?.rank, icon: <NumberOutlined /> },
    {
      title: "Change",
      value: `${coinHistory?.data?.change}%`,
      icon: <ThunderboltOutlined />,
    },
    {
      title: "Market Cap",
      value: `$ ${
        cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)
      }`,
      icon: <DollarCircleOutlined />,
    },
    {
      title: "All-time-high(daily avg.)",
      value: `$ ${
        cryptoDetails?.allTimeHigh?.price &&
        millify(cryptoDetails?.allTimeHigh?.price)
      }`,
      icon: <TrophyOutlined />,
    },
  ];

  const genericStats = [
    {
      title: "Number Of Markets",
      value: cryptoDetails?.numberOfMarkets,
      icon: <FundOutlined />,
    },
    {
      title: "Number Of Exchanges",
      value: cryptoDetails?.numberOfExchanges,
      icon: <MoneyCollectOutlined />,
    },
    {
      title: "Approved Supply",
      value: cryptoDetails?.supply?.confirmed ? (
        <CheckOutlined />
      ) : (
        <StopOutlined />
      ),
      icon: <ExclamationCircleOutlined />,
    },
    {
      title: "Total Supply",
      value: `$ ${
        cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)
      }`,
      icon: <ExclamationCircleOutlined />,
    },
    {
      title: "Circulating Supply",
      value: `$ ${
        cryptoDetails?.supply?.circulating &&
        millify(cryptoDetails?.supply?.circulating)
      }`,
      icon: <ExclamationCircleOutlined />,
    },
  ];

  if (!isFetching) scroll.scrollToTop();
  return (
    <DetailContainer>
      <DetailHeader>
        <img className="crypto-image" src={cryptoDetails.iconUrl} />
        <div className="name">
          <h1>{cryptoDetails?.name}</h1>
          <p>Overview and Stats.</p>
        </div>
      </DetailHeader>
      <Stats>
        <StatsContainer>
          <h3 className="stat-heading">Base Value Statistics</h3>
          {stats.map(({ icon, title, value }) => (
            <StatsCard key={title}>
              <Col className="stat-key">
                <Text className="icon">{icon}</Text>
                <Text className="title">{title}</Text>
              </Col>
              <Text className="stat-value">{value}</Text>
            </StatsCard>
          ))}
        </StatsContainer>

        <StatsContainer>
          <h3 className="stat-heading"> Market & Circulation Data</h3>
          {genericStats.map(({ icon, title, value }) => (
            <StatsCard key={title}>
              <Col className="stat-key">
                <Text className="icon">{icon}</Text>
                <Text className="title">{title} </Text>
              </Col>
              <Text className="stat-value">{value}</Text>
            </StatsCard>
          ))}
        </StatsContainer>
      </Stats>
      <ChartContainer>
        <LineChart
          coinHistory={coinHistory}
          currentPrice={millify(cryptoDetails?.price)}
          coinName={cryptoDetails?.name}
        />
      </ChartContainer>
      <FurtherStats>
        <DescriptionContainer>
          <h3>{cryptoDetails?.name} 101</h3>
          {HTMLReactParser(cryptoDetails.description)}
        </DescriptionContainer>

        <LinksContainer>
          <h3>Links</h3>
          {cryptoDetails.links?.map((link) => (
            <a href={link.url} target="_blank" rel="noreferrer" key={link.url}>
              {link.name}
            </a>
          ))}
        </LinksContainer>
      </FurtherStats>
    </DetailContainer>
  );
};

export default CryptoDetails;

export const DetailContainer = styled.div`
  background: black;
  padding: 3rem;
  @media screen and (max-width: 900px) {
    padding: 0.5rem;
  }
`;

export const DetailHeader = styled.div`
  display: flex;
  justify-content: center;
  margin: 4rem 1rem 0rem 1rem;
  .crypto-image {
    width: 70px;
  }
  .name h1 {
    font-size: 3rem;
    font-weight: bold;
    display: flex;
    margin: 0.2rem 1rem 0rem 1rem;
    color: white;
  }

  p {
    color: white;
    padding-left: 1.3rem;
  }
  @media screen and (max-width: 900px) {
  }
`;

export const Stats = styled.div`
  display: flex;
  padding: 1rem;
  border-radius: 10px;
  justify-content: space-evenly;
  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

export const FurtherStats = styled.div`
  display: flex;
  justify-content: center;

  border-radius: 10px;
  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
  h3 {
    color: #01bf71;
    font-weight: bold;
  }
`;

export const StatsContainer = styled.div`
  max-height: 20rem;
  padding: 1rem;
  border-radius: 10px;
  background: #121212;

  width: 100%;
  justify-content: space-between;
  margin: 0.5rem;
  @media screen and (max-width: 768px) {
    margin: 0rem 0rem 1rem 0rem;
  }
  .stat-heading {
    color: #01bf71;
    font-weight: bold;
    padding-left: 5px;
  }
`;

export const StatsCard = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1rem;

  @media screen and (max-width: 900px) {
    width: 90%;
    font-size: 0.8rem;
  }

  .stat-key {
    padding: 0.5rem 0rem;
    color: white;
  }

  .icon {
    margin-bottom: 0.5rem;
    padding: 0.5rem 1rem 0.5rem 0.5rem;
    color: #01bf71;
    font-size: 1.2rem;
  }

  .title {
    color: white;
    font-weight: bold;
  }
  .stat-value {
    padding: 0.8rem 0rem;
    color: white;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border-radius: 10px;
  background: #121212;
  width: 50%;
  margin: 1.3rem;
  h3 {
    font-size: 1.2rem;
  }
  a {
    color: white;
    padding: 1rem 0rem;
    font-weight: bold;
    :hover {
      color: #bd257e !important;
    }
  }
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

export const DescriptionContainer = styled.div`
  padding: 1rem;
  margin: 1rem;
  border-radius: 10px;
  background: #121212;
  color: white;
  a {
    color: #bd257e;
    font-weight: bold;
  }
`;

export const ChartContainer = styled.div`
  padding: 1rem;
  border-radius: 10px;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(21, 21, 21, 1) 84%
  );
  margin: 0rem 1.5rem 0rem 1.5rem;

  .stat-heading {
    color: #01bf71;
    font-weight: bold;
    padding-left: 5px;
  }
`;
