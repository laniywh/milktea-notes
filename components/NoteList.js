import React, { Component } from "react";
import { connect } from "react-redux";
import { FlatList, TouchableOpacity } from "react-native";
import NoteCard from "../components/NoteCard";

// take an array of note IDs and render a list of notes
class NoteList extends Component {
  renderItem({ item }) {
    return (
      <TouchableOpacity onPress={() => this.onNotePress(item)}>
        <NoteCard note={item} />
      </TouchableOpacity>
    );
  }

  onNotePress(item) {
    // navigate to note screen
    this.props.navigation.navigate("note", { noteId: item.id });
  }

  createNotes(notesArray) {
    // create array of store notes
    return notesArray.map(noteId => {
      return this.props.notes.noteObjects[noteId];
    });
  }

  render() {
    const { notesArray } = this.props;
    const notes = this.createNotes(notesArray);

    return (
      <FlatList
        contentContainerStyle={styles.notesContainer}
        numColumns={2}
        data={notes}
        renderItem={this.renderItem.bind(this)}
        keyExtractor={(note, index) => {
          return index.toString();
        }}
      />
    );
  }
}

const styles = {
  header: {
    backgroundColor: "#FBC02D",
    paddingTop: 30,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10
  },
  notesContainer: {
    marginBottom: 15,
    alignItems: "center"
  },
  buttonContainer: {
    paddingBottom: 10
  }
};

function mapStateToProps(state) {
  const { notes } = state;
  return {
    notes
  };
}

export default connect(
  mapStateToProps,
  null
)(NoteList);
