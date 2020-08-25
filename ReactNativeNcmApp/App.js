/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Navigation from '@/navigation/Navigation';
import {SafeAreaView} from 'react-native';
import CommonStyle from '@/styles/style';

const App = () => {
  return (
    <SafeAreaView style={CommonStyle.container}>
      <Navigation />
    </SafeAreaView>
  );
};

export default App;
