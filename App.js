import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/navigation/tabs";
import styled from "styled-components/native";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/theme";
import { StackNaviagator } from "./src/navigation/stack";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <StackNaviagator />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
