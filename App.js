import React from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { MapView, Location, Permissions } from "expo";

export default class App extends React.Component {
  state = {
    mapLoaded: false,
    region: {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
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
      region: { ...this.state.region, latitude, longitude }
    });
  };

  render() {
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
    return <MapView style={{ flex: 1 }} initialRegion={this.state.region} />;
  }
}
