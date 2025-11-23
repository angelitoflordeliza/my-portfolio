export default function Skills() {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: [
        { name: "Java", icon: "/java.jfif" },
        { name: "HTML", icon: "/html.jfif" },
        { name: "CSS", icon: "/css.jfif" },
        { name: "JavaScript", icon: "/js.jfif" },
      ]
    },
    {
      category: "Frameworks & Libraries",
      skills: [
        { name: "React", icon: "/react.jfif" },
        { name: "Node.js", icon: "/node.jfif" },
        { name: "Bootstrap", icon: "/bootstrap.jfif" },
      ]
    },
    {
      category: "Databases",
      skills: [
        { name: "MySQL", icon: "/mysql.png" },
      ]
    },
    {
      category: "Tools & Platforms",
      skills: [
        { name: "Git/GitHub", icon: "/github.jfif" },
        { name: "VS Code", icon: "/vscode.jfif" },
        { name: "Docker", icon: "/docker.jfif" },
        { name: "Linux", icon: "/linux.jfif" },
      ]
    },
    {
      category: "Soft Skills",
      skills: [
        { name: "Problem-solving", icon: "/problem-solving.jfif" },
        { name: "Debugging", icon: "/debug.jfif" },
        { name: "Version Control", icon: "/version-control.jfif" },
        { name: "Teamwork", icon: "/teamwork.jfif" },
      ]
    },
  ];

  return (
    <section className="skills-section">
      <h2 className="skills-title">Skills</h2>
      {skillCategories.map(cat => (
        <div key={cat.category} className="skill-category">
          <h3 className="category-title">{cat.category}</h3>
          <div className="skills-container">
            {cat.skills.map(skill => (
              <div key={skill.name} className="skill-card">
                <img src={skill.icon} alt={skill.name} className="skill-icon" />
                <h4 className="skill-name">{skill.name}</h4>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
