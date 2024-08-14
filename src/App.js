import Navbar from "./components/Navbar.js";
import Hero from "./components/Hero.js";
import Card from "./components/Card.js";

export default function App() {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <Card />
    </div>
  );
}
