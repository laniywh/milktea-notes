import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text } from "react-native";
import { Button, Header } from "react-native-elements";
import { StackActions } from "react-navigation";

import * as actions from "../actions";
import NoteForm from "../components/NoteForm";
import { Confirm } from "../components/common";

class NoteScreen extends Component {
  state = { showModal: false };

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
    // this.props.navigation.navigate("store", {});

    const popAction = StackActions.pop({
      n: 1
    });

    this.props.navigation.dispatch(popAction);
  }

  onAccept() {
    const noteId = this.props.navigation.getParam("noteId", {});
    this.props.deleteNote(noteId);
    this.setState({ showModal: false });
    this.props.navigation.navigate("store", {});
  }

  onDecline() {
    this.setState({ showModal: false });
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
          onPress={() => {
            this.setState({ showModal: true });
          }}
        />

        <Confirm
          visible={this.state.showModal}
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}
        >
          Are you sure you want to delete this?
        </Confirm>
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
