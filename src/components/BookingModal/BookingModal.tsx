import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarCheck,
  faCheck,
  faClock,
  faEnvelope,
  faLocationDot,
  faScissors,
  faSpinner,
  faUser,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import "./BookingModal.css";

type BookingModalProps = {
  isOpen: boolean;
  preferredStylist?: string;
  onClose: () => void;
};

type BookingStatus = "idle" | "sending" | "success";

const initialFormData = {
  name: "",
  email: "",
  treatment: "Signature Cut",
  stylist: "Any stylist",
  location: "Studio Forma City",
  date: "",
  time: "",
  notes: "",
};

export function BookingModal({
  isOpen,
  preferredStylist,
  onClose,
}: BookingModalProps) {
  const [formData, setFormData] = useState(initialFormData);
  const [status, setStatus] = useState<BookingStatus>("idle");

  useEffect(() => {
    if (!isOpen) return;

    setStatus("idle");
    setFormData({
      ...initialFormData,
      stylist: preferredStylist || "Any stylist",
    });
  }, [isOpen, preferredStylist]);

  useEffect(() => {
    if (!isOpen) return;

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  function updateField(field: keyof typeof formData, value: string) {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("sending");

    window.setTimeout(() => {
      setStatus("success");
    }, 900);
  }

  return (
    <div className="booking-modal-backdrop" onMouseDown={onClose}>
      <article
        className="booking-modal"
        aria-modal="true"
        role="dialog"
        aria-labelledby="booking-modal-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button
          className="booking-modal-close"
          type="button"
          aria-label="Close booking modal"
          onClick={onClose}
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>

        {status === "success" ? (
          <div className="booking-success">
            <div className="booking-success-icon">
              <FontAwesomeIcon icon={faCheck} />
            </div>

            <span>Request sent</span>

            <h2 id="booking-modal-title">Your appointment request is ready.</h2>

            <p>
              This is a fictional booking flow for the portfolio demo. No real
              appointment has been created.
            </p>

            <div className="booking-summary">
              <div>
                <span>Treatment</span>
                <strong>{formData.treatment}</strong>
              </div>

              <div>
                <span>Stylist</span>
                <strong>{formData.stylist}</strong>
              </div>

              <div>
                <span>Location</span>
                <strong>{formData.location}</strong>
              </div>
            </div>

            <button className="booking-success-button" type="button" onClick={onClose}>
              Done
            </button>
          </div>
        ) : (
          <>
            <div className="booking-modal-header">
              <span>
                <FontAwesomeIcon icon={faCalendarCheck} />
                Book a visit
              </span>

              <h2 id="booking-modal-title">Request an appointment</h2>

              <p>
                Choose a treatment, stylist and preferred time. This is a demo
                booking form and does not create a real appointment.
              </p>
            </div>

            <form className="booking-form" onSubmit={handleSubmit}>
              <label className="booking-field">
                <span>
                  <FontAwesomeIcon icon={faUser} />
                  Name
                </span>

                <input
                  type="text"
                  placeholder="Your name"
                  required
                  value={formData.name}
                  onChange={(event) => updateField("name", event.target.value)}
                />
              </label>

              <label className="booking-field">
                <span>
                  <FontAwesomeIcon icon={faEnvelope} />
                  Email
                </span>

                <input
                  type="email"
                  placeholder="you@example.com"
                  required
                  value={formData.email}
                  onChange={(event) => updateField("email", event.target.value)}
                />
              </label>

              <label className="booking-field">
                <span>
                  <FontAwesomeIcon icon={faScissors} />
                  Treatment
                </span>

                <select
                  value={formData.treatment}
                  onChange={(event) => updateField("treatment", event.target.value)}
                >
                  <option>Signature Cut</option>
                  <option>Color Refresh</option>
                  <option>Balayage Session</option>
                  <option>Gloss Treatment</option>
                  <option>Event Styling</option>
                </select>
              </label>

              <label className="booking-field">
                <span>
                  <FontAwesomeIcon icon={faUser} />
                  Stylist
                </span>

                <select
                  value={formData.stylist}
                  onChange={(event) => updateField("stylist", event.target.value)}
                >
                  <option>Any stylist</option>
                  <option>Ella Lind</option>
                  <option>Noah Berg</option>
                  <option>Maja Holm</option>
                </select>
              </label>

              <label className="booking-field">
                <span>
                  <FontAwesomeIcon icon={faLocationDot} />
                  Location
                </span>

                <select
                  value={formData.location}
                  onChange={(event) => updateField("location", event.target.value)}
                >
                  <option>Studio Forma City</option>
                  <option>Studio Forma Harbour</option>
                  <option>Studio Forma West</option>
                </select>
              </label>

              <div className="booking-split">
                <label className="booking-field">
                  <span>
                    <FontAwesomeIcon icon={faCalendarCheck} />
                    Date
                  </span>

                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(event) => updateField("date", event.target.value)}
                  />
                </label>

                <label className="booking-field">
                  <span>
                    <FontAwesomeIcon icon={faClock} />
                    Time
                  </span>

                  <input
                    type="time"
                    required
                    value={formData.time}
                    onChange={(event) => updateField("time", event.target.value)}
                  />
                </label>
              </div>

              <label className="booking-field booking-field-full">
                <span>Notes</span>

                <textarea
                  placeholder="Anything the stylist should know?"
                  rows={3}
                  value={formData.notes}
                  onChange={(event) => updateField("notes", event.target.value)}
                />
              </label>

              <button
                className="booking-submit"
                type="submit"
                disabled={status === "sending"}
              >
                {status === "sending" ? (
                  <>
                    <FontAwesomeIcon icon={faSpinner} spin />
                    Sending request...
                  </>
                ) : (
                  <>
                    <FontAwesomeIcon icon={faCalendarCheck} />
                    Request appointment
                  </>
                )}
              </button>
            </form>
          </>
        )}
      </article>
    </div>
  );
}