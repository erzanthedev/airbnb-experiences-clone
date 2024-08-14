import Navbar from "./components/Navbar.js";
// import Hero from "./components/Hero.js";
import Card from "./components/Card.js";
import data from "./data.js";

export default function App() {
  const cards = data.map((user) => {
    return <Card key={user.id} user={user} />;
  });

  return (
    <div className="container">
      <Navbar />
      {/* <Hero /> */}
      <section className="card-list">{cards}</section>
    </div>
  );
}
