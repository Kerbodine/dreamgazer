import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const SettingsCard = styled(TouchableOpacity)`
  padding: 12px 16px;
  background-color: ${(props) => props.theme.colors.white};
  flex-direction: row;
  align-items: center;
`;

export const SettingsCardWrapper = styled.View`
  margin-bottom: 16px;
  overflow: hidden;
  border-radius: 8px;
`;

export const SettingsCardText = styled.Text`
  font-size: 16px;
  font-weight: 500;
  margin-left: 8px;
  color: ${(props) => props.theme.colors.text};
`;
