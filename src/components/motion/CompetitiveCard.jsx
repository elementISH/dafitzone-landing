import { Box, Heading, Image, Text, VStack } from "@chakra-ui/react";
import initTranslations from "@/app/i18n";

export default async function CompetitiveCard({ backgroundImage, locale }) {
  const { t } = await initTranslations(locale, ["competitive"]);
  return (
    <VStack
      backgroundImage={backgroundImage}
      borderRadius={"10px"}
      p={5}
      gap={10}
      alignItems={"center"}
      justifyContent={"center"}
      overflow={"hidden"}
    >
      <VStack gap={3}>
        <Heading size={"md"}> {t("header")}</Heading>
        <Text fontSize={"sm"} color={"secondary.900"} textAlign={"center"}>
          {t("description")}
        </Text>
      </VStack>
      <Box position={"relative"}>
        <Image
          src="card_screen_3.png"
          w="80%"
          mx={"auto"}
          objectFit={"cover"}
        />
      </Box>
    </VStack>
  );
}
