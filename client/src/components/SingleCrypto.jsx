import React, { useEffect, useState } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input } from "antd";

import styled from "styled-components";
import { useGetCryptosQuery } from "../services/cryptoApi";
import Loader from "./Loader";

//dummy data
import { dummyCryptos } from "./dummyCryptos";

const SingleCrypto = () => {
  //COMMENTED OUT API CALL
  const { data: cryptosList, isFetching } = useGetCryptosQuery(4);
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

  return (
    <>
      <CryptoCurrenciesWrap>
        {cryptos?.slice(1, 2).map((currency) => (
          <div key={currency.name}>
            <img className="crypto-image" src={currency.iconUrl} />
            <div className="image-detail">
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
          </div>
        ))}
      </CryptoCurrenciesWrap>
    </>
  );
};

export default SingleCrypto;

export const CryptoCurrenciesWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: auto;
  .crypto-image {
    width: 100%;
  }

  .image-detail {
    position: absolute;
    right: 25%;
    opacity: 0.9;
    background: #121212;
    padding: 1rem;
    margin-top: -20rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
    font-size: 1rem;
    color: white;
    border: 5px solid #01bf71;
    border-radius: 10px;
    em {
      color: #01bf71;
      font-style: normal;
    }
  }
`;
