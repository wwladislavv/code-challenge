import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { List, Icon, Label } from 'semantic-ui-react';

class BlockchainItem extends React.Component {
    render() {
        const { ID, name, blocksCount } = this.props;
        return (
            <List.Item>
                <Label>
                    <Icon name='block layout' />
                    {blocksCount}
                    <Label.Detail>
                        <Link to={`/blockchain/${ID}`}>{name}</Link>
                    </Label.Detail>
                </Label>
            </List.Item>
        );
    }
}

BlockchainItem.propTypes = {
    ID: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    blocksCount: PropTypes.number.isRequired,
};

export default BlockchainItem;