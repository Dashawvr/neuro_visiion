import React, {Component} from 'react';
import {Helmet} from "react-helmet/es/Helmet";
import { PapperBlock } from 'dan-components';
import TableDashboards from "../../Nvision-Tables/DashboardsTable/DashboardsTable";

const Dashboard = () => {

  const title = 'Dashboard';
  const description = 'Main dashboard';

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
      {/*Dashboard page!!!!!!!!*/}
      <PapperBlock title="Dashboard" desc="Some text description">

      </PapperBlock>
    </div>
  );
}

export default Dashboard;
