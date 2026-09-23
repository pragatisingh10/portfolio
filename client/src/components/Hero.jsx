import"./Hero.css";

function Hero(){
    return(
        <section className="hero" id="home">
            <div className="container hero-inner">
                <div className="hero-text">
                    <p className="hero greeting"> hi, I am </p>
                    <h1 className="hero-name">Pragati singh</h1>
                    <h2 className="hero-title">MERN Stack Developer</h2>
                    <p className="hero tagline">
                        I build simple, fast web apps with react Node.js and 
                        i am looking for my first role as a full stack developer.
                    </p>
                    <div className="hero-buttons">
                        <a href="#projects" className="btn btn-primary">
                            See my projects
                        </a>
                        <a href="#contact" className="btn btn-outline">
                            Contact me
                        </a>
                    </div>

                </div>
                <div className="hero-photo">
                    <img src="/profile.jpg" alt="Pragati singh"/>

                </div>
            </div>

        </section>
    );
}
export default Hero;