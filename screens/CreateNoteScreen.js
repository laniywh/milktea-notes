import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text } from "react-native";
import { Button, Header } from "react-native-elements";

import * as actions from "../actions";
import NoteForm from "../components/NoteForm";

class CreateNoteScreen extends Component {
  onChangeNote({ prop, value }) {}
  onChangeRating({ prop, rating }) {
    console.log(prop);
    console.log(rating);
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <Header
          leftComponent={{
            icon: "chevron-thin-left",
            type: "entypo",
            color: "#fff"
          }}
          centerComponent={{ text: "Create a Note", style: { color: "#fff" } }}
        />
        <NoteForm />
        <Button large title="Save" onPress={this.props.saveNote} />
      </View>
    );
  }
}

export default connect(
  null,
  actions
)(CreateNoteScreen);
