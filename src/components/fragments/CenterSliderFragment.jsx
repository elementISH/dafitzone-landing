"use client";
import { HStack, VStack } from "@chakra-ui/react";
import SliderChip from "./SliderChip";
import CenterSlider from "./CenterSlider";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function Wrapper({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const fadeVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1,
        duration: 0.5,
        delayChildren: 0.3,
        staggerChildren: 0.5,
      },
    },
  };
  return (
    <HStack
      ref={ref}
      as={motion.div}
      variants={fadeVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      mt={10}
      gap={"5rem"}
      display={{ base: "none", lg: "flex" }}
    >
      {children}
    </HStack>
  );
}
function MiniWrapper({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const fadeVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1,
        duration: 0.5,
        delayChildren: 0.3,
        staggerChildren: 0.5,
      },
    },
  };
  return (
    <VStack
      ref={ref}
      as={motion.div}
      variants={fadeVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      gap={"2rem"}
      mt={10}
      px={"20px"}
      display={{ base: "flex", lg: "none" }}
    >
      {children}
    </VStack>
  );
}

export default function CenterSliderFragment({ locale }) {
  const dir = locale == "ar" ? "rtl" : "ltr";
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <>
      <Wrapper>
        <VStack as={motion.div} variants={item} gap={20}>
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
        <VStack gap={20} as={motion.div} variants={item}>
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
      </Wrapper>
      <MiniWrapper>
        <CenterSlider dir={dir} />
        <VStack mt={5} gap={5}>
          <HStack gap={5} as={motion.div} variants={item}>
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
          <HStack gap={5} as={motion.div} variants={item}>
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
      </MiniWrapper>
    </>
  );
}
