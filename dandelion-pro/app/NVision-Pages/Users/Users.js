import React, {Component} from 'react';
import {Helmet} from "react-helmet/es/Helmet";
import { PapperBlock } from 'dan-components';

const Users = () => {

    const title = 'Users';
    const description = 'desc of Users';

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
            <PapperBlock title="Users" desc="Some text description">

            </PapperBlock>
        </div>
    );
}

export default Users;
