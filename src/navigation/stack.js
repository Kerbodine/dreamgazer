import { Text, View } from "react-native";
import Tabs from "./tabs";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import Journal from "../screens/journal";

const Stack = createStackNavigator();

const DetailsScreen = () => {
  return (
    <View>
      <Text>Details</Text>
    </View>
  );
};

export const StackNaviagator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureResponseDistance: 500,
        ...TransitionPresets.ModalPresentationIOS,
      }}
      initialRouteName="Main"
    >
      <Stack.Screen name="Main" component={Tabs} />
      <Stack.Screen name="New entry" component={Journal} />
      <Stack.Screen name="Image detail" component={DetailsScreen} />
    </Stack.Navigator>
  );
};
