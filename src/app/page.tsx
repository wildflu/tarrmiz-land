import { ContactUs } from "@/components/contact";
import { Intoduction } from "@/components/intoduction";
import { LandingTemplates } from "@/components/landing-tempates";
import { OurClient } from "@/components/our-client";
import { OurPackages } from "@/components/our-packages";
import { WhyUs } from "@/components/why-us";

export default function Home() {
  return (
    <>
      <Intoduction />
      <ContactUs/>
      <LandingTemplates />
      <WhyUs />
      <OurClient />
      <OurPackages />
    </>
  )
}
