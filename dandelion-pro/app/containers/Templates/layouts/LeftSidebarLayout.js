import React, { Fragment } from 'react';
import { PropTypes } from 'prop-types';
import classNames from 'classnames';
import Fade from '@material-ui/core/Fade';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import '../../../NVision-Pages/Dashboard/app.css'
import {
  Header,
  Sidebar,
  BreadCrumb,
} from 'dan-components';
import dataMenu from 'dan-api/ui/menu';
import Decoration from '../Decoration';
import styles from '../appStyles-jss';
import { withTranslation } from 'react-i18next';

function LeftSidebarLayout(props) {
  const {
    classes,
    children,
    toggleDrawer,
    sidebarOpen,
    loadTransition,
    pageLoaded,
    mode,
    gradient,
    deco,
    history,
    bgPosition,
    changeMode,
    place,
    titleException,
    handleOpenGuide,
  } = props;
  const location = history.location.pathname.split('/').includes('dashboard')
  return (
    <Fragment>
      <Header
        toggleDrawerOpen={toggleDrawer}
        margin={sidebarOpen}
        gradient={gradient}
        position="left-sidebar"
        changeMode={changeMode}
        mode={mode}
        title={place}
        history={history}
        openGuide={handleOpenGuide}
      />
      <Sidebar
        open={sidebarOpen}
        toggleDrawerOpen={toggleDrawer}
        loadTransition={loadTransition}
        dataMenu={dataMenu}
        leftSidebar
      />
      <main className={`${classNames(classes.content, !sidebarOpen ? classes.contentPaddingLeft : '')} ${location?'app':''}`} id="mainContent">
        {
          !location ?
            (<Decoration
              mode={mode}
              gradient={gradient}
              decoration={deco}
              bgPosition={bgPosition}
              horizontalMenu={false}
            />):''
        }
        <section className={`${classNames(classes.mainWrap, classes.sidebarLayout)}`}>
          {(titleException.indexOf(history.location.pathname) < 0&&!location) && (
            <div className={classes.pageTitle}>
              <Typography component="h4" className={`${bgPosition === 'header' ? classes.darkTitle : classes.lightTitle} ${location?'black':''}`} variant="h4"></Typography>
              <BreadCrumb separator=" / " theme={`${bgPosition === 'header' ? 'dark' : 'light'}${location?'black':''}`} location={history.location} />
            </div>
          )}
          { !pageLoaded && (<img src="/images/spinner.gif" alt="spinner" className={classes.circularProgress} />) }
          <Fade
            in={pageLoaded}
            // {...(pageLoaded ? { timeout: 700 } : {})}
          >
            <div className={!pageLoaded ? classes.hideApp : ''}>
              {/* Application content will load here */}
              { children }

            </div>
          </Fade>
        </section>
      </main>
    </Fragment>
  );
}

LeftSidebarLayout.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  history: PropTypes.object.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
  loadTransition: PropTypes.func.isRequired,
  changeMode: PropTypes.func.isRequired,
  sidebarOpen: PropTypes.bool.isRequired,
  pageLoaded: PropTypes.bool.isRequired,
  mode: PropTypes.string.isRequired,
  gradient: PropTypes.bool.isRequired,
  deco: PropTypes.bool.isRequired,
  bgPosition: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
  titleException: PropTypes.array.isRequired,
  handleOpenGuide: PropTypes.func.isRequired
};

export default (withStyles(styles)(withTranslation()(LeftSidebarLayout)));
