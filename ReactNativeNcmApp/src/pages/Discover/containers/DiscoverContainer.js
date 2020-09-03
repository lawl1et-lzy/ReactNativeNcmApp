import React, {Component} from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
const {width, height} = Dimensions.get('window');
import CommonStyle from '@/styles/style';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as ActionCreators from '../store/actions';
class DiscoverContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      author: '',
    };
  }

  onChangeText(text) {
    this.setState({
      text,
    });
  }
  onPress = () => {
    this.props.addItem(this.state.text);
  };

  onAuthorChangeText(author) {
    this.setState({
      author,
    });
  }
  addAuthor = () => {
    this.props.addAuthor(this.state.author);
  };
  render() {
    return (
      <View style={[styles.container]}>
        {/* 输入层 */}
        <View style={styles.enterBox}>
          <TextInput
            style={styles.textInput}
            placeholder="请输入作者"
            onChangeText={(text) => this.onAuthorChangeText(text)}
          />
          <TouchableOpacity style={styles.button} onPress={this.addAuthor}>
            <Text style={styles.defaultText}>add author</Text>
          </TouchableOpacity>
          <TextInput
            style={styles.textInput}
            placeholder="请输入名称"
            onChangeText={(text) => this.onChangeText(text)}
          />
          <TouchableOpacity style={styles.button} onPress={this.onPress}>
            <Text style={styles.defaultText}>add</Text>
          </TouchableOpacity>
        </View>
        {/* 展示层 */}
        <Text style={styles.defaultText}>作者：{this.props.author}</Text>
        {this.props.list?.length > 0 ? (
          <View style={styles.viewBox}>
            <FlatList
              data={this.props.list}
              renderItem={({item, index}) => {
                return <Text style={styles.defaultText}>{item}</Text>;
              }}
              // keyExtractor={(item) => item.id}
            />
          </View>
        ) : (
          <Text style={styles.defaultText}>暂无数据</Text>
        )}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    borderColor: 'red',
    borderWidth: 1,
    borderStyle: 'solid',
    backgroundColor: 'black',
  },
  enterBox: {
    color: 'red',
  },
  viewBox: {
    color: 'yellow',
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    color: '#fff',
  },
  defaultText: {
    padding: 20,
    color: '#fff',
  },
});

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(ActionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(DiscoverContainer);
