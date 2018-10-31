import React, { Component } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { createStackNavigator } from "react-navigation";

import StoreListItem from "../components/StoreListItem";
import StoreListScreen from "./StoreListScreen.js";
import StoreScreen from "./StoreScreen";
import CreateNoteScreen from "./CreateNoteScreen";
import NoteScreen from "./NoteScreen";

class ListScreen extends Component {
  render() {
    const RootNavigator = createStackNavigator(
      {
        storeList: {
          screen: StoreListScreen,
          navigationOptions: {
            headerTitle: "What's Nearby"
          }
        },
        store: StoreScreen,
        createNote: CreateNoteScreen,
        note: NoteScreen
      },
      {
        initialRouteName: "storeList"
      }
    );

    return <RootNavigator />;
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
)(ListScreen);
