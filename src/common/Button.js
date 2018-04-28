import React from "react";

import PropTypes from "prop-types";

import system from "system-components";

import { omitProps } from "src/utils";

const defaultProps = {
  is: omitProps(["allCaps"])("button"),
  fontSize: 1,
  fontWeight: "bold",
  m: 0,
  px: 3,
  py: 2,
  bg: "button.background",
  color: "button.text",
  borderRadius: 1,
  border: 0,
  boxShadow: 1,
};

const styledSystemHelpers = ["width", "flex", "flexBasis"];

const Button = system(
  defaultProps,
  ...styledSystemHelpers,
  props =>
    props.allCaps && {
      textTransform: "uppercase",
    }
);

Button.propTypes = {
  ...Button.propTypes,
  allCaps: PropTypes.bool,
};

Button.defaultProps = {
  ...Button.defaultProps,
  allCaps: true,
};

Button.displayName = "Button";

export default Button;
