import { Roboto } from "next/font/google";
import { Providers } from "./providers";
import Banner from "@/components/layout/Banner";
import Content from "@/components/layout/Content";
import { Button, HStack } from "@chakra-ui/react";
import DafitzoneFooter from "@/components/layout/DafitzoneFooter";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["500"],
});
export const metadata = {
  title: "Dafitzone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Providers>
          <Banner />
          <Content children={children} />
          <HStack
            w={"100%"}
            mt={10}
            position={"sticky"}
            bottom={0}
            zIndex={100}
            py={5}
            bg={"opacity.orange_contrasted"}
            backdropFilter={"auto"}
            backdropBlur={"4px"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Button variant={"original"} size={{ base: "sm", md: "md" }}>
              Start the change now
            </Button>
          </HStack>
          <DafitzoneFooter />
        </Providers>
      </body>
    </html>
  );
}
