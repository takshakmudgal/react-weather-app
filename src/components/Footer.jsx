import React from "react";
import {
  Box,
  Flex,
  Text,
  Link,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const bgColor = useColorModeValue("gray.100", "gray.900");
  const textColor = useColorModeValue("gray.800", "white");

  return (
    <Box
      as="footer"
      role="contentinfo"
      mx="auto"
      maxW="7xl"
      py="12"
      px={{ base: "4", md: "8" }}
      bg={bgColor}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Flex
          direction={{ base: "column", md: "row" }}
          justify={{ base: "center", md: "space-between" }}
          alignItems={{ base: "center", md: "flex-start" }}
        >
          <Text
            fontSize={{ base: "xl", md: "2xl" }}
            fontWeight="bold"
            color={textColor}
            mb={{ base: "4", md: "0" }}
          >
            By Takshak Mudgal
          </Text>

          <Flex mt={{ base: "4", md: "0" }}>
            <Link
              href="https://github.com/"
              isExternal
              mx={{ base: "2", md: "4" }}
            >
              <Icon as={FaGithub} boxSize="6" color={textColor} />
            </Link>
            <Link
              href="https://twitter.com/"
              isExternal
              mx={{ base: "2", md: "4" }}
            >
              <Icon as={FaTwitter} boxSize="6" color={textColor} />
            </Link>
            <Link
              href="https://www.linkedin.com/"
              isExternal
              mx={{ base: "2", md: "4" }}
            >
              <Icon as={FaLinkedin} boxSize="6" color={textColor} />
            </Link>
          </Flex>
        </Flex>
      </motion.div>
    </Box>
  );
};

export default Footer;
