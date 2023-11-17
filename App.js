import { View } from "react-native";
import CardComponent from "./app/components/CardComponent";

export default function App() {
  return (
    <View style={{ backgroundColor: 'f8f4f4'}}>

      <CardComponent
        title="red jacet for sale"
        subTitle="$100"
        image={require("./app/assets/jacket.jpg")}
      />
    </View>
  );
}
