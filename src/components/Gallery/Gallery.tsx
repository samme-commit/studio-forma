import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCameraRetro, faLeaf, faPersonBurst } from "@fortawesome/free-solid-svg-icons";
import { SectionHeader } from "../SectionHeader/SectionHeader";
import "./Gallery.css";

const galleryImages = [
  {
    title: "Soft color",
    category: "Color",
    image:
        "https://images.unsplash.com/photo-1701978224283-65a54a3d01fc?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Salon details",
    category: "Interior",
    image:
      "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Natural movement",
    category: "Styling",
    image:
      "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Care routine",
    category: "Haircare",
    image:
      "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Warm tones",
    category: "Color",
    image:
      "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=900&q=80",
  },
];

export function Gallery() {
  return (
    <section className="section-block gallery-section" id="gallery">
      <div className="gallery-header-row">
        <SectionHeader
          eyebrow="Gallery"
          title="A softer visual direction."
          description="A curated image grid that gives the concept more lifestyle, salon and beauty-brand feeling."
        />

        <div className="gallery-note">
          <FontAwesomeIcon icon={faCameraRetro} />
          Demo gallery
        </div>
      </div>

      <div className="gallery-grid">
        {galleryImages.map((item, index) => (
          <article className="gallery-card" key={item.title}>
            <img src={item.image} alt={item.title} />

            <div className="gallery-overlay">
              <span>
                {index % 2 === 0 ? (
                  <FontAwesomeIcon icon={faPersonBurst} />
                ) : (
                  <FontAwesomeIcon icon={faLeaf} />
                )}
                {item.category}
              </span>

              <h3>{item.title}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}