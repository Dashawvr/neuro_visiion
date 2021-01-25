/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import { withStyles } from '@material-ui/core/styles';
import { PapperBlock } from 'dan-components';
import AddWidget from '../Form/Create/CreateWidget';
import history from '../../../utils/history';

const styles = ({
  root: {
    flexGrow: 1,
  }
});

class AddWidgetForm extends React.Component {
  state = {
    valueForm: [],
  }

  showResult(values) {
    setTimeout(() => {
      this.setState({ valueForm: values });
      const dashboardId = this.state.valueForm._root.entries[0][1];
      const widgetType = this.state.valueForm._root.entries[1][1];
      if (widgetType === 'video') {
        history.push(`/app/forms/add/widget/video?dashboardId=${dashboardId}`);
      } else if (widgetType === 'table') {
        history.push(`/app/forms/add/widget/table?dashboardId=${dashboardId}`);
      } else if (widgetType === 'map') {
        history.push(`/app/forms/add/widget/map?dashboardId=${dashboardId}`);
      } else if (widgetType === 'text') {
        history.push(`/app/forms/add/widget/text?dashboardId=${dashboardId}`);
      }
      return console.log('Widget type undefined!');
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
        <PapperBlock title="Add Widget" icon="ios-list-box-outline">
          <div>
            <AddWidget onSubmit={(values) => this.showResult(values)} />
          </div>
        </PapperBlock>
      </div>
    );
  }
}

export default withStyles(styles)(AddWidgetForm);
