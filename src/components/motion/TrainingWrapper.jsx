"use client";
import { VStack } from "@chakra-ui/react";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
export default function TrainingWrapper({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.2,
      },
    },
  };
  return (
    <VStack
      gap={5}
      alignItems={"start"}
      as={motion.div}
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {children}
    </VStack>
  );
}
