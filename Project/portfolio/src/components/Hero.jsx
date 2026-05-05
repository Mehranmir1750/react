import "../styles/Hero.css"
import profile from "../assets/profile.png"

export default function Hero(){
    return(
        <section className="hero">
            <div className="hero-left">
                <h1>Mir Abdul Mehran</h1>
                <h2>Full Stack Developer</h2>
                <p>
                    I build modern, useful and interactive web applications that solve real problems.
                </p>

                <div className="hero-buttons">
                    <button>View Projects</button>
                    <button className="outline">Contact Me</button>
                </div>
            </div>

            <div className="hero-right">
                <img className="hero-img" src={profile} alt="profile"></img>
               
            </div>
        </section>
    );
}