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
        <div className="card border-primary">
            <div className={"card-header"}>
                <h4>{props.title}</h4>
            </div>
            <div className={"card-body"}>
                <img className={"card-img"} src={props.image}/>
                <p className={"card-text"}>{props.description}</p>
            </div>
        </div>
    );
}

export default ProjectCard;
