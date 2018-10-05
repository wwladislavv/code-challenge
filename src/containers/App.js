import * as React from 'react';
import { hot } from 'react-hot-loader';

import { Container } from 'semantic-ui-react'
import {
  BrowserRouter as Router,
} from 'react-router-dom';

import TopNav from '../components/TopNav/TopNav';

import routes from '../routes';

class App extends React.Component {

  renderRoutes = () => {
    return (
      <Router>
        <div className='appWrapper'>
          <TopNav />
          <Container>
            {routes}
          </Container>
        </div>
      </Router>
    );
  }

  render() {
    return (
      <React.Fragment>
        {this.renderRoutes()}
      </React.Fragment>
    );
  }
}

export default hot(module)(App);

