import React from 'react';
import Widgets from '../../containers/MyTables/Tables/Widgets';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import { connect } from 'react-redux';
import { onOpen } from "../../redux/actions/rightSidebar";

const useStyles = makeStyles({
  drawer: {
    width: '70rem',
  }
});

const RightSidebar = (props) => {
  const classes = useStyles();
  return (         
    <Drawer anchor='right' open={props.rightSidebar.open} onClose={() => props.onOpen(!props.rightSidebar.open)}>
      <div className={classes.drawer}>
        <Widgets data={props.widgets} />
      </div>
    </Drawer>
  );
}

const mapStateToProps = (state) => ({
  rightSidebar: state.get('rightSidebar').open
})

export default connect(mapStateToProps, {
  onOpen: onOpen
})(RightSidebar);