import "../styles/Skills.css";

export default function Skills() {
  return (
    <section className="skills">
      <h2>My Skills</h2>

      <div className="skills-wrapper">

        <div className="skill-group">
          <h4>Languages</h4>
          <div className="skills-container">
            <div className="skill">C</div>
            <div className="skill">C++</div>
            <div className="skill">JavaScript</div>
            <div className="skill">Python</div>
          </div>
        </div>

        <div className="skill-group">
          <h4>Frontend</h4>
          <div className="skills-container">
            <div className="skill">HTML</div>
            <div className="skill">CSS</div>
            <div className="skill">Tailwind CSS</div>
            <div className="skill">Bootstrap</div>
            <div className="skill">React</div>
          </div>
        </div>

        <div className="skill-group">
          <h4>Backend</h4>
          <div className="skills-container">
            <div className="skill">Node.js</div>
            <div className="skill">Express.js</div>
            <div className="skill">Flask</div>
          </div>
        </div>

        <div className="skill-group">
          <h4>Database</h4>
          <div className="skills-container">
            <div className="skill">PostgreSQL</div>
          </div>
        </div>

        <div className="skill-group">
          <h4>Tools</h4>
          <div className="skills-container">
            <div className="skill">GitHub</div>
            <div className="skill">VS Code</div>
          </div>
        </div>

      </div>
    </section>
  );
}