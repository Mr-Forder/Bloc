import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

export default (props) =>
  props.images.map((image, i) => {
    console.log(image.secure_url);
  });
