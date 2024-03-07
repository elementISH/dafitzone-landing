import { Flex, Heading, Text, VStack } from "@chakra-ui/react";
import Bubble from "./Bubble";

export default function SliderChip({ indicator, title, description }) {
  return (
    <>
      <VStack gap={4} alignItems={"center"}>
        <Bubble content={indicator} size={25} padding={5} />
        <VStack gap={1} alignItems={{ base: "center", md: "start" }}>
          <Heading
            size={{ base: "xs", md: "md" }}
            textAlign={"center"}
            w={"100%"}
          >
            {title}
          </Heading>
          <Text
            color={"secondary.900"}
            textAlign={{ base: "center", md: "start" }}
            fontSize={{ base: "xs", md: "sm" }}
          >
            {description}
          </Text>
        </VStack>
      </VStack>
    </>
  );
}
