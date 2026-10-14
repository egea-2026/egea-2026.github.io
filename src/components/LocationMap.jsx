import { conference } from "../data/conference";
import { campusMap } from "../data/information";
import Icon from "./Icon";

export default function LocationMap() {
  return (
    <div className="location-card">
      <iframe
        className="location-map"
        src={campusMap.embedUrl}
        title="Interactive map of HKUST in Clear Water Bay, Hong Kong"
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
      <div className="location-caption">
        <div>
          <span className="eyebrow">Our location</span>
          <p>HKUST · Clear Water Bay</p>
        </div>
        <a
          href={conference.mapUrl}
          target="_blank"
          rel="noreferrer"
          className="map-link"
        >
          View on Map
          <Icon />
        </a>
      </div>
    </div>
  );
}
