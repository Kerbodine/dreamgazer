import React, { useEffect, useState } from "react";
import JournalCard from "../components/JournalCard";
import { Container, JournalList, SafeArea } from "./styles";
import CalendarBar from "../components/CalendarBar";
import { useData } from "../../contexts/DataContext";
import { Image, Text } from "react-native";

const HomeScreen = () => {
  const { journals } = useData();
  const [currentDate, setCurrentDate] = useState(new Date());

  const [filteredJournals, setFilteredJournals] = useState([]);

  useEffect(() => {
    setFilteredJournals(
      journals.filter((journal) => {
        const date = new Date(journal.createdAt);
        return (
          date.getFullYear() === currentDate.getFullYear() &&
          date.getMonth() === currentDate.getMonth() &&
          date.getDate() === currentDate.getDate()
        );
      })
    );
  }, [journals, currentDate]);

  return (
    <SafeArea>
      <CalendarBar currentDate={currentDate} setCurrentDate={setCurrentDate} />
      <Container>
        {filteredJournals.length > 0 ? (
          <JournalList
            data={filteredJournals}
            renderItem={({ item }) => <JournalCard item={item} />}
            keyExtractor={(item) => item.createdAt.toString()}
          />
        ) : (
          <>
            <Image
              style={{
                width: 320,
                height: 320,
                alignSelf: "center",
                marginTop: 100,
              }}
              source={require("../../assets/empty.png")}
            />
            <Text
              style={{
                fontSize: 20,
                fontWeight: "500",
                textAlign: "center",
                marginTop: 20,
              }}
            >
              No entries found
            </Text>
          </>
        )}
      </Container>
    </SafeArea>
  );
};

export default HomeScreen;
