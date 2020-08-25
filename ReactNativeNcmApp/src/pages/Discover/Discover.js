import React, {Component} from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');
import CommonStyle from '@/styles/style';
class Discover extends Component {
  render() {
    return (
      <View style={CommonStyle.container}>
        <Text style={styles.text}>发现</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  text: {
    color: 'red',
  },
});
export default Discover;
