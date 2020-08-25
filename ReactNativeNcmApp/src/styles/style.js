import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
    height,
    backgroundColor: 'black',
  },
});

export default styles;
