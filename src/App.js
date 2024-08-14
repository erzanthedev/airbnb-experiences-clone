import Navbar from "./components/Navbar.js";
// import Hero from "./components/Hero.js";
import Card from "./components/Card.js";
// import data from "./components/data.js";

export default function App() {
  // const cards = data.map((user) => {
  // return <Card />;
  // });

  return (
    <div className="container">
      <Navbar />
      {/* <Hero /> */}
      <Card
        title="Life Lessons with Katie Zaferes"
        price={136}
        coverImg="katie-zaferes.png"
        rating={5.0}
        reviewCount={6}
        location="USA"
      />
    </div>
  );
}
