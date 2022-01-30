import React from "react";
import { View, StyleSheet, Text } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.TextStyleOne} />
      <View style={styles.TextStyleOTwo} />
      <View style={styles.TextStyleThree} />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: "black",
    height: 200,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  TextStyleOne: {
    backgroundColor: "red",
    width: 100,
    height: 100,
  },
  TextStyleOTwo: {
    backgroundColor: "green",
    width: 100,
    height: 100,
    top: 50,
  },
  TextStyleThree: {
    backgroundColor: "blue",
    width: 100,
    height: 100,
  },
});

export default BoxScreen;
