import React from "react";
import { View, StyleSheet } from "react-native";
import AppText from "../components/AppText";
import ListItem from "../components/lists/ListItem";

import colors from "../config/colors";
import { Image } from "react-native-expo-image-cache";
import { KeyboardAvoidingView } from "react-native";
import { Platform } from "react-native";
import ContactSellerForm from "../components/ContactSellerForm";

function ListingDetailsScreen({ route }) {
  const listing = route.params;

  return (
    <KeyboardAvoidingView
      behavior="position"
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
    >
      <Image
        style={styles.image}
        uri={listing.images[0].url}
        preview={{ uri: listing.images[0].thumbnailUrl }}
        tint="light"
      />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.price}>${listing.price}</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/mosh.jpg")}
            title="Mosh Hamedani"
            subTitle="5 Listings"
          />
        </View>
        <ContactSellerForm listing={listing} />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300
  },
  detailsContainer: {
    padding: 20
  },
  title: {
    fontSize: 24,
    fontWeight: "500"
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10
  },
  userContainer: {
    marginVertical: 30
  }
});

export default ListingDetailsScreen;
