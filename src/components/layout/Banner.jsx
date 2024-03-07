import initTranslations from "@/app/i18n";
import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  IconButton,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";

export default async function Banner({ locale }) {
  const flag = locale == "ar" ? "english.svg" : "arabic.svg";
  const title = locale == "ar" ? "english" : "العربية";
  const family = locale == "ar" ? "roboto" : "khebrat";
  const toggle = locale == "ar" ? "/en" : "/ar";
  const { t } = await initTranslations(locale, ["banner", "common"]);
  return (
    <>
      <Flex
        direction={"column"}
        px={{ base: "20px", md: "60px" }}
        py={"20px"}
        bg={"opacity.orange"}
      >
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <Image
            src="logo.png"
            w={{ base: "4rem", md: 120 }}
            h={{ base: "2rem", md: 50 }}
          />
          <HStack align={"center"} gap={4}>
            <Button
              as={Link}
              bg={"secondary.500"}
              color={"primary.100"}
              size={{ base: "sm", md: "md" }}
              display={{ base: "none", md: "flex" }}
              leftIcon={<Image src={flag} w={25} h={25} />}
              fontFamily={family}
              href={toggle}
              scroll={false}
            >
              {title}
            </Button>
            <IconButton
              as={Link}
              bg={"secondary.500"}
              color={"primary.100"}
              display={{ base: "flex", md: "none" }}
              size={{ base: "sm", md: "md" }}
              icon={<Image src={flag} w={25} h={25} />}
              href={toggle}
              scroll={false}
            />
            <Button
              bg={"secondary.100"}
              color={"primary.500"}
              variant={"withShadow"}
              size={{ base: "sm", md: "md" }}
            >
              {t("common:download")}
            </Button>
          </HStack>
        </Flex>
        <Flex
          mt={{ base: "1rem", lg: "4rem" }}
          alignItems={"flex-start"}
          direction={{ base: "column-reverse", lg: "row" }}
          gap={5}
        >
          <Box position={"relative"} mt={{ base: 5, lg: 0 }}>
            <VStack w={"100%"} alignItems={"flex-start"} gap={8}>
              <VStack alignItems={"flex-start"} gap={2}>
                <Heading
                  as={"h1"}
                  size={{ base: "lg", md: "xl" }}
                  w={"full"}
                  color={"primary.500"}
                >
                  {t("header")}
                </Heading>
                <Text
                  fontSize={{ base: "sm", md: "md" }}
                  maxW={{ base: "100%", md: "75%" }}
                >
                  {t("description")}
                </Text>
              </VStack>
              <Button variant={"original"} mx={{ base: "auto", md: "unset" }}>
                {t("common:change_btn")}
              </Button>
            </VStack>
            <Image
              src="man_logo.svg"
              position={"absolute"}
              top={"120%"}
              w={"20rem"}
              opacity={"0.4"}
              display={{ base: "none", lg: "block" }}
            />
          </Box>
          <HStack
            maxW="40rem"
            maxH="35rem"
            alignItems={{ base: "center", lg: "start" }}
            justifyContent={{ base: "center", lg: "start" }}
            gap={{ base: 5, lg: 10 }}
          >
            <Image
              src="banner_mockup_1.png"
              w={{ base: "45%", md: "35%" }}
              h="80%"
            />
            <Image
              src="banner_mockup_2.png"
              w={{ base: "45%", md: "35%" }}
              h="80%"
              mt={{ base: 75, md: "6rem" }}
            />
          </HStack>
        </Flex>
      </Flex>
    </>
  );
}
