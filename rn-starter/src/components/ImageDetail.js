import React from "react";
import { Text, StyleSheet, View, Button, Image } from "react-native";

// Using props system passing information from parents to child
const ImageDetail = (props) => {
  //   console.log(props);
  return (
    <View>
      <Image source={props.imageSource} />
      <Text>{props.title}</Text>
      <Text>Image score -- {props.imageScore}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageDetail;
