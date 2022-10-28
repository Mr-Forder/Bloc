import React from "react";
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
  Parad,
  BtnWrap,
  ImgWrap,
  Img,
} from "../InfoSection/InfoSectionElements";
import TransactionIllu from "../../images/transaction-illul.svg";
const TransactionInfo = ({
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
      <InfoContainer lightBg={lightBg} id="trans">
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <Heading lightText={lightText}>
                  Take a look at your transactions
                </Heading>
                <TopLine>Connect with Bloc</TopLine>
                <Subtitle darkText={darkText}>
                  Consider it a perpetual polaroid. An indestructable image. An
                  eternal effigy.
                </Subtitle>
                <Parad>
                  When you send crypto with Bloc, you can gift an image that
                  will live on the Blockchain forever. Connect your wallet to
                  Bloc to see your transactions.
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
              <ImgWrap>
                <div className="bounce spring">
                  <Img src={TransactionIllu} alt={alt} />
                </div>
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default TransactionInfo;
