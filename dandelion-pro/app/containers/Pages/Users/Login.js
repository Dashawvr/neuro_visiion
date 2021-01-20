import React from 'react';
import {Helmet} from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import {LoginForm} from 'dan-components';
import styles from 'dan-components/Forms/user-jss';
import {withRouter} from "react-router-dom";

import axios from "axios";

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
    axios
        .post("http://localhost:80/api/auth/login", {email: this.state.email, password: this.state.password})
        .then((response) => {
            localStorage.setItem("token", response.data.data.token.access_token);
            console.log(response);
            if (response.data.data.token.access_token) {
                this.props.history.push("/app");
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
            console.log(error);
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
    const title = brand.name + ' - Login';
    const description = brand.desc;
    const {classes} = this.props;
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

export default withStyles(styles)(withRouter(Login));
