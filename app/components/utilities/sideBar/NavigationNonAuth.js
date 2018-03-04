import React from "react";
import Menu from "material-ui/Menu";
import MenuItem from "material-ui/MenuItem";
import * as routes from "../../../../constants/routes";

import { Link } from "react-router-dom";
import { SignInIcon } from "../icons/SIgnInIcon";
import { SignUpIcon } from "../icons/SignUpIcon";

const NavigationNonAuth = () => (
  <Menu>
    <MenuItem containerElement={<Link to={routes.SIGN_IN} />} leftIcon={<SignInIcon />} primaryText="Sign In" />
    <MenuItem containerElement={<Link to={routes.SIGN_UP} />} leftIcon={<SignUpIcon />} primaryText="Sign Up" />
  </Menu>
);

export default NavigationNonAuth;
