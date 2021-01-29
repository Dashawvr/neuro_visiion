/* eslint-disable no-trailing-spaces */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
import React from 'react';
<<<<<<< HEAD
import {Helmet} from 'react-helmet';
=======
import axios from 'axios';
import { Helmet } from 'react-helmet';
>>>>>>> 102377680c91e727212c9b3f254e56b655cc259d
import brand from 'dan-api/dummy/brand';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import {LoginForm} from 'dan-components';
import styles from 'dan-components/Forms/user-jss';
import {withRouter, Redirect} from "react-router-dom";
import {connect} from "react-redux";

import axios from "axios";
import {onSignIn} from "../../../redux/actions/login";

const user = JSON.parse(localStorage.getItem('user'))

class Login extends React.Component {
<<<<<<< HEAD
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
    axios
        .post("http://localhost:80/api/auth/login", {email: this.state.email, password: this.state.password})
        .then((response) => {
            localStorage.setItem("token", response.data.data.token.access_token);
            this.props.onSignIn(response.data.data.attributes);// TODO set this to local storage and delete that info after user logout
            localStorage.setItem("user", JSON.stringify(response.data.data.attributes));
            if (response.data.data.token.access_token) {
                this.props.history.push("/home");
            }
            // props.onSignIn(response.data.data.attributes);
            // store.addNotification({
            //   title: "Вітаю!",
            //   message: response.data.data.attributes.name,
            //   type: "success",
            //   insert: "top",
            //   container: "top-right",
            //   animationIn: ["animate__animated", "animate__fadeIn"],
            //   animationOut: ["animate__animated", "animate__fadeOut"],
            //   dismiss: {
            //     duration: 3000,
            //     onScreen: true,
            //   },
            // });
            // props.history.push("/");
        })
        .catch((error) => {
            console.error(error);
            // store.addNotification({
            //   title: "Помилка!",
            //   message: "Щось пішло не так..",
            //   type: "danger",
            //   insert: "top",
            //   container: "top-right",
            //   animationIn: ["animate__animated", "animate__fadeIn"],
            //   animationOut: ["animate__animated", "animate__fadeOut"],
            //   dismiss: {
            //     duration: 5000,
            //     onScreen: true,
            //   },
            // });
        });
};


render()
{
=======
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
>>>>>>> 102377680c91e727212c9b3f254e56b655cc259d
    const title = brand.name + ' - Login';
    const description = brand.desc;
    const {classes} = this.props;
    if(user){
      return <Redirect to='/home'/>
    }
    return (
<<<<<<< HEAD
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
=======
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
>>>>>>> 102377680c91e727212c9b3f254e56b655cc259d
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

