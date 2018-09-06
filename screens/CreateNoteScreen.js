import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text } from "react-native";
import { Button, Header } from "react-native-elements";

import * as actions from "../actions";
import NoteForm from "../components/NoteForm";

class CreateNoteScreen extends Component {
  onSave() {
    const storeId = this.props.navigation.getParam("storeId", {});
    const noteForm = this.props.noteForm;
    this.props.saveNote({ storeId, noteForm });
  }

  render() {
    console.log(`create note screen props:`);
    console.log(this.props);
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
        <Button large title="Save" onPress={this.onSave.bind(this)} />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    noteForm: {
      ...state.noteForm
    }
  };
};

export default connect(
  mapStateToProps,
  actions
)(CreateNoteScreen);
