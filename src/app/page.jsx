import CompetitveSection from "@/components/sections/CompetitveSection";
import OverviewSection from "@/components/sections/OverviewSection";
import TrainingSection from "@/components/sections/TrainingSection";

export default function Page() {
  return (
    <>
      <OverviewSection />
      <TrainingSection
        odd
        image1={"training_section_mockup_1.png"}
        image2={"training_section_mockup_2.png"}
        illustrationsrc={"training_section_illustration.svg"}
      />
      <TrainingSection
        image1={"food_section_mockup_1.png"}
        image2={"food_section_mockup_2.png"}
        illustrationsrc={"food_section_illustration.svg"}
      />
      <TrainingSection
        odd
        image1={"general_section_mockup_1.png"}
        image2={"general_section_mockup_2.png"}
        illustrationsrc={"general_section_illustration.svg"}
      />
      <CompetitveSection />
    </>
  );
}
