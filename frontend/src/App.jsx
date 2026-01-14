import { Route, Routes } from "react-router-dom";
import "./App.css";
import CountrySearch from "./components/CountrySearch";
import Gallery from "./components/Gallery";
import Highlights from "./components/Highlights";
import NavBar from "./components/NavBar";
import WorldAnimation from "./components/WorldAnimation";
import SingleCountryView from "./pages/singleCountry/SingleCountryView";

const COUNTRIES = [
  "Argentina",
  "Australia",
  "Austria",
  "Belgium",
  "Bolivia",
  "Brazil",
  "Canada",
  "Chile",
  "Colombia",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Denmark",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "Finland",
  "France",
  "Germany",
  "Greece",
  "Guatemala",
  "Iceland",
  "India",
  "Indonesia",
  "Ireland",
  "Italy",
  "Japan",
  "Kenya",
  "Mexico",
  "Morocco",
  "Netherlands",
  "New Zealand",
  "Norway",
  "Panama",
  "Peru",
  "Portugal",
  "South Africa",
  "South Korea",
  "Spain",
  "Sweden",
  "Switzerland",
  "Thailand",
  "Turkey",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Vietnam",
];

const HIGHLIGHTS = [
  { metric: "50+", label: "Paises disponibles" },
  { metric: "4.9", label: "Calificacion promedio" },
  { metric: "24/7", label: "Soporte local" },
];

const GALLERY_ITEMS = [
  {
    title: "Ciudades iconicas",
    description: "Rincones vibrantes, arquitectura y cultura viva.",
  },
  {
    title: "Playas tranquilas",
    description: "Retiros sobre el mar con atardeceres infinitos.",
  },
  {
    title: "Naturaleza salvaje",
    description: "Senderos, glaciares y escapadas inmersivas.",
  },
];

function Home() {
  return (
    <div className="app">
      <header className="hero">
        <NavBar />

        <div className="hero-grid">
          <div className="hero-content">
            <p className="eyebrow">Turismo curado para viajes memorables</p>
            <h1>Encontr el destino perfecto para tu proxima aventura.</h1>
            <p className="subtitle">
              Experiencias unicas, estadias boutique y rutas locales con un solo
              buscador.
            </p>

            <CountrySearch countries={COUNTRIES} />
            <Highlights items={HIGHLIGHTS} />
          </div>
          <WorldAnimation />
        </div>
      </header>

      <Gallery items={GALLERY_ITEMS} />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/country/:country" element={<SingleCountryView />} />
    </Routes>
  );
}

export default App;
