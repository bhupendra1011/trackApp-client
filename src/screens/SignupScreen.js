import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const SignupScreen = ({ navigation }) => {
  return (
    <View>
      <Text>SignupScreen</Text>
      <Button
        title="Go to signIn"
        onPress={() => navigation.navigate("Signin")}
      />
      <Button
        title="Go to main flow"
        onPress={() => navigation.navigate("mainFlow")}
      />
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({});
