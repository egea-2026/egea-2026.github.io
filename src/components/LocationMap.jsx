import { conference } from "../data/conference";
import Icon from "./Icon";
// Decorative location overview; the link opens a navigable map with the exact campus location.
export default function LocationMap() {
  return (
    <div className="location-card">
      <svg
        className="location-map"
        viewBox="0 0 520 280"
        role="img"
        aria-labelledby="map-title map-desc"
      >
        <title id="map-title">HKUST in Clear Water Bay, Hong Kong</title>
        <desc id="map-desc">
          A schematic location overview showing Kowloon, Hong Kong Island, and
          the campus in Clear Water Bay. Open View on Map for directions.
        </desc>
        <defs>
          <filter id="watercolor">
            <feTurbulence
              type="fractalNoise"
              baseFrequency=".055"
              numOctaves="3"
              result="noise"
            />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="7" />
          </filter>
          <pattern
            id="water"
            width="34"
            height="18"
            patternUnits="userSpaceOnUse"
          >
            <path d="M0 9h21" stroke="#d9e2e5" strokeWidth=".5" />
          </pattern>
        </defs>
        <rect width="520" height="280" fill="url(#water)" />
        <g fill="#c2d1d9" stroke="#b7c8d1" filter="url(#watercolor)">
          <path d="M0 0h414l-12 30-32 8 19 24-41 13 4 26-37 17-12 38-28-12-17 24-32-12-23 14-25-13-38 10-4-24-33-12-12-27-31 12-5-32-36-9-21-41L0 37Z" />
          <path d="m159 198 30-12 28 5 22-12 37 13 20 22-6 24-36 8-30-6-27 11-27-14-29-9Z" />
          <path d="m31 190 32-18 25 8 18 26-29 16-27 25-26-14-13-28Z" />
          <path d="m357 144 16-16 13 5 6 21-20 10Z" />
          <path d="m400 102 15-10 10 14-7 15-16-4Z" />
        </g>
        <g fill="#44677f" fontFamily="Georgia, serif" fontSize="15">
          <text x="139" y="101">
            Kowloon
          </text>
          <text x="173" y="211">
            Hong Kong
          </text>
          <text x="196" y="229">
            Island
          </text>
          <text x="488" y="28">
            N
          </text>
        </g>
        <path d="m492 36-7 25 7-6 7 6Z" fill="#718da0" />
        <g transform="translate(334 109)" fill="#245d87">
          <path d="M0-15C-18-15-18 5 0 23 18 5 18-15 0-15" />
          <circle cy="-2" r="4" fill="#f7f6f2" />
        </g>
        <g fill="#245d87" fontFamily="Georgia, serif">
          <text x="355" y="116" fontSize="23">
            HKUST
          </text>
          <text x="355" y="136" fontSize="15">
            Clear Water Bay
          </text>
        </g>
      </svg>
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
