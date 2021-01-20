/* eslint-disable no-trailing-spaces */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
import React from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { LoginForm } from 'dan-components';
import styles from 'dan-components/Forms/user-jss';

class Login extends React.Component {
  state = {
    // valueForm: [],
    email: '',
    password: '',
  }

  onChangeEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  onChangePassword = (e) => {
    this.setState({ password: e.target.value });
  };

  getLogin = () => {
    axios.post('https://4e54cb619f0c.ngrok.io/api/auth/login', this.state);
  }
  // submitForm(values) {
  //   const { valueForm } = this.state;
  //   setTimeout(() => {
  //     this.setState({ valueForm: values });
  //     console.log(`You submitted:\n\n${valueForm}`);
  //     window.location.href = '/app';
  //   }, 500); // simulate server latency
  // }

  render() {
    const title = brand.name + ' - Login';
    const description = brand.desc;
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="twitter:title" content={title} />
          <meta property="twitter:description" content={description} />
        </Helmet>
        <div className={classes.container}>
          <div className={classes.userFormWrap}>
            <LoginForm 
              // onSubmit={(values) => this.submitForm(values)} 
              onChangeEmail={this.onChangeEmail}
              onChangePassword={this.onChangePassword}
              password={this.state.password}
              email={this.state.email}
              onSubmit={() => this.getLogin()}
            />
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);
