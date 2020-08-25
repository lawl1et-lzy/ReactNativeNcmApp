import React from 'react';
import {Image} from 'react-native';
const TAB_BAR_ICON_MAP_IMG = {
  Discover: {
    on: require('@/images/icon/discover-on.png'),
    off: require('@/images/icon/discover-off.png'),
  },
  Video: {
    on: require('@/images/icon/video-on.png'),
    off: require('@/images/icon/video-off.png'),
  },
  Home: {
    on: require('@/images/icon/home-on.png'),
    off: require('@/images/icon/home-off.png'),
  },
  Village: {
    on: require('@/images/icon/village-on.png'),
    off: require('@/images/icon/village-off.png'),
  },
  Account: {
    on: require('@/images/icon/account-on.png'),
    off: require('@/images/icon/account-off.png'),
  },
};
const TabBarIcon = ({name, size, focused}) => {
  size = size - 4;
  return (
    <Image
      source={
        focused ? TAB_BAR_ICON_MAP_IMG[name].on : TAB_BAR_ICON_MAP_IMG[name].off
      }
      style={{width: size, height: size}}
    />
  );
};

export default TabBarIcon;
