import React from 'react';
import { Helmet } from 'react-helmet'
import {injectIntl} from 'react-intl';

class Marketplace extends React.Component {

  render() {
    const intl = this.props.intl; 
    const pageTitle = intl.formatMessage({ id: 'pages.market.SEO.title' });

    return (
      <div className="app-wrapper">
        <Helmet title={pageTitle} />

      </div>
    );
  }
}

export default injectIntl(Marketplace);