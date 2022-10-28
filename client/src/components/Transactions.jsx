import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { TransactionContext } from "../context/TransactionContext";
import { shortenAddress } from "../utils/shortenAddress";

const Transactions = () => {
  const { currentAccount, transactions, activeGallery } =
    useContext(TransactionContext);
  const TransactionCard = ({
    addressTo,
    addressFrom,
    timestamp,
    message,
    keyword,
    amount,

    url,
  }) => {
    //calls our useFetch custom hook - gifUrl is equal to the API endpoint we created in our useFetch hook
    //const gifUrl = useFetch({ keyword });

    return (
      <Card>
        <img
          src={keyword}
          //    src={gifUrl || url}
          alt=""
          className="w-full h-64 2x:h-96 rounded-md shadow-lg object-cover"
        />
        <div>
          <TransactionInfo>
            <div className="from-and-to">
              <a
                href={`https://ropsten.etherscan.io/address/${addressFrom}`}
                target="_blank"
                rel="noreferrer"
              >
                <p>
                  <span className="green">From: </span>
                  {shortenAddress(addressFrom)}
                </p>
              </a>
              <a
                href={`https://ropsten.etherscan.io/address/${addressTo}`}
                target="_blank"
                rel="noreferrer"
              >
                <p>
                  <span className="green">To:</span> {shortenAddress(addressTo)}
                </p>
              </a>
            </div>
            <div className="amount">
              <h3> {amount} ETH</h3>
            </div>
            {message && (
              <div className="message">
                <p>
                  <span className="green">Message:</span> {message}
                </p>
              </div>
            )}
          </TransactionInfo>
          <Timestamp>
            <p>{timestamp}</p>
          </Timestamp>
        </div>
      </Card>
    );
  };
  return (
    <TransactionContainer id="send">
      <div className="flex flex-col md:p-12 py-12 px-4">
        {currentAccount ? (
          <h3 className="text-white text-3xl text-center my-2">
            {!activeGallery ? (
              <div className="transactions-title">
                <Button
                  onClick={() => {
                    window.location.reload();
                  }}
                >
                  View your transactions
                </Button>
              </div>
            ) : (
              <div className="transactions-title">
                <h2>Here's Your Transactions.</h2>
                <Subtitle>Look at all that lovely stuff.</Subtitle>
              </div>
            )}
          </h3>
        ) : (
          ""
        )}

        <div className="flex flex-wrap justify-center items-center mt-10">
          {transactions.reverse().map((transaction, i) => (
            <TransactionCard key={i} {...transaction} />
          ))}
        </div>
      </div>
    </TransactionContainer>
  );
};

export default Transactions;

export const Card = styled.div`
  display: flex;
  background: red;
  flex-direction: column;
  width: 500px;
  flex-wrap: wrap;
  margin: 2rem;
  padding: 1rem;

  border-radius: 10px;
  background: #121212;

  @media screen and (max-width: 768px) {
  }
`;

export const TransactionContainer = styled.div`
  background: #010606;
  .transactions-title {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  h2 {
    color: white;
    font-weight: bold;
  }
`;

const TransactionInfo = styled.div`
  .green {
    color: #01bf71;
  }
  .from-and-to {
    display: flex;
    justify-content: space-between;

    p {
      color: white;
      font-weight: bold;
      padding: 0.5rem 1rem;
      font-size: 0.8rem;
    }
  }
  .amount {
    h3 {
      display: flex;
      color: white;
      font-size: 1.5rem;
      font-weight: bold;
      justify-content: center;
    }
  }
  .message {
    color: white;
    font-weight: bold;
  }
`;

const Timestamp = styled.div`
  display: flex;
  justify-content: center;
  color: white;
  font-weight: bold;
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  font-weight: bold;
  color: #01bf71;
`;
export const Button = styled.button`
  padding: 0.7rem;
  font-size: 1rem;
  background: #01bf71;
  border: 3px solid #01bf71;
  border-radius: 10px;
  font-weight: bold;
  transition: all 0.2s ease-in-out;
  :hover {
    border: 3px solid #01bf71;
    background: transparent;
  }
`;
