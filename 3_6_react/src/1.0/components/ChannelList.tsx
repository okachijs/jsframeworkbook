import * as React from 'react';
import { Icon, Menu } from 'semantic-ui-react';
import { NavLink, Link } from 'react-router-dom';

const channels = ['general', 'random'];

export const ChannelList = () => {
    return (
        <Menu inverted vertical fixed={'left'}>
            <Menu.Item as={Link} to={'/'}>
                Home
                <Icon name='home' />
            </Menu.Item>
            <Menu.Item>
                Channel
                <Icon name='list' />
                <Menu.Menu>
                    {channels.map(channel =>
                        <Menu.Item
                            key={channel}
                            name={channel}
                            as={NavLink}
                            to={`/channels/${channel}`}>
                            {channel}
                        </Menu.Item>
                    )}
                </Menu.Menu>
            </Menu.Item>
        </Menu>
    );
};
