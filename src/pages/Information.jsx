import { PageHeading } from "../components/Layout";
import Icon from "../components/Icon";
import AtlasImage from "../components/AtlasImage";
import LocationMap from "../components/LocationMap";
import {
  campusDocuments,
  practicalDetails,
  destinations,
  destinationArtwork,
} from "../data/information";
export default function Information() {
  return (
    <>
      <PageHeading page="information" />
      <div className="information-content narrow">
        <div className="information-grid">
          <section className="getting-here" aria-labelledby="campus-title">
            <h2 className="eyebrow section-title" id="campus-title">
              Getting to campus
            </h2>
            <ul className="campus-documents">
              {campusDocuments.map((document) => (
                <li key={document.href}>
                  <a href={document.href}>
                    <Icon name="document" />
                    <span>
                      {document.title} <small>(PDF)</small>
                    </span>
                    <Icon />
                  </a>
                </li>
              ))}
            </ul>
          </section>
          <div className="campus-location">
            <LocationMap />
          </div>
          <section
            className="practical-details"
            aria-labelledby="practical-title"
          >
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
      </div>
    </>
  );
}
