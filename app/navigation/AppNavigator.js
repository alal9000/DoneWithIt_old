import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ListingEditScreen from "../screens/ListingEditScreen";
import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";

import AccountNavigator from "./AccountNavigator";
import expoPushTokensApi from "../api/expoPushTokens";
import routes from "./routes";
import FeedNavigator from "./FeedNavigator";
import NewListingButton from "./NewListingButton";
import listings from "../api/listings";

const Tab = createBottomTabNavigator();

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

const AppNavigator = () => {
  useEffect(() => {
    registerForPushNotifications();

    Notifications.addPushTokenListener((notification) =>
      console.log(notification)
    );
  }, []);

  const registerForPushNotifications = async () => {
    try {
      const permission = await Permissions.getAsync(Permissions.NOTIFICATIONS);
      if (!permission.granted) return;

      console.log("permissions granted!");

      const token = await Notifications.getExpoPushTokenAsync({
        projectId: "70fecfb1-6fca-4f2d-a427-f110577ae16e"
      });
      expoPushTokensApi.register(token.data);
    } catch (error) {
      console.log("Error getting a push token", error);
    }
  };

  return (
    <Tab.Navigator>
      <Tab.Screen
        name={routes.FEED}
        component={FeedNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name={routes.LISTING_EDIT}
        component={ListingEditScreen}
        options={({ navigation }) => ({
          tabBarButton: () => (
            <NewListingButton
              onPress={() => navigation.navigate(routes.LISTING_EDIT)}
            />
          ),
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="plus-circle"
              color={color}
              size={size}
            />
          )
        })}
      />
      <Tab.Screen
        name={routes.ACCOUNT}
        component={AccountNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          )
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
