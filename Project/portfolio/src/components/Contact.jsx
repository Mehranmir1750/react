import "../styles/Contact.css";

export default function Contact() {
  return (
    <section className="contact">
      <h2>Contact Me</h2>

      <p className="contact-text">
        Feel free to reach out for collaboration or any opportunities.
      </p>

      <div className="contact-links">

        <a
          href="mailto:your-email@gmail.com"
          className="contact-btn"
        >
          Email
        </a>

        <a
          href="https://github.com/Mehranmir1750"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-btn"
        >
          GitHub
        </a>

      </div>
    </section>
  );
}