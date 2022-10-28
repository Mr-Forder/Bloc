import React, { useState } from "react";
import Video from "../../videos/video4.mp4";
import { Button, ExtButton } from "../ButtonElement";
import { Link as LinkS } from "react-scroll";
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
} from "../InfoSection/InfoSectionElements";
import { HeroContainer, HeroBg, VideoBg } from "./HeroElements";
import Stats from "../Stats";

const HeroSection = (
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
  samePageLink
) => {
  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>

      <InfoWrapper>
        <InfoRow imgStart={imgStart}>
          <Column1>
            <TextWrapper>
              <TopLine>Welcome to Bloc.</TopLine>
              <Heading lightText={1}>
                Let's keep things simple. Zero fees.
              </Heading>

              <Subtitle darkText={0}>
                Crypto can be confusing. It doesn't have to be.
                <Para>
                  Coin
                  <span className="green link">
                    <LinkS
                      to="coins"
                      smooth="true"
                      duration={500}
                      spy={true}
                      exact="true"
                    >
                      {" "}
                      performance metrics
                    </LinkS>
                  </span>{" "}
                  at a glance.{" "}
                  <span className="green link">
                    <LinkS
                      to="send"
                      smooth="true"
                      duration={500}
                      spy={true}
                      exact="true"
                    >
                      Send and receive{" "}
                    </LinkS>
                  </span>
                  with zero fees and add a{" "}
                  <span className="green link">
                    <LinkS
                      to="info2"
                      smooth="true"
                      duration={500}
                      spy={true}
                      exact="true"
                    >
                      personal touch
                    </LinkS>
                  </span>{" "}
                  to every transaction.
                </Para>
              </Subtitle>
              <BtnWrap>
                <Button
                  to="about"
                  smooth="true"
                  duration={500}
                  spy={true}
                  exact="true"
                  primary={1}
                  dark={dark ? 1 : 0}
                  dark2={dark2 ? 1 : 0}
                >
                  <strong> Want to know more?</strong>
                </Button>
              </BtnWrap>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap>
              <Stats />
            </ImgWrap>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </HeroContainer>
  );
};

export default HeroSection;
