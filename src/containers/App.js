import * as React from 'react';
import { hot } from 'react-hot-loader';

import { Container } from 'semantic-ui-react'
import {
  BrowserRouter as Router,
} from 'react-router-dom';

import routes from '../routes';

// import styles from './App.scss';

class App extends React.Component {

  renderRoutes = () => {
    return (
      <Router>
        <Container>
            {routes}
        </Container>
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

