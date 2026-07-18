import Hero from "@/components/Hero";
import ExperienceBlock from "@/components/ExperienceBlock";
import AmenityGrid from "@/components/AmenityGrid";
import AvailabilityCalendar from "@/components/AvailabilityCalendar";
import DirectPerks from "@/components/DirectPerks";
import LocationMap from "@/components/LocationMap";
import NearbyThings from "@/components/NearbyThings";
import FaqAccordion from "@/components/FaqAccordion";
import SocialProof from "@/components/SocialProof";

export default function Home() {
  return (
    <>
      <Hero />
      <ExperienceBlock />
      <AmenityGrid />
      <AvailabilityCalendar />
      <DirectPerks />
      <SocialProof />
      <LocationMap />
      <NearbyThings />
      <FaqAccordion />
    </>
  );
}
