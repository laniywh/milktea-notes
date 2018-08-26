import React, { Component } from "react";
import { View, Text } from "react-native";
import { ListItem } from "react-native-elements";
import { ButtonGroup, Icon } from "react-native-elements";
import { NavigationActions } from "react-navigation";
import StoreRating from "./StoreRating";

class StoreListItem extends Component {
  render() {
    const store = this.props.store;
    return (
      <ListItem
        avatar={{ uri: store.image_url }}
        title={store.name}
        subtitle={<StoreRating {...store} paddingLeft={10} />}
        rightIcon={
          <View>
            <Icon name="navigation" />
            <Text>{(store.distance / METERS_IN_A_MILE).toFixed(1)} mi.</Text>
          </View>
        }
      />
    );
  }
}

const METERS_IN_A_MILE = 1609.344;

export default StoreListItem;
