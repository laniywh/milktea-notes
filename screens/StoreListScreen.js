import React, { Component } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { Header } from "react-native-elements";
import StoreListItem from "../components/StoreListItem";

class StoreListScreen extends Component {
  onPress = item => {
    this.props.navigation.navigate("store", { store: item });
  };

  renderItem({ item }) {
    return (
      <TouchableOpacity onPress={() => this.onPress(item)}>
        <StoreListItem store={item} />
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View>
        <Header
          leftComponent={{ icon: "menu", color: "#fff" }}
          centerComponent={{ text: "Milktea Notes", style: { color: "#fff" } }}
        />
        <FlatList
          data={this.props.stores}
          renderItem={this.renderItem.bind(this)}
          keyExtractor={store => store.id}
        />
      </View>
    );
  }
}

function mapStateToProps(state) {
  const { results } = state.stores;

  return {
    stores: results
  };
}

export default connect(
  mapStateToProps,
  null
)(StoreListScreen);
