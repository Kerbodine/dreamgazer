import { FlatList, SafeAreaView } from "react-native";
import styled from "styled-components/native";
import { Platform, StatusBar } from "react-native";

export const SafeArea = styled(SafeAreaView)`
  padding-top: ${Platform.OS === "android" ? StatusBar.currentHeight : 0}px;
`;

export const Container = styled.View`
  padding: 0px 24px 62px;
  height: 100%;
`;

export const JournalList = styled(FlatList).attrs({
  contentContainerStyle: {
    flex: 1,
  },
})``;

export const ImagePlaceholder = styled.View`
  flex: 1;
  aspect-ratio: 1;
  margin: 8px;
`;
