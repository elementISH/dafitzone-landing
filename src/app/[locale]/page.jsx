import CompetitveSection from "@/components/sections/CompetitveSection";
import OverviewSection from "@/components/sections/OverviewSection";
import TrainingSection from "@/components/sections/TrainingSection";

export default function Page({ params: { locale } }) {
  return (
    <>
      <OverviewSection locale={locale} />
      <TrainingSection
        odd
        image1={"training_section_mockup_1.png"}
        image2={"training_section_mockup_2.png"}
        illustrationsrc={"training_section_illustration.svg"}
        locale={locale}
      />
      <TrainingSection
        image1={"food_section_mockup_1.png"}
        image2={"food_section_mockup_2.png"}
        illustrationsrc={"food_section_illustration.svg"}
        locale={locale}
      />
      <TrainingSection
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
