import React from "react";
import Menu from "material-ui/Menu";
import MenuItem from "material-ui/MenuItem";
import * as routes from "../../../../constants/routes";

import { Link } from "react-router-dom";

const NavigationNonAuth = () => (
  <Menu>
    <MenuItem
      containerElement={<Link to={routes.SIGN_IN} />}
      primaryText="Sign In"
    />
    <MenuItem
      containerElement={<Link to={routes.SIGN_UP} />}
      primaryText="Sign Out"
    />
  </Menu>
);

export default NavigationNonAuth;
