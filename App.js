/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import ModalAlert from './ModalAlert'

type Props = {};
export default class App extends Component<Props> {
  state = {
    visible: false
  }
  setVisible(visible) {
    this.setState({visible:visible})
  }
  render() {
    return (
      <View style={{marginTop: 22}}>
        <ModalAlert message="Showing Alert!" buttonOKText="OK" visible={this.state.visible}/>
        <Button
          style={{marginTop: 22}}
          onPress={() => {this.setVisible(true)}}
          title="Show Alert">
        </Button>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
