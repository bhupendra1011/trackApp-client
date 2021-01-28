import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Text, Button, Input } from "react-native-elements";
import Spacer from "./components/Spacer";

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>Sign Up for tracker</Text>
      </Spacer>
      <Input
        value={email}
        autoCapitalize={false}
        autoCorrect={false}
        label="Email"
        onChange={setEmail}
      />
      <Spacer />
      <Input
        value={password}
        autoCapitalize={false}
        autoCorrect={false}
        secureTextEntry
        label="Password"
        onChange={setPassword}
      />
      <Spacer>
        <Button title="Sign Up" onPress={() => navigation.navigate("Signin")} />
      </Spacer>
    </View>
  );
};

export default SignupScreen;

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 100,
  },
});
