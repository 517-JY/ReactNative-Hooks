import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

// useState watch variables value for us
// When a component is rerendered, all of its children get rerendered too
// Everytime we create an instance of a component, each copy of it has its own separate pices of state

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);
  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          // Don't modify a state variable directly like this!
          //   counter++;
          // Any time we call the set counter function,
          // React is going to automatically rerun the entire function
          setCounter(counter + 1);
        }}
      />

      <Button
        title="Decrease"
        onPress={() => {
          setCounter(counter - 1);
          console.log(counter);
        }}
      />
      <Text>Current Counter : {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
