import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import "./BookingCTA.css";

type BookingCTAProps = {
  onBook: () => void;
};

export function BookingCTA({ onBook }: BookingCTAProps) {
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

        <button className="booking-button" type="button" onClick={onBook}>
          <FontAwesomeIcon icon={faCalendarCheck} />
          Request appointment
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </section>
  );
}