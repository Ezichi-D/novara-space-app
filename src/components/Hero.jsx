import "../styles/section.css";

function Hero() {
  const scrollToPlanets = () => {
    document.getElementById("planets").scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero">

      {/* LEFT SIDE - TEXT */}
      <div className="hero-text">
        <h1>Explore Our Solar System Through Data</h1>

        <p>
          Discover planets, distances, and cosmic insights in real time.
        </p>

        <div className="hero-buttons">
          <button onClick={scrollToPlanets}>Explore Data</button>
          <button onClick={scrollToContact}>Contact Us</button>
        </div>
      </div>

      {/* RIGHT SIDE - IMAGE (PUBLIC FOLDER) */}
      <div className="hero-media">
        <img src="/nearth.jpg" alt="Night Earth" />
      </div>

    </section>
  );
}

export default Hero;