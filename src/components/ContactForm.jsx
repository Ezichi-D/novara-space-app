import { useState } from "react";

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phonenumber: "",
    message: ""
  });

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.phonenumber || !form.message) {
      alert("Please fill in all required fields.");
      return;
    }

    try {
      await fetch("https://whitebricks.com/tsacademy.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
    } catch (_) {}

    alert("Message sent!");
  };

  const remaining = 100 - form.message.length;

  return (
    <section id="contact">
      <h1>Curious About Planetary Science</h1>
      <p>Want to explore how we study space, uncover the secrets of astronomy, or understand the methods behind collecting and analyzing planetary data?</p>

      <div className="contact-grid">
        <div className="field-group">
          <label>Full Name<span className="required">*</span></label>
          <input
            type="text"
            placeholder="Full name"
            required
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>

        <div className="field-group">
          <label>Email<span className="required">*</span></label>
          <input
            type="email"
            placeholder="example@example.com"
            required
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>

        <div className="field-group">
          <label>Phone Number<span className="required">*</span></label>
          <input
            type="tel"
            placeholder="Please enter a valid phone number."
            required
            onChange={(e) => setForm({ ...form, phonenumber: e.target.value })}
          />
        </div>

        <div className="field-group">
          <label>Message<span className="required">*</span></label>
          <textarea
            placeholder="Enter your message"
            maxLength={100}
            required
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
          <span className="char-count">{remaining} characters</span>
        </div>
      </div>

      <button className="contact-submit" onClick={handleSubmit}>
        Submit ›
      </button>
    </section>
  );
}

export default ContactForm;