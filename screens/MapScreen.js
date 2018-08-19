import React from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { MapView, Location, Permissions } from "expo";
import { connect } from "react-redux";
import { Marker, Callout } from "react-native-maps";
import { Button, Icon } from "react-native-elements";
import StoreCard from "../components/StoreCard";

import * as actions from "../actions";

class MapScreen extends React.Component {
  state = {
    mapLoaded: false,
    region: {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    },
    myLocation: {
      latitude: null,
      longitude: null
    },
    errorMessage: null
  };

  componentWillMount() {
    this._getLocationAsync();
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      this.setState({
        errorMessage: "Permission to access location was denied"
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ location });
    console.log(location);
    const { latitude, longitude } = location.coords;
    this.setState({
      mapLoaded: true,
      region: { ...this.state.region, latitude, longitude },
      myLocation: { latitude, longitude }
    });
  };

  _onRegionChange = () => {
    this.props.updateFetchingState(true);
  };

  _onRegionChangeComplete = region => {
    console.log(region);
    this.setState({ region });
    this.props.updateFetchingState(false);
  };

  _onButtonPress = () => {
    this.props.fetchStores(this.state.region);
  };

  renderStores() {
    return this.props.stores.map(store => {
      return (
        <Marker
          coordinate={store.coordinates}
          title={store.name}
          key={store.id}
        >
          <Callout>
            <StoreCard {...store} />
          </Callout>
        </Marker>
      );
    });
  }

  render() {
    console.log(this.props);
    if (!this.state.mapLoaded) {
      return (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" />
          <Text>Locating you...</Text>
        </View>
      );
    }
    return (
      <View style={{ flex: 1 }}>
        <MapView
          style={{ flex: 1 }}
          initialRegion={this.state.region}
          onRegionChange={this._onRegionChange}
          onRegionChangeComplete={this._onRegionChangeComplete}
        >
          <Marker
            coordinate={this.state.myLocation}
            title="Me"
            image={require("../assets/person_yellow_256.png")}
          />

          {this.renderStores()}
        </MapView>
        <View style={styles.buttonContainer}>
          <Button
            large
            loading={this.props.isFetching}
            backgroundColor="#FBC02D"
            icon={{ name: "search" }}
            title="Search Here"
            onPress={this._onButtonPress}
          />
        </View>
      </View>
    );
  }
}

const styles = {
  buttonContainer: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0
  }
};

function mapPropsToState(state) {
  const { results, isFetching } = state.stores;

  return {
    stores: results,
    isFetching
  };
}

export default connect(
  mapPropsToState,
  actions
)(MapScreen);
