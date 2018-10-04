import { createReducer } from 'redux-act';

import uuidv4 from 'uuid/v4';

// import * as actions from './BlockchainActions';

const INITIAL_BLOCKCHAIN_ID = uuidv4();
const INITIAL_BLOCK_ID = uuidv4();
const initialState = {
    blockchainMap: {
        [INITIAL_BLOCKCHAIN_ID]: {
            ID: INITIAL_BLOCKCHAIN_ID,
            name: 'First blockchain name',
            blocks: [
                {
                    ID: INITIAL_BLOCK_ID,
                    timestamp: Date.now(),
                },
            ],
        }
    },
};

const reducer = createReducer({}, initialState);

// reducer.on(actions. , (state, payload) => ({
//     ...state,
// }));

export default reducer;
