import "./ProjectCard.css";

interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    tags: string[];
    link: string;
}

function ProjectCard(props: ProjectCardProps) {
  return (
    <div className="project-card">
      <h5>{props.title}</h5>
    </div>
  );
}

export default ProjectCard;
