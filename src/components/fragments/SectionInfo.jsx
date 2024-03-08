"use client";
import { HStack, Heading, Text, VStack } from "@chakra-ui/react";
import Bubble from "./Bubble";
import { motion } from "framer-motion";
export default function SectionInfo({ icon, title, description }) {
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <>
      <VStack alignItems={"start"} as={motion.div} variants={item}>
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
