import React from "react";
import JournalCard from "../components/JournalCard";
import { Container, JournalList, SafeArea } from "./styles";

const HomeScreen = () => {
  return (
    <SafeArea>
      <Container>
        <JournalList
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
          renderItem={({ item }) => <JournalCard />}
          keyExtractor={(item) => item.toString()}
        />
      </Container>
    </SafeArea>
  );
};

export default HomeScreen;
