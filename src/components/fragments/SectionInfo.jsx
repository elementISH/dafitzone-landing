import { HStack, Heading, Text, VStack } from "@chakra-ui/react";
import Bubble from "./Bubble";

export default function SectionInfo({ icon, title, description }) {
  return (
    <>
      <VStack alignItems={"start"}>
        <HStack gap={4} alignItems={"center"}>
          <Bubble content={icon} size={"20px"} padding={4} />
          <Heading size={"md"}>{title}</Heading>
        </HStack>
        <Text color={"secondary.900"} fontSize={"xs"}>
          {description}
        </Text>
      </VStack>
    </>
  );
}
