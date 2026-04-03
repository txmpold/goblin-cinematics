import { Link } from "react-router";
import backgroundVideo from "../assets/videos/background.mp4";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./animation.css";
import "./home-page.css";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <section className="home-section slide-up">
          <video
            src={backgroundVideo}
            className="background-video"
            autoPlay
            loop
            muted
            style={{ width: "100%", height: "auto" }}
          ></video>
          <div className="home-content slide-up">
            <h1 className="slogan">
              A little mischief. <br /> A lot of <br />
              impact.
            </h1>
            <Link to="/projects">
              <button className="home-content-button">View Projects →</button>
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
