import { HStack, Heading, Text, VStack } from "@chakra-ui/react";
import Bubble from "./Bubble";

export default function SectionInfo({ icon, title, description }) {
  return (
    <>
      <VStack alignItems={"start"}>
        <HStack gap={2} alignItems={"center"}>
          <Bubble content={icon} size={"10px"} padding={4} font="md" />
          <Heading size={{ base: "sm", md: "md" }} w={"100%"}>
            {title}
          </Heading>
        </HStack>
        <Text
          color={"secondary.900"}
          fontSize={{ base: "xs", md: "sm" }}
          maxW={{ base: "100%", md: "75%" }}
        >
          {description}
        </Text>
      </VStack>
    </>
  );
}
