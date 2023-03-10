import { Text } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  padding-top: 96px;
  align-items: center;
  padding: 96px 32px 0px;
`;

export const RoundedButton = styled.TouchableOpacity`
  padding: 4px 8px;
  border-radius: 100px;
`;

export const ButtonText = styled.Text`
  font-size: 18px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.secondary};
`;

export const NoWrap = styled(Text).attrs((props) => ({
  numberOfLines: 1,
}))`
  font-size: 24px;
  letter-spacing: -0.25px;
  font-weight: bold;
`;
// background-color: ${(props) => props.theme.colors.tertiary};

export const Row = styled.Text`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
`;

export const Title = styled.Text`
  font-size: 24px;
  letter-spacing: -0.25px;
  font-weight: bold;
  display: inline;
`;
// background-color: ${(props) => props.theme.colors.secondary};

export const ResponseField = styled.TextInput`
  margin-top: 32px;
  width: 100%;
  font-size: 24px;
  font-weight: 500;
  text-align: center;
  opacity: 0.5;
`;

export const WordCount = styled.Text`
  position: absolute;
  bottom: 96px;
  font-size: 18px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.tertiary};
`;

export const ContinueButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 32px;
  padding: 12px 17px;
  background-color: ${(props) => props.theme.colors.accent};
  border-radius: 32px;
`;

export const WhiteButtonText = styled.Text`
  font-size: 18px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.white};
`;
