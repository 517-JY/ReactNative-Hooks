import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  // Just want the navigation property from prop
  // const name = "Jiayin Li";
  // const welcomeGreeting = (
  //   <Text style={styles.textStyle1}>Getting started with React Native!</Text>
  // );
  // console.log(props.navigation);
  // Inside navigation, there is a property called navigate which
  // is a function that can change the content that is visible on the screen
  return (
    <View>
      <Text style={styles.textStyle2}>Hi There!</Text>
      <Button
        onPress={() => navigation.navigate("Components")}
        title="Go to Components Demo"
      />
      {/* <TouchableOpacity onPress={() => props.navigation.navigate("ListE")}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity> */}
      <Button
        onPress={() => navigation.navigate("ListE")}
        title="Go to List Demo"
      />
      <Button
        onPress={() => navigation.navigate("ImageE")}
        title="Go to Image Demo"
      ></Button>

      {/* // State Examples */}
      <Button
        onPress={() => navigation.navigate("Counter")}
        title="Go to Counter Screen"
      />

      <Button
        onPress={() => navigation.navigate("Color")}
        title="Go to Color Screen"
      />

      <Button
        onPress={() => navigation.navigate("SquareColor")}
        title="Go to Square Color Screen"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle1: {
    fontSize: 45,
  },
  textStyle2: {
    fontSize: 20,
  },
});

export default HomeScreen;
