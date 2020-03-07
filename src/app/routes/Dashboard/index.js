import React from 'react';
import IntlMessages from 'util/IntlMessages';
import { Helmet } from 'react-helmet'
import {injectIntl} from 'react-intl';

class Dashboard extends React.Component {

  render() {
    const intl = this.props.intl; 
    const pageTitle = intl.formatMessage({ id: 'pages.dashboard.SEO.title' });

    return (
      <div className="app-wrapper">
        <Helmet title={pageTitle} />

      </div>
    );
  }
}

export default injectIntl(Dashboard);