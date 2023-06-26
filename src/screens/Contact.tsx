import "./styles/contact.css";
import { ContactEmail, ContactOffice } from "../components/Containers";
import { Button } from "../components/Buttons";
export default function Contact() {
  return (
    <section id="Contact">
      <div className="contact_title">
        <h1>Contact</h1>
      </div>
      <div className="contact_container">
        <div className="info">
          <ContactEmail />
          <ContactOffice />
        </div>
        <div className="contact_form">
          <h2>Write Me</h2>
          <div className="input-group">
            <input
              type="text"
              className="input"
              placeholder="Write the subject..."
            />
            <label className="label">Subject</label>
          </div>
          <div className="input-group">
            <textarea
              className="input textarea"
              placeholder="Write your message..."
            />
            <label className="label">Message</label>
          </div>
          <Button
            text={"Send Message"}
            onClick={() => alert("Work in progress. (needs backend)")}
          />
        </div>
      </div>
    </section>
  );
}
