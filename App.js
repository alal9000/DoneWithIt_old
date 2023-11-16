import { View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        flex: 1,
        flexDirection: "row", // horizontal
        justifyContent: "center", // main
        alignItems: "center", // secondary
        alignContent: "center",
      }}
    >
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: 400,
          flex: -1,
          height: 100
        }}
      />
      <View
        style={{
          backgroundColor: "gold",
          flexBasis: 100,
          width: 100,
          height: 100
        }}
      />
      <View
        style={{
          backgroundColor: "tomato",
          width: 100,
          height: 100
        }}
      />
    </View>
  );
}
