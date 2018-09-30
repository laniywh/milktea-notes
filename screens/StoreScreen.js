import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import { Button } from "react-native-elements";
import StoreInfo from "../components/StoreInfo";
import NoteList from "../components/NoteList";

class StoreScreen extends Component {
  renderNotes(storeNotes, storeId) {
    if (!storeNotes[storeId]) {
      return <View style={{ flex: 1 }} />;
    }

    return (
      <NoteList
        notesArray={storeNotes[storeId]}
        navigation={this.props.navigation}
      />
    );
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
