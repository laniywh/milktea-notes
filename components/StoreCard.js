import React from "react";
import { View, Text } from "react-native";
import { ButtonGroup, Icon } from "react-native-elements";
import StoreRating from "./StoreRating";

export default props => {
  const component1 = () => <Icon name="navigation" />;
  const component2 = () => <Icon name="pencil" type="foundation" />;

  const buttons = [{ element: component1 }, { element: component2 }];

  return (
    <View>
      <Text>{props.name}</Text>
      <StoreRating {...props} />
      <ButtonGroup buttons={buttons} />
    </View>
  );
};
