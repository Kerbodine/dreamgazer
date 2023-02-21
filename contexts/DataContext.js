import { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const DataContext = createContext();

export function useData() {
  return useContext(DataContext);
}

export function DataProvider({ children }) {
  const [journals, setJournals] = useState([]);

  useEffect(() => {
    const fetchJournals = async () => {
      try {
        const value = await AsyncStorage.getItem("journals");
        if (value !== null) {
          setJournals(JSON.parse(value));
        }
      } catch (e) {
        console.log(e);
      }
    };
    fetchJournals();
    console.log("LOADED JOURNALS" + journals);
  }, []);

  const addJournal = async (id, createdAt, text, prompt, bgColor) => {
    try {
      // get todays date in yyyy-mm-dd format
      const value = await AsyncStorage.getItem("journals");
      const parsedValue = JSON.parse(value);
      const newEntry = {
        id,
        createdAt,
        text,
        prompt,
        bgColor,
        // prompt: "What's on your mind?",
      };
      if (parsedValue) {
        const updatedValue = [newEntry, ...parsedValue];
        setJournals(updatedValue);
        await AsyncStorage.setItem("journals", JSON.stringify(updatedValue));
      } else {
        setJournals([newEntry]);
        await AsyncStorage.setItem("journals", JSON.stringify([newEntry]));
      }
      console.log("SAVED");
    } catch (e) {
      console.log(e);
    }
  };

  const deleteAllJournals = async () => {
    try {
      await AsyncStorage.removeItem("journals");
      setJournals([]);
    } catch (e) {
      console.log(e);
    }
  };

  const value = {
    journals,
    addJournal,
    deleteAllJournals,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}
