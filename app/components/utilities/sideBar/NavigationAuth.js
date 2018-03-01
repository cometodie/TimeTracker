import React from 'react';
import Menu from "material-ui/Menu";
import MenuItem from "material-ui/MenuItem";
import * as routes from "../../../../constants/routes";

import { Link } from "react-router-dom";

const NavigationAuth = props => (
  <Menu>
    <MenuItem containerElement={<Link to={routes.HOME} />} primaryText="Home" />
    <MenuItem onClick={props.logout} primaryText={`Logout ${props.email}`} />
  </Menu>
);

export default NavigationAuth;