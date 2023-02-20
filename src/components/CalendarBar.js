import React, { useEffect, useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { useTheme } from "styled-components";
import styled from "styled-components/native";

const CalendarBar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [displayDates, setDisplayDates] = useState([]);

  const CalendarDayLabel = styled.Text`
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    margin-bottom: 4px;
    color: ${(props) => props.theme.colors.secondary};
  `;

  const CalendarDay = styled(TouchableOpacity)`
    width: 40px;
    height: 40px;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
  `;

  const CalendarDayText = styled.Text`
    font-size: 18px;
    font-weight: 500;
    color: ${(props) => props.theme.colors.black};
  `;

  useEffect(() => {
    // create 7 objects for each day of the week
    // each object will have a date
    // the date will be the date of the current day
    setDisplayDates([]);
    for (let i = 0; i < 7; i++) {
      setDisplayDates((prev) => [
        ...prev,
        new Date().setDate(currentDate.getDate() + i - currentDate.getDay()),
      ]);
    }
  }, []);

  const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const theme = useTheme();

  return (
    <View style={styles.container}>
      {displayDates.map((date) => {
        return (
          <View
            style={{
              marginVertical: 12,
            }}
            key={date}
          >
            <CalendarDayLabel>
              {WEEKDAYS[new Date(date).getDay()]}
            </CalendarDayLabel>
            <CalendarDay
              style={{
                backgroundColor:
                  new Date(date).getDate() === currentDate.getDate()
                    ? "black"
                    : "transparent",
              }}
            >
              <CalendarDayText
                style={{
                  color:
                    new Date(date).getDate() === currentDate.getDate()
                      ? "white"
                      : theme.colors.secondary,
                }}
              >
                {new Date(date).getDate()}
              </CalendarDayText>
            </CalendarDay>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 24,
  },
  button: {
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
  },
});

export default CalendarBar;
