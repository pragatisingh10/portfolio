import"./About.css";
function About() {
    return(
    <section className="section about" id="about">
        <div className="container about-inner">
            <div className="about-main">
                <h2 className="section-title"></h2>
                  <p className="about-text">
            I'm a third year B.Tech (CSE) student at SHEAT College of
            Engineering, Varanasi. I enjoy turning ideas into working
            websites, and I've spent the last year building projects
            with the MERN stack.
          </p>
           <a
            href="#"className="btn btn-primary" target="_blank" rel="noreferrer">
            Download resume
          </a>
          </div>
            <ul className="about-facts">
                <li>
                    <span className="facts-label">Location</span>
                     <span>Varanasi, India</span>
        </li>
          <li>
          <span className="fact-label">Email</span>
          <a href="mailto:pragatisinghpalak1@gmail.com">pragatisinghpalak1@gmail.com</a>
        </li>
         <li>
          <span className="fact-label">GitHub</span>
          <a href="https://github.com/"target="_blank"rel="noreferrer">
            github.com/Pragati singh
            </a>
                </li>
            </ul>
        </div>
        </section>
    );
}
export default About;