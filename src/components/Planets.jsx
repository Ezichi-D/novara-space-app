import { useEffect, useState } from "react";
import PlanetCard from "./PlanetCard";

function Planets() {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    fetch("https://anurella.github.io/json/planets.json")
      .then((res) => res.json())
      .then((data) => {
        setPlanets(data);
      })
      .catch((err) => console.log("Fetch error:", err));
  }, []);

  return (
    <section id="planets">
      <h1>Visualizing The Differences Betweeen Planets</h1>
      <p>Each planet in our solar system has different physical characteristis. 
        Visual comparisons helps highlight how vastly different terrestiasl planets
        are from gas giants and ice giants</p>
        <br />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
        }}
      >
        {planets.map((planet, i) => (
          <PlanetCard key={i} planet={planet} />
        ))}
      </div>
    </section>
  );
}

export default Planets;