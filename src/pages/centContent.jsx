import React, { useEffect, useState } from "react";
import { createClient } from "contentful";
import { Box, Heading, VStack, Image, Divider } from "@chakra-ui/react";
const { REACT_APP_SPACE_ID, REACT_APP_ACCESSTOKEN } = process.env;

function Content() {
  const [datacontent, Setdatacontent] = useState();
  const client = createClient({
    space: REACT_APP_SPACE_ID,
    accessToken: REACT_APP_ACCESSTOKEN,
  });
  useEffect(() => {
    const getAllEnteries = async () => {
      try {
        await client
          .getEntries({
            content_type: "contentOur",
          })
          .then((enteries) => {
            const newcontent = enteries;
            console.log(newcontent, "CONTENT");

            Setdatacontent(newcontent);
          });
      } catch (e) {
        console.log(e, "ERROR");
      }
    };
    getAllEnteries();
  }, []);
  return (
    <Box my={40}>
      {datacontent?.items?.map((grump) => (
        <VStack key={grump.sys.id} my={20}>
          <Heading
            w="870px"
            alignItems="center"
            textAlign="center"
            my={24}
            fontWeight="400"
          >
            {grump.fields.mycontent}
          </Heading>
          <Image
            boxSize={36}
            src={grump.fields.myimage.fields.file.url}
            alt="Dan Abramov"
            _hover={{
              opacity: 0.8,
              cursor: "pointer",
              color: "green",
            }}
          />
        </VStack>
      ))}
      <Divider />
    </Box>
  );
}

export default Content;
