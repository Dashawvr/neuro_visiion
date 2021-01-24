import React, {Component} from 'react';
import {Helmet} from "react-helmet/es/Helmet";
import { PapperBlock } from 'dan-components';

const EditPanel = () => {

    const title = 'Edit Panel';
    const description = 'desc of edit Panel';

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
            <PapperBlock title="Edit Panel" desc="Some text description">

            </PapperBlock>
        </div>
    );
}

export default EditPanel;
