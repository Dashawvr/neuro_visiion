import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { withStyles } from '@material-ui/core/styles';
import { LoginForm } from 'dan-components';
import styles from 'dan-components/Forms/user-jss';
import { withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { URL } from "../../Axios/axiosForData";
import axios from "axios";
import { onSignIn } from "../../../redux/actions/login";
import { SocketConnection } from "../../../api/socket";
import Notification from '../../MyNotification/Notification';

const user = JSON.parse(localStorage.getItem('user'))

const socketConnection = new SocketConnection();


class Login extends React.Component {
  state = {
    variant: '',
    message: '',
    open: false,
    email: '',
    password: '',
    cn: ''
  }

  onChangeEmail = (e) => {
    this.setState({
      email: e.target.value
    });
    console.log(this.state.email)
  };

  onChangePassword = (e) => {
    this.setState({
      password: e.target.value
    });
  };

  onChangeCn = (e) => {
    this.setState({
      cn: e.target.value
    });
  };

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({ open: false });
  };

  getLogin = () => {
    if (this.state.cn) {
      axios
      .post(`${URL}/api/auth/loginWithLdap`, {cn: this.state.cn})
      .then((response) => {
        localStorage.setItem("token", response.data.data.token.access_token);
        localStorage.setItem("user", JSON.stringify(response.data.data.attributes));
        setTimeout(() => {
          const newToken = localStorage.getItem("token");
          if (newToken.length > 50) {
            this.props.onSignIn(response.data.data.attributes);
            socketConnection.setOnline();
            this.props.history.push("/home");
          }
        }, 1000);        
      })
      .catch((error) => {
        this.setState({ open: true, variant: 'error', message: 'Notification.error' });
      });
    } else {
      axios
      .post(URL + "/api/auth/login", {email: this.state.email, password: this.state.password})
      .then((response) => {
        localStorage.setItem("token", response.data.data.token.access_token);
        localStorage.setItem("user", JSON.stringify(response.data.data.attributes));
        const newToken = localStorage.getItem("token");
        setTimeout(() => {
          if (newToken.length > 50) {
            this.props.onSignIn(response.data.data.attributes);
            socketConnection.setOnline()
            this.props.history.push("/home");
          }
        }, 1000);        
      })
      .catch((error) => {
        this.setState({ open: true, variant: 'error', message: 'Notification.error' });
      });
    }
  }


  render() {
    const title = brand.name + ' - Login';
    const description = brand.desc;
    const { classes, t } = this.props;
    if (user) {
      return <Redirect to='/home'/>
    }
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
            <LoginForm onChangePassword={this.onChangePassword} onChangeEmail={this.onChangeEmail} onChangeCn={this.onChangeCn} 
                       password={this.state.password} email={this.state.email} cn={this.state.cn}
                       onSubmit={() => this.getLogin()}/> 
          </div>          
          <Notification open={this.state.open} handleClose={() => this.handleClose()} variant={this.state.variant} message={t(this.state.message)} />
        </div>
      </div>
    );
  }
}


Login.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(
  withRouter(
    withTranslation()(
      connect(null, {
        onSignIn: onSignIn
      })(Login)
    )
  )
);

