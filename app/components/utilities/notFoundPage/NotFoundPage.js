import React from 'react';
import * as routes from 'constants/routes';
import { Link } from 'react-router-dom';
require('./notFoundPage.scss');

const NotFoundPage = props => {
  return (
    <div className="notFoundBlock">
      <h1>Sorry, page not found</h1>
      {props.authUser ? (
        <Link to={routes.HOME}>Back to the main page</Link>
      ) : (
        <Link to={routes.HOME}>Go to the login page</Link>
      )}
    </div>
  );
};

export default NotFoundPage;
