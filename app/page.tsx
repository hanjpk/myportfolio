import { Experiences } from "@/components/experiences";
import { Hero } from "@/components/hero";
// import { Newsletter } from "@/components/newsletter";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <Hero />
      <Experiences />
      {/* <Newsletter /> */}
    </section>
  );
}
