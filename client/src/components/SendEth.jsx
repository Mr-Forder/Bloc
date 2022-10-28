import React, { useContext, useState, useEffect } from "react";
import { Link as LinkS } from "react-scroll";
import Lottie from "lottie-react";
import SendAnim from "../images/anims/send.json";
import styled from "styled-components";
//import from context provider
import { TransactionContext } from "../context/TransactionContext";

//upload
import Upload from "./Img_upload/Upload";

//custom input component - we can just repeat this in jsx, changing out the props as necessary
const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="input"
  />
);
const SendEth = () => {
  //grab our transaction context (imported above)
  const {
    currentAccount,
    connectWallet,
    handleChange,
    handleImgChange,
    sendTransaction,
    formData,
    setformData,
    isLoading,
    success,
  } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;

    e.preventDefault();

    if (!addressTo || !amount || !keyword || !message) return;

    sendTransaction();
  };

  const [btnDisabled, setBtnDisabled] = useState(false);

  const [uploadedImg, setUploadedImg] = useState(null);

  //passing our image url backwards from upload component, then setting into state
  const childToParent = (childdata) => {
    console.log(`Child data received - ${childdata[0].secure_url}`);
    setUploadedImg(childdata[0].secure_url);
  };
  //callback when uploadImg changes (when an image is set into its state)
  useEffect(() => {
    // console.log(`Image uploaded - ${uploadedImg}`);
    setformData((prevState) => ({ ...prevState, keyword: uploadedImg }));
  }, [uploadedImg]);

  return (
    <SendWrap>
      <div className="input-div">
        <Input
          placeholder="Address to"
          name="addressTo"
          type="text"
          handleChange={handleChange}
          className="input"
        />
      </div>
      <div className="input-div">
        <Input
          placeholder="Amount (ETH)"
          name="amount"
          type="number"
          handleChange={handleChange}
          className="input"
        />
      </div>

      <div
        className="input-div"
        to="about"
        smooth="true"
        duration={500}
        spy={true}
        exact="true"
      >
        <Uploader style={uploadedImg ? { opacity: 0.5 } : { opacity: 1 }}>
          <Upload childToParent={childToParent} />
        </Uploader>
        <Input
          placeholder={
            uploadedImg ? "Image added! Ready to send." : "Image url"
          }
          name="keyword"
          type="text"
          handleChange={handleChange}
          className="image-input"
        />
      </div>
      <div className="input-div">
        <Input
          placeholder="Message for recipient"
          name="message"
          type="text"
          handleChange={handleChange}
          className="input"
        />
      </div>

      {isLoading ? (
        <>
          <LoadingContainer>
            <div className="anim">
              <Lottie animationData={SendAnim} loop={true} />
            </div>
            <span className="green">Transaction in progress.</span> Please wait.
          </LoadingContainer>
        </>
      ) : (
        <>
          {currentAccount ? (
            <Button className="submit-button" onClick={handleSubmit}>
              Send Now
            </Button>
          ) : (
            <Button
              className="submit-button disabled"
              onMouseEnter={() => {
                setBtnDisabled(true);
              }}
              onMouseLeave={() => {
                setBtnDisabled(false);
              }}
            >
              Send Now
            </Button>
          )}
        </>
      )}
      {success ? (
        <div className="hover-message">
          <span className="green">Success!</span> Transaction complete.
        </div>
      ) : (
        ""
      )}

      {btnDisabled ? (
        <div className="hover-message">
          <span className="green">Connect a wallet</span> to start sending.
        </div>
      ) : (
        ``
      )}
    </SendWrap>
  );
};

export default SendEth;

export const Uploader = styled.div`
  transition: all 0.2s ease-in-out;
  position: absolute;
  margin-left: 310px;
  margin-top: 3px;
  cursor: pointer;
  padding: 2px;
  font-size: 1.2rem;
  z-index: 50;
  max-width: 100%;
  overflow: hidden;
`;

export const Linky = styled(LinkS)``;

export const LoadingContainer = styled.div`
  width: 100%;
  margin-left: 20%;
  .anim {
    width: 60%;
    margin-left: 7%;
  }
`;

export const Button = styled.button`
  margin-top: 5px;
  height: 3rem;
  border: 3px solid #01bf71;
  border-radius: 10px;
  font-weight: bold;
  transition: all 0.2s ease-in-out;
  background: transparent;
  :hover {
    background: #01bf71;
    border: 3px solid #01bf71;
  }
`;

export const SendWrap = styled.div`
display: flex;
flex-direction: column;
align-items: center;
row-gap:15px;
max-width: 550px;

padding-top: 2rem;;
padding-bottom: 60px;
  margin-top: 2rem;

height: 100%;
  .green {
    color: #01bf71;
    font-weight: bold;
  }

  .hover-message{
    position: absolute;
    pointer-events: none;
    margin-top:19rem;
  }
.input-div{
  border: 2px solid white;
    width: 360px;
    height:45px;
    border-radius:10px;
    background: #121212;
    color:white;
    font-weight:bold;

    padding-right:199px;
  
   
  

    .inner-img{
          transition: all 0.2s ease-in-out;
      position: absolute;
      margin-left:365px;
      margin-top: 3px;
      cursor: pointer;
      color:#bd257e;
      padding: 2px;    
      font-size:1.2rem;
      :hover{color: white;}
      z-index:50;
    }

     

    .tooltip{
      position: absolute;}

    .tooltip::before{
      position: absolute;
      content:'';
      top: -0.4em;
      left: -0.5em;
      width: 0;
      height: 0;
      opacity:0;
  }

  .tooltip::after{
      content: attr(data-tooltip);
      position: absolute;
      top: -2.2em;
      left: 0;
      opacity:0;
  }

  .tooltip:hover::before,
  .tooltip:hover::after{
    opacity: 1;
  }

}

.submit-button{
      width: 360px;
    height:45px;
}


.disabled{

 cursor: default;

}








  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */

  
    }
  }




  input[type="number"] {
    -moz-appearance: textfield; /* Firefox */
  }

  input{  border: 2px solid transparent;
    width: 360px;
    height:45px;

    outline: none !important;
    padding: 10px 30px;
    background: transparent;
    color:white;
    font-weight:bold;
 


    :focus { 
    outline: none !important;}


    button {
      color: white;
      border: 1px solid white;
      cursor: pointer;

   
    }
`;
