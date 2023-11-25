import React from "react";
import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";

import AppText from "./AppText";
import colors from "../config/colors";
import { useNetInfo } from "@react-native-community/netinfo";

function OfflineNotice(props) {
  const netInfo = useNetInfo();

  if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false)
    return (
      <View style={styles.container}>
        <AppText style={styles.text}>No Internet Connection</AppText>
      </View>
    );

  return null;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    elevation: Platform.OS === "android" ? 1 : 0,
    height: 50,
    width: "100%",
    position: "absolute",
    top: Constants.statusBarHeight,
    zIndex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: colors.white
  }
});

export default OfflineNotice;
