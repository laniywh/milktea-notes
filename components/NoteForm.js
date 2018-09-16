import React, { Component } from "react";
import { connect } from "react-redux";
import { View } from "react-native";
import { FormLabel, FormInput, Rating } from "react-native-elements";

import * as actions from "../actions";

class NoteForm extends Component {
  render() {
    // console.log(this.props);
    return (
      <View>
        <FormLabel>Drink Name</FormLabel>
        <FormInput
          value={this.props.drinkName}
          inputStyle={styles.input}
          onChangeText={text =>
            this.props.updateNoteForm({ prop: "drinkName", value: text })
          }
        />
        <FormLabel>Tea Rating</FormLabel>
        <Rating
          startingValue={Number(this.props.teaRating)}
          type="star"
          fractions={1}
          showRating
          onFinishRating={rating =>
            this.props.updateNoteForm({ prop: "teaRating", value: rating })
          }
          imageSize={20}
        />
        <FormLabel>Boba Rating</FormLabel>
        <Rating
          startingValue={Number(this.props.bobaRating)}
          type="star"
          fractions={1}
          showRating
          onFinishRating={rating =>
            this.props.updateNoteForm({ prop: "bobaRating", value: rating })
          }
          imageSize={20}
        />
      </View>
    );
  }
}

const styles = {
  input: {
    paddingLeft: 5
  }
};

const mapStateToProps = state => {
  const { drinkName, teaRating, bobaRating, notes, avgRating } = state.noteForm;
  return { drinkName, teaRating, bobaRating, notes, avgRating };
};

export default connect(
  mapStateToProps,
  actions
)(NoteForm);
