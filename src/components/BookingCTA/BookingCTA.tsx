import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import "./BookingCTA.css";

export function BookingCTA() {
  return (
    <section className="section-block booking-section" id="booking">
      <div className="booking-card">
        <div>
          <span className="booking-eyebrow">Book a visit</span>

          <h2>Ready for a new look?</h2>

          <p>
            Book a fictional consultation and explore a calmer, more polished
            salon experience.
          </p>
        </div>

        <a className="booking-button" href="mailto:samueloxenby@gmail.com">
          <FontAwesomeIcon icon={faCalendarCheck} />
          Request appointment
          <FontAwesomeIcon icon={faArrowRight} />
        </a>
      </div>
    </section>
  );
}