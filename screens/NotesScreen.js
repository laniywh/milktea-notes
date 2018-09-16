import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";

import * as actions from "../actions";

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
    // if (this.props.loggedIn) {
    return (
      <View>
        <Text>NoteScreen</Text>
        <Text>NoteScreen</Text>
        <Text>NoteScreen</Text>
        <Text>NoteScreen</Text>
        <Text>{this.props.token}</Text>
        <Text>{this.props.loggedIn}</Text>
      </View>
    );
    // }
    // return this.loginView();
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
  return {
    token: state.auth.token,
    loggedIn: state.auth.token === "" ? false : true
  };
};

export default connect(
  mapStateToProps,
  actions
)(NotesScreen);
