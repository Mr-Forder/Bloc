import React, { useContext, useEffect, useState } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import styled from "styled-components";
//import from context provider
import { TransactionContext } from "../context/TransactionContext";
import closedWallet from "../images/closed-wallet.svg";
import openWallet from "../images/open-wallet.svg";
import { shortenAddress } from "../utils/shortenAddress";
import Lottie from "lottie-react";
import closedWalletAnim from "../images/anims/wallet-closed.json";
import openWalletAnim from "../images/anims/wallet-open.json";
//TAILWIND GRID STYLES - GET RID OF THIS SHITE
const companyCommonStyles =
  "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

//custom input component - we can just repeat this in jsx, changing out the props as necessary
const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="inputs my-2 w-full p-2  text-small "
  />
);
const ConnectWallet = () => {
  //grab our transaction context (imported above)
  const {
    currentAccount,
    connectWallet,
    handleChange,
    sendTransaction,
    formData,
    isLoading,
    connectionError,
  } = useContext(TransactionContext);

  const [unlockWalletMessage, setUnlockWalletMessage] = useState(false);
  const walletCheck = () => {
    currentAccount
      ? console.log(currentAccount)
      : console.log("please make sure your wallet is unlocked.");
  };
  const [connectButtonHover, setConnectButtonHover] = useState(false);
  const [connectActive, setConnectActive] = useState(false);

  useEffect(() => {
    currentAccount ? setConnectActive(true) : setConnectActive(false);
  }, [connectWallet]);
  return (
    <ConnectWalletWrap>
      <>
        <div>
          {!connectActive && !currentAccount ? (
            <Subtitle>Connect a wallet to begin.</Subtitle>
          ) : (
            <Subtitle>
              ........................................................................
            </Subtitle>
          )}
        </div>
        <div className="connect-wallet">
          {!connectActive ? (
            <Button
              onClick={() => {
                connectWallet();

                setConnectActive(true);
              }}
              onMouseEnter={() => {
                setConnectButtonHover(true);
              }}
              onMouseLeave={() => {
                setConnectButtonHover(false);
              }}
            >
              Connect a Wallet
            </Button>
          ) : (
            ""
          )}
          <div className="image">
            {connectActive ? (
              <Lottie
                animationData={openWalletAnim}
                className="lottie"
                loop={false}
              />
            ) : (
              <Lottie animationData={closedWalletAnim} className="lottie" />
            )}
          </div>
        </div>

        {connectButtonHover && !connectWallet ? (
          <div className="hover-message">
            <span className="green">Problems connecting?</span> Make sure
            Metamask is unlocked.
          </div>
        ) : (
          ""
        )}
      </>

      {connectActive && currentAccount ? (
        <div className="sub">
          <div className="connected-info">
            <span className="purp">Wallet Connected: </span>
            {shortenAddress(currentAccount)}
          </div>
        </div>
      ) : (
        ""
      )}

      {connectActive && !currentAccount ? (
        <div className="sub">
          <div className="connected-info">
            <span className="purp">Connecting.</span> Continue with Metamask.
            {shortenAddress(currentAccount)}
          </div>
        </div>
      ) : (
        ""
      )}
    </ConnectWalletWrap>
  );
};

export default ConnectWallet;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: #fff;
  @media screen and (max-width: 480px) {
    margin-left: 1rem;
  }
`;

export const ConnectWalletWrap = styled.div`
  .green {
    color: #01bf71;
  }

  .connected-img {
    background: green;
    height: 100px;
    width: 100px;
  }
  .connected-info {
    margin-top: -9.5rem;
    margin-left: 1rem;
    position: absolute;
    font-size: 0.8rem;

    /* border: 1px solid white; */
    height: 40px;
    width: 20rem;
    padding: 0.5rem 0.75rem;
    border-radius: 10px;
    z-index: 50;
    .purp {
      color: #bd257e;
      font-weight: bold;
    }
  }
  .connect-wallet {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 1.5rem;
    height: 5rem;
  }
  .image {
    position: absolute;
    width: 20rem;
    margin-left: 1rem;
    margin-bottom: 1rem;
    pointer-events: none;
  }

  .lottie {
    position: absolute;
    margin-top: -4rem;
    @media screen and (max-width: 480px) {
    }
  }
  .hover-message {
    position: absolute;
    pointer-events: none;
    margin-top: 3rem;
    margin-left: -2.5rem;
    .green {
      color: #01bf71;
      font-weight: bold;
    }
  }
`;
export const Button = styled.button`
  margin-left: -6rem;
  margin-top: 0.8rem;
  font-size: 1.2rem;
  border-radius: 10px;
  font-weight: bold;
  transition: all 0.2s ease-in-out;
  width: 11rem;
  padding: 0.5rem 1rem;
  border: 3px solid #01bf71;
  background: #01bf71;
  :hover {
    background: transparent;
    border: 3px solid #01bf71;
  }
`;
