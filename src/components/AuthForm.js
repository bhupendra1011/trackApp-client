import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Text, Button, Input } from "react-native-elements";
import Spacer from "./Spacer";

const AuthForm = ({ headerText, errorMessage, submitButtonText, onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <Spacer>
        <Text h3>{headerText}</Text>
      </Spacer>
      <Input
        value={email}
        autoCapitalize="none"
        autoCorrect={false}
        label="Email"
        onChangeText={setEmail}
      />
      <Spacer />
      <Input
        value={password}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
        label="Password"
        onChangeText={setPassword}
      />
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
      <Spacer>
        <Button
          title={submitButtonText}
          onPress={() => {
            onSubmit({ email, password });
          }}
        />
      </Spacer>
    </>
  );
};

export default AuthForm;

const styles = StyleSheet.create({
  error: {
    fontSize: 16,
    marginLeft: 15,
    marginTop: 15,
    color: "red",
  },
});
