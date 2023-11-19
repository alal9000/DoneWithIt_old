import ListItem from "./app/components/lists/ListItem";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Screen from './app/components/Screen'
import MessagesScreen from "./app/screens/MessagesScreen";

export default function App() {
  return (
    <Screen>
      <MessagesScreen />
    </Screen>
  );
}
