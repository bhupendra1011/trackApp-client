import React from "react";
import { SafeAreaView } from "react-navigation";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import Map from "../components/Map";

const TrackCreateScreen = () => {
  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h2>Create a Track 1</Text>
      <Map />
    </SafeAreaView>
  );
};

export default TrackCreateScreen;

const styles = StyleSheet.create({});
