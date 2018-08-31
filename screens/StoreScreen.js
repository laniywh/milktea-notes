import React, { Component } from "react";
import { View } from "react-native";
import { Header } from "react-native-elements";
import StoreInfo from "../components/StoreInfo";

class StoreScreen extends Component {
  render() {
    const store = this.props.navigation.getParam("store", {});

    return (
      <View style={{ flex: 1 }}>
        {/* <Header centerComponent={{ text: store.name }} /> */}
        <View style={styles.header}>
          <StoreInfo {...store} />
        </View>
      </View>
    );
  }
}

const styles = {
  header: {
    backgroundColor: "#FBC02D",
    paddingTop: 30,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10
  }
};

export default StoreScreen;
