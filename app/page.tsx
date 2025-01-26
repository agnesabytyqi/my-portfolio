import Header from "./components/header";
import Hero from "./components/hero";
import About from "./components/about";
import Projects from "./components/projects";
import GitHubSection from "./components/githubsection";
import Certifications from "./components/certifications";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <GitHubSection />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
