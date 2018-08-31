import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import { Icon } from "react-native-elements";
import StoreInfo from "../components/StoreInfo";

class StoreScreen extends Component {
  render() {
    console.log(this.props);
    const store = this.props.navigation.getParam("store", {});

    return (
      <View style={{ flex: 1 }}>
        {/* <Header centerComponent={{ text: store.name }} /> */}
        <View style={styles.header}>
          <StoreInfo {...store} />
        </View>
        {showNotes(this.props.notes, store.id)}
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
    justifyContent: "center",
    alignItems: "center"
  }
};

function showNotes(notes, storeId) {
  if (!notes.storeId) {
    // no notes under current store
    return (
      <View style={styles.notesContainer}>
        <Icon name="circle-with-plus" type="entypo" size={70} color="#BDBDBD" />
      </View>
    );
  }

  return (
    <View>
      <Text>Notes</Text>
      <Text>Notes</Text>
      <Text>Notes</Text>
      <Text>Notes</Text>
    </View>
  );
}

function mapStateToProps(state) {
  return {
    notes: state.notes
  };
}

export default connect(
  mapStateToProps,
  null
)(StoreScreen);
