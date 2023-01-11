import { FlatList, SafeAreaView } from "react-native";
import styled from "styled-components/native";
import { Platform } from "react-native";
import { StatusBar } from "expo-status-bar";

export const SafeArea = styled(SafeAreaView)`
  padding-top: ${Platform.OS === "android" ? StatusBar.currentHeight : 0};
`;

export const Container = styled.View`
  padding: 24px 24px 62px;
`;

export const JournalList = styled(FlatList).attrs({
  contentContainerStyle: {
    // padding: 16,
  },
})``;

export const ImagePlaceholder = styled.View`
  flex: 1;
  aspect-ratio: 1;
  margin: 8px;
`;
