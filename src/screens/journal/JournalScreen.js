import React, { useContext, useState } from "react";
import { ThemeContext } from "styled-components/native";
import {
  Container,
  ContinueButton,
  ResponseField,
  Title,
  WordCount,
  ButtonText,
} from "./styles";
import JournalDate from "../../components/JournalDate";
import { ImpactFeedbackStyle, impactAsync } from "expo-haptics";
import { useData } from "../../../contexts/DataContext";
import uuid from "react-native-uuid";

const MAX_LENGTH = 180;

export default function JournalScreen({ navigation }) {
  const [journalInput, setJournalInput] = useState("");

  const theme = useContext(ThemeContext);

  const { addJournal } = useData();

  const handleSubmit = async () => {
    await addJournal(new Date().toISOString(), journalInput, uuid.v4());
  };

  return (
    <Container>
      <JournalDate />
      <Title>Whats on your mind?</Title>
      <ResponseField
        onChangeText={setJournalInput}
        value={journalInput}
        placeholder="start typing..."
        multiline
        autoCorrect={false}
        autoCapitalize="none"
        autoFocus
        maxLength={MAX_LENGTH}
        placeholderTextColor={theme.colors.secondary}
        blurOnSubmit
      />
      <ContinueButton
        onPress={() => {
          impactAsync(ImpactFeedbackStyle.Light);
          handleSubmit();
          navigation.goBack();
        }}
      >
        <ButtonText>Continue</ButtonText>
      </ContinueButton>
      <WordCount>
        {journalInput.length > 0 && `${journalInput.length} / ${MAX_LENGTH}`}
      </WordCount>
    </Container>
  );
}
