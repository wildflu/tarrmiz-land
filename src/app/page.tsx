import { ContactUs } from "@/components/contact";
import { Intoduction } from "@/components/intoduction";
import { LandingTemplates } from "@/components/landing-tempates";
import { OurClient } from "@/components/our-client";
import { OurPackages } from "@/components/our-packages";
import { WhyUs } from "@/components/why-us";

export default function Home() {
  return (
    <>
      <div id="intro">
        <Intoduction />
      </div>
      <div id="contact">
        <ContactUs/>
      </div>
      <div id="templates">
        <LandingTemplates />
      </div>
      <div id="whyus">
        <WhyUs />
      </div>
      <div id="ourclient">
        <OurClient />
      </div>
      <div id="packages">
        <OurPackages /> 
      </div>
    </>
  )
}
