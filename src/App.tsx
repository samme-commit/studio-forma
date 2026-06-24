import { BookingCTA } from "./components/BookingCTA/BookingCTA";
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
  return (
    <main className="site-shell">
      <Header />

      <div className="page-content">
        <Hero />
        <Services />
        <Treatments />
        <Locations />
        <Stylists />
        <Gallery />
        <BookingCTA />
      </div>

      <Footer />
    </main>
  );
}