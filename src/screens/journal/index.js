import React, { useContext, useState } from "react";
import styled, { ThemeContext } from "styled-components/native";

const MAX_LENGTH = 180;

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  padding-top: 96px;
  align-items: center;
  padding: 96px 32px 0px;
`;

const Title = styled.Text`
  font-size: 24px;
  letter-spacing: -0.25px;
  font-weight: bold;
`;

const ResponseField = styled.TextInput`
  margin-top: 32px;
  width: 100%;
  font-size: 24px;
  font-weight: 500;
  text-align: center;
  opacity: 0.5;
`;

const WordCount = styled.Text`
  position: absolute;
  bottom: 96px;
  font-size: 18px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.tertiary};
`;

const ContinueButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 32px;
  padding: 12px 17px;
  background-color: ${(props) => props.theme.colors.accent};
  border-radius: 32px;
`;

const ButtonText = styled.Text`
  font-size: 18px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.white};
`;

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
