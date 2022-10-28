import React, { useEffect, useState } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input } from "antd";

import styled from "styled-components";
import { useGetCryptosQuery } from "../services/cryptoApi";
import Loader from "./Loader";
import { Button, ExtButton } from "./ButtonElement";
//dummy data
import { dummyCryptos } from "./dummyCryptos";

const SimpleCryptocurrencies = ({ samePageLink }) => {
  //COMMENTED OUT API CALL
  const { data: cryptosList, isFetching } = useGetCryptosQuery(8);
  const [cryptos, setCryptos] = useState();
  const [searchTerm, setSearchTerm] = useState("");

  //COMMENTED USEEFFECT
  useEffect(() => {
    setCryptos(cryptosList?.data?.coins);
    const filteredData = cryptosList?.data?.coins.filter((item) =>
      item.name.toLowerCase().includes(searchTerm)
    );
    setCryptos(filteredData);
  }, [cryptosList, searchTerm]);

  //TEMP useeffect for dummy data
  // useEffect(() => {
  //   setCryptos(dummyCryptos);
  //   const filteredData = dummyCryptos.filter((item) =>
  //     item.name.toLowerCase().includes(searchTerm)
  //   );
  //   setCryptos(filteredData);
  // }, [dummyCryptos, searchTerm]);

  // if (isFetching) return <Loader />;
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };

  return (
    <>
      <CryptoCurrenciesWrap id="currencies">
        {cryptos?.slice(0, 8).map((currency) => (
          <Link key={currency.uuid} to={`/crypto/${currency.uuid}`}>
            <DarkCoinCard key={currency.uuid}>
              <div className="info">
                <p>
                  <strong>{currency.name}</strong>
                </p>
                <p>
                  <strong>
                    <em>Price: </em>
                  </strong>
                  {millify(currency.price)}
                </p>
                <p>
                  <strong>
                    <em>Market Cap: </em>
                  </strong>
                  {millify(currency.marketCap)}
                </p>
                <p>
                  <strong>
                    <em>Daily Change: </em>
                  </strong>
                  {currency.change}%
                </p>
              </div>
              <img className="crypto-image" src={currency.iconUrl} />
            </DarkCoinCard>
          </Link>
        ))}
      </CryptoCurrenciesWrap>
      <BtnWrap>
        <ExtButton primary={1} to={"/cryptocurrencies"}>
          <strong>See all the Coins</strong>
        </ExtButton>
      </BtnWrap>
    </>
  );
};

export default SimpleCryptocurrencies;
export const DarkCoinCard = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid white;
  border-radius: 10px;
  background: #121212;
  width: 400px;
  height: 250px;
  margin: 1rem;
  transition: all 0.2s ease-in-out;
  :hover {
    transform: scale(1.05);
  }
  img {
    width: 155px;
    margin: auto;
  }
  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
    font-size: 1rem;
    color: white;
    width: 55%;
    em {
      color: #01bf71;
      font-style: normal;
    }
  }
`;
export const CryptoCurrenciesWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 1rem 0rem 2rem 0rem;
`;
export const CoinH1 = styled.h1`
  color: black;
  font-size: 36px;
  text-align: center;
  font-weight: 600;
  padding: 3rem;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  @media screen and (max-width: 488px) {
    font-size: 32px;
  }
`;
export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: #010606;
`;
export const ContentText = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;

  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 488px) {
  }
`;
export const HeroBtnWrapper = styled.div`
  padding: 3rem 0rem 5rem 0rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
  padding: 0rem 0rem 5rem 0rem;
`;
