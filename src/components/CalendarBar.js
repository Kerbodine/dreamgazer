import React, { useEffect, useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { useTheme } from "styled-components";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/Feather";

const CalendarBar = ({ currentDate, setCurrentDate }) => {
  const [displayDates, setDisplayDates] = useState([]);

  const CalendarWrapper = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: 0px 24px;
    margin-bottom: 8px;
    align-items: center;
  `;

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

  const TodayButton = styled(TouchableOpacity)`
    padding: 4px 8px;
    border: 2px solid ${(props) => props.theme.colors.tertiary};
    border-radius: 100px;
  `;

  const TodayText = styled.Text`
    font-size: 16px;
    font-weight: 500;
    color: ${(props) => props.theme.colors.secondary};
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
  }, [currentDate]);

  const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const theme = useTheme();

  return (
    <View>
      <CalendarWrapper>
        {/* // add previous and next buttons */}
        <TouchableOpacity
          onPress={() => {
            setCurrentDate((prev) => {
              return new Date(prev.setDate(prev.getDate() - 7));
            });
          }}
        >
          <Icon name="chevron-left" size={24} color="#000" />
        </TouchableOpacity>
        {/* today button */}
        <TodayButton onPress={() => setCurrentDate(new Date())}>
          <TodayText>Today</TodayText>
        </TodayButton>
        <TouchableOpacity
          onPress={() => {
            setCurrentDate((prev) => {
              return new Date(prev.setDate(prev.getDate() + 7));
            });
          }}
        >
          <Icon name="chevron-right" size={24} color="#000" />
        </TouchableOpacity>
      </CalendarWrapper>
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
                onPress={() => {
                  setCurrentDate(new Date(date));
                }}
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
