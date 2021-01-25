/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import { withStyles } from '@material-ui/core/styles';
import { PapperBlock } from 'dan-components';
import CreateWidgetMap from '../Form/Create/CreateWidgetMap';
// import history from '../../../utils/history';

const styles = ({
  root: {
    flexGrow: 1,
  }
});

class CreateWidgetMapForm extends React.Component {
  state = {
    valueForm: [],
  }

  // history = useHistory();

  showResult(values) {
    setTimeout(() => {
      this.setState({ valueForm: values });
      // const dashboardId = this.state.valueForm._root.entries[0][1];
    //   const widgetType = this.state.valueForm._root.entries[1][1];
    }, 500); // simulate server latency
  }

  render() {
    const title = brand.name + ' - Form';
    const description = brand.desc;
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
        <PapperBlock title="Add Widget Map" icon="ios-list-box-outline">
          <div>
            <CreateWidgetMap onSubmit={(values) => this.showResult(values)} />
          </div>
        </PapperBlock>
      </div>
    );
  }
}

export default withStyles(styles)(CreateWidgetMapForm);
