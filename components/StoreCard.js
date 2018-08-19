import React from "react";
import { View, Text } from "react-native";
import { Rating, ButtonGroup, Icon } from "react-native-elements";

export default ({ name, rating, review_count }) => {
  const component1 = () => <Icon name="navigation" />;
  const component2 = () => <Icon name="pencil" type="foundation" />;

  const buttons = [{ element: component1 }, { element: component2 }];

  return (
    <View>
      <Text>{name}</Text>
      <View style={styles.ratingContainer}>
        <Rating
          imageSize={15}
          readonly
          startingValue={rating}
          ratingCount={5}
        />
        <Text>({review_count})</Text>
      </View>
      <ButtonGroup buttons={buttons} />
    </View>
  );
};

const styles = {
  ratingContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center"
  }
};
