import "./Hosting.css";

function Hosting() {
  return (
    <div className="hosting">
      <h1>Hosting Vergleich</h1>

        <p>Hier ein Kleiner Vergleich von drei Anbieter:</p>

        <table className={"table table-hover"}>
            <thead>
                <tr>
                    <th>Criterion</th>
                    <th>GitHub Pages</th>
                    <th>Cloudflare Workers</th>
                    <th>gibb LEMA</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                  <th>Cost & Access</th>
                </tr>
                <tr>
                    <td>Free to use</td>
                    <td>√</td>
                    <td>√</td>
                    <td>√</td>
                </tr>
                <tr>
                    <td>No credit card required</td>
                    <td>√</td>
                    <td>√</td>
                    <td>√</td>
                </tr>
                <tr>
                    <td>Available long term</td>
                    <td>√</td>
                    <td>√</td>
                    <td>✗ (ends with apprenticeship)</td>
                </tr>
                <tr>
                    <td>Commercial use allowed</td>
                    <td>✗</td>
                    <td>√</td>
                    <td>✗</td>
                </tr>
                <tr>
                    <th>CI/CD</th>
                </tr>
                <tr>
                    <td>Automated deployment</td>
                    <td>√</td>
                    <td>√</td>
                    <td>✗</td>
                </tr>
                <tr>
                    <td>Native Git integration</td>
                    <td>√</td>
                    <td>√</td>
                    <td>✗</td>
                </tr>
                <tr>
                    <td>Build minutes (free)</td>
                    <td>2'000/mo (private); ∞ (public)</td>
                    <td>3'000/mo</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Build frequency limit</td>
                    <td>10 builds/hr¹</td>
                    <td>500 builds/mo²</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Max. duration per build</td>
                    <td>10 min</td>
                    <td>20 min</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Deploy without CI</td>
                    <td>✗</td>
                    <td>√ (wrangler)</td>
                    <td>√ (SFTP)</td>
                </tr>
            </tbody>
        </table>
    </div>
  );
}

export default Hosting;