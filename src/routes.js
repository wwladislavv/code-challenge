import * as React from 'react';
import {
    Route,
    Switch,
} from 'react-router';

import BlockchainListPage from './pages/BlockchainListPage/BlockchainListPage';

export default (
  <Switch key = 'routes'>
    <Route exact = {true} path = {`/`} component = {BlockchainListPage} />
  </Switch>
);
