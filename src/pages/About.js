// src/pages/About.jsx
export default function About() {
  return (
    <div className="about-wrapper">

      <div className="floating-shape shape1"></div>
  <div className="floating-shape shape2"></div>
  <div className="floating-shape shape3"></div>

      <section className="about-container">
        <div className="about-photo">
          <img src="profile.png" alt="Profile" />
        </div>

        <div className="about-text">
          <h2>About Me</h2>
          <p>
            My name is Angel. I am currently a 3rd-year Computer Science student at the University of Cabuyao.
          </p>
          <p>
            I have a strong interest in technology and enjoy exploring new tools and software that enhance learning and productivity.
          </p>
          <p>
            Outside of academics, I enjoy reading Atomic Habits, Drinking Matcha, and engaging in activities that stimulate creativity and critical thinking such as watching old indie movies and aesthetic photography. I am also passionate about labubus and feminism.
          </p>
        </div>
      </section>

    </div>
  );
}
