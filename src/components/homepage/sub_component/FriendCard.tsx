import { View, Text, Image, Pressable } from "react-native";

import { globalStyle } from "../../../../globalStyle";
import { friendCardStyle } from "./friendCardStyle";

import { FriendCardProps } from "./friendCard.type";

export default function FriendCard({
  image,
  name,
  age,
  gender,
  birthdate,
  navigation,
  route,
}: FriendCardProps) {
  return (
    // WRAPPER
    <Pressable
      onPress={() =>
        navigation.navigate("Detail", {
          image,
          name,
          age,
          gender,
          birthdate,
        })
      }
      style={friendCardStyle.wrapper}
    >
      <Image style={friendCardStyle.image} source={image} />

      <View style={friendCardStyle.information}>
        <Text style={[globalStyle.text, { textAlign: "center" }]}>Name: </Text>
        <Text style={[globalStyle.text, { textAlign: "center" }]}>{name}</Text>
      </View>
    </Pressable>
  );
}
