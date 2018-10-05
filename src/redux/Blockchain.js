import { createReducer } from 'redux-act';

import uuidv4 from 'uuid/v4';

import * as actions from './BlockchainActions';

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

reducer.on(actions.addBlock, (state, { blockchainID }) => {
    const { blockchainMap } = state;
    const blockchainInfo = blockchainMap[blockchainID];
    const { blocks: existingBlocks } = blockchainInfo;
    const updatedBlocks = [
        ...existingBlocks,
        {
            ID: uuidv4(),
            timestamp: Date.now(),
        }
    ]
    return {
        ...state,
        blockchainMap: {
            ...blockchainMap,
            [blockchainID]: {
                ...blockchainInfo,
                blocks: updatedBlocks,
            }
        }
    }
});

reducer.on(actions.createBlockchain, (state, { blockchainName }) => {
    const { blockchainMap } = state;
    const newBlockchainID = uuidv4();
    return {
        ...state,
        blockchainMap: {
            ...blockchainMap,
            [newBlockchainID]: {
                ID: newBlockchainID,
                name: blockchainName,
                blocks: [],
            }
        }
    }
});

export default reducer;
