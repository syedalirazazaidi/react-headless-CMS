import React from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  ButtonGroup,
  Spacer,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Link,
  FormHelperText,
  Text,
  HStack,
} from "@chakra-ui/react";
import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";

import { FaUserAlt, FaLock } from "react-icons/fa";

function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenA,
    onOpen: onOpenA,
    onClose: onCloseA,
  } = useDisclosure();
  return (
    <Flex
      minWidth={["40%", "100%", "100%"]}
      bg="#1d3338"
      py="3"
      px={[4, 32, 32]}
      alignItems="center"
      gap={[2, 2, 2]}
      position="fixed"
      zIndex="1"
    >
      <Box p="2">
        <Heading size="md" color="#feca03" fontSize={[16, 28, 28]}>
          Grumblebum
        </Heading>
      </Box>
      <Spacer />
      <ButtonGroup gap="2">
        <Button
          w={["16", "40", "40"]}
          bg="#1d3338"
          fontWeight="600"
          fontSize={[16, 22, 22]}
          color="#ffffff"
          border="1px"
          borderColor="gray.200"
          _hover={{
            opacity: 0.8,
            cursor: "pointer",
          }}
          onClick={onOpenA}
        >
          Log In
        </Button>
        <Button
          bg="#feca03"
          color="#434343"
          padding="4"
          w={["20", "40", "40"]}
          fontWeight="600"
          fontSize={[16, 22, 22]}
          _hover={{
            opacity: 0.8,
            cursor: "pointer",
          }}
          onClick={onOpen}
        >
          Sign Up
        </Button>
      </ButtonGroup>
      <Box>
        <Modal isOpen={isOpenA} onClose={onCloseA}>
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />

            <Flex
              flexDirection="column"
              width={["40wh", "100wh", "100wh"]}
              backgroundColor="gray.200"
              justifyContent="center"
              alignItems="center"
              mr={["51px", "-3px", "-3.4px"]}
            >
              <Box
                bg="#4cceee"
                width={["92.9%", "100%", "100%"]}
                p={6}
                color="white"
                textAlign="center"
              >
                LogIn to your Account
              </Box>

              <Stack
                flexDir="column"
                mb="2"
                justifyContent="center"
                alignItems="center"
              >
                {/* {{ base: "65%", md: "448px" }} */}
                <Box
                  // minW={{ base: "65%", md: "448px" }}

                  w={["288px", "448px", "448px"]}
                  h={["440px", "427px", "429px"]}
                >
                  <form>
                    <Stack
                      spacing={4}
                      p="1rem"
                      backgroundColor="whiteAlpha.900"
                      boxShadow="md"
                    >
                      <Box py="30px">
                        <Text
                          fontSize="18px"
                          fontWeight="300"
                          textAlign="center"
                        >
                          Settle for nothing else but a better world.
                          <Link color="teal.500" href="#">
                            Sign Up
                          </Link>
                          now!
                        </Text>
                      </Box>
                      <FormControl>
                        <InputGroup>
                          <InputLeftElement
                            pointerEvents="none"
                            children={<FaUserAlt color="gray.300" />}
                          />
                          <Input
                            type="email"
                            placeholder="enter your email  address"
                          />
                        </InputGroup>
                        <FormHelperText
                          textAlign="left"
                          fontSize="10px"
                          px="5px"
                        >
                          <Text>EMAIL ADDRESS/USERNAME</Text>
                        </FormHelperText>
                      </FormControl>
                      <FormControl>
                        <InputGroup>
                          <InputLeftElement
                            pointerEvents="none"
                            color="gray.300"
                            children={<FaLock color="black" />}
                          />
                          <Input
                            type="password"
                            placeholder="Enter your Password"
                          />
                        </InputGroup>
                        <FormHelperText
                          textAlign="left"
                          fontSize="10px"
                          px="5px"
                        >
                          <Text>PASSWORD</Text>
                        </FormHelperText>
                        <FormHelperText textAlign="right">
                          <Link color="#4cceee">forgot your password?</Link>
                        </FormHelperText>
                      </FormControl>
                      <Button
                        borderRadius={0}
                        type="submit"
                        variant="solid"
                        width="full"
                        border="2px solid #4cceee"
                        color="#4cceee"
                      >
                        Login
                      </Button>
                      <Box py="20px" display="flex" gap="15">
                        <Text>Or Log In With</Text>
                        <HStack>
                          <FaFacebook color="#1095f4" />
                          <FaGoogle color="#c42220" />
                          <FaTwitter color="#1d9bf0" />
                        </HStack>
                      </Box>
                    </Stack>
                  </form>
                </Box>
              </Stack>
            </Flex>
          </ModalContent>
        </Modal>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <Flex
            flexDirection="column"
            width={["30wh", "100wh", "100wh"]}
            backgroundColor="gray.200"
            justifyContent="center"
            alignItems="center"
            mr={["1px", "-3px", "-3.4px"]}
          >
            <Box
              bg="#4cceee"
              width={["92.9%", "100%", "100%"]}
              p={6}
              color="white"
              textAlign="center"
            >
              SignUp to your Account
            </Box>

            <Stack
              flexDir="column"
              mb="2"
              justifyContent="center"
              alignItems="center"
            >
              <Box minW={{ base: "85%", md: "448px" }} h="477.5px">
                <form>
                  <Stack
                    spacing={4}
                    p="1rem"
                    backgroundColor="whiteAlpha.900"
                    boxShadow="md"
                  >
                    <Box py="30px">
                      <Text fontSize="18px" fontWeight="300" textAlign="center">
                        Settle for nothing else but a better world. now!
                      </Text>
                    </Box>
                    <FormControl>
                      <InputGroup>
                        <InputLeftElement
                          pointerEvents="none"
                          children={<FaUserAlt color="gray.300" />}
                        />
                        <Input
                          type="email"
                          placeholder="enter your email  address"
                        />
                      </InputGroup>
                      <FormHelperText textAlign="left" fontSize="10px" px="5px">
                        <Text>EMAIL ADDRESS/USERNAME</Text>
                      </FormHelperText>
                    </FormControl>
                    <FormControl>
                      <InputGroup>
                        <InputLeftElement
                          pointerEvents="none"
                          children={<FaLock color="gray.300" />}
                        />
                        <Input
                          type="password"
                          placeholder="Enter your Password"
                        />
                      </InputGroup>
                      <FormHelperText textAlign="left" fontSize="10px" px="5px">
                        <Text>PASSWORD</Text>
                      </FormHelperText>
                    </FormControl>
                    <FormControl>
                      <InputGroup>
                        <InputLeftElement
                          pointerEvents="none"
                          color="gray.300"
                          children={<FaLock color="black" />}
                        />
                        <Input
                          type="password"
                          placeholder="Enter your Password again"
                        />
                      </InputGroup>
                      <FormHelperText textAlign="left" fontSize="10px" px="5px">
                        <Text>ENTER PASSWORD AGAIN</Text>
                      </FormHelperText>
                    </FormControl>
                    <Button
                      borderRadius={0}
                      type="submit"
                      variant="solid"
                      width="full"
                      border="2px solid #4cceee"
                      color="#4cceee"
                    >
                      SignUp
                    </Button>
                    <Box py="20px" display="flex" gap="15">
                      <Text>Or Sign Up With</Text>
                      <HStack>
                        <FaFacebook color="#1095f4" />
                        <FaGoogle color="#c42220" />
                        <FaTwitter color="#1d9bf0" />
                      </HStack>
                    </Box>
                  </Stack>
                </form>
              </Box>
            </Stack>
          </Flex>
        </ModalContent>
      </Modal>
    </Flex>
  );
}

export default Header;
