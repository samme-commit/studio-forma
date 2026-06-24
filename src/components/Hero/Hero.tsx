import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faCalendarCheck,
  faLeaf,
  faScissors,
  faPersonBurst,
} from "@fortawesome/free-solid-svg-icons";
import "./Hero.css";

export function Hero() {
  return (
    <section className="hero-section" id="top">
      <div className="hero-copy">
        <div className="hero-eyebrow">
          <FontAwesomeIcon icon={faPersonBurst} />
          Modern salon concept
        </div>

        <h1>Hair artistry with a softer, more personal touch.</h1>

        <p>
          Studio Forma is a fictional premium salon concept built around modern
          cuts, color treatments and a calm beauty experience.
        </p>

        <div className="hero-actions">
          <a className="hero-primary" href="#booking">
            Book appointment
            <FontAwesomeIcon icon={faArrowRight} />
          </a>

          <a className="hero-secondary" href="#services">
            View services
          </a>
        </div>
      </div>

      <div className="hero-visual" aria-label="Salon visual preview">
        <div className="hero-image-card">
          <div className="hero-image-overlay" />

          <div className="hero-floating-card card-top">
            <FontAwesomeIcon icon={faScissors} />
            <span>Signature cuts</span>
          </div>

          <div className="hero-floating-card card-bottom">
            <FontAwesomeIcon icon={faLeaf} />
            <span>Color & care</span>
          </div>
        </div>

        <div className="hero-booking-card">
          <span>Next available</span>
          <strong>Today · 14:30</strong>
          <a href="#booking">
            <FontAwesomeIcon icon={faCalendarCheck} />
            Reserve
          </a>
        </div>
      </div>
    </section>
  );
}