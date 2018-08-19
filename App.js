import React from "react";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { Icon } from "react-native-elements";

import MapScreen from "./screens/MapScreen";
import StoreListScreen from "./screens/StoreListScreen";
import NoteScreen from "./screens/NoteScreen";
import FavScreen from "./screens/FavScreen";

export default class App extends React.Component {
  render() {
    const MainNavigator = createMaterialBottomTabNavigator(
      {
        Map: {
          screen: MapScreen,
          navigationOptions: {
            tabBarIcon: ({ focused, tintColor }) => <Icon name="map" />
          }
        },
        List: {
          screen: StoreListScreen,
          navigationOptions: {
            tabBarIcon: ({ focused, tintColor }) => <Icon name="list" />
          }
        },
        Note: {
          screen: NoteScreen,
          navigationOptions: {
            tabBarIcon: ({ focused, tintColor }) => (
              <Icon name="book" type="fontawesome5" />
            )
          }
        },
        Fav: {
          screen: FavScreen,
          navigationOptions: {
            tabBarIcon: ({ focused, tintColor }) => (
              <Icon name="heart" type="entypo" />
            )
          }
        }
      },
      {
        initialRouteName: "Map",
        activeTintColor: "#f0edf6",
        inactiveTintColor: "#3e2465",
        barStyle: { backgroundColor: "#694fad" }
      }
    );

    const store = createStore(reducers, {}, applyMiddleware(thunk));
    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    );
  }
}
