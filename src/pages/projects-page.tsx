import p2 from "../assets/videos/husman-hagberg.mp4";
import p1 from "../assets/videos/jacks-burger.mp4";
import p3 from "../assets/videos/qc.mp4";
import Header from "../components/Header";
import "./projects-page.css";

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main>
        <div className="projects-content">
          <section className="p1-section">
            <div className="video-text">
              <h2>Jack's Burger</h2>
              <p>
                A project for Jack's Burger, a popular burger chain. We follow
                Peter Kisfaludy as he creates his signature burger, showcasing
                the process from start to finish.
              </p>
              <a
                href="https://www.instagram.com/p/C-KMwCCiXvR/?utm_source=ig_embed&utm_campaign=embed_video_watch_again"
                target="_blank"
                rel="noopener noreferrer"
              >
                WATCH ON INSTARGRAM
              </a>
            </div>
            <video className="project-video" src={p1} controls></video>
          </section>

          <section className="p2-section">
            <video className="project-video" src={p2} controls></video>
            <div className="video-text">
              <h2>Husman & Hagberg</h2>
              <p>
                A project for Husman & Hagberg, a leading real estate agency. We
                follow Gabriel Mirza as he explains why you should choose Husman
                & Hagberg when selling your home, highlighting their expertise
                and customer service.
              </p>
              <a
                href="https://www.instagram.com/p/C6q9iFvIG3J/?utm_source=ig_embed&utm_campaign=embed_video_watch_again"
                target="_blank"
                rel="noopener noreferrer"
              >
                WATCH ON INSTAGRAM
              </a>
            </div>
          </section>

          <section className="p3-section">
            <div className="video-text">
              <h2>Quality Consulting</h2>
              <p>
                A project for Quality Consulting, a company that believes great
                consulting starts with a great workplace. We celebrate their
                team of economists and the collaborative, engaging culture that
                fuels their success.
              </p>
              <a
                href="https://www.instagram.com/p/C3hU_I4NRj0/?utm_source=ig_embed&utm_campaign=embed_video_watch_again"
                target="_blank"
                rel="noopener noreferrer"
              >
                WATCH ON INSTAGRAM
              </a>
            </div>
            <video className="project-video" src={p3} controls></video>
          </section>
        </div>
      </main>
    </>
  );
}
