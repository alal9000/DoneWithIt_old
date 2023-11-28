import React from "react";
import * as Notifications from "expo-notifications";

import { Button } from "react-native";
import Screen from "./app/components/Screen";

export default function App() {
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: false
    })
  });

  const sendLocalNotification = (delay) =>
    Notifications.scheduleNotificationAsync({
      content: {
        title: "hello",
        body: "I just pooped myself!"
      },
      trigger: delay == "" ? null : { seconds: delay }
    });

  return (
    <Screen>
      {/* <Button
        title="Send Local Notification"
        onPress={() => sendLocalNotification("")}
      /> */}
      <Button
        title="Send a Scheduled Local Notification"
        onPress={() => sendLocalNotification(1)}
      />
    </Screen>
  );
}
