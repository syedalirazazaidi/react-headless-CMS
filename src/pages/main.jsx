import { VStack, Heading, Box, Text, Button } from "@chakra-ui/react";
import React from "react";
import { Image } from "@chakra-ui/react";
import myimgbee from "../images/grumblebee.png";

import myimgbg from "../images/banner-bg.png";
function Main() {
  return (
    <Box bgImage={myimgbg} bgSize="cover">
      <VStack py="100px">
        <Heading fontSize={["18px", "28px", "28px"]} fontWeight="400">
          Making Bad Experiences Better
        </Heading>
        <Heading
          as="h1"
          pb="70px"
          color="#04c5f5"
          size={["1xl", "2xl", "2xl"]}
          fontWeight="400"
          noOfLines={1}
        >
          Do you have a bee in your bonnet?
        </Heading>
        <VStack
          bg="white"
          p={5}
          shadow="md"
          borderWidth="1px"
          w={["300px", "590px", "590px"]}
          position="relative"
        >
          <Text
            fontSize={["16px", "20px", "20px"]}
            width={["300px", "530px", "530px"]}
            textAlign="center"
            alignItems="center"
            marginBottom="40px"
          >
            Grumblebum is the place to share your passion about the things that
            affect you and the world around us.
          </Text>
          <Text
            fontSize={["14px", "18px", "18px"]}
            width={["300px", "530px", "530px"]}
            textAlign="center"
            alignItems="center"
          >
            {" "}
            Raise an Issue or Concern, Share your Experience, Join a Community,
            Create a Debate, Start a Petition, Build Alliances, Connect Together
            and Bee Heard!
          </Text>
          <Button bg="#4cceee" color="white">
            Our Platform
          </Button>
        </VStack>
        <Box
          boxSize="sm"
          position="absolute"
          top={["10", "310", "310"]}
          left={["10", "360", "360"]}
        >
          <Image boxSize="180px" src={myimgbee} alt="Dan Abramov" />
        </Box>
      </VStack>
    </Box>
  );
}

export default Main;
