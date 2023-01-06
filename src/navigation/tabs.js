import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import { ThemeContext } from "styled-components/native";
import { useContext } from "react";
import Icon from "react-native-vector-icons/Feather";
import HomeScreen from "../screens/Home";
import GalleryScreen from "../screens/GalleryScreen";

const CalendarScreen = () => {
  return (
    <View>
      <Text>Calendar</Text>
    </View>
  );
};

const PostScreen = () => {
  return (
    <View>
      <Text>Post</Text>
    </View>
  );
};

const SettingsScreen = () => {
  return (
    <View>
      <Text>Settings</Text>
    </View>
  );
};

const Tab = createBottomTabNavigator();

const TabBar = styled(Tab.Navigator).attrs({
  screenOptions: {
    tabBarShowLabel: false,
    tabBarStyle: {
      backgroundColor: "#fff",
      position: "absolute",
      borderTopLeftRadius: 16,
      borderTopRightRadius: 16,
      height: 96,
      paddingLeft: 12,
      paddingRight: 12,
      borderTopWidth: 0,
      shadowColor: (props) => props.theme.colors.black,
      shadowOffset: { width: -2, height: 4 },
      shadowOpacity: 0.25,
      shadowRadius: 4,
    },
  },
})``;

const NavButtonCircle = styled(TouchableOpacity)`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  background-color: ${(props) => props.theme.colors.accent};
  bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Dot = styled(View)`
  width: 6px;
  height: 6px;
  border-radius: 3px;
  background-color: ${(props) => props.theme.colors.accent};
  margin-top: 6px;
`;

const NavIcon = styled(View)`
  margin-top: 24px;
  display: flex;
  align-items: center;
  height: 32px;
`;

const Tabs = ({ navigation }) => {
  const theme = useContext(ThemeContext);

  return (
    <TabBar>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <NavIcon>
              <Icon
                name="home"
                size={24}
                color={focused ? theme.colors.accent : theme.colors.secondary}
              />
              {focused && <Dot />}
            </NavIcon>
          ),
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <NavIcon>
              <Icon
                name="calendar"
                size={24}
                color={focused ? theme.colors.accent : theme.colors.secondary}
              />
              {focused && <Dot />}
            </NavIcon>
          ),
        }}
      />
      <Tab.Screen
        name="Post"
        component={PostScreen}
        options={{
          tabBarButton: () => (
            <NavButtonCircle onPress={() => navigation.navigate("New entry")}>
              <Icon name="plus" size={32} color={theme.colors.white} />
            </NavButtonCircle>
          ),
        }}
      />
      <Tab.Screen
        name="Images"
        component={GalleryScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <NavIcon>
              <Icon
                name="image"
                size={24}
                color={focused ? theme.colors.accent : theme.colors.secondary}
              />
              {focused && <Dot />}
            </NavIcon>
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <NavIcon>
              <Icon
                name="settings"
                size={24}
                color={focused ? theme.colors.accent : theme.colors.secondary}
              />
              {focused && <Dot />}
            </NavIcon>
          ),
        }}
      />
    </TabBar>
  );
};

export default Tabs;
