import * as React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
    Button,
    List,
    Header,
} from 'semantic-ui-react'

import { addBlock } from '../../redux/BlockchainActions';

import { shapeOfBlockchainItem } from '../../shapes/BlockchainShapes';

class BlockchainInfoPage extends React.Component {

    renderBlocks = () => {
        return this.props.blockchainInfo.blocks.map((blockItem) => (
            <List.Item key={blockItem.ID}>
                <List.Icon name='square full' size='large' verticalAlign='middle' />
                <List.Content>
                    <List.Header as='a'>Hash: {blockItem.ID}</List.Header>
                    <List.Description as='a'>timestamp: {blockItem.timestamp}</List.Description>
                </List.Content>
            </List.Item>
        )
        );
    }

    handleAddBlock = () => {
        this.props.addBlock({
            blockchainID: this.props.blockchainID,
        });
    }

    render() {
        const { blockchainInfo } = this.props;
        return (
            <div>
                <Header as='h2'>{blockchainInfo.name}</Header>
                <div>
                    <Header as='h4'>Blocks:</Header>
                    <List divided relaxed>
                        {this.renderBlocks()}
                    </List>
                </div>
                <Button onClick={this.handleAddBlock}>Add block</Button>
            </div>
        );
    }
}

BlockchainInfoPage.propTypes = {
    blockchainInfo: shapeOfBlockchainItem,
};

const getBlockchainInfo = ({ Blockchain }, blockchainID) => {
    return Blockchain.blockchainMap[blockchainID];
};

const mapStateToProps = (state, ownProps) => ({
    blockchainID: ownProps.match.params.id,
    blockchainInfo: getBlockchainInfo(state, ownProps.match.params.id),
});

const mapDispatchToProps = {
    addBlock,
};

export default connect(mapStateToProps, mapDispatchToProps)(BlockchainInfoPage);
