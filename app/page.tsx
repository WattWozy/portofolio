import { Divider } from "@heroui/divider";

import { Hero } from "@/components/home/Hero";
import { VisitTracking } from "@/components/home/VisitTracking";
import { VisitCounter } from "@/components/home/VisitCounter";
import { FeaturedProjects } from "@/components/content/FeaturedProjects";
import { LatestPosts } from "@/components/content/LatestPosts";

export default function Home() {
  return (
    <>
      <VisitTracking />
      <Hero />

      <FeaturedProjects />
      <LatestPosts />

      {/* <TechStackCard /> goes here */}

      <Divider className="my-8" />
      <footer className="flex justify-center pb-8">
        <VisitCounter />
      </footer>
    </>
  );
}
