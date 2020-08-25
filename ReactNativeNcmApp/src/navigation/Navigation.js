import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {Component} from 'react';
const Tab = createBottomTabNavigator();

//引入页面模块
import Account from '@/pages/Account/Account';
import Discover from '@/pages/Discover/Discover';
import Home from '@/pages/Home/Home';
import Video from '@/pages/Video/Video';
import Village from '@/pages/Village/Village';

const pages = [
  {
    name: 'Discover',
    component: Discover,
  },
  {
    name: 'Video',
    component: Video,
  },
  {
    name: 'Home',
    component: Home,
  },
  {
    name: 'Village',
    component: Village,
  },
  {
    name: 'Account',
    component: Account,
  },
];

class Navigation extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          {pages.map(({name, component, key = `${name}`}) => {
            return (
              <Tab.Screen
                key={key}
                name={name}
                component={component}
                options={{}}
              />
            );
          })}
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

export default Navigation;
