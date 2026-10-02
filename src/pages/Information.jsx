import { PageHeading } from "../components/Layout";
import Icon from "../components/Icon";
import AtlasImage from "../components/AtlasImage";
import LocationMap from "../components/LocationMap";
import {
  campusIntro,
  transport,
  practicalDetails,
  destinations,
  destinationArtwork,
  visitorUpdates,
} from "../data/information";
export default function Information() {
  return (
    <>
      <PageHeading page="information" />
      <div className="information-content wide">
        <div className="information-grid">
          <section className="getting-here" aria-labelledby="campus-title">
            <h2 className="eyebrow section-title" id="campus-title">
              Getting to campus
            </h2>
            <p className="campus-intro">{campusIntro}</p>
            <div className="transport-list">
              {transport.map((item) => (
                <details className="transport-card" key={item.title}>
                  <summary>
                    <span className="transport-icon">
                      <Icon name={item.icon} />
                    </span>
                    <h3>{item.title}</h3>
                    <span className="transport-description">
                      {item.description}
                      <small>{item.note}</small>
                    </span>
                    <span className="transport-duration">
                      ~ {item.duration}
                    </span>
                    <Icon className="transport-arrow" />
                  </summary>
                  <div className="transport-expanded">
                    <p>{item.details}</p>
                  </div>
                </details>
              ))}
            </div>
          </section>
          <aside className="practical-column">
            <LocationMap />
            <section aria-labelledby="practical-title">
              <h2 className="eyebrow section-title" id="practical-title">
                Practical details
              </h2>
              <dl className="practical-list">
                {practicalDetails.map((detail) => (
                  <div key={detail.label}>
                    <dt>
                      <Icon name={detail.icon} />
                      <span>{detail.label}</span>
                    </dt>
                    <dd>{detail.value}</dd>
                  </div>
                ))}
              </dl>
            </section>
          </aside>
        </div>
        <section className="around-section" aria-labelledby="around-title">
          <h2 className="eyebrow section-title" id="around-title">
            Around Hong Kong
          </h2>
          <p>
            Take time to explore this vibrant and unique city. Here are a few
            suggestions:
          </p>
          <div className="destination-grid">
            {destinations.map((destination, index) => (
              <a
                className="destination-card"
                key={destination.title}
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(destination.query)}`}
                target="_blank"
                rel="noreferrer"
              >
                <AtlasImage
                  className="destination-image"
                  atlas={destinationArtwork}
                  index={index}
                  alt={`Watercolor illustration of ${destination.title}`}
                />
                <div className="destination-copy">
                  <h3>
                    {destination.title}
                    <Icon />
                  </h3>
                  <p>{destination.description}</p>
                </div>
              </a>
            ))}
          </div>
        </section>
        <details className="visitor-updates">
          <summary>
            {visitorUpdates.title} <Icon name="chevron" />
          </summary>
          <p>{visitorUpdates.description}</p>
        </details>
      </div>
    </>
  );
}
