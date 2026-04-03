import p2 from "../assets/videos/husman-hagberg.mp4";
import p1 from "../assets/videos/jacks-burger.mp4";
import p3 from "../assets/videos/qc.mp4";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProjectSection from "../components/ProjectSection";
import "./projects-page.css";

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main>
        <div className="projects-content">
          <ProjectSection
            videoSrc={p1}
            title="Jack's Burger"
            description="A project for Jack's Burger, a popular burger chain. We follow Peter Kisfaludy as he creates his signature burger, showcasing the process from start to finish."
            instagramLink="https://www.instagram.com/p/C-KMwCCiXvR/?utm_source=ig_embed&utm_campaign=embed_video_watch_again"
            className="p1-section"
          />
          <ProjectSection
            videoSrc={p2}
            title="Husman Hagberg"
            description="A project for Husman & Hagberg, a leading real estate agency. We follow Gabriel Mirza as he explains why you should choose Husman & Hagberg when selling your home, highlighting their expertise and customer service."
            instagramLink="https://www.instagram.com/p/C6q9iFvIG3J/?utm_source=ig_embed&utm_campaign=embed_video_watch_again"
            className="p2-section"
          />
          <ProjectSection
            videoSrc={p3}
            title="Quality Consulting"
            description="A project for Quality Consulting, a company that believes great consulting starts with a great workplace. We celebrate their team of economists and the collaborative, engaging culture that fuels their success."
            instagramLink="https://www.instagram.com/p/C3hU_I4NRj0/?utm_source=ig_embed&utm_campaign=embed_video_watch_again"
            className="p3-section"
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
