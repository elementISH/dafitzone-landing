import { Heading, Text, VStack } from "@chakra-ui/react";
import Bubble from "./Bubble";
import initTranslations from "@/app/i18n";

export default async function SliderChip({
  indicator,
  title,
  description,
  locale,
}) {
  const { t } = await initTranslations(locale, ["overview"]);
  return (
    <>
      <VStack gap={4} alignItems={"center"}>
        <Bubble content={indicator} size={25} padding={5} />
        <VStack gap={1} alignItems={{ base: "center", md: "start" }}>
          <Heading
            size={{ base: "xs", md: "md" }}
            textAlign={"center"}
            w={"100%"}
          >
            {t(title)}
          </Heading>
          <Text
            color={"secondary.900"}
            textAlign={{ base: "center", md: "start" }}
            fontSize={{ base: "xs", md: "sm" }}
          >
            {t(description)}
          </Text>
        </VStack>
      </VStack>
    </>
  );
}
