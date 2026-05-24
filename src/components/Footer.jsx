import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-top">
          <h2>About</h2>
          <p>Planet Explorer is a React web application that lets users explore planetary data using information fetched from an external API. It displays planet names, images, and distances from the sun in a clean, responsive layout.
             <br /> Built by Joshua, Mahmud, Ahuoiza, & Paul as a capstone project</p>
        </div>

        <hr />

        <div className="footer-bottom">
          <div>
            <p>©2026 Design by Amaka & Ifeoma A.</p>
            <p>Built by Group 21. All rights reserved</p>
          </div>

          <h3>TSAcademy</h3>
        </div>
      </div>
    </footer>
  );
}

export default Footer;