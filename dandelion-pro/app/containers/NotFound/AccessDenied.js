import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import { Route } from 'react-router-dom';
import { ErrorWrap } from 'dan-components';

const title = brand.name + ' - Access Denied';
const description = brand.desc;

const AccessDenied = () => (
  <Route
    render={({ staticContext }) => {
      if (staticContext) {
        staticContext.status = 403; // eslint-disable-line
      }
      return (
        <div>
          <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
          </Helmet>
          <ErrorWrap title="403" desc="Oops, You Are Dont Have Access :(" />
        </div>
      );
    }}
  />
);

export default AccessDenied;
