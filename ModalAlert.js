import React, { Component } from 'react';
import {
  StyleSheet,
  Modal,
  Text,
  View,
  Button
} from 'react-native';

export default class ModalAlert extends Component<{}> {
  state = {
    visible: false,
  };

  setVisible(visible) {
    this.setState({visible: visible});
  }

  constructor (props) {
    super(props)
    this.state = {
      visible: props.visible
    }
  }

  componentWillReceiveProps(newProps){
    this.setState({visible: newProps.visible})
  }

  render() {
    return (
      <Modal
      animationType="none"
      transparent={true}
      visible={this.state.visible}
      onRequestClose={()=>{}}
    >
      <View
        style={styles.alertContainer}
      >
        <View style={styles.alertView}>
          <View style={styles.alertContentView}>
          <Text>{this.props.message}</Text>
            <Button
              onPress={() => {this.setVisible(false)}}
              title={this.props.buttonOKText}>
            </Button>
          </View>
        </View>
      </View>
    </Modal>
    );
  }
}

const styles = StyleSheet.create({
  alertContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.8)'
  },
  alertView: {
    width: 300,
    height: 150,
    backgroundColor: 'white',
    borderStyle: 'solid',
    borderRadius: 5
  },
  alertContentView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

