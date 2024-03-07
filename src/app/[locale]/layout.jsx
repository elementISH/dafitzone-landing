import { Roboto } from "next/font/google";
import { Providers } from "./providers";
import Banner from "@/components/layout/Banner";
import Content from "@/components/layout/Content";
import { Button, HStack } from "@chakra-ui/react";
import DafitzoneFooter from "@/components/layout/DafitzoneFooter";
import initTranslations from "../i18n";
import localFont from "next/font/local";
const khebrat = localFont({
  src: "../../fonts/khebrat.ttf",
});
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["500"],
});
export const metadata = {
  title: "Dafitzone",
};

export default async function RootLayout({ params: { locale }, children }) {
  const { t } = await initTranslations(locale, ["common"]);
  const dir = locale == "ar" ? "rtl" : "ltr";
  return (
    <html lang={locale} dir={dir}>
      <body className={locale == "ar" ? khebrat.className : roboto.className}>
        <Providers>
          <Banner locale={locale} dir={dir} />
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
              {t("change_btn")}
            </Button>
          </HStack>
          <DafitzoneFooter locale={locale} />
        </Providers>
      </body>
    </html>
  );
}
