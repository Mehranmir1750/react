import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Mehran Mir. All rights reserved.</p>

      <div className="footer-links">
        <a
          href="https://github.com/Mehranmir1750"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>

        <a href="mailto:your-email@gmail.com">
          Email
        </a>
      </div>
    </footer>
  );
}