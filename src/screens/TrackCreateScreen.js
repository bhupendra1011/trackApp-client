import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-navigation";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import {
  requestPermissionsAsync,
  watchPositionAsync,
  Accuracy,
} from "expo-location";
import Map from "../components/Map";
import "../_mockLocation";

const TrackCreateScreen = () => {
  const [err, setErr] = useState(null);

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
        (location) => console.log(location)
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
