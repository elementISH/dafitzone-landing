import { Flex } from "@chakra-ui/react";

export default function Bubble({ content, size, padding, font }) {
  return (
    <>
      <Flex
        p={padding}
        w={size}
        h={size}
        justifyContent={"center"}
        alignItems={"center"}
        borderRadius={"full"}
        border={"2px solid"}
        background={"opacity.orange"}
        borderColor={"primary.500"}
        color={"primary.500"}
        fontSize={font ?? "lg"}
      >
        {content}
      </Flex>
    </>
  );
}
