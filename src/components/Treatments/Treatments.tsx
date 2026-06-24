import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { treatments } from "../../data/treatments";
import { SectionHeader } from "../SectionHeader/SectionHeader";
import "./Treatments.css";

export function Treatments() {
  return (
    <section className="section-block treatments-section" id="treatments">
      <SectionHeader
        eyebrow="Treatments"
        title="Popular appointments."
        description="A curated selection of fictional treatments designed to make the salon experience feel realistic and premium."
      />

      <div className="treatments-grid">
        {treatments.map((treatment) => (
          <article className="treatment-card" key={treatment.title}>
            <div className="treatment-icon">
              <FontAwesomeIcon icon={treatment.icon} />
            </div>

            <div className="treatment-content">
              <span>{treatment.category}</span>
              <h3>{treatment.title}</h3>
              <p>{treatment.description}</p>

              <div className="treatment-meta">
                <strong>{treatment.duration}</strong>
                <strong>{treatment.price}</strong>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}