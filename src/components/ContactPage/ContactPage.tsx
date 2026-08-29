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


              <div className="alert alert-primary d-flex align-items-center" role="alert">
                  <i className="bi bi-info-circle-fill me-2"></i>
                  <div>
                      This are not real contact information.
                      <br/>
                      DO NOT CONTACT THEM
                  </div>
              </div>
          </div>
      </div>
  );
}

export default ContactPage;
