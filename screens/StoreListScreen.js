import React, { Component } from "react";
import { View, Text, FlatList, ScrollView } from "react-native";
import { connect } from "react-redux";
import { Header } from "react-native-elements";
import StoreListItem from "../components/StoreListItem";

class StoreListScreen extends Component {
  renderItem({ item }) {
    return <StoreListItem store={item} />;
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
          renderItem={this.renderItem}
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
