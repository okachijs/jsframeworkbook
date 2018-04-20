// @flow
import React, { Component } from 'react';
import { StackNavigator, DrawerNavigator} from 'react-navigation';
import Channel from './Channel';

export default class App extends Component<{}> {

  channels : Array<string>;
  _AppDrawerNavigator: any;

  constructor(props:{}) {
    super(props);
    this.channels = ['general','random']; // ❶

    // ❷ start
    let drawerMenus = {};    
    this.channels.forEach(channelName => {
      Object.assign(drawerMenus, {[channelName]: this.createDrawerMenu(channelName)});
    })
    // ❷ end
    this._AppDrawerNavigator = DrawerNavigator(drawerMenus);// ❸

  }
  // ❹ start
  createDrawerMenu(channelName : string) {
    return {
      screen: StackNavigator({Home: {screen: Channel,}},{initialRouteParams: {channelName: channelName }}),
      navigationOptions: {
        drawerLabel: `# ${channelName}`,
      },
    }
  }
  // ❹ end
  render() {
    const AppDrawerNavigator : any = this._AppDrawerNavigator;
    return <AppDrawerNavigator />
  }
}