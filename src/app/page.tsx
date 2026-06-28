import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import PriceEstimator from "@/components/sections/PriceEstimator";
import Pricing from "@/components/sections/Pricing";
import Testimonials from "@/components/sections/Testimonials";
import BlogPreview from "@/components/sections/BlogPreview";
import Resources from "@/components/sections/Resources";
import FAQ from "@/components/sections/FAQ";
import Newsletter from "@/components/sections/Newsletter";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <PriceEstimator />
      <Pricing />
      <Testimonials />
      <BlogPreview />
      <Resources />
      <FAQ />
      <Newsletter />
      <Contact />
    </>
  );
}
