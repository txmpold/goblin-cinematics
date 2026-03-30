import backgroundVideo from "../assets/videos/background.mp4";
import Header from "../components/Header";
export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <video
          src={backgroundVideo}
          autoPlay
          loop
          muted
          style={{ width: "100%", height: "auto" }}
        ></video>
      </main>
    </>
  );
}
