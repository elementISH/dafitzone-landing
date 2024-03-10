"use client";
import { motion } from "framer-motion";
import { HStack, Image } from "@chakra-ui/react";

export default function BannerMockups({ start }) {
  const variants = {
    hidden: { x: start + "50vw", opacity: 0 }, // Start off-screen with no opacity
    visible: {
      x: 0, // Animate to visible position (x: 0)
      opacity: 1, // Animate opacity to 1 for full visibility
      transition: { duration: 1, ease: "easeInOut" }, // Adjust duration and easing
    },
  };
  return (
    <HStack
      as={motion.div}
      maxW="40rem"
      variants={variants}
      initial="hidden"
      animate="visible"
      maxH="35rem"
      alignItems={{ base: "center", lg: "start" }}
      justifyContent={{ base: "center", lg: "center" }}
      gap={{ base: 5, lg: 10 }}
    >
      <Image src="banner_mockup_1.png" w={{ base: "45%", md: "35%" }} h="80%" />
      <Image
        src="banner_mockup_2.png"
        w={{ base: "45%", md: "35%" }}
        h="80%"
        mt={{ base: 75, md: "6rem" }}
      />
    </HStack>
  );
}
