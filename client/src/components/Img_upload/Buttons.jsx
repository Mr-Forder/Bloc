import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages, faImage } from "@fortawesome/free-solid-svg-icons";

export default (props) => (
  <div>
    <ButtonCont>
      <label htmlFor="single">
        <FontAwesomeIcon icon={faImage} color="#bd257e" size="1x" />
      </label>
      <input type="file" id="single" onChange={props.onChange} />
    </ButtonCont>
  </div>
);

export const ButtonCont = styled.div``;
