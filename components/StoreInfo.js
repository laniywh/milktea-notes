import React from "react";
import { View, Text } from "react-native";
import StoreRating from "./StoreRating";

export default props => {
  const { name, location } = props;
  console.log(props);

  return (
    <View>
      <Text style={styles.name}>{name}</Text>
      <StoreRating {...props} />
      <Text style={styles.address}>{address(location)}</Text>
    </View>
  );
};

function address(location) {
  return location.display_address.join(", ");
}

const styles = {
  name: {
    fontSize: 20,
    color: "#fff"
  },
  address: {
    color: "#fff"
  }
};
