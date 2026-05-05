import ProjectCard from "./ProjectCard";
import "../styles/Projects.css"

export default function Projects() {
  return (
    <section className="projects">
      <h2>My Projects</h2>

      <div className="projects-container">

        <ProjectCard
          title="IUST Lost & Found Portal"
          desc="A campus-based web application that allows students to report, search, and recover lost items efficiently."
          gitlink="https://github.com/Mehranmir1750/lost-found-portal"
          live="https://lost-found-portal-hcsn.onrender.com/"
        />

        <ProjectCard
          title="Blood Donation Management Platform"
          desc="A Flask-based web platform connecting donors and recipients, enabling registration, requests, and donation management."
          gitlink="https://github.com/Mehranmir1750/blood-donation-system"
          live="https://blood-donation-system-7v8m.onrender.com/"
        />

        <ProjectCard
          title="Interactive Quiz Game"
          desc="A responsive frontend quiz application with scoring system, timer, and dynamic question rendering."
          gitlink="https://github.com/Mehranmir1750/JavaScript/tree/main/Project/Quiz"
          live="https://kashurchukhaa.netlify.app/"
        />

      </div>
    </section>
  );
}