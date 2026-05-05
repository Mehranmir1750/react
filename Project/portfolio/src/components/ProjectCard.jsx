import "../styles/ProjectCard.css"


export default function ProjectCard({ title, desc, gitlink, live }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{desc}</p>

      <div className="card-buttons">
        {gitlink && (
          <a
            href={gitlink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-git"
          >
            GitHub
          </a>
        )}

        {live && (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-live"
          >
            Live
          </a>
        )}
      </div>
    </div>
  );
}