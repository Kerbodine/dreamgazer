import React from "react";
import JournalCard from "../components/JournalCard";
import { Container, JournalList, SafeArea } from "./styles";
import CalendarBar from "../components/CalendarBar";
import { useData } from "../../contexts/DataContext";
import { Text, TouchableOpacity } from "react-native";

const HomeScreen = () => {
  const { journals, deleteAllJournals } = useData();

  return (
    <SafeArea>
      <CalendarBar />
      <TouchableOpacity onPress={deleteAllJournals}>
        <Text>Delete all journals</Text>
      </TouchableOpacity>
      <Container>
        <JournalList
          data={journals}
          renderItem={({ item }) => <JournalCard item={item} />}
          keyExtractor={(item) => item.createdAt.toString()}
        />
      </Container>
    </SafeArea>
  );
};

export default HomeScreen;
