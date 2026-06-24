import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faPersonBurst } from "@fortawesome/free-solid-svg-icons";
import { stylists } from "../../data/stylists";
import { SectionHeader } from "../SectionHeader/SectionHeader";
import "./Stylists.css";

export function Stylists() {
  return (
    <section className="section-block stylists-section" id="stylists">
      <SectionHeader
        eyebrow="Stylists"
        title="Meet the fictional team."
        description="A small stylist section designed to make the salon concept feel more personal, premium and realistic."
      />

      <div className="stylists-grid">
        {stylists.map((stylist) => (
          <article className="stylist-card" key={stylist.name}>
            <div className="stylist-image">
              <img src={stylist.image} alt={`${stylist.name}, ${stylist.role}`} />

              <div className="stylist-badge">
                <FontAwesomeIcon icon={faPersonBurst} />
                {stylist.experience}
              </div>
            </div>

            <div className="stylist-content">
              <span>{stylist.role}</span>
              <h3>{stylist.name}</h3>
              <p>{stylist.speciality}</p>

              <a href="#booking">
                Book with {stylist.name.split(" ")[0]}
                <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}