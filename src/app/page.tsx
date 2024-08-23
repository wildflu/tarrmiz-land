import { ContactUs } from "@/components/contact";
import { Intoduction } from "@/components/intoduction";
import { OurClient } from "@/components/our-client";
import { WhyUs } from "@/components/why-us";

export default function Home() {
  return (
    <>
      <Intoduction />
      <ContactUs/>
      <WhyUs />
      <OurClient />
    </>
  )
}
