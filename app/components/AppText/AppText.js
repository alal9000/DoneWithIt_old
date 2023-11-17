import React from "react";
import { Text } from "react-native";

import hi from "./styles";

function AppText({ children }) {
  return <Text style={hi.text}>{children}</Text>;
}

export default AppText;
