interface ProjectSectionProps {
  videoSrc: string;
  title: string;
  description: string;
  instagramLink: string;
  className?: string;
}

export default function ProjectSection({
  videoSrc,
  title,
  description,
  instagramLink,
  className = "p1-section",
}: ProjectSectionProps) {
  return (
    <section className={`${className} slide-up`}>
      <div className="video-header">
        <h2>{title}</h2>
      </div>
      <div className="video-text">
        <p>{description}</p>
        <a href={instagramLink} target="_blank" rel="noopener noreferrer">
          WATCH ON INSTAGRAM
        </a>
      </div>
      <video className="project-video" src={videoSrc} controls></video>
    </section>
  );
}
