"use client";
import { HStack, VStack } from "@chakra-ui/react";
import SliderChip from "./SliderChip";
import CenterSlider from "./CenterSlider";

export default function CenterSliderFragment({ locale }) {
  const dir = locale == "ar" ? "rtl" : "ltr";
  return (
    <>
      <HStack gap={"5rem"} mt={10} display={{ base: "none", lg: "flex" }}>
        <VStack gap={20}>
          <SliderChip
            indicator={"1"}
            title={"chip_title"}
            description={"chip_description"}
            locale={locale}
          />
          <SliderChip
            indicator={"2"}
            title={"chip_title"}
            description={"chip_description"}
            locale={locale}
          />
        </VStack>
        <CenterSlider dir={dir} />
        <VStack gap={20}>
          <SliderChip
            indicator={"3"}
            title={"chip_title"}
            description={"chip_description"}
            locale={locale}
          />
          <SliderChip
            indicator={"4"}
            title={"chip_title"}
            description={"chip_description"}
            locale={locale}
          />
        </VStack>
      </HStack>
      <VStack
        gap={"2rem"}
        mt={10}
        px={"20px"}
        display={{ base: "flex", lg: "none" }}
      >
        <CenterSlider dir={dir} />
        <VStack mt={5} gap={5}>
          <HStack gap={5}>
            <SliderChip
              indicator={"1"}
              title={"chip_title"}
              description={"chip_description"}
              locale={locale}
            />
            <SliderChip
              indicator={"2"}
              title={"chip_title"}
              description={"chip_description"}
              locale={locale}
            />
          </HStack>
          <HStack gap={5}>
            <SliderChip
              indicator={"3"}
              title={"chip_title"}
              description={"chip_description"}
              locale={locale}
            />
            <SliderChip
              indicator={"4"}
              title={"chip_title"}
              description={"chip_description"}
              locale={locale}
            />
          </HStack>
        </VStack>
      </VStack>
    </>
  );
}
