import "./ProjectPage.css";
import ProjectCard from "./ProjectCard/ProjectCard.tsx";

function ProjectPage() {

    const cardData = {
        card1: {
            "title": "Blackflag",
            "description": "A small programm for downloading music",
            "image": "none",
            "tags": ["music", "Spring Boot", "Java", "Bootstrap", "TypeScript"],
            "link": "https://github.com/ivenooname/blackflag",
        }
    };

    return (
        <div className="project-page">
            <ProjectCard {...cardData.card1}></ProjectCard>
        </div>
    );
}

export default ProjectPage;
