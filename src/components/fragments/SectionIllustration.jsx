import { Box, Image } from "@chakra-ui/react";
export default function SectionIllustration({
  image1,
  image2,
  illustrationsrc,
}) {
  return (
    <>
      <Box position="relative" maxW="40rem" maxH="35rem">
        <Image src={image1} w="35%" h="80%" position="absolute" left="10%" />
        <Image
          src={image2}
          w="35%"
          h="80%"
          position="absolute"
          left="50%"
          top="20%"
        />
        <Image src={illustrationsrc} w="100%" h="100%" />
      </Box>
    </>
  );
}
