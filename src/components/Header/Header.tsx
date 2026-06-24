import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faScissors } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

type HeaderProps = {
  onBook: () => void;
};

export function Header({ onBook }: HeaderProps) {
  return (
    <header className="site-header">
      <a className="header-logo" href="#top" aria-label="Studio Forma home">
        <span>
          <FontAwesomeIcon icon={faScissors} />
        </span>
        Studio Forma
      </a>

      <nav className="header-nav" aria-label="Main navigation">
        <a href="#services">Services</a>
        <a href="#treatments">Treatments</a>
        <a href="#locations">Locations</a>
        <a href="#stylists">Stylists</a>
        <a href="#gallery">Gallery</a>
        <a href="#booking">Booking</a>
      </nav>

      <button className="header-cta" type="button" onClick={onBook}>
        <FontAwesomeIcon icon={faCalendarCheck} />
        Book time
      </button>
    </header>
  );
}