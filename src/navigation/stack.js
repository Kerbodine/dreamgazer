import { Text, View } from "react-native";
import Tabs from "./tabs";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import JournalScreen from "../screens/journal/JournalScreen";

const Stack = createStackNavigator();

const ImageDetails = () => {
  return (
    <View>
      <Text>Details</Text>
    </View>
  );
};

const JournalDetails = () => {
  return (
    <View>
      <Text>Journal Details</Text>
    </View>
  );
};

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        gestureResponseDistance: 500,
        ...TransitionPresets.ModalPresentationIOS,
        fullScreenGestureEnabled: true,
      }}
      initialRouteName="Main"
    >
      <Stack.Screen name="Main" component={Tabs} />
      <Stack.Screen name="New entry" component={JournalScreen} />
      <Stack.Screen name="Image detail" component={ImageDetails} />
      <Stack.Screen name="Journal detail" component={JournalDetails} />
    </Stack.Navigator>
  );
};
