import React from "react";
import { Image } from "@chakra-ui/react";
import { Heading, HStack, VStack, Text, Box, Flex } from "@chakra-ui/react";

import myimgbee from "../images/bee-nothappy.png";
function Banner() {
  return (
    <Flex justifyContent="space-around" py="40px" marginTop="40px" px="80px">
      <VStack maxW="800px" alignItems="left" w="500px">
        <Text textAlign="left" fontSize="20px" fontWeight="400">
          Our Purpose
        </Text>
        <Heading color="#04c5f5">The orignal and the first</Heading>
        <Text fontWeight="200">
          Grumblebum is that social voice connecting people and organizations to
          bring about positive change.
        </Text>
        <Text fontWeight="100">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>
      </VStack>
      <Box
        maxW="900px"
        borderWidth="1px"
        borderRadius="100%"
        width="400px"
        h="400px"
        bg="gray.50"
      >
        <Image
          boxSize="180px"
          marginTop="100px"
          marginLeft="90px"
          src={myimgbee}
          alt="Dan Abramov"
        />
        <Text
          ml="106px"
          mt="40px"
          fontSize="20px"
          fontWeight="400"
          color="#04c5f5"
        >
          Don't get mad get noticed{" "}
        </Text>
      </Box>
    </Flex>
  );
}

export default Banner;
