import aboutImg from "../assets/images/about-img.jpg";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./about-page.css";
export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <section className="about-content">
          <div className="about-text-div">
            <h1>About Us</h1>
            <p>
              Passionate team of 2 based in Stockholm, Sweden, crafting
              captivating videos for your storytelling needs. Let us bring your
              vision to life with professional cinematography and
              post-production expertise.
            </p>
          </div>
          <div className="about-img-div">
            <img src={aboutImg} alt="About Us" />
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
