import React from "react";
import { Text, Dimensions } from "react-native";
import { Card } from "react-native-elements";

export default props => {
  console.log(props);
  const { drinkName, image } = props.note;
  return (
    <Card
      containerStyle={styles.cardContainer}
      image={require("../assets/img500.png")}
      imageProps={{ resizeMode: "cover" }}
    >
      <Text>{drinkName}</Text>
    </Card>
  );
};

const styles = {
  cardContainer: {
    margin: 5,
    width: Dimensions.get("window").width / 2 - 20
  }
};
