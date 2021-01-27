/* eslint-disable react/destructuring-assignment */
import React from 'react';
// import { Helmet } from 'react-helmet';
// import brand from 'dan-api/dummy/brand';
import { withStyles } from '@material-ui/core/styles';
import '../Grid.css';
// import { PapperBlock } from 'dan-components';
// import AddWidget from '../Form/Create/CreateWidget';
// import history from '../../../utils/history';

const styles = ({
//   root: {
//     flexGrow: 1,
//   },
});

class Scene extends React.Component {
  render() {
    return (
      <div className="Grid" />
    );
  }
}

export default withStyles(styles)(Scene);
