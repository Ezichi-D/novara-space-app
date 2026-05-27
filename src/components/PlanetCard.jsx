import React from "react";

// Local images
import mercury from "../assets/mercury.jpg";
import venus from "../assets/venus.jpg";
import earth from "../assets/earth.jpg";
import mars from "../assets/mars.jpg";
import jupiter from "../assets/jupiter.jpg";
import saturn from "../assets/saturn.jpg";
import uranus from "../assets/uranus.jpg";
import neptune from "../assets/neptune.jpg";

function PlanetCard({ planet }) {
  // Planet name from API
  const planetName =
    planet?.name ||
    planet?.planet ||
    planet?.planetName ||
    "Unknown Planet";

  // Local fallback images
  const imageMap = {
    mercury: mercury,
    venus: venus,
    earth: earth,
    mars: mars,
    jupiter: jupiter,
    saturn: saturn,
    uranus: uranus,
    neptune: neptune,
  };

  // Match image using lowercase
  const localImage = imageMap[planetName.toLowerCase()];

  return (
    <figure className="planet-card">
      <img
        src={planet?.image || localImage}
        alt={planetName}
        style={{
          width: "100%",
          height: "250px",
          objectFit: "cover",
          borderRadius: "10px",
        }}
        onError={(e) => {
          // If API image fails, use local image
          e.target.onerror = null;
          e.target.src = localImage;
        }}
      />

      <h3>{planetName}</h3>

      <p>
        <strong>
        {planet?.distance_from_sun ||
          planet?.distanceFromSun ||
          planet?.distance ||
          "N/A"}
          km from the Sun</strong>{" "}
      </p>
    </figure>
  );
}

export default PlanetCard;