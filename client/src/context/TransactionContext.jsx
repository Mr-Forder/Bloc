import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
//import contract addresss and ABI
import { contractABI, contractAddress } from "../utils/constants";

//create new react context - called TransactionContext
export const TransactionContext = React.createContext();

//Installing metamask createed a new object inside our window object - one that allows us to access the etherium network via it.
const { ethereum } = window;

// Create ethereum contract
const getEthereumContract = () => {
  //create provider, set equal to our ethers package (installed via npm), passing our ethereum window object as argument
  const provider = new ethers.providers.Web3Provider(ethereum);
  //create signer
  const signer = provider.getSigner();
  //create transaction contract - equal to a new ethers contract, passing in our address, ABI, and signer
  const transactionContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  );

  return transactionContract;
};

// new context provider - takes in children as argument and renders them out inside our context provider
//Anything inside this provider will be rendered, and have access to our value object
export const TransactionProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState("");
  //toggle gallery state
  const [activeGallery, setActiveGallery] = useState(false);

  //test url
  const kittyUrl = `https://kb.rspca.org.au/wp-content/uploads/2018/11/kitten-in-bed.jpg`;
  const doggyUrl = null;

  const [formData, setformData] = useState({
    addressTo: "",
    amount: "",
    keyword: "",
    message: "",
  });
  //loading state
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  //transaction count state - default is set to read transaction count from local storage
  const [transactionCount, setTransactionCount] = useState(
    localStorage.getItem("transactionCount")
  );

  //transactions, set when we getAllTransactions
  const [transactions, setTransactions] = useState([]);

  const handleChange = (e, name) => {
    setformData((prevState) => ({ ...prevState, [name]: e.target.value }));
  };

  const getAllTransactions = async () => {
    try {
      //if no ethereum, alert user to install Metamask
      // if (!ethereum) return alert("Please install MetaMask.");
      const transactionsContract = getEthereumContract();
      //getAllTransactions called from our smart contract
      const availableTransactions =
        await transactionsContract.getAllTransactions();
      //structure our transaction data so it's easier to user
      const structuredTransactions = availableTransactions.map(
        (transaction) => ({
          addressTo: transaction.receiver,
          addressFrom: transaction.sender,
          timestamp: new Date(
            transaction.timestamp.toNumber() * 1000
          ).toLocaleString(),
          message: transaction.message,
          keyword: transaction.keyword,
          amount: parseInt(transaction.amount._hex) / 10 ** 18,
        })
      );
      console.log(structuredTransactions);
      setTransactions(structuredTransactions);
    } catch (error) {
      console.log(error);
    }
  };

  //CHECK TO SEE IF A WALLET IS CONNECTED - runs on mount via useEffect
  const checkIfWalletIsConnected = async () => {
    try {
      //if no ethereum, alert user to install Metamask
      // if (!ethereum) return alert("Please install MetaMask.");
      //get accounts
      const accounts = await ethereum.request({ method: "eth_accounts" });
      if (accounts.length) {
        //set current account to first account in accounts array
        setCurrentAccount(accounts[0]);
        //run get all transactions - defined above, just after changeHandler
        getAllTransactions();
      } else {
        console.log("No accounts found.");
      }
      console.log(accounts);
    } catch (error) {
      console.log(error);
      throw new Error("No Etherem Object.");
    }
  };

  //Check if transactions exist, called on mount via useffect, just after we check for connected wallets

  const checkIfTransactionsExist = async () => {
    try {
      //get transaction contract
      const transactionsContract = getEthereumContract();
      //get transaction count
      const transactionsCount =
        await transactionsContract.getTransactionCount();
      //set transaction count into local storage
      window.localStorage.setItem("transactionsCount", transactionsCount);
      setActiveGallery(true);
    } catch (error) {
      console.log(error);
      throw new Error("No Etherem Object.");
    }
  };

  //CONNECT A WALLET - connect wallet submit
  const connectWallet = async () => {
    try {
      // if (!ethereum) return alert("Please install MetaMask.");
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      setCurrentAccount(accounts[0]);

      console.log("account connected");
    } catch (error) {
      console.log(error.message);

      throw new Error("No Etherem Object.");
    }
  };

  //SEND A TRANSACTION - form submit
  const sendTransaction = async () => {
    try {
      if (ethereum) {
        //get form data
        const { addressTo, amount, keyword, message } = formData;
        const transactionsContract = getEthereumContract();
        //parsed amount - actually an Ether utility founction that'll convert our form amount value - parses decimal amount to gwei
        const parsedAmount = ethers.utils.parseEther(amount);
        //SEND ETHEREUM
        await ethereum.request({
          method: "eth_sendTransaction",
          params: [
            {
              from: currentAccount,
              to: addressTo,
              gas: "0x5208", //hexadecimal value, converts to 2100 gwei - online convertor will help here
              value: parsedAmount._hex,
            },
          ],
        });
        //add transaction to blockchain - function from our transactions.sol
        const transactionHash = await transactionsContract.addToBlockchain(
          addressTo,
          parsedAmount,
          message,
          keyword
        );

        setIsLoading(true);
        console.log(`Loading - ${transactionHash.hash}`);
        await transactionHash.wait();
        console.log(`Success - ${transactionHash.hash}`);
        setIsLoading(false);
        setSuccess(true);

        const transactionsCount =
          await transactionsContract.getTransactionCount();

        setTransactionCount(transactionsCount.toNumber());
      } else {
        console.log("No ethereum object");
      }
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }
  };

  //call checkIfWalletIsConnected on component mount
  useEffect(() => {
    checkIfWalletIsConnected();
    checkIfTransactionsExist();
  }, []);

  return (
    <TransactionContext.Provider
      value={{
        connectWallet,
        currentAccount,
        formData,
        setformData,
        transactions,
        isLoading,
        success,
        handleChange,

        sendTransaction,
        activeGallery,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
