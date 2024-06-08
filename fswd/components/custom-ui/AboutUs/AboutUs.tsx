import AboutUsIntro from "./AboutUsIntro/AboutUsIntro";
import NewAboutUs from "./AlternateSimpleAboutUsSection/NewAboutUs";
import CompanyHistory from "./CompanyHistory/CompanyHistory";
import MissionVisionValues from "./MissionVisionValues/MissionVisionValues";
import TeamProfiles from "./TeamProfiles/TeamProfiles";

export default function AboutUs() {
  return (
    <>
      <AboutUsIntro />
      {/* Alternate about us Section */}
      <NewAboutUs />
      {/* <CompanyHistory /> */}
      {/* <MissionVisionValues /> */}
      <TeamProfiles />
    </>
  );
}
