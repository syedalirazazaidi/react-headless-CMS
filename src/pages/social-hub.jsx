import React, { useEffect, useState } from "react";
import { createClient } from "contentful";
import myimgbee from "../images/grumblebee.png";
import {
  Box,
  Heading,
  Text,
  HStack,
  VStack,
  Image,
  Divider,
  Flex,
} from "@chakra-ui/react";
const { REACT_APP_SPACE_ID, REACT_APP_ACCESSTOKEN } = process.env;
const Hub = () => {
  const [dataHub, SetdataHub] = useState();

  const client = createClient({
    space: REACT_APP_SPACE_ID,
    accessToken: REACT_APP_ACCESSTOKEN,
  });
  useEffect(() => {
    const getAllEnteries = async () => {
      try {
        await client
          .getEntries({
            content_type: "landingPageSection2",
          })
          .then((enteries) => {
            const newcontent = enteries;

            SetdataHub(newcontent);
          });
      } catch (e) {
        console.log(e, "ERROR");
      }
    };
    getAllEnteries();
  }, []);

  return (
    <Flex justifyContent="space-around" py="40px" marginTop="40px" px="80px">
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
      <VStack maxW="800px" alignItems="left" w="600px">
        {dataHub?.items?.map((item) => (
          <Box>
            <Text textAlign="right" fontSize="20px" fontWeight="700">
              {item.fields.title}
            </Text>
            <Heading my="15px" textAlign="right" color="#04c5f5">
              {item.fields.heading}
            </Heading>
            <Text textAlign="right" fontWeight="400" fontSize="28px">
              {item.fields.blurb}
            </Text>
            <Text textAlign="right" fontWeight="200" my="20px">
              {item.fields.text}
            </Text>
          </Box>
        ))}
      </VStack>
    </Flex>
  );
};

export default Hub;
