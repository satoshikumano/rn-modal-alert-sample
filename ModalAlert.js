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
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  constructor (props) {
    super(props)
  }

  render() {
    return (
      <View style={{marginTop: 22}}>
        <Modal
          animationType="none"
          transparent={true}
          visible={this.state.modalVisible}
        >
          <View
            style={styles.alertContainer}
          >
            <View style={styles.alertView}>
              <View style={styles.alertContentView}>
              <Text>{this.props.message}</Text>
                <Button
                  onPress={() => {this.setModalVisible(false)}}
                  title={this.props.buttonOKText}>
                </Button>
              </View>
            </View>
          </View>
        </Modal>
        <Button
          style={{marginTop: 22}}
          onPress={() => {this.setModalVisible(true)}}
          title="Show Alert">
        </Button>
      </View>
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

