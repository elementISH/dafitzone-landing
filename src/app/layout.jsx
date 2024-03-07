import { Roboto } from "next/font/google";
import { Providers } from "./providers";
import Banner from "@/components/layout/Banner";
import Content from "@/components/layout/Content";
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
        </Providers>
      </body>
    </html>
  );
}
