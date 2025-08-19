
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Blogs from "./components/Blogs";
import NewsLetter from "./components/NewsLetter";


export default function Home() {
  return (
    <section>
      <Hero />
      <Projects />
      <Blogs />
      <NewsLetter />
    </section>
  );
}
