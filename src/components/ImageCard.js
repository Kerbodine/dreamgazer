import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native-gesture-handler";

const ImageCardContainer = styled.View`
  flex: 1;
  border-radius: 8px;
  aspect-ratio: 1;
  margin: 8px;
  border: 1px solid ${(props) => props.theme.colors.black};
`;

const ImageTouchable = styled.TouchableOpacity`
  flex: 1;
  width: 100%;
  height: 100%;
`;

export default function ImageCard({ image = {}, navigation }) {
  return (
    <ImageCardContainer>
      <ImageTouchable
        onPress={() => {
          navigation.navigate("Image detail", { image });
        }}
      >
        <Text>ImageCard</Text>
      </ImageTouchable>
    </ImageCardContainer>
  );
}
