import React, { Component } from "react";
import { View, Text } from "react-native";
import { ListItem } from "react-native-elements";
import { Rating, ButtonGroup, Icon } from "react-native-elements";

class StoreListItem extends Component {
  render() {
    const store = this.props.store;
    return (
      <ListItem
        avatar={{ uri: store.image_url }}
        title={store.name}
        subtitle={
          <View style={styles.ratingContainer}>
            <Rating
              imageSize={15}
              readonly
              startingValue={store.rating}
              ratingCount={5}
            />
            <Text>({store.review_count})</Text>
          </View>
        }
      />
    );
  }
}

const styles = {
  ratingContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    paddingLeft: 10
  }
};

export default StoreListItem;
