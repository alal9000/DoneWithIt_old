import { Image, StyleSheet, TouchableHighlight, View } from "react-native";
import {
  GestureHandlerRootView,
  Swipeable
} from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "../AppText";
import colors from "../../config/colors";

function ListItem({
  title,
  subTitle,
  image,
  IconComponent,
  onPress,
  renderRightActions
}) {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
          <View style={styles.container}>
            {IconComponent}
            {image && <Image style={styles.image} source={image} />}
            <View style={styles.detailsContainer}>
              <AppText numberOfLines={1} style={styles.title}>
                {title}
              </AppText>
              {subTitle && (
                <AppText numberOfLines={2} style={styles.subTitle}>
                  {subTitle}
                </AppText>
              )}
            </View>
            <MaterialCommunityIcons
              name="chevron-right"
              size={25}
              color={colors.medium}
            />
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: colors.white
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: "center",
    flex: 1
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35
  },
  title: {
    fontWeight: "600"
  },
  subTitle: {
    color: colors.medium
  }
});

export default ListItem;
