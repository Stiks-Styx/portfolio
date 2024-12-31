'use client';
import { navItems } from "@/data";

import { FloatingNav } from "@/components/ui/FloatingNav";
import RecentProjects from "@/components/RecentProjects";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Quotes from "@/components/Quotes";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
      <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Quotes />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
