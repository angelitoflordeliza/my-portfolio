const projects = [
  { id: 1, title: "Photo Gallery", img: "/project1.jpg", link: "https://angelitoflordeliza.github.io/galleri/" },
  { id: 2, title: "Library Management System", img: "/project2.png", link: "https://github.com/MoiJrzxc/Simple-Library-Management-System.git" },
  { id: 3, title: "Task Management System", img: "/project3.png", link: "https://github.com/MoiJrzxc/Task-Management-Application.git" },
  { id: 4, title: "E-Commerce", img: "/project4.png", link: "https://github.com/MoiJrzxc/iGit-In-My-Cart.git" },
  { id: 5, title: "Mini Game", img: "/project5.png", link: "https://angelitoflordeliza.github.io/cseg_labexam/" }
];

export default function Projects() {
  return (
    <section className="photos" id="photos">
      <h2 className="projects-title">Projects</h2> {/* single page title */}
      <div className="container">
        {projects.map(p => (
          <div key={p.id} className="item">
            <a href={p.link} className="boxes" target="_blank" rel="noopener noreferrer">
              <img src={p.img} alt={p.title} />
              <div className="overlay">view project</div> {/* overlay text only */}
            </a>
            <h4 className="project-label">{p.title}</h4> {/* label below image */}
          </div>
        ))}
      </div>
    </section>
  );
}

