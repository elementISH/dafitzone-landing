import {
  Box,
  Flex,
  GridItem,
  Grid,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

export default function CompetitveSection() {
  return (
    <Grid
      templateColumns={{ md: "repeat(3, 1fr)", sm: "1fr" }}
      gap={["1rem", "2rem", "3rem"]}
      px={["20px", "40px", "60px"]}
      py={5}
    >
      <GridItem>
        <VStack
          backgroundImage={
            "linear-gradient(-180deg, rgba(212, 180, 131, 0.2) 0%, rgba(212, 180, 131, 0.1) 100%)"
          }
          borderRadius={"10px"}
          p={5}
          gap={10}
          alignItems={"center"}
          justifyContent={"center"}
          overflow={"hidden"}
        >
          <VStack gap={3}>
            <Heading size={"md"}>compete with your friends</Heading>
            <Text fontSize={"sm"} color={"secondary.900"} textAlign={"center"}>
              Challenge yourself and your friends. Collect points and badges
              with each exercise, meal, and achievement. Reach higher levels and
              build healthy habits quicker
            </Text>
          </VStack>
          <Box position={"relative"}>
            <Image
              src="card_screen_1.png"
              w="80%"
              mx={"auto"}
              objectFit={"cover"}
            />
          </Box>
        </VStack>
      </GridItem>
      <GridItem>
        <VStack
          backgroundImage={
            "linear-gradient(-180deg, rgba(200, 135, 55, 0.2) 0%, rgba(200, 135, 55, 0.1) 100%)"
          }
          borderRadius={"10px"}
          p={5}
          gap={10}
          alignItems={"center"}
          justifyContent={"center"}
          overflow={"hidden"}
        >
          <VStack gap={3}>
            <Heading size={"md"}>compete with your friends</Heading>
            <Text fontSize={"sm"} color={"secondary.900"} textAlign={"center"}>
              Challenge yourself and your friends. Collect points and badges
              with each exercise, meal, and achievement. Reach higher levels and
              build healthy habits quicker
            </Text>
          </VStack>
          <Box position={"relative"}>
            <Image
              src="card_screen_2.png"
              w="80%"
              mx={"auto"}
              objectFit={"cover"}
            />
          </Box>
        </VStack>
      </GridItem>
      <GridItem>
        <VStack
          backgroundImage={
            "linear-gradient(-180deg, rgba(255, 137, 0, 0.2) 0%, rgba(255, 137, 0, 0.1) 100%)"
          }
          borderRadius={"10px"}
          p={5}
          gap={10}
          alignItems={"center"}
          justifyContent={"center"}
          overflow={"hidden"}
        >
          <VStack gap={3}>
            <Heading size={"md"}>compete with your friends</Heading>
            <Text fontSize={"sm"} color={"secondary.900"} textAlign={"center"}>
              Challenge yourself and your friends. Collect points and badges
              with each exercise, meal, and achievement. Reach higher levels and
              build healthy habits quicker
            </Text>
          </VStack>
          <Box position={"relative"}>
            <Image
              src="card_screen_3.png"
              w="80%"
              mx={"auto"}
              objectFit={"cover"}
            />
          </Box>
        </VStack>
      </GridItem>
    </Grid>
  );
}
