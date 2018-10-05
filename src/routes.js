import * as React from 'react';
import {
  Route,
  Switch,
} from 'react-router';

import BlockchainListPage from './pages/BlockchainListPage/BlockchainListPage';
import BlockchainInfoPage from './pages/BlockchainInfoPage/BlockchainInfoPage';

export default (
  <Switch key='routes'>
    <Route exact={true} path={`/`} component={BlockchainListPage} />
    <Route path={`/blockchain/:id`} component={BlockchainInfoPage} />
  </Switch>
);
