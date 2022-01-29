// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View } from "react-native";
// import ComponentsScreens from "./src/screen/ComponentsScreens";
// import HomeScreen from "./src/screen/HomeScreen";
// import ListScreen from "./src/screen/ListScreen";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <ListScreen />
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
import React from "react";
import HomeScreen from "./src/screens/HomeScreen";
import ListScreen from "./src/screens/ListScreen";
import ComponentsScreens from "./src/screens/ComponentsScreens";
import ImageScreen from "./src/screens/ImageScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          // options={{ title: "Welcome" }}
        />
        <Stack.Screen name="List" component={ListScreen} />
        <Stack.Screen name="Components" component={ComponentsScreens} />
        <Stack.Screen name="Image" component={ImageScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
