import './About.css';

function About({ text }) {
  return (
    <section className="lab2-about" id="about">
      <h2 className="lab2-section-title">О нас</h2>
      <div className="lab2-about__panel">
        <p className="lab2-about__text">{text}</p>
      </div>
    </section>
  );
}

export default About;
