import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Fab from '@material-ui/core/Fab';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import ArrowBack from '@material-ui/icons/ArrowBack';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Switch from '@material-ui/core/Switch';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import ButtonBase from '@material-ui/core/ButtonBase';
import Palette from '@material-ui/icons/Palette';
import Close from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import {
  LeftSidebarThumb,
  LeftSidebarBigThumb,
  TopNavigationThumb,
  MegaMenuThumb,
} from './templatePreview';
import ThemeThumb from './ThemeThumbs';
import LayoutThumb from './LayoutThumb';
import styles from './settings-jss';

function TabContainer({ children }) {
  return (
    // <Typography component="div" style={{ padding: 8 * 1.5 }}>
    //   {children}
    // </Typography>
      <div></div>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

function TemplateSettings(props) {
  const [type, setType] = useState(0);
  const [show, setShow] = useState(false);
  const [showAllThemes, setShowAllThemes] = useState(false);
  const [dark, setDark] = useState(false); // eslint-disable-line
  const [bgPositionState, setBgPosition] = useState('half'); // eslint-disable-line
  const [decorated, setDecoration] = useState(true); // eslint-disable-line
  const [rtl, setRtl] = useState(false); // eslint-disable-line
  const [gradientState, setGradient] = useState(true); // eslint-disable-line

  // TaB Handle
  const handleChangeTab = (event, typeParam) => {
    setType(typeParam);
  };

  const handleChangeIndexTab = index => {
    setType(index);
  };

  // Theme Mode Handle
  const handleSwitchMode = event => {
    const { changeMode } = props;
    const mode = event.target.checked ? 'dark' : 'light';
    changeMode(mode);
    setDark(event.target.checked);
  };

  const handeSwitchDirection = event => { // eslint-disable-line
    const { changeDirection } = props;
    const dir = event.target.checked ? 'rtl' : 'ltr';
    changeDirection(dir);
    setRtl(event.target.checked);
  };

  // Background Position Handle
  const handleBgChangePosition = event => {
    const { changeBgPosition } = props;
    setBgPosition(event.target.value);
    changeBgPosition(event.target.value);
  };

  // Decoration Handle
  const handleChangeDecoration = event => {
    const { changeDecoration } = props;
    setDecoration(event.target.checked);
    changeDecoration(event.target.checked);
  };

  // Decoration Handle
  const handleChangeGradient = event => {
    const { changeGradient } = props;
    setGradient(event.target.checked);
    changeGradient(event.target.checked);
  };

  // Layout Handle
  const handleChangeLayout = event => {
    const { changeLayout } = props;
    changeLayout(event.target.value);
  };

  // Show Hide Panel
  const handleTogglePanel = () => {
    setShow(!show);
  };

  // Toggle All Themes
  const handleToggleAllThemes = () => {
    setShowAllThemes(!showAllThemes);
  };

  const {
    classes,
    palette,
    mode,
    gradient,
    decoration,
    bgPosition,
    selectedValue,
    layout,
    direction,
    changeTheme,
    changeRandomTheme
  } = props;
  const getItem = dataArray => dataArray.map((item, index) => (
    <FormControlLabel
      key={index.toString()}
      className={
        classNames(
          classes.themeField,
          index > 7 && !showAllThemes ? classes.hide : ''
        )
      }
      control={(
        <ThemeThumb
          value={item.value}
          selectedValue={selectedValue}
          handleChange={changeTheme}
          name={item.name}
        />
      )}
    />
  ));

  return (

      <div></div>
  );
}

TemplateSettings.propTypes = {
  classes: PropTypes.object.isRequired,
  palette: PropTypes.object,
  mode: PropTypes.string.isRequired,
  gradient: PropTypes.bool.isRequired,
  decoration: PropTypes.bool.isRequired,
  bgPosition: PropTypes.string.isRequired,
  selectedValue: PropTypes.string.isRequired,
  layout: PropTypes.string.isRequired,
  direction: PropTypes.string.isRequired,
  changeTheme: PropTypes.func.isRequired,
  changeRandomTheme: PropTypes.func.isRequired,
  changeMode: PropTypes.func.isRequired,
  changeGradient: PropTypes.func.isRequired,
  changeDecoration: PropTypes.func.isRequired,
  changeBgPosition: PropTypes.func.isRequired,
  changeLayout: PropTypes.func.isRequired,
  changeDirection: PropTypes.func.isRequired,
};

TemplateSettings.defaultProps = {
  palette: undefined
};

export default withStyles(styles)(TemplateSettings);
