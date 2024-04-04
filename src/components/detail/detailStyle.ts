import { StyleSheet } from "react-native";

export const detailStyle = StyleSheet.create({
  wrapper: {
    justifyContent: "space-between",
  },

  title: {
    fontSize: 30,
    textAlign: "center",
  },

  image: {
    alignSelf: "center",
    resizeMode: "contain",
    width: 300,
    height: 300,
  },

  informationContainer: {
    gap: 10,
  },

  information: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
