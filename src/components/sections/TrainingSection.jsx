import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import SectionIllustration from "../fragments/SectionIllustration";
import SectionInfo from "../fragments/SectionInfo";
import initTranslations from "@/app/i18n";
import TrainingWrapper from "../motion/TrainingWrapper";
export default async function TrainingSection({
  odd,
  illustrationsrc,
  image1,
  image2,
  locale,
}) {
  const { t } = await initTranslations(locale, ["training"]);
  return (
    <>
      <Flex
        bg={odd ? "primary.900" : "primary.100"}
        py={10}
        px={{ base: "20px", md: "60px" }} // Adjust padding for larger screens
        gap={{ base: "3rem", md: "5rem" }} // Adjust gap based on screen size
        flexDirection={{ base: "column", lg: odd ? "row-reverse" : "row" }}
      >
        <Box display={{ base: "block", lg: "none" }}>
          <SectionIllustration
            image1={image1}
            image2={image2}
            illustrationsrc={illustrationsrc}
            start={odd ? "-" : "+"}
          />
        </Box>

        <VStack
          gap={10}
          w={{ base: "100%", md: "100%", lg: "50%" }} // Adjust width based on screen size
          alignItems="start"
        >
          <VStack gap={5}>
            <Heading
              size="sm"
              color="primary.500"
              fontWeight={600}
              textAlign={"start"}
              w={"100%"}
            >
              {t("mini_header")}
            </Heading>
            <VStack gap={1} alignItems={"start"}>
              <Heading
                size={{ base: "md", md: "lg" }}
                textAlign={"start"}
                w={"100%"}
              >
                {t("header")}
              </Heading>
              <Text
                color="secondary.900"
                fontSize="sm"
                textAlign={{ base: "start" }}
                maxW={"90%"}
              >
                {t("description")}
              </Text>
            </VStack>
          </VStack>
          <TrainingWrapper>
            <SectionInfo
              icon="1"
              title={t("feature_title")}
              description={t("feature_description")}
            />
            <SectionInfo
              icon="2"
              title={t("feature_title")}
              description={t("feature_description")}
            />
            <SectionInfo
              icon="3"
              title={t("feature_title")}
              description={t("feature_description")}
            />
          </TrainingWrapper>
        </VStack>

        <Box display={{ base: "none", lg: "block" }}>
          <SectionIllustration
            image1={image1}
            image2={image2}
            illustrationsrc={illustrationsrc}
            start={odd ? "+" : "-"}
          />
        </Box>
      </Flex>
    </>
  );
}
