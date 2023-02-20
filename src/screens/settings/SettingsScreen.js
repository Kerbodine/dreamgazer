import { View, Text, ScrollView } from "react-native";
import React from "react";
import { Container } from "../styles";
import { SettingsCard, SettingsCardText, SettingsCardWrapper } from "./styles";
import Icon from "react-native-vector-icons/Feather";
import { useData } from "../../../contexts/DataContext";

export default function SettingsScreen({ navigation }) {
  const { deleteAllJournals } = useData();

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
    {
      name: "Delete all journals",
      icon: "trash-2",
      action: () => {
        deleteAllJournals();
        navigation.navigate("Home");
      },
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
