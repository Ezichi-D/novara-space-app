function VideoSection() {
  return (
    <section>
      <div className="videoBox">
        <video autoPlay muted loop>
          <source src="/Universe.mp4" />
        </video>

        <div className="videoText">
          <h2>How Planetary Data Helps Us</h2>
          <p> Planetary science goes beyond images. Comparing mass, diameter, gravity, and density, we gain insight into how planets form, behave, and interact within the solar system.</p>
        </div>
      </div>
    </section>
  );
}

export default VideoSection;