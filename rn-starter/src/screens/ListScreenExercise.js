import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

// props are configuration options we specify when we write out a JSX element
const ListScreenExercise = () => {
  // The requirement of a key property 1) it must be a string; 2) it must be unique

  const friends = [
    // { name: "Friend #1", key: "1" },
    // { name: "Friend #2", key: "2" },
    // { name: "Friend #3", key: "3" },
    // { name: "Friend #4", key: "4" },
    // { name: "Friend #5", key: "5" },
    // { name: "Friend #6", key: "6" },
    // { name: "Friend #7", key: "7" },
    // { name: "Friend #8", key: "8" },
    // { name: "Friend #9", key: "9" },
    // Another method for adding a key is using keyExtractor
    { name: "Friend #1", age: "20" },
    { name: "Friend #2", age: "45" },
    { name: "Friend #3", age: "32" },
    { name: "Friend #4", age: "27" },
    { name: "Friend #5", age: "53" },
    { name: "Friend #7", age: "30" },
  ];
  // return (
  //   <FlatList
  //     horizontal={true}
  //     // hidden the scroll bar
  //     showsHorizontalScrollIndicator={false}
  //     keyExtractor={(friend) => friend.name}
  //     data={friends}
  //     renderItem={({ item }) => {
  //       // element === {item:{name:'Friend #1'}, index:0}
  //       // item === {name:'Friend #1'}
  //       return <Text style={styles.textStyle}>{item.name}</Text>;
  //     }}
  //   />
  // );

  return (
    <FlatList
      keyExtractor={(friend) => {
        friend.name;
      }}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 5,
  },
});

export default ListScreenExercise;
