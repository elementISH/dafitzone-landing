"use client";
import CenterSlider from "@/components/fragments/CenterSlider";
import SliderChip from "@/components/fragments/SliderChip";
import {
  Box,
  Flex,
  HStack,
  Heading,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function OverviewSection() {
  const isMobile = useBreakpointValue({ base: true, lg: false }); // Use a wider breakpoint for mobile
  return (
    <Flex
      bg={"primary.100"}
      w={"100vw"}
      zIndex={2}
      position={"relative"}
      alignItems={"center"}
      justifyContent={"center"}
      py={"20px"}
      flexDirection={"column"}
      mb={5}
    >
      <VStack gap={10}>
        <VStack gap={2}>
          <Heading size={{ base: "lg", md: "2xl" }}>
            Start In Less Than A Minute
          </Heading>
          <Text
            fontSize={{ base: "xs", md: "md" }}
            maxW={{ base: "90%", md: "60%" }}
            textAlign={"center"}
            color={"secondary.900"}
          >
            EICoach is the easiest and fastest way to get your ideal program
            prepared by the best coaches and nutrition experts utilizing
            artificial intelligence technology
          </Text>
        </VStack>
      </VStack>
      {!isMobile ? (
        <HStack gap={"5rem"} mt={10}>
          <VStack gap={20}>
            <SliderChip
              indicator={"1"}
              title={"Start Your Free Trial"}
              description={"you can renew your subscription at any time"}
            />
            <SliderChip
              indicator={"2"}
              title={"Start Your Free Trial"}
              description={"you can renew your subscription at any time"}
            />
          </VStack>
          <CenterSlider />
          <VStack gap={20}>
            <SliderChip
              indicator={"3"}
              title={"Start Your Free Trial"}
              description={"you can renew your subscription at any time"}
            />
            <SliderChip
              indicator={"4"}
              title={"Start Your Free Trial"}
              description={"you can renew your subscription at any time"}
            />
          </VStack>
        </HStack>
      ) : (
        <VStack gap={"2rem"} mt={10} px={"20px"}>
          <CenterSlider />
          <VStack mt={5} gap={5}>
            <HStack gap={5}>
              <SliderChip
                indicator={"1"}
                title={"Start Your Free Trial"}
                description={"you can renew your subscription at any time"}
              />
              <SliderChip
                indicator={"2"}
                title={"Start Your Free Trial"}
                description={"you can renew your subscription at any time"}
              />
            </HStack>
            <HStack gap={5}>
              <SliderChip
                indicator={"3"}
                title={"Start Your Free Trial"}
                description={"you can renew your subscription at any time"}
              />
              <SliderChip
                indicator={"4"}
                title={"Start Your Free Trial"}
                description={"you can renew your subscription at any time"}
              />
            </HStack>
          </VStack>
        </VStack>
      )}
    </Flex>
  );
}
