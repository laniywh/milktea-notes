import React, { Component } from "react";
import { View, FlatList, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { Button } from "react-native-elements";
import StoreInfo from "../components/StoreInfo";
import NoteCard from "../components/NoteCard";

class StoreScreen extends Component {
  renderNotes(storeNotes, storeId) {
    // console.log(storeNotes);
    // console.log(storeId);
    // console.log(storeNotes.storeId);
    if (!storeNotes[storeId]) {
      return <View style={{ flex: 1 }} />;
    }

    // create array of store notes
    const notes = storeNotes[storeId].map(noteId => {
      return this.props.notes.noteObjects[noteId];
    });

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

  renderItem({ item }) {
    // console.log("renderItem");
    // console.log(item);
    return (
      <TouchableOpacity onPress={() => this.onNotePress(item)}>
        <NoteCard note={item} />
      </TouchableOpacity>
    );
    // return <NoteCard note={item} />;
  }

  onNotePress(item) {
    // navigate to note screen
    console.log("press note");
    console.log(item);
    this.props.navigation.navigate("note", { noteId: item.id });
  }

  onCreateNote() {
    // navigate to create note screen
    const store = this.props.navigation.getParam("store", {});
    this.props.navigation.navigate("createNote", { storeId: store.id });
  }

  renderAddButton() {
    return (
      <View style={styles.buttonContainer}>
        <Button
          large
          title="New Note"
          icon={{ name: "add" }}
          onPress={this.onCreateNote.bind(this)}
        />
      </View>
    );
  }

  render() {
    console.log(this.props);
    const store = this.props.navigation.getParam("store", {});

    return (
      <View style={{ flex: 1 }}>
        <View style={styles.header}>
          <StoreInfo {...store} />
        </View>
        {this.renderNotes(this.props.storeNotes, store.id)}

        {this.renderAddButton()}
      </View>
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
  const { notes, storeNotes } = state;
  return {
    storeNotes,
    notes
  };
}

export default connect(
  mapStateToProps,
  null
)(StoreScreen);
