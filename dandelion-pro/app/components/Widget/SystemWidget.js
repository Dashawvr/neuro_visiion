import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import styles from './widget-jss';
import PapperBlock from '../PapperBlock/PapperBlock';
import { withTranslation } from 'react-i18next';

function SystemWidget(props) {

  const { classes, t } = props

  return (
        <PapperBlock height="100%" heightDiv="95%" whiteBg noMargin title={t("SystemWidget.title")} icon="ios-cloud-outline" desc="">           
            <div className={classes.secondaryWrap}>
              <div>
                  {t("SystemWidget.platform")}  {window.navigator.platform}
              </div>
              <div>
                  {t("SystemWidget.agent")} {window.navigator.userAgent}
              </div>
            </div>          
        </PapperBlock>
  );
}

SystemWidget.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withTranslation()(SystemWidget));
