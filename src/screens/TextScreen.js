import React, { useState } from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";

const TextScreen = () => {
  const [password, setPassword] = useState("");
  return (
    <View>
      <Text>Enter Password:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none" //important
        autoCorrect={false} //important
        onChangeText={(newPass) => setPassword(newPass)}
        value={password}
      />
      {password && password.length < 5 ? (
        <Text>Password must be longer than 5 characters</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
  },
});

export default TextScreen;
