import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default class Key extends React.Component {
  constructor(props) {
    super(props);
    this._onPress = this._onPress.bind(this);
  }

  _onPress() {
    this.props.echoSymbol(this.props.symbol);
  }

  render() {
    return (
      <TouchableOpacity
        style={this.props.op ? [styles.key, styles.opkey] : styles.key}
        onPress={this._onPress}>
        <View>
          <Text style={this.props.op && styles.opkeytext}>
            {this.props.symbol}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  key: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
  },
  opkey: {
    backgroundColor: '#FA982F',
    alignItems: 'center',
  },
  opkeytext: {
    color: '#ffffff',
  },
});
