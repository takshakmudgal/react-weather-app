import { useState } from "react";
import "./App.css";
import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Weather from "./components/Weather";
import Footer from "./components/Footer";
function App() {
  const [] = useState(0);

  return (
    <ChakraProvider>
      <div className="App">
        <Weather />
        <Footer />
      </div>
    </ChakraProvider>
  );
}

export default App;
