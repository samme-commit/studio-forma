import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { services } from "../../data/services";
import { SectionHeader } from "../SectionHeader/SectionHeader";
import "./Services.css";

export function Services() {
  return (
    <section className="section-block services-section" id="services">
      <SectionHeader
        eyebrow="Services"
        title="Crafted treatments for modern hair."
        description="A selection of fictional salon services designed around premium styling, natural movement and a calm appointment experience."
      />

      <div className="services-grid">
        {services.map((service) => (
          <article className="service-card" key={service.title}>
            <div className="service-icon">
              <FontAwesomeIcon icon={service.icon} />
            </div>

            <h3>{service.title}</h3>
            <p>{service.description}</p>

            <span className="service-price">{service.price}</span>
          </article>
        ))}
      </div>
    </section>
  );
}