import React, {Component} from 'react';
import {Helmet} from "react-helmet/es/Helmet";
import { PapperBlock } from 'dan-components';

const DashboardNew = () => {

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
                <PapperBlock title="Dashboard" desc="Some text description">
                    Dashboard page!!!!!!!!
                </PapperBlock>
            </div>
        );
}

export default DashboardNew;
