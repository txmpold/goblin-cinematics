import contactImg from "../assets/images/contact-img.jpg";
import Footer from "../components/Footer";
import Form from "../components/Form";
import Header from "../components/Header";
import "./conctact-page.css";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <section className="contact-section">
          <div className="contact-img-div slide-up">
            <img src={contactImg} alt="Contact" />
          </div>
          <div className="contact-info slide-up">
            <div className="contact-text">
              <h2>Our info</h2>
              <p>+46 73 098 5634</p>
              <p>info@goblin-cinematics.com</p>
              <p>
                Goblin cinematics <br /> 144 33 <br />
                Stockholm, Sweden
              </p>
              <p>Or contact us here →</p>
            </div>
          </div>
          <Form />
        </section>
      </main>
      <Footer />
    </>
  );
}
