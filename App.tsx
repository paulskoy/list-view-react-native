import { View, StatusBar } from "react-native";

import HomepageStack from "./src/routes/stack/HomepageStack";

export default function App() {
  // WHEN U COMEBACK START STYLING THE HOMEPAGE

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="default" />

      <HomepageStack />
    </View>
  );
}
