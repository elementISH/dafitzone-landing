import initTranslations from "@/app/i18n";
import {
  Box,
  Flex,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

export default async function DafitzoneFooter({ locale }) {
  const { t } = await initTranslations(locale, ["footer"]);
  return (
    <Box
      bg="secondary.500"
      color="primary.100"
      px={{ base: "20px", lg: "60px" }}
      py={10}
    >
      <Flex
        justifyContent="space-between"
        alignItems="center"
        direction={{ base: "column", lg: "row" }}
        gap={{ base: 10, lg: 0 }}
      >
        <VStack gap={5} alignItems={{ base: "center", lg: "start" }}>
          <Heading size={{ base: "lg", lg: "xl" }}>{t("header")}</Heading>
          <Text
            color="inherit"
            fontSize={{ base: "lg", lg: "lg" }}
            w={{ base: "100%", lg: "75%" }}
            textAlign={{ base: " center", lg: "start" }}
          >
            {t("description_first")}{" "}
            <Text as="span" color="primary.500">
              Dafitzone
            </Text>{" "}
            {t("description_second")}
          </Text>
        </VStack>
        <VStack gap={5} alignItems={{ base: "center", lg: "end" }}>
          <HStack justifyContent={{ base: "center", lg: "end" }}>
            <Image src="appstore.svg" w={{ base: "40%", lg: "100%" }} />
            <Image src="googleplay.svg" w={{ base: "40%", lg: "100%" }} />
          </HStack>
          <HStack gap={2}>
            <Image src="facebook.svg" w="40px" />
            <Image src="instagram.svg" w="40px" />
            <Image src="linkedin.svg" w="40px" />
          </HStack>
        </VStack>
      </Flex>
    </Box>
  );
}
