import React from "react";

import { Box, Image } from "@chakra-ui/react";
import myimgbee from "../images/grup.png";
function Platform() {
  return (
    <Box py="30px" marginBottom="90px">
      <Image width="1700px" src={myimgbee} alt="Dan Abramov" />;
    </Box>
  );
}

export default Platform;
