import { Box, Heading, Image, Text, VStack } from "@chakra-ui/react";
import initTranslations from "@/app/i18n";

export default async function CompetitiveCard({
  backgroundImage,
  locale,
  index,
}) {
  const { t } = await initTranslations(locale, ["competitive"]);
  return (
    <VStack
      backgroundImage={backgroundImage}
      borderRadius={"10px"}
      p={5}
      gap={5}
      alignItems={"center"}
      justifyContent={"space-between"}
      overflow={"hidden"}
      flex={1}
    >
      <Heading size={"md"}> {t(`header_${index}`)}</Heading>
      <Box position={"relative"}>
        <Image
          src={`card_screen_${index}.png`}
          w="80%"
          mx={"auto"}
          objectFit={"cover"}
        />
      </Box>
    </VStack>
  );
}
