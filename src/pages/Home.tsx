import { motion } from "motion/react";
import { Hero } from "../components/Hero";
import { FeaturedGames } from "../components/FeaturedGames";
import { Community as CommunitySection } from "../components/Community";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <FeaturedGames />
      <CommunitySection />
    </motion.div>
  );
}
