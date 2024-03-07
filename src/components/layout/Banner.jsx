import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  IconButton,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
export default function Banner() {
  return (
    <>
      <Flex
        direction={"column"}
        px={{ base: "20px", md: "60px" }}
        py={"20px"}
        bg={"opacity.orange"}
      >
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <Image src="logo.png" w={120} h={50} />
          <HStack mb={5}>
            <Button
              bg={"secondary.500"}
              color={"primary.100"}
              size={{ base: "sm", md: "md" }}
              display={{ base: "none", md: "block" }}
              leftIcon={<Image src="english.svg" w={25} h={25} />}
            >
              English
            </Button>
            <IconButton
              bg={"secondary.500"}
              color={"primary.100"}
              display={{ base: "block", md: "none" }}
              size={{ base: "sm", md: "md" }}
              icon={<Image src="english.svg" w={25} h={25} />}
            ></IconButton>
            <Button
              bg={"secondary.100"}
              color={"primary.500"}
              variant={"withShadow"}
              size={{ base: "sm", md: "md" }}
            >
              Download App
            </Button>
          </HStack>
        </Flex>
        <Flex
          mt={{ base: "1rem", md: "4rem" }}
          alignItems={"flex-start"}
          direction={{ base: "column-reverse", md: "row" }}
        >
          <Box position={"relative"} mt={{ base: 5, md: 0 }}>
            <VStack w={"100%"} alignItems={"flex-start"} gap={8}>
              <VStack alignItems={"flex-start"} gap={2}>
                <Heading as={"h1"} size={{ base: "lg", md: "xl" }} w={"full"}>
                  Your Coach In Your Pocket
                </Heading>
                <Text
                  fontSize={{ base: "sm", md: "md" }}
                  maxW={{ base: "100%", md: "75%" }}
                >
                  Train at home or at the gym, get a healthy diet that suits
                  your goals, and track your progress with the best trainers
                  with the #1 fitness app in the Arab world.
                </Text>
              </VStack>
              <Button variant={"original"} mx={{ base: "auto", md: "unset" }}>
                Start the change now
              </Button>
            </VStack>
            <Image
              src="man_logo.svg"
              position={"absolute"}
              top={"120%"}
              w={"20rem"}
              opacity={"0.4"}
              display={{ base: "none", md: "block" }}
            />
          </Box>
          <HStack
            maxW="40rem"
            maxH="35rem"
            alignItems={{ base: "center", md: "start" }}
            justifyContent={{ base: "center", md: "start" }}
            gap={{ base: 5, md: 10 }}
          >
            <Image
              src="banner_mockup_1.png"
              w={{ base: "45%", md: "35%" }}
              h="80%"
            />
            <Image
              src="banner_mockup_2.png"
              w={{ base: "45%", md: "35%" }}
              h="80%"
              mt={75}
            />
          </HStack>
        </Flex>
      </Flex>
    </>
  );
}
