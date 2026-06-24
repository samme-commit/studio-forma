import { BookingCTA } from "./components/BookingCTA/BookingCTA";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Services } from "./components/Services/Services";
import "./App.css";

export default function App() {
  return (
    <main className="site-shell">
      <Header />

      <div className="page-content">
        <Hero />
        <Services />
        <BookingCTA />
      </div>

      <Footer />
    </main>
  );
}