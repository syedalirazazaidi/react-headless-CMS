import {
  Box,
  Flex,
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Button,
  FormHelperText,
  Text,
  HStack,
} from '@chakra-ui/react'

import React from 'react'

import { FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa'

import { FaUserAlt, FaLock } from 'react-icons/fa'

function SignUp() {
  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
    >
      <Box bg="#4cceee" width="30.78%" p={4} color="white" textAlign="center">
        SignUp to your Account
      </Box>

      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Box minW={{ base: '90%', md: '468px' }}>
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
                  <Input type="email" placeholder="enter your email  address" />
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
                  <Input type="password" placeholder="Enter your Password" />
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
  )
}

export default SignUp
