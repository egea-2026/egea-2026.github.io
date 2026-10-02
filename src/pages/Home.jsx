import { conference, quickLinks } from "../data/conference";
import Icon from "../components/Icon";
export default function Home() {
  return (
    <>
      <section className="home-hero narrow">
        <div className="hero-copy">
          <p className="eyebrow">Conference</p>
          <h1>
            Enumerative
            <br />
            Geometry
            <br />
            <span className="title-last-line">
              in East Asia <em>{conference.year}</em>
            </span>
          </h1>
          <p className="hero-date">
            {conference.dates}
            <br />
            <span>{conference.venue}</span>
          </p>
          <span className="short-rule" />
          <p className="hero-introduction">{conference.introduction}</p>
        </div>
        <figure className="campus-figure">
          <img
            src="./images/campus.webp"
            alt="Ink and watercolor illustration of the HKUST campus, its red sundial, and Clear Water Bay"
            width="1536"
            height="1024"
            fetchPriority="high"
          />
          <figcaption>{conference.venue}</figcaption>
        </figure>
      </section>
      <nav className="quick-links narrow" aria-label="Explore the conference">
        {quickLinks.map((link) => (
          <a className="quick-link" href={link.href} key={link.title}>
            <span className="short-rule" />
            <h2>{link.title}</h2>
            <p>{link.description}</p>
            <Icon />
          </a>
        ))}
      </nav>
      <section id="about" className="about-section">
        <div className="about-landscape" aria-hidden="true" />
        <div className="about-copy">
          <h2 className="eyebrow">About the conference</h2>
          <span className="short-rule" />
          <p>{conference.about}</p>
          <a className="outline-button" href="./about.html">
            Learn more
            <Icon />
          </a>
        </div>
      </section>
    </>
  );
}
