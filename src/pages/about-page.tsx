import Header from "../components/Header";
import "./about-page.css";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <section className="about-content">
          <div className="about-container">
            <h1>About Us</h1>
            <p>
              Passionate team of 2 based in Stockholm, Sweden, crafting
              captivating videos for your storytelling needs. Let us bring your
              vision to life with professional cinematography and
              post-production expertise.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
