/* eslint-disable array-callback-return */
/* eslint-disable no-param-reassign */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import { withStyles } from '@material-ui/core/styles';
import Maps from './Tables/Maps';
import request from '../../utils/request';
import { URL, GET } from '../Axios/axiosForData';

const styles = ({
  root: {
    flexGrow: 1,
  }
});

class CamersTable extends Component {
  state = {
    camers: [],
  }

//   componentDidMount() {
//     request(`${URL}/api/camera`, GET).then((res) => {
//         this.setState({ camers: res.data.cameras.rows });
//     });
//   }

  render() {
    const title = brand.name + ' - Table';
    const description = brand.desc;
    
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

        <div>
          <Maps data={[]} />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(CamersTable);
