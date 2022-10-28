import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
//scroll link button
export const Button = styled(LinkS)`
border-radius:15px;
background: ${({ primary }) => (primary ? "#01BF71" : "#010606")};
white-space: nowrap;
padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
color: #fff;
font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")}
outline:none;
border: none;
cursor: pointer;
display: flex;
justify-content:center;
align-items: center;
transition: all 0.2s ease-in-out;

&:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#fff" : "#01BF71")};

color: ${({ primary }) => (primary ? "#01BF71" : "#fff")};
}
`;
//route link button
export const ExtButton = styled(LinkR)`
border-radius:15px;
background: ${({ primary }) => (primary ? "#01BF71" : "#010606")};
white-space: nowrap;
padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
color: ${({ dark }) => (dark ? "#010606" : "#fff")};
font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")}
outline:none;

cursor: pointer;
display: flex;
justify-content:center;
align-items: center;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#fff" : "#01BF71")};
    color: #01BF71;
   

}
`;
