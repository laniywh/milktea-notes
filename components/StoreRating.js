import React from "react";
import { View, Text } from "react-native";
import { Rating } from "react-native-elements";

export default ({ rating, review_count, paddingLeft = 0 }) => {
  const styles = {
    ratingContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
      alignItems: "center",
      paddingLeft: paddingLeft
    }
  };

  return (
    <View style={styles.ratingContainer}>
      <Rating imageSize={15} readonly startingValue={rating} ratingCount={5} />
      <Text>({review_count})</Text>
    </View>
  );
};
