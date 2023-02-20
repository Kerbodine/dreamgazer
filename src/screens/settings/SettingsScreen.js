import { View, Text, ScrollView } from "react-native";
import React from "react";
import { Container, SafeArea } from "../styles";
import { SettingsCard, SettingsCardText, SettingsCardWrapper } from "./styles";
import Icon from "react-native-vector-icons/Feather";

export default function SettingsScreen({ navigation }) {
  const SettingsItems = [
    {
      name: "About",
      icon: "info",
      action: () => navigation.navigate("Settings about"),
    },
    {
      name: "Terms of Service",
      icon: "flag",
      action: () => {},
    },
    {
      name: "Privacy Policy",
      icon: "eye-off",
      action: () => {},
    },
    {
      name: "Contact us",
      icon: "at-sign",
      action: () => {},
    },
  ];

  return (
    <Container>
      <ScrollView>
        <SettingsCardWrapper>
          {SettingsItems.map((item, index) => (
            <SettingsCard key={index} onPress={item.action}>
              <Icon name={item.icon} size={20} color="#000" />
              <SettingsCardText>{item.name}</SettingsCardText>
            </SettingsCard>
          ))}
        </SettingsCardWrapper>
      </ScrollView>
    </Container>
  );
}
