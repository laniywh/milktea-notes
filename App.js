import React from "react";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import { createStackNavigator } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { Icon } from "react-native-elements";

import MapScreen from "./screens/MapScreen";
import StoreListScreen from "./screens/StoreListScreen";
import NoteScreen from "./screens/NoteScreen";
import FavScreen from "./screens/FavScreen";
import StoreScreen from "./screens/StoreScreen";
import CreateNoteScreen from "./screens/CreateNoteScreen";

export default class App extends React.Component {
  render() {
    const RootNavigator = createStackNavigator(
      {
        main: MainNavigator,
        store: StoreScreen,
        createNote: CreateNoteScreen
      },
      {
        initialRouteName: "main",
        headerMode: "none"
      }
    );

    const store = createStore(reducers, {}, applyMiddleware(thunk));
    return (
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    );
  }
}

const MainNavigator = createMaterialBottomTabNavigator(
  {
    map: {
      screen: MapScreen,
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => <Icon name="map" />
      }
    },
    list: {
      screen: StoreListScreen,
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => <Icon name="list" />
      }
    },
    note: {
      screen: NoteScreen,
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => (
          <Icon name="book" type="fontawesome5" />
        )
      }
    },
    fav: {
      screen: FavScreen,
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => (
          <Icon name="heart" type="entypo" />
        )
      }
    }
  },
  {
    initialRouteName: "map",
    activeTintColor: "#f0edf6",
    inactiveTintColor: "#3e2465",
    barStyle: { backgroundColor: "#694fad" }
  }
);
