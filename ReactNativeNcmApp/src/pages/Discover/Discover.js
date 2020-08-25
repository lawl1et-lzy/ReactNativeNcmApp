import React, {Component} from 'react';
import {View, Text, Dimensions, StyleSheet, Button} from 'react-native';
const {width, height} = Dimensions.get('window');
import CommonStyle from '@/styles/style';
class Discover extends Component {
  render() {
    return (
      <View style={[styles.container]}>
        <Text style={styles.text}>发现</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width,
    height,
    padding: 20,
    borderColor: 'red',
    borderWidth: 1,
    borderStyle: 'solid',
    backgroundColor: 'black',
  },
  text: {
    color: 'red',
  },
});
export default Discover;
