import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomepageStackParamList } from "./homepageStack.type";
import Homepage from "../../components/homepage/Homepage";
import Detail from "../../components/detail/Detail";

export default function HomepageStack() {
  const Stack = createNativeStackNavigator<HomepageStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Homepage" component={Homepage} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
