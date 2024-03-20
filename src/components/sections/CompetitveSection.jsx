"use client";
import { GridItem, Grid } from "@chakra-ui/react";
import CompetitiveCard from "../motion/CompetitiveCard";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function CompetitiveGrid({ children }) {
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
    <Grid
      as={motion.div}
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      templateColumns={{ lg: "repeat(3, 1fr)", sm: "1fr" }}
      gap={["1rem", "2rem", "3rem"]}
      px={["20px", "40px", "60px"]}
      py={5}
    >
      {children}
    </Grid>
  );
}

export default function CompetitveSection({ locale }) {
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <CompetitiveGrid>
      <GridItem
        as={motion.div}
        variants={item}
        display={"flex"}
        alignItems={"stretch"}
      >
        <CompetitiveCard
          locale={locale}
          backgroundImage={
            "linear-gradient(-180deg, rgba(212, 180, 131, 0.2) 0%, rgba(212, 180, 131, 0.1) 100%)"
          }
          index={1}
        />
      </GridItem>
      <GridItem
        as={motion.div}
        variants={item}
        display={"flex"}
        alignItems={"stretch"}
      >
        <CompetitiveCard
          locale={locale}
          backgroundImage={
            "linear-gradient(-180deg, rgba(200, 135, 55, 0.2) 0%, rgba(200, 135, 55, 0.1) 100%)"
          }
          index={2}
        />
      </GridItem>
      <GridItem
        as={motion.div}
        variants={item}
        display={"flex"}
        alignItems={"stretch"}
      >
        <CompetitiveCard
          locale={locale}
          backgroundImage={
            "linear-gradient(-180deg, rgba(255, 137, 0, 0.2) 0%, rgba(255, 137, 0, 0.1) 100%)"
          }
          index={3}
        />
      </GridItem>
    </CompetitiveGrid>
  );
}
