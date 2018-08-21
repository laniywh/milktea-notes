import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text } from "react-native";
import Expo from "expo";

import * as actions from "../actions";

class NoteScreen extends Component {
  componentWillMount() {
    this.props.googleLogin();
  }

  render() {
    return (
      <View>
        <Text>NoteScreen</Text>
        <Text>NoteScreen</Text>
        <Text>NoteScreen</Text>
        <Text>NoteScreen</Text>
        <Text>NoteScreen</Text>
        <Text>NoteScreen</Text>
      </View>
    );
  }
}

export default connect(
  null,
  actions
)(NoteScreen);
