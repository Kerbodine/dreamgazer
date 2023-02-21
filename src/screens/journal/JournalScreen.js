import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "styled-components/native";
import {
  Container,
  ContinueButton,
  ResponseField,
  Title,
  WordCount,
  ButtonText,
  RoundedButton,
  NoWrap,
  Row,
  WhiteButtonText,
} from "./styles";
import JournalDate from "../../components/JournalDate";
import { ImpactFeedbackStyle, impactAsync } from "expo-haptics";
import { useData } from "../../../contexts/DataContext";
import uuid from "react-native-uuid";
import { JOURNAL_PROMPTS } from "../../../lib/constants";
import { API_URL } from "@env";
import { HexToHSL, hslToHex } from "../../../lib/helper";
import { View } from "react-native";

const MAX_LENGTH = 180;

export default function JournalScreen({ navigation }) {
  const [journalInput, setJournalInput] = useState("");
  const [date, setDate] = useState(new Date());
  const [prompt, setPrompt] = useState(null);
  const [bgColor, setBgColor] = useState("#ffffff");
  const [textColor, setTextColor] = useState("#000000");
  const [secondaryColor, setSecondaryColor] = useState("#000000");

  const theme = useContext(ThemeContext);

  const { addJournal } = useData();

  const handleSubmit = async () => {
    if (journalInput.length === 0) return;
    await addJournal(uuid.v4(), date, journalInput, prompt, bgColor);
  };

  const fetchColors = async () => {
    const response = await fetch(`${API_URL}/prompt`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: journalInput,
      }),
    });
    const data = await response.json();
    console.log(data);
    setBgColor(data.trim());
  };

  const getTextColor = (bgColor) => {
    let luma = (bgColor[2] / 100 + 0.5) % 1;
    return [bgColor[0], bgColor[1] / 2, luma * 100];
  };

  const getSecondaryColor = (hslColor) => {
    let primaryLum = hslColor[2] > 50 ? hslColor[2] - 4 : hslColor[2] + 5;
    return [hslColor[0], hslColor[1] - 2, primaryLum];
  };

  // wait for 1 second after the user stops typing before fetching api
  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     if (journalInput.length > 10) {
  //       fetchColors();
  //     } else {
  //       setBgColor("#ffffff");
  //     }
  //   }, 1000);
  //   return () => clearTimeout(timeout);
  // }, [journalInput]);
  useEffect(() => {
    if (journalInput.length <= 0) {
      setBgColor("#ffffff");
    }
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

  useEffect(() => {
    // convert bgColor to hsl
    const hslColor = HexToHSL(bgColor);

    const textColor = getTextColor(hslColor);
    setTextColor(hslToHex(textColor[0], textColor[1], textColor[2]));

    const secondaryColor = getSecondaryColor(hslColor);
    setSecondaryColor(
      hslToHex(secondaryColor[0], secondaryColor[1], secondaryColor[2])
    );
  }, [bgColor]);

  console.log(API_URL);

  return (
    <Container style={{ backgroundColor: bgColor }}>
      <JournalDate date={date} setDate={setDate} textColor={textColor} />
      <Row>
        {/* wrap the last two words with the NoWrap component */}
        {prompt && (
          <>
            <Title
              style={{
                color: `${textColor}`,
              }}
            >
              {prompt.split(" ").slice(0, -3).join(" ")}{" "}
            </Title>
            <NoWrap
              style={{
                color: `${textColor}`,
              }}
            >
              {prompt.split(" ").slice(-3).join(" ")}
            </NoWrap>
          </>
        )}
      </Row>
      <Row
        style={{
          marginTop: 16,
        }}
      >
        <RoundedButton
          style={{
            backgroundColor: `${secondaryColor}`,
          }}
          onPress={() => {
            impactAsync(ImpactFeedbackStyle.Light);
            randomizePrompt();
          }}
        >
          <ButtonText
            style={{
              color: `${textColor}`,
            }}
          >
            Randomize
          </ButtonText>
        </RoundedButton>
        <View
          style={{
            width: 12,
          }}
        />
        <RoundedButton
          style={{
            backgroundColor: `${secondaryColor}`,
          }}
          onPress={() => {
            impactAsync(ImpactFeedbackStyle.Light);
            fetchColors();
          }}
        >
          <ButtonText
            style={{
              color: `${textColor}`,
            }}
          >
            Generate color
          </ButtonText>
        </RoundedButton>
      </Row>
      <ResponseField
        style={{
          color: `${textColor}`,
        }}
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
        <WhiteButtonText>Continue</WhiteButtonText>
      </ContinueButton>
      <WordCount
        style={{
          color: `${textColor}`,
        }}
      >
        {journalInput.length > 0 && `${journalInput.length} / ${MAX_LENGTH}`}
      </WordCount>
    </Container>
  );
}
