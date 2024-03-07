import { Box } from "@chakra-ui/react";

export default function Content({ children }) {
  return (
    <>
      <Box as={"main"} overflowX={"hidden"}>
        {children}
      </Box>
    </>
  );
}
