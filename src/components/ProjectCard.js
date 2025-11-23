// src/components/ProjectCard.jsx
export default function ProjectCard({ title, description, img, link }) {
  return (
    <div className="card">
      {img && <img src={img} alt={title} />}
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        {link && <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>}
      </div>
    </div>
  );
}
