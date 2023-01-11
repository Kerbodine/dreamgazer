import { createStackNavigator } from "@react-navigation/stack";
import SettingsScreen from "./SettingsScreen";
import { View, Text } from "react-native";

const Stack = createStackNavigator();

export const SettingsAbout = () => {
  return (
    <View>
      <Text>About</Text>
    </View>
  );
};

export const SettingsStack = () => {
  return (
    <Stack.Navigator
      screenOptions={
        {
          // headerShown: false,
        }
      }
      initialRouteName="Settings home"
    >
      <Stack.Screen
        name="Settings home"
        options={{ title: "Settings" }}
        component={SettingsScreen}
      />
      <Stack.Screen
        name="Settings about"
        options={{ title: "About" }}
        component={SettingsAbout}
      />
    </Stack.Navigator>
  );
};
