import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import PropTypes from 'prop-types';
import styles from 'dan-components/Forms/user-jss';
import { withStyles } from '@material-ui/core/styles';
import { LoginForm } from 'dan-components';

import { loginAction } from '../../../redux/actions/login';
import { login } from '../../../api/queries'
import { setTokens } from '../../../api/helpers'

class Login extends React.Component {
  state = {
    email: '',
    password: ''
  }

  onChangeEmail = (e) => {
    this.setState({
      email: e.target.value
    });
  };

  onChangePassword = (e) => {
    this.setState({
      password: e.target.value
    });
  };

  login = async () => {
    try {
      const { data: { data } } = await login(this.state);

      setTokens(data.token);

      this.props.dispatch(loginAction(data.attributes));

      this.redirectToApp()

    } catch (error) {
      //TODO
      if (error.status === 400) alert('Неправильний пароль або логін!')
      if (error.status === 404) alert('Упс, нічого не знайдено.')
    }
  };

  redirectToApp = () => this.props.history.push({ pathname: '/' });

  render() {
    const title = brand.name + ' - Login';
    const description = brand.desc;
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description}/>
          <meta property="og:title" content={title}/>
          <meta property="og:description" content={description}/>
          <meta property="twitter:title" content={title}/>
          <meta property="twitter:description" content={description}/>
        </Helmet>
        <div className={classes.container}>
          <div className={classes.userFormWrap}>
            <LoginForm onChangePassword={this.onChangePassword} onChangeEmail={this.onChangeEmail}
                       password={this.state.password} email={this.state.email}
                       onSubmit={() => this.login()}/>
          </div>
        </div>
      </div>
    );
  }
}


Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapDispatchToProps = dispatch => ({ dispatch });

export default withStyles(styles)(withRouter(connect(null, mapDispatchToProps)(Login)));

