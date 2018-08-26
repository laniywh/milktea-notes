import React, { Component } from "react";
import { View } from "react-native";
import { Header } from "react-native-elements";

class StoreScreen extends Component {
  render() {
    const store = this.props.navigation.getParam("store", {});

    return (
      <View style={{ flex: 1 }}>
        <Header centerComponent={{ text: store.name }} />
      </View>
    );
  }
}

export default StoreScreen;
