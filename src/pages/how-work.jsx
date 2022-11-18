import {
  Heading,
  HStack,
  VStack,
  Box,
  Divider,
  Text,
  Image,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { createClient } from "contentful";
const { REACT_APP_SPACE_ID, REACT_APP_ACCESSTOKEN } = process.env;
const Work = () => {
  const [datagrump, Setdatagrump] = useState();
  const client = createClient({
    space: REACT_APP_SPACE_ID,
    accessToken: REACT_APP_ACCESSTOKEN,
  });
  useEffect(() => {
    const getAllEnteries = async () => {
      try {
        await client
          .getEntries({ content_type: "grumblebum" })
          .then((enteries) => {
            const newdata = enteries;

            Setdatagrump(newdata);
          });
      } catch (e) {
        console.log(e, "ERROR");
      }
    };
    getAllEnteries();
  }, []);
  if (!datagrump?.items) {
    <p>loading...</p>;
  }

  return (
    <Box mx="180px" my="40px">
      <Heading marginBottom="30px" fontSize="40px" fontWeight="400">
        How it Works
      </Heading>
      <Divider />
      <HStack>
        {datagrump?.items?.map((grump) => (
          <VStack key={grump.sys.id} py="100px">
            <Image
              boxSize={36}
              src={grump.fields.grumbimage.fields.file.url}
              alt="Dan Abramov"
            />
            <Text textAlign="center" fontWeight="400">
              {grump.fields.grumbwork}
            </Text>
          </VStack>
        ))}
      </HStack>
      <Divider />
    </Box>
  );
};

export default Work;
