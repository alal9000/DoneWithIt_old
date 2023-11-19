import React from "react";
import ListItem from "../components/lists/ListItem";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Screen from "../components/Screen";

import colors from "../config/colors";

function MyAccountScreen(props) {
  return (
    <Screen>
      <ListItem
        image={require("../assets/mosh.jpg")}
        title="Mosh Hamedani"
        subTitle="programmingwithmosh@gmail.com"
      />
      <ListItem image={require("../assets/mosh.jpg")} title="My Listings" />
      <ListItem />
      <ListItem image={require("../assets/mosh.jpg")} title="Log Out" />
    </Screen>
  );
}

export default MyAccountScreen;
