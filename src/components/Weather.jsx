import React, { useState } from "react";
import { getCurrentWeather } from "./Api";
import { FaTemperatureHigh } from "react-icons/fa";
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Spinner,
  Stack,
  Text,
  useColorMode,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const { colorMode } = useColorMode();
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (city === "") {
      toast({
        title: "Please enter a city",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    setLoading(true);
    const data = await getCurrentWeather(city);
    setWeather(data);
    setLoading(false);
    setCity("");
  };

  return (
    <Box
      p={8}
      bgGradient="linear(to-t, blue.600, yellow.200)"
      rounded="lg"
      boxShadow="xl"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
    >
      <Stack
        spacing={4}
        mb={8}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Heading as="h2" fontSize="4xl" color="white">
          Check Current Weather
        </Heading>
        <Text color="white">
          Enter a city below to check the current weather:
        </Text>
        <form onSubmit={handleSubmit}>
          <Flex>
            <Input
              type="text"
              placeholder="Enter city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              roundedLeft="0"
              bg="white"
              color="gray.700"
              boxShadow="md"
              _focus={{
                boxShadow: "none",
                border: "2px solid",
                borderColor: "purple.400",
              }}
            />
            <Button
              type="submit"
              colorScheme="purple"
              roundedRight="0"
              px={8}
              isLoading={loading}
              loadingText="Checking..."
              _disabled={{ opacity: 0.5, cursor: "not-allowed" }}
              _hover={{
                bgGradient: "linear(to-r, purple.500, pink.500)",
                transform: "scale(1.05)",
              }}
              _active={{
                bgGradient: "linear(to-r, pink.500, purple.500)",
                transform: "scale(0.95)",
              }}
            >
              Check Weather
            </Button>
          </Flex>
        </form>
      </Stack>
      {loading ? (
        <Flex
          justify="center"
          align="center"
          h="200px"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Spinner size="xl" color="white" />
        </Flex>
      ) : weather ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            style={{
              backgroundColor: "white",
              borderRadius: "16px",
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
              padding: "32px",
              marginBottom: "32px",
            }}
          >
            <motion.h3
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{
                fontSize: "32px",
                fontWeight: "bold",
                marginBottom: "24px",
              }}
            >
              {weather.name}
            </motion.h3>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "16px",
              }}
            >
              <FaTemperatureHigh
                style={{ fontSize: "24px", marginRight: "8px" }}
              />
              <span style={{ fontSize: "24px", fontWeight: "bold" }}>
                {Math.round(weather.main.temp - 273.15)}°C
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              style={{ marginBottom: "16px" }}
            >
              <h4
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  marginBottom: "8px",
                }}
              >
                Description
              </h4>
              <p style={{ fontSize: "18px" }}>
                {weather.weather[0].description}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              style={{ marginBottom: "16px" }}
            >
              <h4
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  marginBottom: "8px",
                }}
              >
                Humidity
              </h4>
              <p style={{ fontSize: "18px" }}>{weather.main.humidity}%</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              style={{ marginBottom: "16px" }}
            >
              <h4
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  marginBottom: "8px",
                }}
              >
                Wind Speed
              </h4>
              <p style={{ fontSize: "18px" }}>{weather.wind.speed} m/s</p>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <Flex justify="center" align="center">
              <Box w="80%" h="200px">
                <motion.div
                  initial={{ x: -1000 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <Box
                    bgGradient="linear(to-r, yellow.400, red.400)"
                    h="100%"
                    rounded="md"
                    shadow="md"
                  />
                </motion.div>
                <motion.div
                  initial={{ x: 1000 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <Box
                    bgGradient="linear(to-r, blue.400, purple.400)"
                    h="100%"
                    rounded="md"
                    shadow="md"
                  />
                </motion.div>
              </Box>
            </Flex>
          </motion.div>
        </motion.div>
      ) : (
        <Box
          bg={colorMode === "light" ? "white" : "gray.700"}
          rounded="lg"
          shadow="xl"
          p={4}
          mt={8}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Text>No weather data to display</Text>
        </Box>
      )}
    </Box>
  );
};

export default Weather;
