"use client";
import {
  Flex,
  Heading,
  Text,
  VStack,
  Box,
  useBreakpointValue,
} from "@chakra-ui/react";
import SectionIllustration from "../fragments/SectionIllustration";
import SectionInfo from "../fragments/SectionInfo";

export default function TrainingSection({
  odd,
  illustrationsrc,
  image1,
  image2,
}) {
  const isMobile = useBreakpointValue({ base: true, md: false }); // Use a wider breakpoint for mobile

  return (
    <>
      <Flex
        bg={odd ? "primary.900" : "primary.100"}
        py={10}
        px={{ base: "20px", md: "60px" }} // Adjust padding for larger screens
        gap={{ base: "3rem", md: "5rem" }} // Adjust gap based on screen size
        flexDirection={isMobile ? "column" : odd ? "row-reverse" : "row"}
      >
        {isMobile ? ( // Render illustration first only on mobile
          <SectionIllustration
            image1={image1}
            image2={image2}
            illustrationsrc={illustrationsrc}
          />
        ) : null}

        <VStack
          gap={10}
          w={{ base: "100%", md: "50%" }} // Adjust width based on screen size
          alignItems="start"
        >
          <VStack gap={5}>
            <Heading size="sm" color="primary.500" fontWeight={600}>
              Why choose dafitzone to create exercises?
            </Heading>
            <VStack gap={1}>
              <Heading size="lg">Detailed trainings for all levels</Heading>
              <Text color="secondary.900" fontSize="sm">
                Get fit anytime, anywhere. Whether you're a beginner or a pro,
                with or without equipment, our professional trainers will help
                you reach your fitness goals.
              </Text>
            </VStack>
          </VStack>
          <VStack gap={5}>
            <SectionInfo
              icon="1"
              title="Specialized training programs"
              description="No matter what your goal or fitness level is, there is a program designed specifically for you that you can practice on the days you prefer and with the tools available."
            />
            <SectionInfo
              icon="1"
              title="Specialized training programs"
              description="No matter what your goal or fitness level is, there is a program designed specifically for you that you can practice on the days you prefer and with the tools available."
            />
            <SectionInfo
              icon="1"
              title="Specialized training programs"
              description="No matter what your goal or fitness level is, there is a program designed specifically for you that you can practice on the days you prefer and with the tools available."
            />
          </VStack>
        </VStack>

        {isMobile ? null : ( // Render illustration conditionally for non-mobile
          <SectionIllustration
            image1={image1}
            image2={image2}
            illustrationsrc={illustrationsrc}
          />
        )}
      </Flex>
    </>
  );
}
