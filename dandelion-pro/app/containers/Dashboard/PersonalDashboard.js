import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';
import brand from 'dan-api/dummy/brand';
import { Helmet } from 'react-helmet';
import { withStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import {
    CounterIconsWidget,
    DateWidget,
    ContactWidget,
    TimelineWidget,
    FilesWidget,
} from 'dan-components';
import styles from './dashboard-jss';
import {connect} from "react-redux";
import { getDashboards } from "../../redux/actions/dashboards";




function PersonalDashboard(props) {
    console.log(props.user)
    const title = brand.name + ' - Personal Dashboard';
    const description = brand.desc;
    const { classes } = props;

    useEffect(() => {
        console.log(props.user)
        props.getDash(props.user.user.id)
    }, [])

    if (!props.user.user) {
        return <Redirect to="/" />;
    }
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
            {/* 1st Section */}
            <Grid container spacing={3} className={classes.root}>
                <Grid item md={6} xs={12}>
                    <CounterIconsWidget />
                </Grid>
            </Grid>
            <Divider className={classes.divider} />
            {/* 3rd Section */}
            <Grid container spacing={3} className={classes.root}>
                <Grid item md={6} xs={12}>
                    <Divider className={classes.divider} />
                    <ContactWidget />
                    <Divider className={classes.divider} />
                </Grid>
                <Grid item md={6} xs={12}>
                    <Hidden mdDown>
                        <Divider className={classes.divider} />
                    </Hidden>
                    <Divider className={classes.divider} />
                    <DateWidget />
                    <Divider className={classes.divider} />
                    <TimelineWidget />
                </Grid>
            </Grid>
            <Divider className={classes.divider} />
            <FilesWidget />
        </div>
    );
}

PersonalDashboard.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    user: state.get('loginReducer'),
    dashboards: state.get('dashboards')
})



export default connect(mapStateToProps, {
    getDash: getDashboards
})(withStyles(styles)(PersonalDashboard))
