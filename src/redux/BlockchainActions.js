import { createAction } from 'redux-act';

const BLOCKCHAIN_ACTION_TYPE = 'redux/blockchain/';

export const createBlockchain = createAction(`${BLOCKCHAIN_ACTION_TYPE}CREATE`);

export const addBlock = createAction(`${BLOCKCHAIN_ACTION_TYPE}ADD_BLOCK`);
