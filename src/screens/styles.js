import { FlatList } from "react-native";
import styled from "styled-components/native";

export const PageContainer = styled.View`
  flex: 1;
  padding-bottom: 96px;
`;

export const JournalList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const ImagePlaceholder = styled.View`
  flex: 1;
  aspect-ratio: 1;
  margin: 8px;
`;
