import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ComponentsScreens = () => {
  const name = "Abbas";
  return (
    <View>
      <Text style={styles.textStyle}>Getting started with react native!</Text>
      <Text style={styles.subHeaderStyle}>My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
  subHeaderStyle: {
    fontSize: 20,
  },
});

export default ComponentsScreens;
