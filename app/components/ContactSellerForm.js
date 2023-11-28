import React from "react";
import { Alert } from "react-native";
import { Keyboard } from "react-native";
import { View, StyleSheet } from "react-native";
import * as Yup from "yup";
import * as Notifications from "expo-notifications";

import messagesApi from "../api/messages";
import { AppForm, AppFormField, SubmitButton } from "./forms";
import { Button } from "react-native";

function ContactSellerForm({ listing }) {
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: false
    })
  });

  const sendLocalNotification = (delay) => {
    Notifications.scheduleNotificationAsync({
      content: {
        title: "hello",
        body: "I just pooped myself!"
      },
      trigger: delay == "" ? null : { seconds: delay }
    });
  };

  const handleSubmit = async ({ message }, { resetForm }) => {
    Keyboard.dismiss();

    const result = await messagesApi.send(message, listing.id);

    if (!result.ok) {
      console.log("error", result);
      return Alert.alert("Error", "Could not send the message");
    }

    resetForm();
  };

  return (
    <AppForm
      initialValues={{ message: "" }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <AppFormField
        maxLength={255}
        multiline
        name="message"
        numberOfLines={3}
        placeholder="Message..."
      />
      <Button
        title="Contact Seller"
        onPress={() => sendLocalNotification("")}
      />
    </AppForm>
  );
}

const validationSchema = Yup.object().shape({
  message: Yup.string().required().min(1).label("Message")
});

export default ContactSellerForm;
