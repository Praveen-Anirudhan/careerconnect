import NavBar from "../../components/NavBar.tsx";
import Hero from "../../components/Hero.tsx";
import Stats from "../../components/Stats.tsx";
import JobsCardPage from "../../components/JobsCardPage.tsx";
import Footer from "../../components/Footer.tsx";
export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Stats />
      <JobsCardPage />
      <Footer />
    </div>
  );
}
