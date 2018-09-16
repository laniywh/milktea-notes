import React from "react";
import { Text, View, Modal, TouchableOpacity } from "react-native";
import { Card, Button } from "react-native-elements";

const Confirm = ({ children, visible, onAccept, onDecline }) => {
  const {
    containerStyle,
    buttonContainer,
    textButtonStyle,
    cardSectionStyle
  } = styles;

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={() => {}}
    >
      <View style={containerStyle}>
        <Card>
          <Text>{children}</Text>
          <View style={buttonContainer}>
            <TouchableOpacity onPress={onAccept}>
              <Text style={textButtonStyle}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onDecline}>
              <Text style={textButtonStyle}>No</Text>
            </TouchableOpacity>
          </View>
        </Card>
      </View>
    </Modal>
  );
};

const styles = {
  cardSectionStyle: {
    justifyContent: "center"
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  textButtonStyle: {
    fontSize: 18,
    fontWeight: "bold",
    lineHeight: 40,
    marginLeft: 30,
    marginRight: 15
  },
  containerStyle: {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    position: "relative",
    flex: 1,
    justifyContent: "center"
  }
};

export { Confirm };
