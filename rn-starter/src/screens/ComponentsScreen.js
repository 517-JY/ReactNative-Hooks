// "react" is about how different components work together
import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  //Cannot show a JavaScript object inside of a text element.
  //   const greetings = "Hello Jiayin";
  //   const greetings2 = <Text style={styles.textStyle}>Hello World!</Text>;
  //   return (
  //     <View>
  //       <Text style={styles.textStyle}>This is the components screen</Text>
  //       <Text>Hi there!</Text>
  //       <Text>{greetings}</Text>
  //       {greetings2}
  //     </View>
  //   );
  const name = "Jiayin Li";
  const welcomeGreeting = (
    <Text style={styles.textStyle1}>Getting started with React Native!</Text>
  );
  return (
    <View>
      {welcomeGreeting}
      <Text style={styles.textStyle2}>My name is {name}</Text>
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

export default ComponentsScreen;
