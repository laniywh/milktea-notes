import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";

import * as actions from "../actions";
import NoteList from "../components/NoteList";

class NotesScreen extends Component {
  loginView() {
    return (
      <View style={styles.loginView}>
        <Text>You must login to create notes!</Text>
        <Button
          large
          onPress={this.props.facebookLogin}
          title="Login with Facebook"
        />
      </View>
    );
  }

  render() {
    const { noteObjects, noteArray } = this.props.notes;
    const { navigation } = this.props;
    return <NoteList notesArray={noteArray} navigation={navigation} />;
  }
}

const styles = {
  loginView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
};

const mapStateToProps = state => {
  const { notes } = state;
  return {
    notes
  };
};

export default connect(
  mapStateToProps,
  actions
)(NotesScreen);
