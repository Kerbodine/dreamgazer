import React from "react";
import JournalCard from "../components/JournalCard";
import { JournalList, PageContainer } from "./styles";

const HomeScreen = () => {
  return (
    <PageContainer>
      <JournalList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
        renderItem={({ item }) => <JournalCard />}
        keyExtractor={(item) => item.toString()}
      />
    </PageContainer>
  );
};

export default HomeScreen;
