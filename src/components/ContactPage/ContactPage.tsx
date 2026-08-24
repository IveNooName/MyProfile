import "./ContactPage.css";

function ContactPage() {
  return (
      <div>
          <div className="contact-page">
              <h1>Contact</h1>

              <address>
                  Created by <strong>Jonas Berger</strong> <br/>
                  igkf-Strasse 88 <br/>
                  3088 Skid-Dorf <br/>
                  SWITZERLAND
              </address>
          </div>
          <footer className="border-top py-3">
              <span className={"h4"}>Jonas Berger</span>
              <br/>
              <span className={"small text-black-50"}>© Jöggu, 2026</span>
          </footer>
      </div>
  );
}

export default ContactPage;
