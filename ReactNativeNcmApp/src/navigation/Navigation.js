import React, {Component} from 'react';

// react-navigation 相关组件
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
import TabBarIcon from './Components/TabBarIcon';

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
    options: {
      tabBarLabel: '发现',
    },
  },
  {
    name: 'Video',
    component: Video,
    options: {
      tabBarLabel: '视频',
    },
  },
  {
    name: 'Home',
    component: Home,
    options: {
      tabBarLabel: '我的',
    },
  },
  {
    name: 'Village',
    component: Village,
    options: {
      tabBarLabel: '云村',
    },
  },
  {
    name: 'Account',
    component: Account,
    options: {
      tabBarLabel: '账号',
    },
  },
];

class Navigation extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: 'red',
            inactiveTintColor: 'gray',
            style: {backgroundColor: 'black'},
            labelStyle: {
              fontSize: 12,
            },
          }}>
          {pages.map(({name, component, options = {}}) => {
            return (
              <Tab.Screen
                key={name}
                name={name}
                component={component}
                options={Object.assign(
                  {
                    // opts: {focused, color, size}
                    tabBarIcon: (opts) => <TabBarIcon {...{...opts, name}} />,
                  },
                  options,
                )}
              />
            );
          })}
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

export default Navigation;
