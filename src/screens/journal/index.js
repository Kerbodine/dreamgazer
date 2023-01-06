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

const MAX_LENGTH = 180;

export default function Journal({ navigation }) {
  const [journalInput, setJournalInput] = useState("");

  const theme = useContext(ThemeContext);

  return (
    <Container>
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
