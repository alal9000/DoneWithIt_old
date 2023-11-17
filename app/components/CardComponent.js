import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

export default function CardComponent({ title, subTitle, image }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subTitle}>{subTitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 20,
    width: "100%",
    height: "33%"
  },
  image: {
    width: "100%",
    height: "100%"
  },
  title: {
    fontWeight: "600"
  },
  subTitle: {
    color: "teal",
    fontWeight: "600"
  }
});
