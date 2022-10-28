import React from "react";
import { Button, ExtButton } from "../ButtonElement";
import SendEth from "../SendEth";
import ConnectWallet from "../ConnectWallet";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
} from "./SendSectionElements";

const SendSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
  dark2,
  to,
  samePageLink,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id="send">
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <Heading lightText={true}>Hello There.</Heading>
                <TopLine>Let's get started, shall we?</TopLine>
                <ConnectWallet />
              </TextWrapper>
            </Column1>
            <Column2>
              <TextWrapper>
                <SendEth />
              </TextWrapper>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default SendSection;
