import React from "react";
import { Text } from "react-native";

import hi from "./styles";

function AppText({ children, style }) {
  return <Text style={[hi.text, style]}>{children}</Text>;
}

export default AppText;
