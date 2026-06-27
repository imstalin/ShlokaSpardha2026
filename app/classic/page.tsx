import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Rules from "@/components/Rules";
import Register from "@/components/Register";
import SlokaTabs from "@/components/SlokaTabs";
import Evaluation from "@/components/Evaluation";
import PracticeAudio from "@/components/PracticeAudio";
import Prizes from "@/components/Prizes";
import Footer from "@/components/Footer";
import { MoonDivider } from "@/components/ui";
import Link from "next/link";

export default function ClassicPage() {
  return (
    <>
      <Navbar />
      <div className="border-b border-line bg-card/80 px-4 py-2 text-center text-xs text-ink-soft">
        Classic version ·{" "}
        <Link href="/" className="font-semibold text-maroon hover:underline">
          View modern site
        </Link>
      </div>
      <main>
        <div id="hero">
          <Hero />
        </div>
        <MoonDivider />
        <About />
        <Rules />
        <Register />
        <SlokaTabs />
        <Evaluation />
        <PracticeAudio />
        <Prizes />

        <div className="mx-auto max-w-[980px] px-5 pb-8">
          <div className="rounded-[20px] border-2 border-dashed border-gold bg-gradient-to-b from-card to-cream p-8 text-center">
            <p className="mb-3 text-[34px]" aria-hidden="true">
              🙏
            </p>
            <h3 className="font-sanskrit mb-2.5 text-[22px] text-maroon">गुरुभ्यो नमः</h3>
            <p className="mx-auto max-w-md text-[15px] text-ink-soft">
              Looking forward to a huge turnout, with everyone&apos;s efforts coming together to
              celebrate our revered Gurus.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
