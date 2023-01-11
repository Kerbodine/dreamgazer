import { View, Text } from "react-native";
import React, { useState } from "react";
import styled from "styled-components/native";
import { useTheme } from "styled-components";
import { TouchableOpacity } from "react-native-gesture-handler";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const DateWrapper = styled(TouchableOpacity)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 4px 8px;
  border-radius: 100%;
  border: 2px solid ${(props) => props.theme.colors.tertiary};
  margin-bottom: 16px;
`;

const DateText = styled.Text`
  font-size: 18px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.secondary};
`;

export default function JournalDate() {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date, setDate] = useState(new Date());

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setDate(date);
    hideDatePicker();
  };

  return (
    <DateWrapper onPress={showDatePicker}>
      <DateText>
        {date.toLocaleDateString([], {
          month: "long",
          day: "numeric",
        })}{" "}
        <View
          style={{
            width: 4,
          }}
        />
        {date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
      </DateText>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="datetime"
        date={date}
        maximumDate={new Date()}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        modalStyleIOS={{
          marginBottom: 32,
        }}
      />
    </DateWrapper>
  );
}
