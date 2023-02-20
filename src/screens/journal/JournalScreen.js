import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "styled-components/native";
import {
  Container,
  ContinueButton,
  ResponseField,
  Title,
  WordCount,
  ButtonText,
  RandomizeButton,
  RandomizeButtonText,
  NoWrap,
  Row,
} from "./styles";
import JournalDate from "../../components/JournalDate";
import { ImpactFeedbackStyle, impactAsync } from "expo-haptics";
import { useData } from "../../../contexts/DataContext";
import uuid from "react-native-uuid";
import { JOURNAL_PROMPTS } from "../../../lib/constants";

const MAX_LENGTH = 180;

export default function JournalScreen({ navigation }) {
  const [journalInput, setJournalInput] = useState("");
  const [date, setDate] = useState(new Date());
  const [prompt, setPrompt] = useState(null);

  const theme = useContext(ThemeContext);

  const { addJournal } = useData();

  const handleSubmit = async () => {
    if (journalInput.length === 0) return;
    await addJournal(date, journalInput, prompt, uuid.v4());
  };

  // wait for 1 second after the user stops typing before fetching api
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (journalInput.length > 12) {
        // fetch api
      }
    }, 1000);
    return () => clearTimeout(timeout);
  }, [journalInput]);

  const randomizePrompt = () => {
    // make sure the prompt is not the same as the current prompt
    let randomPrompt;
    do {
      randomPrompt =
        JOURNAL_PROMPTS["default"][
          Math.floor(Math.random() * JOURNAL_PROMPTS["default"].length)
        ];
    } while (randomPrompt === prompt);
    setPrompt(randomPrompt);
  };

  useEffect(() => {
    const randomPrompt =
      JOURNAL_PROMPTS["default"][
        Math.floor(Math.random() * JOURNAL_PROMPTS["default"].length)
      ];
    setPrompt(randomPrompt);
  }, []);

  return (
    <Container>
      <JournalDate date={date} setDate={setDate} />
      <Row>
        {/* wrap the last two words with the NoWrap component */}
        {prompt && (
          <>
            <Title>{prompt.split(" ").slice(0, -3).join(" ")} </Title>
            <NoWrap>{prompt.split(" ").slice(-3).join(" ")}</NoWrap>
          </>
        )}
      </Row>
      <RandomizeButton
        onPress={() => {
          impactAsync(ImpactFeedbackStyle.Light);
          randomizePrompt();
        }}
      >
        <RandomizeButtonText>Randomize</RandomizeButtonText>
      </RandomizeButton>
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
