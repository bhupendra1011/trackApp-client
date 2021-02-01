import React, { useContext } from "react";
import { SafeAreaView } from "react-navigation";
import { Button } from "react-native-elements";
import { StyleSheet, Text, View } from "react-native";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);
  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text> AccountScreen</Text>
      <Spacer>
        <Button title="Sign Out" onPress={signout} />
      </Spacer>
    </SafeAreaView>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({});
