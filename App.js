import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import jwtDecode from "jwt-decode";

import { Button } from "react-native";
import Screen from "./app/components/Screen";
import AppNavigator from "./app/navigation/AppNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import AuthNavigator from "./app/navigation/authNavigator";
import OfflineNotice from "./app/components/OfflineNotice";
import AuthContext from "./app/auth/context";
import storage from "./app/auth/storage";

const Link = () => {
  const navigation = useNavigation();

  return (
    <Button title="Click" onPress={() => navigation.navigate("TweetDetails")} />
  );
};

const Tweets = ({ navigation }) => (
  <Screen>
    <Text>Tweets</Text>
    <Button
      title="View Tweet"
      onPress={() => navigation.navigate("TweetDetails", { id: 1 })}
    />
  </Screen>
);

const TweetDetails = ({ route }) => (
  <Screen>
    <Text>Tweet Details {route.params.id}</Text>
  </Screen>
);

const Stack = createStackNavigator();
const FeedNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: "dodgerblue" },
      headerTintColor: "white",
      headerTitleAlign: "center"
    }}
  >
    <Stack.Screen
      name="Tweets"
      component={Tweets}
      options={{
        headerStyle: { backgroundColor: "tomato" },
        headerTintColor: "white",
        headerTitleAlign: "center",
        headerShown: false
      }}
    />
    <Stack.Screen
      name="TweetDetails"
      component={TweetDetails}
      options={({ route }) => ({ title: "Tweet Details" })}
    />
  </Stack.Navigator>
);

const AccountNavigator = () => (
  <Screen>
    <Text>Account</Text>
  </Screen>
);

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Feed" component={FeedNavigator} />
    <Tab.Screen name="Account" component={AccountNavigator} />
  </Tab.Navigator>
);

export default function App() {
  const [user, setUser] = useState();

  const restoreToken = async () => {
    const token = await storage.getToken();
    if (!token) return;
    setUser(jwtDecode(token));
  };

  useEffect(() => {
    restoreToken();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
