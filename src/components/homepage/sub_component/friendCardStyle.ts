import { StyleSheet } from "react-native";

export const friendCardStyle = StyleSheet.create({
  wrapper: {
    gap: 20,
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 20,
    padding: 20,
  },

  informationContainer: {
    gap: 10,
  },

  information: {
    flexDirection: "row",
    justifyContent: "space-around",
  },

  image: {
    alignSelf: "center",
    resizeMode: "contain",
    width: 200,
    height: 200,
  },
});
