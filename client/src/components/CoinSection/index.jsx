import React from "react";
import { Button, ExtButton } from "../ButtonElement";

import SingleCrypto from "../SingleCrypto";
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
  Para,
} from "../InfoSection/InfoSectionElements";

const CoinSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,

  buttonLabel,

  primary,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <Heading lightText={lightText}>{headline}</Heading>
                <TopLine>Concise 7-day coin metrics</TopLine>
                <Subtitle darkText={darkText}>
                  Monitor the market without any fuss.
                </Subtitle>
                <Para>
                  See the latest 7-day metrics for over 100 coins in order of
                  overall perfomance, all in once place and at a glance.
                </Para>
                <BtnWrap>
                  <Button
                    to="currencies"
                    smooth="true"
                    duration={500}
                    spy={true}
                    exact="true"
                    primary={primary ? 1 : 0}
                    dark={1}
                    dark2={1}
                  >
                    <strong>{buttonLabel}</strong>
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <TextWrapper>
                <SingleCrypto />
              </TextWrapper>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default CoinSection;
