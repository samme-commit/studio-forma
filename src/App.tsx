import { useState } from "react";
import { BookingCTA } from "./components/BookingCTA/BookingCTA";
import { BookingModal } from "./components/BookingModal/BookingModal";
import { Footer } from "./components/Footer/Footer";
import { Gallery } from "./components/Gallery/Gallery";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Locations } from "./components/Locations/Locations";
import { Services } from "./components/Services/Services";
import { Stylists } from "./components/Stylists/Stylists";
import { Treatments } from "./components/Treatments/Treatments";
import "./App.css";

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [preferredStylist, setPreferredStylist] = useState<string | undefined>();

  function openBooking(stylist?: string) {
    setPreferredStylist(stylist);
    setIsBookingOpen(true);
  }

  function closeBooking() {
    setIsBookingOpen(false);
    setPreferredStylist(undefined);
  }

  return (
    <main className="site-shell">
      <Header onBook={() => openBooking()} />

      <div className="page-content">
        <Hero onBook={() => openBooking()} />
        <Services />
        <Treatments />
        <Locations onBook={() => openBooking()} />
        <Stylists onBook={openBooking} />
        <Gallery />
        <BookingCTA onBook={() => openBooking()} />
      </div>

      <Footer />

      <BookingModal
        isOpen={isBookingOpen}
        preferredStylist={preferredStylist}
        onClose={closeBooking}
      />
    </main>
  );
}