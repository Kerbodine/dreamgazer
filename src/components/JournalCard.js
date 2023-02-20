import { View, Text, TouchableWithoutFeedback } from "react-native";
import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const Card = styled.View`
  border-radius: 10px;
  padding: 16px;
  margin-bottom: 16px;
  border: 1px solid ${(props) => props.theme.colors.black};
`;

const JournalTitle = styled.Text`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 4px;
`;

const JournalText = styled.Text`
  font-size: 16px;
`;

export default function JournalCard({ item: { createdAt, text } }) {
  const navigation = useNavigation();

  return (
    <Card>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Journal detail");
        }}
      >
        <View>
          <JournalTitle>
            {/* created at date and time formatted */}
            {new Date(createdAt).toLocaleString()}
          </JournalTitle>
          <JournalText>{text}</JournalText>
        </View>
      </TouchableOpacity>
    </Card>
  );
}
