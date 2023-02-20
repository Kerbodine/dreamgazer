import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/theme";
import { StackNavigator } from "./src/navigation/stack";
import { DataProvider } from "./contexts/DataContext";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <DataProvider>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </DataProvider>
    </ThemeProvider>
  );
};

export default App;
