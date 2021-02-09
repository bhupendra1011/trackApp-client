import React, { useEffect, useState, useContext } from "react";
import { Context as LocationContext } from "../context/LocationContext";
import { SafeAreaView } from "react-navigation";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import {
  requestPermissionsAsync,
  watchPositionAsync,
  Accuracy,
} from "expo-location";
import Map from "../components/Map";
// comment below mock location when testing on a real device
import "../_mockLocation";

const TrackCreateScreen = () => {
  const [err, setErr] = useState(null);

  const { addLocation } = useContext(LocationContext);

  useEffect(() => {
    startWatching();
  }, []);

  const startWatching = async () => {
    try {
      const { granted } = await requestPermissionsAsync();
      await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10,
        },
        (location) => {
          addLocation(location);
        }
      );
      setErr(null);
      if (!granted) {
        throw new Error("Location permission not granted");
      }
    } catch (e) {
      setErr(e);
    }
  };
  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h2>Create a Track </Text>
      <Map />
      {err ? <Text>Please Enable location services</Text> : null}
    </SafeAreaView>
  );
};

export default TrackCreateScreen;

const styles = StyleSheet.create({});
