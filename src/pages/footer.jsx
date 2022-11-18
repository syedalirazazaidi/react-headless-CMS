import React from "react";
import { Image } from "@chakra-ui/react";
import { Box, Heading } from "@chakra-ui/react";

import youtu from "../images/youtube_dark.png";
import twitt from "../images/twitter_dark.png";
import linkd from "../images/linkedin_dark.png";

function Footer() {
  return (
    <Box
      display="flex"
      p={6}
      justifyContent="space-between"
      px="160px"
      minWidth="100%"
      bg="#1d3338"
    >
      <Heading color="whatsapp.100"> Grumblebum</Heading>
      <Box display="flex" gap={4}>
        <Image boxSize="40px" src={youtu} alt="Dan Abramov" />
        <Image boxSize="40px" src={twitt} alt="Dan Abramov" />
        <Image boxSize="40px" src={linkd} alt="Dan Abramov" />
      </Box>
    </Box>
  );
}

export default Footer;
