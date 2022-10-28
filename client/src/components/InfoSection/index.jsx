import React from "react";
import { Link as LinkS } from "react-scroll";
import { Button, ExtButton } from "../ButtonElement";
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
  Para,
  BtnWrap,
  ImgWrap,
  Img,
} from "./InfoSectionElements";
import walletPic from "../../images/bigWallet.svg";
const InfoSection = ({
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
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <Heading lightText={lightText}>
                  Freedom. Simplicity. A distinct lack of NFTs.
                </Heading>
                <TopLine>{topLine}</TopLine>
                <Subtitle darkText={darkText}>
                  Welcome to Bloc. We focus on making crypto clearer. (And more
                  fun.)
                </Subtitle>
                <Para>
                  Concise coin perfomance metrics. An easy way to send and
                  receive. A By connecting with Bloc, you can send and receive
                  Eth securely, with an{" "}
                  <span className="green link">
                    <LinkS
                      to="info2"
                      smooth="true"
                      duration={500}
                      spy={true}
                      exact="true"
                    >
                      {" "}
                      extra special{" "}
                    </LinkS>
                  </span>
                  touch...
                </Para>
                <BtnWrap>
                  {samePageLink ? (
                    <Button
                      to="info2"
                      smooth="true"
                      duration={500}
                      spy={true}
                      exact="true"
                      primary={1}
                      dark={dark ? 1 : 0}
                      dark2={dark2 ? 1 : 0}
                    >
                      <strong>a personal touch, you say?</strong>
                    </Button>
                  ) : (
                    <ExtButton
                      to={to}
                      smooth="true"
                      duration={500}
                      spy={true}
                      exact="true"
                      primary={0}
                      dark={dark ? 1 : 0}
                      dark2={dark2 ? 1 : 0}
                    >
                      {buttonLabel}
                    </ExtButton>
                  )}
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <div className="bounce spring">
                  <Img src={walletPic} alt={alt} />
                </div>
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
