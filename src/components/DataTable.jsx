import "../styles/table.css";

function DataTable() {
  return (
    <section className="table-section">

      <div className="table-header">
        <h2>Planetary Comparison</h2>

        <p>
          Compare planetary mass, diameter, density and gravity
          across terrestrial, gas giant and dwarf planets.
        </p>
      </div>

      <div className="table-container">

        <table>

          <thead>
            <tr>
              <th colSpan="2" className="empty"></th>
              <th>Name</th>
              <th>Mass (10 24kg)</th>
              <th>Diameter (km)</th>
              <th>Density (kg/m3)</th>
              <th>Gravity (m/s2)</th>
            </tr>
          </thead>

          <tbody>

            {/* Terrestrial */}
            <tr>
              <td rowSpan="4" colSpan="2" className="category">
                Terrestrial Planets
              </td>

              <td className="name">Mercury</td>
              <td>0.330</td>
              <td>4,878</td>
              <td>5427</td>
              <td>3.7</td>
            </tr>

            <tr>
              <td className="name">Venus</td>
              <td>4.87</td>
              <td>12,104</td>
              <td>5243</td>
              <td>8.9</td>
            </tr>

            <tr>
              <td className="name">Earth</td>
              <td>5.97</td>
              <td>12,756</td>
              <td>5514</td>
              <td>9.8</td>
            </tr>

            <tr>
              <td className="name">Mars</td>
              <td>0.642</td>
              <td>6,792</td>
              <td>3933</td>
              <td>3.7</td>
            </tr>

            {/* Jovian */}
            <tr>

              <td rowSpan="4" className="category">
                Jovian Planets
              </td>

              <td rowSpan="2" className="subcategory">
                Gas Giants
              </td>

              <td className="name">Jupiter</td>
              <td>1898</td>
              <td>142,984</td>
              <td>1326</td>
              <td>23.1</td>

            </tr>

            <tr>
              <td className="name">Saturn</td>
              <td>568</td>
              <td>120,536</td>
              <td>687</td>
              <td>9.0</td>
            </tr>

            <tr>

              <td rowSpan="2" className="subcategory">
                Ice Giants
              </td>

              <td className="name">Uranus</td>
              <td>86.8</td>
              <td>51,118</td>
              <td>1270</td>
              <td>8.7</td>

            </tr>

            <tr>
              <td className="name">Neptune</td>
              <td>102</td>
              <td>49,528</td>
              <td>1638</td>
              <td>11.0</td>
            </tr>

            {/* Dwarf */}
            <tr>

              <td colSpan="2" className="category">
                Dwarf Planets
              </td>

              <td className="name">Pluto</td>
              <td>0.0146</td>
              <td>2,377</td>
              <td>2095</td>
              <td>0.7</td>

            </tr>

          </tbody>

        </table>

      </div>

    </section>
  );
}

export default DataTable;