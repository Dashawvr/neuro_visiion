import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import { Route } from 'react-router-dom';
import { ErrorWrap } from 'dan-components';
import { withTranslation } from 'react-i18next';

const title = brand.name + ' - Server Error';
const description = brand.desc;

const ServerError = () => (
  <Route
    render={({ staticContext }) => {
      if (staticContext) {
        staticContext.status = 500; // eslint-disable-line
      }
      const { t } = this.props;
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
          <ErrorWrap title="500" desc={t('ServerError.desc')} />
        </div>
      );
    }}
  />
);

export default withTranslation()(ServerError);
