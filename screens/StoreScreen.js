import React, { Component } from "react";
import { View, FlatList } from "react-native";
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
      return <View style={styles.notesContainer} />;
    }

    // create array of store notes
    const notes = storeNotes[storeId].map(noteId => {
      return this.props.notes.noteObjects[noteId];
    });

    return (
      <FlatList
        style={styles.notesContainer}
        data={notes}
        renderItem={this.renderItem}
        keyExtractor={(note, index) => {
          index.toString();
        }}
      />
    );
  }

  renderItem({ item }) {
    console.log("renderItem");
    console.log(item);
    return <NoteCard note={item} />;
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
    flex: 1
    // flexDirection: "row",
    // flexWrap: "wrap"
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
