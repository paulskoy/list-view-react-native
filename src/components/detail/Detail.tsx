import { Text, View, Image } from "react-native";

import { globalStyle } from "../../../globalStyle";
import { detailStyle } from "./detailStyle";

import { DetailProps } from "./detail.type";

export default function Detail({ navigation, route }: DetailProps) {
  const { name, age, gender, birthdate, image } = route.params;

  return (
    // WRAPPER
    <View style={[globalStyle.wrapper, detailStyle.wrapper]}>
      <Text
        style={[globalStyle.text, detailStyle.title]}
      >{`${name}'s Information`}</Text>

      <Image style={detailStyle.image} source={image} />

      {/* INFORMATION */}
      <View style={detailStyle.informationContainer}>
        <View style={detailStyle.information}>
          <Text style={globalStyle.text}>Name: </Text>
          <Text style={globalStyle.text}>{name}</Text>
        </View>
        <View style={detailStyle.information}>
          <Text style={globalStyle.text}>Age: </Text>
          <Text style={globalStyle.text}>{age}</Text>
        </View>
        <View style={detailStyle.information}>
          <Text style={globalStyle.text}>Gender: </Text>
          <Text style={globalStyle.text}>{gender}</Text>
        </View>
        <View style={detailStyle.information}>
          <Text style={globalStyle.text}>Birthdate: </Text>
          <Text style={globalStyle.text}>{birthdate}</Text>
        </View>
      </View>
    </View>
  );
}
