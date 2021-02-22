import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { LoginForm } from 'dan-components';
import styles from 'dan-components/Forms/user-jss';
import { withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { URL } from "../../Axios/axiosForData";
import axios from "axios";
import { onSignIn } from "../../../redux/actions/login";
import { SocketConnection } from "../../../api/socket";

const user = JSON.parse(localStorage.getItem('user'))

const socketConnection = new SocketConnection();


class Login extends React.Component {
  state = {
    email: '',
    password: ''
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

  getLogin = () => {
    console.log(process.env.REACT_APP_API_URL)
    axios
      .post(URL + "/api/auth/login", this.state)
      .then((response) => {
        localStorage.setItem("token", response.data.data.token.access_token);
        this.props.onSignIn(response.data.data.attributes);
        localStorage.setItem("user", JSON.stringify(response.data.data.attributes));
        socketConnection.setOnline()
        if (response.data.data.token.access_token) {
          this.props.history.push("/home");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };


  render() {
    const title = brand.name + ' - Login';
    const description = brand.desc;
    const { classes } = this.props;
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
            <LoginForm onChangePassword={this.onChangePassword} onChangeEmail={this.onChangeEmail}
                       password={this.state.password} email={this.state.email}
                       onSubmit={() => this.getLogin()}/>
          </div>
        </div>
      </div>
    );
  }
}


Login.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(withRouter(connect(null, {
  onSignIn: onSignIn
})(Login)));

