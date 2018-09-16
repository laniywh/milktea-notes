import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text } from "react-native";
import { Button, Header } from "react-native-elements";

import * as actions from "../actions";
import NoteForm from "../components/NoteForm";

class NoteScreen extends Component {
  componentWillMount() {
    const { noteObjects } = this.props;
    const noteId = this.props.navigation.getParam("noteId", {});

    // populate note form with current note info
    _.each(noteObjects[noteId], (value, prop) => {
      this.props.updateNoteForm({ prop, value });
    });
  }

  onEdit() {
    const noteId = this.props.navigation.getParam("noteId", {});
    const noteForm = this.props.noteForm;
    this.props.editNote({ noteId, noteForm });
  }

  onDelete() {
    const storeId = this.props.navigation.getParam("storeId", {});
    const noteForm = this.props.noteForm;
    this.props.saveNote({ storeId, noteForm });
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
        <Button
          large
          containerViewStyle={{ marginBottom: 10 }}
          title="Save"
          onPress={this.onEdit.bind(this)}
        />
        <Button
          large
          title="Delete"
          backgroundColor="#B71C1C"
          onPress={this.onDelete.bind(this)}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { noteForm, notes } = state;
  return {
    noteForm,
    noteObjects: notes.noteObjects
  };
};

export default connect(
  mapStateToProps,
  actions
)(NoteScreen);
