import React, { useEffect, useState } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input } from "antd";
import styled from "styled-components";

import { useGetCryptosQuery } from "../services/cryptoApi";
import Loader from "./Loader";

//dummy data
import { dummyCryptos } from "./dummyCryptos";

const Cryptocurrencies = ({ simplified, scrollNav }) => {
  const count = simplified ? 10 : 100;
  //COMMENTED OUT API CALL
  const { data: cryptosList, isFetching } = useGetCryptosQuery(100);
  scrollNav = false;
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
    <CryptoCurrenciesWrap id="coins">
      {!simplified && (
        <Search>
          <input
            placeholder="Search Cryptocurrencies..."
            onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
          />
        </Search>
      )}

      {cryptos?.map((currency) => (
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
  );
};

export default Cryptocurrencies;
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
  padding: 8rem 0;
  background: black;
`;

export const Search = styled.div`
  width: 100%;

  display: flex;
  padding: 2rem;
  justify-content: center;

  input {
    border: 3px solid #01bf71;
    border-radius:10px;
    outline: none !important;
    padding: 10px 30px;
    background: #121212;
    color: white;

    :focus { 
    outline: none !important;
  
  }
`;
