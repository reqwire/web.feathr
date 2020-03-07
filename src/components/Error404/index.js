import React from 'react';
import {Link} from 'react-router-dom';
import IntlMessages from 'util/IntlMessages';
import { Helmet } from 'react-helmet'
import {injectIntl} from 'react-intl';


class Error404 extends React.Component {
    
  render() {

    const intl = this.props.intl; 
    const pageTitle = intl.formatMessage({ id: 'error.404.SEO.title' });

    return (
    <div className="app-wrapper page-error-container">
        <Helmet title={pageTitle} />
        <div className="page-error-content text-center">
            
            <img src={require("assets/images/avatar/confused.png")} alt="Feathr" class="feathr-avatar mt-5" title="Feathr"/>
            <h1 className="error-code text-secondary mb-2 mt-2 animated fadeIn"><IntlMessages id="error.404"/></h1>
            <h2 class="animated fadeInDown">
                <IntlMessages id="error.404Msg"/>
            </h2>
            <p>
                <Link className="btn btn-primary" to="/"><IntlMessages id="error.goHome"/></Link>
            </p>
        </div>
    </div>
    );
  }
}

export default injectIntl(Error404);
