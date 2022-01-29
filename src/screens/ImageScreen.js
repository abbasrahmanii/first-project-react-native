import React from "react";
import { View, StyleSheet, Text } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail title="Forest" />
      <ImageDetail title="Betch" />
      <ImageDetail title="Mountain" />
    </View>
  );
};

export default ImageScreen;
