import {
  Box,
  Flex,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box
      bg="secondary.500"
      color="primary.100"
      px={{ base: "20px", lg: "60px" }}
      py={10}
    >
      <Flex
        justifyContent="space-between"
        alignItems="center"
        direction={{ base: "column", lg: "row" }}
        gap={{ base: 10, lg: 0 }}
      >
        <VStack gap={5} alignItems={{ base: "center", lg: "start" }}>
          <Heading size={{ base: "lg", lg: "xl" }}>
            Win your healthiness
          </Heading>
          <Text
            color="inherit"
            fontSize={{ base: "lg", lg: "lg" }}
            w={{ base: "100%", lg: "75%" }}
            textAlign={{ base: " center", lg: "start" }}
          >
            Download{" "}
            <Text as="span" color="primary.500">
              Dafitzone
            </Text>{" "}
            now and take the first steps towards a better life.
          </Text>
        </VStack>
        <VStack gap={5} alignItems={{ base: "center", lg: "end" }}>
          <HStack justifyContent={{ base: "center", lg: "end" }}>
            <Image src="appstore.svg" w={{ base: "40%", lg: "100%" }} />
            <Image src="googleplay.svg" w={{ base: "40%", lg: "100%" }} />
          </HStack>
          <HStack gap={2}>
            <Image src="youtube.svg" w="40px" />
            <Image src="facebook.svg" w="40px" />
            <Image src="instagram.svg" w="40px" />
            <Image src="linkedin.svg" w="40px" />
          </HStack>
        </VStack>
      </Flex>
    </Box>
  );
}
