import React from "react";
import { Text, Dimensions } from "react-native";
import { Card } from "react-native-elements";

export default props => {
  // const { name, image } = props;
  return (
    <Card
      containerStyle={{ width: Dimensions.get("window").width / 2 - 20 }}
      image={require("../assets/img500.png")}
      imageProps={{ resizeMode: "cover" }}
    >
      <Text>Milktea</Text>
    </Card>
  );
};
