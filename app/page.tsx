import Hero from "@/components/Hero";
import ExperienceBlock from "@/components/ExperienceBlock";
import AmenityGrid from "@/components/AmenityGrid";
import AvailabilityCalendar from "@/components/AvailabilityCalendar";
import DirectPerks from "@/components/DirectPerks";
import LocationMap from "@/components/LocationMap";
import NearbyThings from "@/components/NearbyThings";
import FaqAccordion from "@/components/FaqAccordion";
import SocialProof from "@/components/SocialProof";
import { getRealBlockedDates } from "@/lib/availability";

export default async function Home() {
  const realBlockedDates = await getRealBlockedDates();

  return (
    <>
      <Hero />
      <ExperienceBlock />
      <AmenityGrid />
      <AvailabilityCalendar blockedDates={realBlockedDates ? Array.from(realBlockedDates) : null} />
      <DirectPerks />
      <SocialProof />
      <LocationMap />
      <NearbyThings />
      <FaqAccordion />
    </>
  );
}
