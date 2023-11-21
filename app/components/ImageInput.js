import React, { useEffect, useState } from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

function ImageInput({ imageUri, onChangeImage, onSelectImage }) {
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!result.granted)
      alert("you need to enable permission to access the library");
  };

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.canceled) setImageUri(result.uri);
    } catch (error) {
      console.log("error reading image");
    }
  };

  useEffect(() => {
    requestPermission();
  }, []);

  return (
    <TouchableOpacity onPress={onSelectImage}>
      <View style={styles.container}>
        <MaterialCommunityIcons name="camera" size={50} color="grey" />
      </View>
      <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    height: 150,
    width: 150,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default ImageInput;
