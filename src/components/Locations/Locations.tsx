import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faClock,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { locations } from "../../data/locations";
import { SectionHeader } from "../SectionHeader/SectionHeader";
import "./Locations.css";

export function Locations() {
  return (
    <section className="section-block locations-section" id="locations">
      <SectionHeader
        eyebrow="Locations"
        title="Three calm salon spaces."
        description="Fictional salon locations created to make the concept feel like a real multi-location beauty brand."
      />

      <div className="locations-grid">
        {locations.map((location) => (
          <article className="location-card" key={location.name}>
            <div className="location-image">
              <span>{location.area}</span>
            </div>

            <div className="location-content">
              <h3>{location.name}</h3>
              <p>{location.description}</p>

              <div className="location-details">
                <span>
                  <FontAwesomeIcon icon={faLocationDot} />
                  {location.address}
                </span>

                <span>
                  <FontAwesomeIcon icon={faClock} />
                  {location.hours}
                </span>
              </div>

              <a href="#booking">
                Book here
                <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}