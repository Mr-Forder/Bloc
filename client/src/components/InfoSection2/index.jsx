import React from "react";
import { Button, ExtButton } from "../ButtonElement";
import styled from "styled-components";

import Lottie from "lottie-react";
import Tutorial from "../../images/anims/tutorial.json";
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
  Parad,
  BtnWrap,
  TutWrap,
  Img,
} from "../InfoSection/InfoSectionElements";

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
      <InfoContainer lightBg={lightBg} id="info2">
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <Heading lightText={lightText}>A personal touch.</Heading>

                <Subtitle darkText={darkText}>
                  NFTs are shit (
                  <span className="green">
                    <a href="https://antsstyle.medium.com/why-nfts-are-bad-the-long-version-2c16dae145e2">
                      here's why
                    </a>
                  </span>
                  ).
                </Subtitle>
                <Parad>
                  So we thought we'd find a simpler way to send and receive
                  images that will live in your wallet on the blockchain
                  forever. Simply upload one along with your transaction (or
                  just paste in a url), and voila! It's that simple.
                </Parad>
                <BtnWrap>
                  {samePageLink ? (
                    <Button
                      to={to}
                      smooth="true"
                      duration={500}
                      spy={true}
                      exact="true"
                      primary={1}
                      dark={dark ? 1 : 0}
                      dark2={dark2 ? 1 : 0}
                    >
                      <strong>{buttonLabel}</strong>
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
              <TutWrap>
                <Lottie
                  animationData={Tutorial}
                  loop={true}
                  className="tutorial"
                />
              </TutWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
