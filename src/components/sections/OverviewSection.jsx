import { Flex, Heading, Text, VStack } from "@chakra-ui/react";
import initTranslations from "@/app/i18n";
import CenterSliderFragment from "../fragments/CenterSliderFragment";
export default async function OverviewSection({ locale }) {
  const { t } = await initTranslations(locale, ["overview"]);
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
          <Heading size={{ base: "md", md: "xl", lg: "2xl" }}>
            {t("header")}
          </Heading>
          <Text
            fontSize={{ base: "xs", md: "md" }}
            textAlign={"center"}
            color={"secondary.900"}
          >
            {t("description")}
          </Text>
        </VStack>
      </VStack>
      <CenterSliderFragment locale={locale} />
    </Flex>
  );
}
