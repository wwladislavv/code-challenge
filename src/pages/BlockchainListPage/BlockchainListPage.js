import * as React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import map from 'lodash/map';

import { List } from 'semantic-ui-react'

import { shapeOfBlockchainItem } from '../../shapes/BlockchainShapes';

import { createBlockchain } from '../../redux/BlockchainActions';

import CreateBlockchainModal from '../../components/CreateBlockchainModal/CreateBlockchainModal';
import BlockchainItem from './components/BlockchainItem';

class BlockchainListPage extends React.Component {

    renderBlockchainItems = () => {
        const { blockchainMap } = this.props;
        return map(
            blockchainMap,
            ({ ID, name, blocks }) => (
                <BlockchainItem
                    key={ID}
                    ID={ID}
                    name={name}
                    blocksCount={blocks.length}
                />
            ),
        );
    }

    handleCreateBlockchain = ({ blockchainName }) => {
        this.props.createBlockchain({
            blockchainName,
        });
    }

    render() {
        return (
            <React.Fragment>
                <List>
                    {this.renderBlockchainItems()}
                </List>

                <CreateBlockchainModal
                    handleCreateBlockchain={this.handleCreateBlockchain}
                />
            </React.Fragment>
        );
    }
}

BlockchainListPage.propTypes = {
    blockchainMap: PropTypes.objectOf(shapeOfBlockchainItem).isRequired,
};

const mapStateToProps = ({ Blockchain: { blockchainMap } }) => ({
    blockchainMap,
});

const mapDispatchToProps = {
    createBlockchain,
};

export default connect(mapStateToProps, mapDispatchToProps)(BlockchainListPage);
