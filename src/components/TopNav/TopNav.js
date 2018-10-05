import * as React from 'react';

import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react'

class TopNav extends React.Component {
    render() {
        return (
            <Menu attached='top' className="topNav">
                <Menu.Item name='home' >
                    <Link to="/">Home</Link>
                </Menu.Item>
            </Menu>
        )
    }
}

export default TopNav;