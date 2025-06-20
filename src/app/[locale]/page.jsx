import AdModal from "@/components/fragments/AdModal";
import Banner from "@/components/layout/Banner";
import CompetitveSection from "@/components/sections/CompetitveSection";
import FoodSection from "@/components/sections/FoodSection";
import GeneralSection from "@/components/sections/GeneralSection";
import OverviewSection from "@/components/sections/OverviewSection";
import TrainingSection from "@/components/sections/TrainingSection";
import initTranslations from "../i18n";

export default async function Page({ params: { locale } }) {
  const dir = locale == "ar" ? "rtl" : "ltr";
  const { t } = await initTranslations(locale, ["common"]);
  return (
    <>
      <AdModal download={t("common:download")} />
      <Banner locale={locale} dir={dir} />
      <OverviewSection locale={locale} />
      <TrainingSection
        odd
        image1={"training_section_mockup_1.png"}
        image2={"training_section_mockup_2.png"}
        illustrationsrc={"training_section_illustration.svg"}
        locale={locale}
      />
      <FoodSection
        image1={"food_section_mockup_1.png"}
        image2={"food_section_mockup_2.png"}
        illustrationsrc={"food_section_illustration.svg"}
        locale={locale}
      />
      <GeneralSection
        odd
        image1={"general_section_mockup_1.png"}
        image2={"general_section_mockup_2.png"}
        illustrationsrc={"general_section_illustration.svg"}
        locale={locale}
      />
      <CompetitveSection locale={locale} />
    </>
  );
}
