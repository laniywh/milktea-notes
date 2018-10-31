import React, { Component } from "react";
import {
  createStackNavigator,
  createMaterialTopTabNavigator
} from "react-navigation";
import NotesTabScreen from "./NotesTabScreen";
import StoresTabScreen from "./StoresTabScreen";
import NoteScreen from "./NoteScreen";

class NotesScreen extends Component {
  render() {
    const RootNavigator = createStackNavigator(
      {
        main: TopTabNavigator,
        note: NoteScreen
      },
      {
        initialRouteName: "main",
        headerMode: "none"
      }
    );

    return <RootNavigator />;
  }
}

const RouteConfigs = {
  notesTab: {
    screen: NotesTabScreen,
    navigationOptions: {
      tabBarLabel: "Notes"
    }
  },
  storesTab: {
    screen: StoresTabScreen,
    navigationOptions: {
      tabBarLabel: "Stores"
    }
  }
};

const TabNavigatorConfig = {
  initialRouteName: "notesTab",
  tabBarOptions: {
    tabStyle: {
      height: 70,
      paddingTop: 30
    }
  }
};

const TopTabNavigator = createMaterialTopTabNavigator(
  RouteConfigs,
  TabNavigatorConfig
);

export default NotesScreen;
