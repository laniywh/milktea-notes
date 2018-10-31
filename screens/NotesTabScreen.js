import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, Picker } from "react-native";
import { Header, Button } from "react-native-elements";

import * as actions from "../actions";
import NoteList from "../components/NoteList";
import {
  DATE_CREATED_INC,
  TEA_RATING,
  BOBA_RATING,
  DISTANCE,
  OVERALL_RATING
} from "../reducers/sort_methods";

class NotesTabScreen extends Component {
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
    const { noteArray, currentSortMethod } = this.props.notes;
    const { navigation, changeSortMethod, location } = this.props;
    console.log("navigation prop in notestabscreen");
    console.log(navigation);

    return (
      <View>
        <Picker
          selectedValue={currentSortMethod}
          style={styles.picker}
          onValueChange={sortMethod => {
            changeSortMethod({ sortMethod, location });
          }}
        >
          <Picker.Item label="distance" value={DISTANCE} />
          <Picker.Item label="overall rating" value={OVERALL_RATING} />
          <Picker.Item label="tea rating" value={TEA_RATING} />
          <Picker.Item label="boba rating" value={BOBA_RATING} />
          <Picker.Item label="date added" value={DATE_CREATED_INC} />
        </Picker>
        <NoteList notesArray={noteArray} navigation={navigation} />
      </View>
    );
  }
}

const styles = {
  loginView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  picker: {
    width: 170
  }
};

const mapStateToProps = state => {
  const { notes, location } = state;
  return {
    notes,
    location
  };
};

export default connect(
  mapStateToProps,
  actions
)(NotesTabScreen);
