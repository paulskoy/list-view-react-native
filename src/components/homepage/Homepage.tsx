import { Text, View, FlatList } from "react-native";

import { globalStyle } from "../../../globalStyle";
import { homepageStyle } from "./homepageStyle";

import FriendCard from "./sub_component/FriendCard";

import { friendList } from "./friendsList";

import { HomepageProps } from "./homepage.type";

export default function Homepage({ navigation, route }: HomepageProps) {
  return (
    // WRAPPER
    <View style={[globalStyle.wrapper, homepageStyle.wrapper]}>
      {/* TITLE */}
      <Text style={[globalStyle.text, homepageStyle.title]}>Friends</Text>

      <FlatList
        data={friendList}
        renderItem={({ item }) => (
          <FriendCard
            navigation={navigation}
            route={route}
            image={item.image}
            name={item.name}
            age={item.age}
            gender={item.gender}
            birthdate={item.birthdate}
          />
        )}
        ItemSeparatorComponent={() => (
          <View style={homepageStyle.friendsContainer}></View>
        )}
      />
    </View>
  );
}
