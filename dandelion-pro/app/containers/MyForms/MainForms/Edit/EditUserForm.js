import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import { withStyles } from '@material-ui/core/styles';
import { PapperBlock } from 'dan-components';
import EditUser from '../../Forms/Edit/EditUser';

const styles = ({
  root: {
    flexGrow: 1,
  }
});

class EditUserForm extends React.Component {
  state = {
    valueForm: []
  }

  showResult(values) {
    setTimeout(() => {
      this.setState({ valueForm: values });
      window.alert(`You submitted:\n\n${this.state.valueForm}`); // eslint-disable-line
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
        <PapperBlock title="Edit User" icon="ios-list-box-outline">
          <div>
            <EditUser
              onSubmit={(values) => this.showResult(values)}
              name="Misha"
              lastName="Tretyak"
              userEmail="misha@gmail.com"
              userRole="Super Admin"
            />
          </div>
        </PapperBlock>
      </div>
    );
  }
}

export default withStyles(styles)(EditUserForm);
