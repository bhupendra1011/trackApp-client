import React, { useContext, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Text, Button, Input } from "react-native-elements";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { state, signup } = useContext(AuthContext);

  const { errorMessage } = state;

  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>Sign Up for tracker</Text>
      </Spacer>
      <Input
        value={email}
        autoCapitalize="false"
        autoCorrect="false"
        label="Email"
        onChangeText={setEmail}
      />
      <Spacer />
      <Input
        value={password}
        autoCapitalize="false"
        autoCorrect="false"
        secureTextEntry
        label="Password"
        onChangeText={setPassword}
      />
      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}
      <Spacer>
        <Button
          title="Sign Up"
          onPress={() => {
            signup({ email, password });
          }}
        />
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
  errorMessage: {
    fontSize: 16,
    marginLeft: 15,
    marginTop: 15,
    color: "red",
  },
});
