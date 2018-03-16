import * as React from 'react';
import { render } from 'react-dom';
import { Switch } from 'react-router';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import { ChannelList } from './components';
import { Container } from 'semantic-ui-react';

const routes = <BrowserRouter>
    <div id='wrapper'>
        <ChannelList />
        <main style={{ margin: '1rem 0 1rem 16rem' }}>
            <Container>
                <Switch>
                    <Route
                        exact={true} path='/channels/:channelName'
                        render={props => <h2>{props.match.params.channelName}</h2>} />
                    <Route
                        exact={true} path='/'
                        render={() => <h1>Sample Application</h1>} />
                </Switch>
            </Container>
        </main>
    </div>
</BrowserRouter>;

render(routes, document.getElementById('app'));
