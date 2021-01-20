import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import logo from 'dan-images/logo.svg';
import brand from 'dan-api/dummy/brand';

import styles from './landingStyle-jss';


function Decoration(props) {
  const { classes } = props;
  return (
    <div>
      <svg fill="#fff" className={classes.footerDecoration}>
        <use xlinkHref="/images/decoration/petal5.svg#Petal-Bottom" />
      </svg>
    </div>
  );
}

Decoration.propTypes = {
  classes: PropTypes.object.isRequired,
};

const DecorationStyled = withStyles(styles)(Decoration);

function Footer(props) {
  const { classes } = props;

  return (
    <footer className={classes.footer}>
      <DecorationStyled />
      <div className={classes.container}>
        <div className={classes.spaceContainer}>
          <div className={classes.brand}>
            <img src={logo} alt={brand.name} />
                Neuro Vision
          </div>
        </div>
      </div>
      <div className={classes.copyright}>
        <div className={classes.container}>
          <p>&copy; 2020 Neuro Vision. All Right Reserved </p>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
