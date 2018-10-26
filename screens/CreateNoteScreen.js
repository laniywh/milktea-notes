import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text } from "react-native";
import { Button, Header } from "react-native-elements";

import * as actions from "../actions";
import NoteForm from "../components/NoteForm";

class CreateNoteScreen extends Component {
  componentWillMount() {
    this.props.clearForm();
  }
  onSave() {
    const { saveNote, sortNotes, navigation, location } = this.props;
    const storeId = this.props.navigation.getParam("storeId", {});
    const noteForm = this.props.noteForm;
    saveNote({ storeId, noteForm });
    navigation.navigate("store", {});
    sortNotes(location);
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
        <Button large title="Save" onPress={this.onSave.bind(this)} />
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { noteForm, location } = state;
  return {
    noteForm,
    location
  };
};

export default connect(
  mapStateToProps,
  actions
)(CreateNoteScreen);
